#!/usr/bin/env node
/**
 * Regenerates the component table in each platform's component-gallery.md from
 * that platform's patterns.json, so the catalog page can never drift from the
 * corpus. Display names come from patternDisplayNames.json (id → presentation
 * name) so the gallery matches the sidebar/h1 while the corpus `title` stays
 * original.
 *
 * Runs automatically before `npm run build` (see "prebuild" in package.json)
 * and can be run manually with `npm run gen:gallery`. A platform without a
 * component-gallery.md is skipped (e.g. Android, currently coming-soon).
 *
 * Only the content between the gallery:start / gallery:end markers is rewritten;
 * frontmatter and intro prose remain hand-editable.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const displayNames = require('../patternDisplayNames.json');

// Platforms that can carry a catalog page (stack key → patterns dir).
const PLATFORMS = [
  { stack: 'web/react', dir: '../../patterns/web/react' },
  { stack: 'ios/swiftui', dir: '../../patterns/ios/swiftui' },
];

const START =
  '<!-- gallery:start — generated from patterns.json; do not edit by hand. Run `npm run gen:gallery` in /website. -->';
const END = '<!-- gallery:end -->';

// Backtick raw HTML-looking tokens (e.g. <a href>, <select>) so they render as
// code in the markdown table instead of being parsed as inline HTML.
function renderSummary(summary) {
  return summary.replace(/<([a-zA-Z][^>]*)>/g, '`<$1>`').replace(/\|/g, '\\|');
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const results = PLATFORMS.map(({ stack, dir }) => {
  const patternsDir = path.resolve(__dirname, dir);
  const galleryPath = path.join(patternsDir, 'component-gallery.md');
  if (!fs.existsSync(galleryPath)) {
    return `${stack}: no component-gallery.md — skipped`;
  }

  const { patterns } = JSON.parse(
    fs.readFileSync(path.join(patternsDir, 'patterns.json'), 'utf8')
  );
  const names = displayNames[stack] || {};

  const rows = patterns.map(
    (p) =>
      `| [${names[p.id] || p.title}](./${p.source.path}) | ${renderSummary(p.summary)} |`
  );
  const table = ['| Component | Summary |', '|-----------|---------|', ...rows].join('\n');

  const gallery = fs.readFileSync(galleryPath, 'utf8');
  const markerBlock = new RegExp(`${escapeRegExp(START)}[\\s\\S]*?${escapeRegExp(END)}`);
  if (!markerBlock.test(gallery)) {
    throw new Error(
      `[generate-component-gallery] Markers not found in ${galleryPath}.\n` +
        `Expected:\n  ${START}\n  ${END}`
    );
  }
  fs.writeFileSync(galleryPath, gallery.replace(markerBlock, `${START}\n\n${table}\n\n${END}`));
  return `${stack}: ${patterns.length} rows → ${galleryPath}`;
});

console.log('[generate-component-gallery]\n  ' + results.join('\n  '));
