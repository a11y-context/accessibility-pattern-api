// @ts-check

/**
 * Sidebar for the main docs instance.
 * Docs root: website/docs/
 * routeBasePath: '/' — pages served at /getting-started/..., /troubleshooting/..., etc.
 *
 * Getting Started SECTION structure (Version E — DESIGN-SYSTEM.md §6).
 * The section is rendered as three group HEADINGS (`type: 'html'` items styled by
 * `.gs-side-heading` in custom.css) with flat doc links beneath each — matching the
 * Version E mockup's left section sidebar (design-mockups/vE-refined/getting-started.html):
 *
 *   Getting Started
 *     · What This Is        → getting-started/index (the "Put the corpus to work." landing)
 *     · Why This Works
 *   For AI Coding Agents
 *     · Overview            → ai-coding-agents/index
 *     · Retrieval Options   → collapsible; the "Choose an Integration" page is its link,
 *                             the four transport/method pages are its children (kept in the
 *                             sidebar so nothing is orphaned — the mockup showed a single
 *                             leaf; we adapt to preserve the detail pages)
 *     · Downloads           → ai-coding-agents/install/downloads
 *     · Verify It's Working → ai-coding-agents/verification (extra vs. the mockup, kept so
 *                             the page stays reachable in-sidebar)
 *   For QA & Testing  [In progress]   (badge lives in the heading markup via .tag-progress)
 *     · Overview            → qa-testing/index
 *     · Rule Catalog        → qa-testing/catalog
 *
 * The `type: 'html'` group headings replace the previous single "Getting Started"
 * collapsible category. Note: no enforcement-rule page — that card style is kept for
 * future reuse but no page/callout is shipped yet.
 *
 * Troubleshooting remains a top-level doc, separated by a rule.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    // ── Getting Started ───────────────────────────────────────────────────────
    {
      type: 'html',
      value: '<span class="gs-side-heading">Getting Started</span>',
      defaultStyle: false,
      className: 'gs-heading-item gs-heading-item--first',
    },
    {
      type: 'doc',
      id: 'getting-started/index',
      label: 'What This Is',
    },
    {
      type: 'doc',
      id: 'getting-started/why-this-works',
      label: 'Why This Works',
    },

    // ── For AI Coding Agents ──────────────────────────────────────────────────
    {
      type: 'html',
      value: '<span class="gs-side-heading">For AI Coding Agents</span>',
      defaultStyle: false,
      className: 'gs-heading-item',
    },
    {
      type: 'doc',
      id: 'getting-started/ai-coding-agents/index',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Retrieval Options',
      // S3: plain-link category label — no caret, children always visible
      // (collapsible:false). The `gs-subcat` class neutralizes the top-level
      // category top-margin so it stays in the "For AI Coding Agents" rhythm
      // (between Overview and Downloads), not spaced like a new group.
      className: 'gs-subcat',
      collapsible: false,
      collapsed: false,
      link: { type: 'doc', id: 'getting-started/ai-coding-agents/install/index' },
      items: [
        {
          type: 'doc',
          id: 'getting-started/ai-coding-agents/install/mcp-server',
          label: 'MCP Server',
        },
        {
          type: 'doc',
          id: 'getting-started/ai-coding-agents/install/custom',
          label: 'Custom / Enterprise RAG',
        },
        {
          type: 'doc',
          id: 'getting-started/ai-coding-agents/install/openai-assistants',
          label: 'OpenAI Assistants',
        },
        {
          type: 'doc',
          id: 'getting-started/ai-coding-agents/install/langchain',
          label: 'LangChain',
        },
      ],
    },
    {
      type: 'doc',
      id: 'getting-started/ai-coding-agents/install/downloads',
      label: 'Downloads',
    },
    {
      type: 'doc',
      id: 'getting-started/ai-coding-agents/verification',
      label: "Verify It's Working",
    },

    // ── For QA & Testing ──────────────────────────────────────────────────────
    {
      type: 'html',
      value:
        '<span class="gs-side-heading">For QA &amp; Testing <span class="tag-progress">In progress</span></span>',
      defaultStyle: false,
      className: 'gs-heading-item',
    },
    {
      type: 'doc',
      id: 'getting-started/qa-testing/index',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'getting-started/qa-testing/catalog',
      label: 'Rule Catalog',
    },

    // ── Troubleshooting ───────────────────────────────────────────────────────
    {
      type: 'html',
      value: '<hr class="gs-side-sep" />',
      defaultStyle: false,
      className: 'gs-sep-item',
    },
    {
      type: 'doc',
      id: 'troubleshooting/index',
      label: 'Troubleshooting',
    },
  ],
};

module.exports = sidebars;
