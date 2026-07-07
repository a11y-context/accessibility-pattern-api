// @ts-check
'use strict';

/**
 * Sidebar for the iOS (SwiftUI) docs instance.
 *
 * The iOS docs plugin is rooted at /patterns/ios so it can also serve the
 * platform-level intro.md, while the SwiftUI catalog lives one level down in
 * /patterns/ios/swiftui. Because of that, doc IDs for SwiftUI content carry a
 * "swiftui/" prefix — e.g. swiftui/components/button.basic — unlike the
 * web-react instance, whose plugin is rooted directly at the stack dir.
 *
 * Component entries are generated from patterns/ios/swiftui/patterns.json so
 * the catalog stays the single source of truth for order and labels. Mirrors
 * sidebars-web-react.js.
 */

const fs = require('fs');
const path = require('path');

// ── 1. Resolve and validate patterns.json ─────────────────────────────────────

const swiftuiRoot = path.resolve(__dirname, '../patterns/ios/swiftui');
const patternsPath = path.join(swiftuiRoot, 'patterns.json');

if (!fs.existsSync(patternsPath)) {
  throw new Error(
    `[sidebars-ios] patterns.json not found at: ${patternsPath}\n` +
    `The /patterns directory must be a sibling of /website in the repo root.\n` +
    `On Vercel, confirm the root directory is set to "website" (not the repo root).`
  );
}

/** @type {{ patterns: Array<{ id: string, title: string, source: { path: string } }> }} */
const patternsJson = JSON.parse(fs.readFileSync(patternsPath, 'utf8'));

// ── 2. Diagnostic logging (visible in Vercel build logs) ─────────────────────

console.log(`[sidebars-ios] Loaded: ${patternsPath}`);
console.log(`[sidebars-ios] Patterns: ${patternsJson.patterns.length} loaded`);

// ── 3. Validate each pattern has a corresponding markdown file ────────────────

patternsJson.patterns.forEach((p) => {
  const mdFile = path.resolve(swiftuiRoot, p.source.path);
  if (!fs.existsSync(mdFile)) {
    throw new Error(
      `[sidebars-ios] Missing markdown file for pattern '${p.id}'.\n` +
      `  Expected: ${mdFile}\n` +
      `  Check the "source.path" field in patterns.json.`
    );
  }
});

// ── 4. Build sidebar config ───────────────────────────────────────────────────
// Doc IDs are relative to the plugin root (/patterns/ios), so SwiftUI content
// carries a "swiftui/" prefix.

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  iosSidebar: [
    // intro.md has frontmatter id "ios-intro" and slug "/" — renders at /ios
    {
      type: 'doc',
      id: 'ios-intro',
      label: 'Overview',
    },
    {
      type: 'doc',
      // global/global_rules.md has frontmatter id "global_ruleset.baseline";
      // Docusaurus prepends the dir → swiftui/global/global_ruleset.baseline
      id: 'swiftui/global/global_ruleset.baseline',
      label: 'Foundations',
    },
    {
      type: 'category',
      label: 'Components',
      collapsible: true,
      collapsed: false,
      // URL contract: /ios/swiftui/components/<p.id>
      items: patternsJson.patterns.map((p) => ({
        type: 'doc',
        id: `swiftui/components/${p.id}`,
        label: p.title,
      })),
    },
  ],
};

module.exports = sidebars;
