#!/usr/bin/env node
/**
 * Fails the build when a component pattern's H2 sections are not in canonical
 * order, or carry a heading that is not part of the contract.
 *
 * Why this exists: the website's remark transform used to iterate a fixed array
 * rather than the document, so it silently re-sorted every page into the right
 * order no matter what the source said. The published site therefore looked
 * correct while all 55 patterns drifted to a different order underneath, and
 * the skills repo and the npm package — which both ship the raw .md — served
 * the drifted order to agents for months. Nothing surfaced it.
 *
 * The transform now renders in source order, so a misordered file is visible on
 * its own page. This check is the earlier tripwire: it fails at build time
 * instead of waiting for someone to notice.
 */
import {readFileSync, readdirSync, existsSync} from "node:fs";
import {join, dirname, resolve} from "node:path";
import {fileURLToPath} from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

const CANON = [
  "Use When",
  "Do Not Use When",
  "Must Haves",
  "Don'ts",
  "Customizable",
  "Golden Pattern",
];

const STACKS = ["web/react", "ios/swiftui", "android/compose"];

/** Straighten curly apostrophes so "Don’ts" and "Don'ts" compare equal. */
const norm = (s) => s.replace(/’/g, "'").trim();

let checked = 0;
const problems = [];

for (const stack of STACKS) {
  const dir = join(ROOT, "patterns", stack, "components");
  if (!existsSync(dir)) continue;

  for (const file of readdirSync(dir).filter((f) => f.endsWith(".md"))) {
    const path = join(dir, file);
    const headings = readFileSync(path, "utf8")
      .split("\n")
      .filter((l) => l.startsWith("## "))
      .map((l) => norm(l.slice(3)));

    checked++;

    const unknown = headings.filter((h) => !CANON.includes(h));
    if (unknown.length) {
      problems.push(`${stack}/${file}: unexpected section(s): ${unknown.join(", ")}`);
      continue;
    }

    // Compare against canon filtered to the sections this file actually has,
    // so an optional section being absent is fine but a misplaced one is not.
    const expected = CANON.filter((c) => headings.includes(c));
    if (headings.join(" > ") !== expected.join(" > ")) {
      problems.push(
        `${stack}/${file}:\n      found:    ${headings.join(" > ")}\n      expected: ${expected.join(" > ")}`,
      );
    }
  }
}

if (problems.length) {
  console.error(`\n[check-section-order] ${problems.length} of ${checked} pattern(s) out of order:\n`);
  for (const p of problems) console.error(`  - ${p}`);
  console.error(`\n  Canonical order: ${CANON.join(" > ")}\n`);
  process.exit(1);
}

console.log(`[check-section-order] ${checked} pattern(s) in canonical order.`);
