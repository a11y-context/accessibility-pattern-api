#!/usr/bin/env node
/**
 * Fails the build on corpus conventions that were previously enforced only by
 * a reviewer noticing.
 *
 * Why this exists: CI already catches structure — section order, a stale
 * patterns.json, a broken build. It caught none of the conventions, so every
 * one of them depended on a human reading the diff. Two things that actually
 * happened: all eight android/compose patterns shipped contradicting their own
 * `global.native-first` rule, and a WCAG criterion survived the strip that was
 * supposed to remove all of them, because it had no "WCAG" next to it.
 *
 * Two classes of check:
 *
 *   CONTENT  — run over the whole corpus, every time. Cheap, and they catch
 *              violations that already exist rather than only new ones.
 *   DIFF     — run only when a base ref resolves. Skipped with a note on a
 *              shallow clone, so a local build never fails for want of git
 *              history.
 *
 * Base ref: --base <ref>, else $BASE_REF, else origin/main.
 */
import {readFileSync, readdirSync, existsSync} from "node:fs";
import {execFileSync} from "node:child_process";
import {join, dirname, resolve} from "node:path";
import {fileURLToPath} from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const STACKS = ["web/react", "ios/swiftui", "android/compose"];

const argBase = process.argv.indexOf("--base");
const BASE = argBase > -1 ? process.argv[argBase + 1] : process.env.BASE_REF || "origin/main";

const problems = [];
const note = (s) => console.log(`[check-corpus-conventions] ${s}`);

/* ─────────────────────────── helpers ─────────────────────────── */

const git = (...args) => execFileSync("git", args, {cwd: ROOT, encoding: "utf8"}).trim();

/**
 * Lines of a pattern file that carry prose, i.e. neither YAML frontmatter nor
 * a fenced code block. Both exclusions are load-bearing: frontmatter holds
 * semver that looks exactly like a WCAG criterion, and code fences hold URLs
 * that are demo data rather than references an agent is asked to follow.
 */
function proseLines(text) {
  const lines = text.split("\n");
  const out = [];
  let fence = false;
  let fm = lines[0]?.trim() === "---";
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (fm) {
      if (i > 0 && line.trim() === "---") fm = false;
      continue;
    }
    if (line.trimStart().startsWith("```")) { fence = !fence; continue; }
    if (!fence) out.push([i + 1, line]);
  }
  return out;
}

/** Every file the no-external-references rule governs: components + Foundations. */
function patternTextFiles(stack) {
  const dir = join(ROOT, "patterns", stack, "components");
  const files = existsSync(dir)
    ? readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => join(dir, f))
    : [];
  const rules = join(ROOT, "patterns", stack, "global", "global_rules.md");
  if (existsSync(rules)) files.push(rules);
  return files;
}

const rel = (p) => p.replace(`${ROOT}/`, "");

/* ───────────────────── CONTENT: no external references ───────────────────── */
// schema/style-guide.md: "No external references in pattern text. No hyperlinks
// of any kind, and no WCAG criterion identifiers."

const LINK = /\]\(\s*(?:https?:\/\/|\.{1,2}\/)|<https?:\/\/|(?<![`\w/])https?:\/\/\S/;
const WCAG = /\bWCAG\b|\bSuccess Criteri|\bSC\s*\d\.\d|\b\d\.\d{1,2}\.\d{1,2}\b/;

let scanned = 0;
for (const stack of STACKS) {
  for (const file of patternTextFiles(stack)) {
    scanned++;
    for (const [n, line] of proseLines(readFileSync(file, "utf8"))) {
      if (LINK.test(line)) {
        problems.push(`${rel(file)}:${n} — hyperlink in pattern text\n      ${line.trim().slice(0, 110)}`);
      }
      if (WCAG.test(line)) {
        problems.push(`${rel(file)}:${n} — WCAG reference in pattern text\n      ${line.trim().slice(0, 110)}`);
      }
    }
  }
}

/* ───────────────────── DIFF: versions and release notes ───────────────────── */

let baseOk = true;
try { git("rev-parse", "--verify", `${BASE}^{commit}`); }
catch { baseOk = false; }

if (!baseOk) {
  note(`base ref "${BASE}" not found — skipping version checks (shallow clone?).`);
} else {
  const changed = git("diff", "--name-only", `${BASE}...HEAD`).split("\n").filter(Boolean);
  const corpusChanged = changed.filter((f) => f.startsWith("patterns/"));

  if (corpusChanged.length === 0) {
    note(`no corpus changes against ${BASE}; version checks not applicable.`);
  } else {
    const fileAt = (ref, path) => {
      try { return git("show", `${ref}:${path}`); } catch { return null; }
    };
    const frontmatterVersion = (text) => text?.match(/^latest_version:\s*(\S+)/m)?.[1] ?? null;

    // 1. A changed pattern file bumps its own latest_version.
    for (const path of corpusChanged) {
      if (!/\/components\/.+\.md$/.test(path)) continue;
      const before = fileAt(BASE, path);
      if (before === null) continue; // newly added pattern: no prior version to bump
      const after = fileAt("HEAD", path);
      if (before === after) continue;
      const [vb, va] = [frontmatterVersion(before), frontmatterVersion(after)];
      if (vb === va) {
        problems.push(
          `${path} — content changed but latest_version is still ${va}.\n` +
          `      Bump it per CONTRIBUTING.md § Versioning (MAJOR breaking, MINOR added requirement, PATCH wording).`,
        );
      }
    }

    // 2. Each touched stack bumps catalog_revision and records a release note.
    const touchedStacks = [...new Set(
      corpusChanged.map((f) => f.match(/^patterns\/([^/]+\/[^/]+)\//)?.[1]).filter(Boolean),
    )];
    for (const stack of touchedStacks) {
      const metaPath = `patterns/${stack}/catalog-meta.json`;
      const revOf = (ref) => {
        const raw = fileAt(ref, metaPath);
        try { return raw ? JSON.parse(raw).catalog_revision : null; } catch { return null; }
      };
      const [rb, ra] = [revOf(BASE), revOf("HEAD")];
      if (rb === null || ra === null) continue;
      if (rb === ra) {
        problems.push(
          `${metaPath} — ${stack} changed but catalog_revision is still ${ra}.\n` +
          `      Every commit that touches the corpus bumps it (CLAUDE.md § Versioning).`,
        );
        continue;
      }
      const notes = fileAt("HEAD", `patterns/${stack}/release-notes.md`);
      if (notes !== null && !new RegExp(`^##\\s+${ra.replace(/\./g, "\\.")}\\b`, "m").test(notes)) {
        problems.push(
          `patterns/${stack}/release-notes.md — no entry for catalog ${ra}.\n` +
          `      Add "## ${ra} — YYYY-MM-DD" with one line per changed pattern.`,
        );
      }
    }
  }
}

/* ───────────────────────────── report ───────────────────────────── */

if (problems.length) {
  console.error(`\n[check-corpus-conventions] ${problems.length} problem(s):\n`);
  for (const p of problems) console.error(`  - ${p}`);
  console.error("");
  process.exit(1);
}

note(`${scanned} pattern file(s) clean; conventions hold.`);
