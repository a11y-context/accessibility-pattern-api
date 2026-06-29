#!/usr/bin/env node
/**
 * Generates patterns/<platform>/<stack>/patterns.json from the .md files in
 * patterns/<platform>/<stack>/components/ plus a small catalog-meta.json
 * config. Runs once per stack dir found under patterns/ (any directory at
 * platform/stack depth that contains a catalog-meta.json).
 *
 * patterns.json is a build artifact: authors only edit the .md files. The
 * JSON is regenerated to ensure selection_excerpt and per-pattern metadata
 * never drift from the prose. The file is still committed (so the MCP
 * server and other consumers can read it without running the build).
 *
 * What this script reads (per stack dir)
 * ---------------------------------------
 * - catalog-meta.json — hand-edited top-level metadata
 *   (catalog_revision, schema_version, stack, cache_ttl_seconds)
 * - components/*.md — each pattern's frontmatter + body sections
 *   "## Use When" and "## Do Not Use When"
 *
 * What this script writes (per stack dir)
 * -----------------------------------------
 * - patterns.json — composed from the above
 *
 * Inclusion rules
 * ---------------
 * - Patterns with status `beta` or `stable` are included.
 * - Patterns with status `draft` or `deprecated` are excluded (drafts not
 *   yet published; deprecated retired from active catalog).
 *
 * Backtick handling
 * -----------------
 * The .md bullets carry backticks around code tokens (`link`, `button.toggle`).
 * The JSON output strips backticks — they're markdown markup, not selection
 * content. The MCP server and AI consumers read plain strings.
 *
 * Runs automatically before `npm run build` (see "prebuild" in package.json)
 * and can be run manually with `npm run gen:patterns-json` from website/.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const patternsRoot = path.resolve(__dirname, '../../patterns');

// A stack dir is any patterns/<platform>/<stack> directory containing a
// catalog-meta.json. Discovered dynamically so new platforms/stacks (e.g.
// android/compose) just need a catalog-meta.json + components/ to be picked
// up — no script changes required.
function findStackDirs(root) {
  const stackDirs = [];
  for (const platform of fs.readdirSync(root)) {
    const platformDir = path.join(root, platform);
    if (!fs.statSync(platformDir).isDirectory()) continue;
    for (const stack of fs.readdirSync(platformDir)) {
      const stackDir = path.join(platformDir, stack);
      if (!fs.statSync(stackDir).isDirectory()) continue;
      if (fs.existsSync(path.join(stackDir, 'catalog-meta.json'))) {
        stackDirs.push(stackDir);
      }
    }
  }
  return stackDirs;
}

const REQUIRED_FRONTMATTER = [
  'id',
  'title',
  'stack',
  'status',
  'latest_version',
  'summary',
  'tags',
  'aliases',
];

const PUBLISHED_STATUSES = new Set(['beta', 'stable']);

function stripBackticks(text) {
  return text.replace(/`/g, '');
}

function extractBullets(markdown, sectionTitle, filename) {
  // Match `## <sectionTitle>` and capture everything up to the next ## heading
  // (or end of file as a fallback for the last section).
  const pattern = new RegExp(
    `^##\\s+${sectionTitle}\\s*\\n([\\s\\S]*?)(?=^##\\s|(?![\\s\\S]))`,
    'm'
  );
  const match = markdown.match(pattern);
  if (!match) {
    throw new Error(
      `${filename}: section "## ${sectionTitle}" not found`
    );
  }
  const body = match[1];
  const bullets = [];
  for (const rawLine of body.split('\n')) {
    const line = rawLine.replace(/\r$/, '');
    // Top-level bullets only (no sub-bullets). Section's selection signal
    // should be flat.
    const bulletMatch = line.match(/^- (.+)$/);
    if (bulletMatch) {
      bullets.push(stripBackticks(bulletMatch[1].trim()));
    }
  }
  if (bullets.length === 0) {
    throw new Error(
      `${filename}: section "## ${sectionTitle}" has no bullets`
    );
  }
  return bullets;
}

function processPattern(filePath) {
  const filename = path.basename(filePath);
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  const fm = parsed.data;
  const content = parsed.content;

  for (const field of REQUIRED_FRONTMATTER) {
    if (!(field in fm)) {
      throw new Error(
        `${filename}: missing required frontmatter field "${field}"`
      );
    }
  }

  return {
    id: fm.id,
    title: fm.title,
    pattern_type: 'component',
    status: fm.status,
    latest_version: String(fm.latest_version),
    summary: fm.summary,
    aliases: fm.aliases,
    tags: fm.tags,
    selection_excerpt: {
      use_when: extractBullets(content, 'Use When', filename),
      do_not_use_when: extractBullets(content, 'Do Not Use When', filename),
    },
    variants: [],
    default_variant: null,
    source: {
      path: `components/${filename}`,
      format: 'markdown',
      frontmatter: true,
    },
  };
}

function generateForStack(stackDir) {
  const componentsDir = path.join(stackDir, 'components');
  const catalogMetaPath = path.join(stackDir, 'catalog-meta.json');
  const outputPath = path.join(stackDir, 'patterns.json');

  const catalogMeta = JSON.parse(fs.readFileSync(catalogMetaPath, 'utf8'));

  const allFiles = fs.existsSync(componentsDir)
    ? fs.readdirSync(componentsDir).filter((f) => f.endsWith('.md')).sort()
    : [];

  const allPatterns = allFiles.map((f) => processPattern(path.join(componentsDir, f)));

  const published = allPatterns.filter((p) => PUBLISHED_STATUSES.has(p.status));
  const skipped = allPatterns.filter((p) => !PUBLISHED_STATUSES.has(p.status));

  for (const p of skipped) {
    console.log(`[generate-patterns-json] Skipping ${p.id} (status: ${p.status})`);
  }

  const output = {
    stack: catalogMeta.stack,
    schema_version: catalogMeta.schema_version,
    catalog_revision: catalogMeta.catalog_revision,
    cache_ttl_seconds: catalogMeta.cache_ttl_seconds,
    patterns: published,
  };

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2) + '\n');
  console.log(
    `[generate-patterns-json] Wrote ${published.length} pattern(s) to ${outputPath} ` +
      `(catalog_revision ${catalogMeta.catalog_revision})`
  );
}

function main() {
  const stackDirs = findStackDirs(patternsRoot);
  if (stackDirs.length === 0) {
    throw new Error(`No stack dirs with catalog-meta.json found under ${patternsRoot}`);
  }
  for (const stackDir of stackDirs) {
    generateForStack(stackDir);
  }
}

main();
