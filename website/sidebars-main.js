// @ts-check

/**
 * Sidebar for the main docs instance.
 * Docs root: website/docs/
 * routeBasePath: '/' — pages served at /getting-started/..., /troubleshooting/..., etc.
 *
 * Getting Started structure (reworked 2026-06): corpus-first framing with two
 * consumption branches — AI coding agents (generation-time) and QA/testing
 * (post-development). The earlier NPM-CLI install funnel was retired.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    // ── Getting Started ───────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'getting-started/index' },
      items: [
        {
          type: 'doc',
          id: 'getting-started/why-this-works',
          label: 'Why This Works',
        },
        {
          type: 'category',
          label: 'For AI Coding Agents',
          collapsible: true,
          collapsed: false,
          link: { type: 'doc', id: 'getting-started/ai-coding-agents/index' },
          items: [
            {
              type: 'doc',
              id: 'getting-started/ai-coding-agents/enforcement-rule',
              label: 'The Enforcement Rule',
            },
            {
              type: 'doc',
              id: 'getting-started/ai-coding-agents/retrieval-options',
              label: 'Retrieval Options',
            },
            {
              type: 'doc',
              id: 'getting-started/ai-coding-agents/indexing-guidance',
              label: 'Enterprise RAG Indexing',
            },
            {
              type: 'doc',
              id: 'getting-started/ai-coding-agents/downloads',
              label: 'Downloads',
            },
          ],
        },
        {
          type: 'category',
          label: 'For QA & Accessibility Testing',
          collapsible: true,
          collapsed: false,
          link: { type: 'doc', id: 'getting-started/qa-testing/index' },
          items: [
            {
              type: 'doc',
              id: 'getting-started/qa-testing/automated-harness',
              label: 'Building an Automated Harness',
            },
          ],
        },
      ],
    },

    // ── Troubleshooting ───────────────────────────────────────────────────────
    {
      type: 'doc',
      id: 'troubleshooting/index',
      label: 'Troubleshooting',
    },
  ],
};

module.exports = sidebars;
