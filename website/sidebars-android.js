// @ts-check
'use strict';

/**
 * Sidebar for the Android (Compose) docs instance.
 *
 * The Android docs plugin is rooted at /patterns/android so it can also serve
 * the platform-level intro.md, while the Compose catalog lives one level down
 * in /patterns/android/compose. Because of that, doc IDs for Compose content
 * carry a "compose/" prefix — e.g. compose/components/button.basic — unlike the
 * web-react instance, whose plugin is rooted directly at the stack dir.
 *
 * Component entries are generated from patterns/android/compose/patterns.json
 * so the catalog stays the single source of truth for order and labels. Mirrors
 * sidebars-ios.js.
 */

const fs = require('fs');
const path = require('path');

// Website-layer display-name overrides (id → presentation name); keeps the corpus
// `title` original while the sidebar shows grouped names. See patternDisplayNames.json.
const displayNames = require('./patternDisplayNames.json');

// ── 1. Resolve and validate patterns.json ─────────────────────────────────────

const composeRoot = path.resolve(__dirname, '../patterns/android/compose');
const patternsPath = path.join(composeRoot, 'patterns.json');

if (!fs.existsSync(patternsPath)) {
  throw new Error(
    `[sidebars-android] patterns.json not found at: ${patternsPath}\n` +
    `The /patterns directory must be a sibling of /website in the repo root.\n` +
    `On Vercel, confirm the root directory is set to "website" (not the repo root).`
  );
}

/** @type {{ patterns: Array<{ id: string, title: string, source: { path: string } }> }} */
const patternsJson = JSON.parse(fs.readFileSync(patternsPath, 'utf8'));

// ── 2. Diagnostic logging (visible in Vercel build logs) ─────────────────────

console.log(`[sidebars-android] Loaded: ${patternsPath}`);
console.log(`[sidebars-android] Patterns: ${patternsJson.patterns.length} loaded`);

// ── 3. Validate each pattern has a corresponding markdown file ────────────────

patternsJson.patterns.forEach((p) => {
  const mdFile = path.resolve(composeRoot, p.source.path);
  if (!fs.existsSync(mdFile)) {
    throw new Error(
      `[sidebars-android] Missing markdown file for pattern '${p.id}'.\n` +
      `  Expected: ${mdFile}\n` +
      `  Check the "source.path" field in patterns.json.`
    );
  }
});

// ── 4. Build sidebar config ───────────────────────────────────────────────────
// Doc IDs are relative to the plugin root (/patterns/android), so Compose
// content carries a "compose/" prefix. The Components category is omitted
// entirely while the catalog is empty, so the scaffolded stack renders cleanly
// before the first pattern lands.

const componentItems = patternsJson.patterns.map((p) => ({
  type: 'doc',
  id: `compose/components/${p.id}`,
  label: (displayNames['android/compose'] || {})[p.id] || p.title,
}));

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  androidSidebar: [
    // Platform label at the top of the sidebar (Version E — DESIGN-SYSTEM.md §6).
    // Styled via .a11y-sidebar-platform in src/css/custom.css.
    {
      type: 'html',
      value:
        `Compose (Android)<span class="a11y-sidebar-version">v${patternsJson.catalog_revision}</span>`,
      className: 'a11y-sidebar-platform',
      defaultStyle: true,
    },
    // intro.md has frontmatter id "android-intro" and slug "/" — renders at /android
    {
      type: 'doc',
      id: 'android-intro',
      label: 'Overview',
    },
    {
      type: 'doc',
      // global/global_rules.md has frontmatter id "global_ruleset.baseline";
      // Docusaurus prepends the dir → compose/global/global_ruleset.baseline
      id: 'compose/global/global_ruleset.baseline',
      label: 'Foundations',
    },
    ...(componentItems.length
      ? [
          {
            type: 'category',
            label: 'Components',
            // The label links to the Compose catalog page (mirrors ios/web-react).
            // component-gallery.md has slug /compose/component-gallery, so its doc
            // id resolves to compose/component-gallery.
            link: { type: 'doc', id: 'compose/component-gallery' },
            collapsible: false,
            collapsed: false,
            // URL contract: /android/compose/components/<p.id>
            items: componentItems,
          },
        ]
      : []),
    {
      type: 'doc',
      // release-notes.md has slug /compose/release-notes; the doc id resolves
      // to compose/release-notes (mirrors ios and web-react).
      id: 'compose/release-notes',
      label: 'Release Notes',
    },
  ],
};

module.exports = sidebars;
