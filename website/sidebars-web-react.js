// @ts-check

/**
 * Sidebar for the React (Web) docs instance.
 * Component entries are generated from patterns/web/react/patterns.json
 * so the catalog remains the single source of truth for order and labels.
 */

const patternsJson = require('../patterns/web/react/patterns.json');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  webReactSidebar: [
    // intro.md has slug "/" so it renders at /web/react — include it for
    // "Back to overview" breadcrumbs; suppress from rendered sidebar via
    // className trick or just keep it as first item.
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
      type: 'doc',
      id: 'component-gallery',
      label: 'Component Gallery',
    },
    {
      type: 'category',
      label: 'Components',
      collapsible: true,
      collapsed: false,
      // Each pattern file lives under components/ so the resolved ID is components/<frontmatter-id>
      items: patternsJson.patterns.map((p) => ({
        type: 'doc',
        id: `components/${p.id}`,
        label: p.title,
      })),
    },
    {
      type: 'doc',
      id: 'release-notes',
      label: 'Release Notes',
    },
  ],
};

module.exports = sidebars;
