#!/usr/bin/env node
/**
 * Generates per-skill ZIP files for the Downloads page.
 *
 * Clones the a11y-context-skills monorepo (or refreshes it if already present),
 * walks every skills/<platform>/<variant>/ directory containing a SKILL.md,
 * reads the SKILL.md frontmatter to get the canonical skill name, and packages
 * the directory into a ZIP at website/static/downloads/<canonical-name>.zip.
 *
 * The ZIP contains a top-level folder named after the canonical skill name, so
 * unzipping it into .claude/skills/ (or equivalent) places the skill at the
 * correct path for the AI tool to discover.
 *
 * Runs automatically before `npm run build` (see "prebuild" in package.json)
 * and can be run manually with `npm run gen:downloads`.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const archiver = require('archiver');
const matter = require('gray-matter');

const SKILLS_REPO_URL = 'https://github.com/a11y-context/a11y-context-skills.git';
const CLONE_DIR = path.resolve(__dirname, '../.skills-cache');
const OUTPUT_DIR = path.resolve(__dirname, '../static/downloads');

function ensureSkillsClone() {
  if (fs.existsSync(path.join(CLONE_DIR, '.git'))) {
    console.log(`[generate-skill-downloads] Refreshing clone at ${CLONE_DIR}`);
    execSync(
      `git -C "${CLONE_DIR}" fetch --depth 1 origin main && git -C "${CLONE_DIR}" reset --hard origin/main`,
      { stdio: 'inherit' }
    );
  } else {
    console.log(`[generate-skill-downloads] Cloning ${SKILLS_REPO_URL} to ${CLONE_DIR}`);
    fs.mkdirSync(path.dirname(CLONE_DIR), { recursive: true });
    execSync(`git clone --depth 1 "${SKILLS_REPO_URL}" "${CLONE_DIR}"`, { stdio: 'inherit' });
  }
}

function findSkillDirs(rootDir) {
  const results = [];
  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const fullPath = path.join(dir, entry.name);
      if (fs.existsSync(path.join(fullPath, 'SKILL.md'))) {
        results.push(fullPath);
      } else {
        walk(fullPath);
      }
    }
  }
  walk(rootDir);
  return results;
}

function readCanonicalName(skillDir) {
  const skillMd = fs.readFileSync(path.join(skillDir, 'SKILL.md'), 'utf8');
  const { data } = matter(skillMd);
  if (!data.name) {
    throw new Error(`SKILL.md at ${skillDir} has no 'name' field in frontmatter`);
  }
  return data.name;
}

function createZip(skillDir, canonicalName) {
  return new Promise((resolve, reject) => {
    const zipPath = path.join(OUTPUT_DIR, `${canonicalName}.zip`);
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => resolve({ canonicalName, zipPath, bytes: archive.pointer() }));
    archive.on('error', reject);

    archive.pipe(output);
    archive.directory(skillDir, canonicalName);
    archive.finalize();
  });
}

async function main() {
  ensureSkillsClone();
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const skillsRoot = path.join(CLONE_DIR, 'skills');
  const skillDirs = findSkillDirs(skillsRoot);

  if (skillDirs.length === 0) {
    console.warn(`[generate-skill-downloads] No SKILL.md files found under ${skillsRoot}`);
    return;
  }

  console.log(`[generate-skill-downloads] Found ${skillDirs.length} skill(s)`);

  const seenNames = new Set();
  const results = await Promise.all(
    skillDirs.map(async (dir) => {
      const name = readCanonicalName(dir);
      if (seenNames.has(name)) {
        throw new Error(`Duplicate skill name '${name}' (second source: ${dir})`);
      }
      seenNames.add(name);
      const rel = path.relative(skillsRoot, dir);
      const result = await createZip(dir, name);
      console.log(`  → skills/${rel} → ${name}.zip (${result.bytes.toLocaleString()} bytes)`);
      return result;
    })
  );

  console.log(`[generate-skill-downloads] Generated ${results.length} ZIP(s) in ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error('[generate-skill-downloads] Failed:', err.message);
  process.exit(1);
});
