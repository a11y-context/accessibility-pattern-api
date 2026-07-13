#!/usr/bin/env node
/**
 * Regenerates the component table in patterns/web/react/component-gallery.md
 * from patterns.json, so the catalog page can never drift from the corpus.
 *
 * Runs automatically before `npm run build` (see "prebuild" in package.json)
 * and can be run manually with `npm run gen:gallery`.
 *
 * Only the content between the gallery:start / gallery:end markers is
 * rewritten; frontmatter and intro prose remain hand-editable.
 */
'use strict';

const fs = require('fs');
const path = require('path');

// Website-layer display-name overrides (id → presentation name), so the gallery
// matches the sidebar/h1 while the corpus `title` stays original.
const displayNames = require('../patternDisplayNames.json');

const patternsDir = path.resolve(__dirname, '../../patterns/web/react');
const patternsJsonPath = path.join(patternsDir, 'patterns.json');
const galleryPath = path.join(patternsDir, 'component-gallery.md');

const { patterns } = JSON.parse(fs.readFileSync(patternsJsonPath, 'utf8'));

// Backtick raw HTML-looking tokens (e.g. <a href>, <select>) so they render
// as code in the markdown table instead of being parsed as inline HTML.
function renderSummary(summary) {
  return summary.replace(/<([a-zA-Z][^>]*)>/g, '`<$1>`').replace(/\|/g, '\\|');
}

const rows = patterns.map(
  (p) =>
    `| [${(displayNames['web/react'] || {})[p.id] || p.title}](./${p.source.path}) | ${renderSummary(p.summary)} |`
);

const table = ['| Component | Summary |', '|-----------|---------|', ...rows].join('\n');

const START =
  '<!-- gallery:start — generated from patterns.json; do not edit by hand. Run `npm run gen:gallery` in /website. -->';
const END = '<!-- gallery:end -->';

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const gallery = fs.readFileSync(galleryPath, 'utf8');
const markerBlock = new RegExp(
  `${escapeRegExp(START)}[\\s\\S]*?${escapeRegExp(END)}`
);

if (!markerBlock.test(gallery)) {
  throw new Error(
    `[generate-component-gallery] Markers not found in ${galleryPath}.\n` +
    `Expected:\n  ${START}\n  ${END}`
  );
}

const next = gallery.replace(markerBlock, `${START}\n\n${table}\n\n${END}`);
fs.writeFileSync(galleryPath, next);
console.log(
  `[generate-component-gallery] ${patterns.length} rows written to ${galleryPath}`
);
