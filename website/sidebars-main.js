// @ts-check

/**
 * Sidebar for the main docs instance.
 * Docs root: website/docs/
 * routeBasePath: '/' — pages served at /getting-started/..., /troubleshooting/..., etc.
 *
 * Getting Started structure (reworked 2026-06-30): two-part framing — corpus +
 * skill. Install/ subfolder consolidates the three install paths (ZIP, clone,
 * enterprise RAG). Verification has its own page. The earlier enforcement-rule
 * page was deleted; the rule is now mentioned in the AI coding agents index
 * page as an optional belt-and-suspenders backup.
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
          label: 'Using with AI Coding Agents',
          collapsible: true,
          collapsed: false,
          link: { type: 'doc', id: 'getting-started/ai-coding-agents/index' },
          items: [
            {
              type: 'category',
              label: 'Install',
              collapsible: true,
              collapsed: false,
              link: { type: 'doc', id: 'getting-started/ai-coding-agents/install/index' },
              items: [
                {
                  type: 'doc',
                  id: 'getting-started/ai-coding-agents/install/downloads',
                  label: 'Downloads',
                },
                {
                  type: 'doc',
                  id: 'getting-started/ai-coding-agents/install/retrieval-options',
                  label: 'Retrieval Options',
                },
                {
                  type: 'doc',
                  id: 'getting-started/ai-coding-agents/install/indexing-guidance',
                  label: 'Enterprise RAG Indexing',
                },
              ],
            },
            {
              type: 'doc',
              id: 'getting-started/ai-coding-agents/verification',
              label: "Verify It's Working",
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
