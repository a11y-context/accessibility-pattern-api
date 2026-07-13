// @ts-check
'use strict';

/**
 * Sidebar for the React (Web) docs instance.
 * Component entries are generated from patterns/web/react/patterns.json
 * so the catalog remains the single source of truth for order and labels.
 */

const fs = require('fs');
const path = require('path');

// Website-layer display-name overrides (pattern id → presentation name). Keeps the
// corpus `title` field clean (e.g. "Basic Button") while the sidebar/h1 show the
// grouped display names (e.g. "Button (Basic)"). See website/patternDisplayNames.json.
const displayNames = require('./patternDisplayNames.json');

// ── 1. Resolve and validate patterns.json ─────────────────────────────────────

const patternsPath = path.resolve(__dirname, '../patterns/web/react/patterns.json');

if (!fs.existsSync(patternsPath)) {
  throw new Error(
    `[sidebars-web-react] patterns.json not found at: ${patternsPath}\n` +
    `The /patterns directory must be a sibling of /website in the repo root.\n` +
    `On Vercel, confirm the root directory is set to "website" (not the repo root).`
  );
}

/** @type {{ patterns: Array<{ id: string, title: string, source: { path: string } }> }} */
const patternsJson = JSON.parse(fs.readFileSync(patternsPath, 'utf8'));

// ── 2. Diagnostic logging (visible in Vercel build logs) ─────────────────────

console.log(`[sidebars-web-react] Loaded: ${patternsPath}`);
console.log(`[sidebars-web-react] Patterns: ${patternsJson.patterns.length} loaded`);
console.log(
  `[sidebars-web-react] First 3 ids: ${patternsJson.patterns
    .slice(0, 3)
    .map((p) => p.id)
    .join(', ')}`
);

// ── 3. Validate each pattern has a corresponding markdown file ────────────────

const docsRoot = path.resolve(__dirname, '../patterns/web/react');

patternsJson.patterns.forEach((p) => {
  const mdFile = path.resolve(docsRoot, p.source.path);
  if (!fs.existsSync(mdFile)) {
    throw new Error(
      `[sidebars-web-react] Missing markdown file for pattern '${p.id}'.\n` +
      `  Expected: ${mdFile}\n` +
      `  Check the "source.path" field in patterns.json.`
    );
  }
});

// ── 4. Build component items (published catalog + dev-only drafts) ────────────

const componentItems = patternsJson.patterns.map((p) => ({
  type: 'doc',
  id: `components/${p.id}`,
  label: displayNames[p.id] || p.title,
}));

// In local development (`docusaurus start`), also surface `status: draft`
// patterns so authors can read them rendered in the browser before they are
// published. This never touches patterns.json — the committed catalog and the
// MCP feed stay draft-free — and it is skipped in production builds (Vercel),
// so drafts are never linked from the deployed site. Force-enable in any
// environment with A11Y_SHOW_DRAFTS=1.
const showDrafts =
  process.env.NODE_ENV !== 'production' || process.env.A11Y_SHOW_DRAFTS === '1';

if (showDrafts) {
  const matter = require('gray-matter');
  const componentsDir = path.resolve(__dirname, '../patterns/web/react/components');
  const publishedIds = new Set(patternsJson.patterns.map((p) => p.id));

  const draftItems = fs
    .readdirSync(componentsDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => matter.read(path.join(componentsDir, f)).data)
    .filter((fm) => fm.status === 'draft' && !publishedIds.has(fm.id))
    .sort((a, b) => String(a.id).localeCompare(String(b.id)))
    .map((fm) => ({
      type: 'doc',
      id: `components/${fm.id}`,
      label: fm.title,
      // Styled into a "dev only" badge in src/css/custom.css. Only present
      // here outside production, so the badge can never render on the
      // deployed site.
      className: 'sidebar-draft-item',
    }));

  if (draftItems.length) {
    console.log(
      `[sidebars-web-react] DEV: surfacing ${draftItems.length} draft pattern(s): ` +
        draftItems.map((d) => d.id).join(', ')
    );
    componentItems.push(...draftItems);
  }
}

// ── 5. Build sidebar config ───────────────────────────────────────────────────

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  webReactSidebar: [
    // Platform label at the top of the sidebar (Version E — DESIGN-SYSTEM.md §6).
    // Styled via .a11y-sidebar-platform in src/css/custom.css.
    {
      type: 'html',
      value: 'React (Web)',
      className: 'a11y-sidebar-platform',
      defaultStyle: true,
    },
    // intro.md has slug "/" — renders at /web/react
    {
      type: 'doc',
      id: 'intro',
      label: 'Overview',
    },
    {
      type: 'doc',
      // global/global_rules.md has frontmatter id "global_ruleset.baseline"
      // Docusaurus resolves this as <dir>/<frontmatter-id>
      id: 'global/global_ruleset.baseline',
      label: 'Foundations',
    },
    {
      type: 'category',
      label: 'Components',
      // S3: the category label is a plain link to the catalog page. No caret —
      // `collapsible: false` drops the expand/collapse toggle so the label reads
      // unambiguously as a link, and the component list stays always visible.
      // (component-gallery.md keeps its published slug /component-gallery.)
      link: { type: 'doc', id: 'component-gallery' },
      collapsible: false,
      collapsed: false,
      // URL contract: /web/react/components/<p.id>
      // Derived from: file in components/ dir + frontmatter id = components/<p.id>
      // No per-file slug needed — auto-derived is stable and matches p.id.
      items: componentItems,
    },
    {
      type: 'doc',
      id: 'release-notes',
      label: 'Release Notes',
    },
  ],
};

module.exports = sidebars;
