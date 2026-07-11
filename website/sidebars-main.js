// @ts-check

/**
 * Sidebar for the main docs instance.
 * Docs root: website/docs/
 * routeBasePath: '/' — pages served at /getting-started/..., /troubleshooting/..., etc.
 *
 * Getting Started structure (preview 2026-07):
 *   - "Install" subcategory relabeled "Integrations": one unified taxonomy for how
 *     the corpus reaches the agent (skill HTTP/Local, MCP, custom/RAG, plus in-dev
 *     OpenAI Assistants and LangChain). index.md is the "Choose an Integration"
 *     decision page; each child is a self-contained what + setup. Retrieval-options
 *     and indexing-guidance pages were merged in (retrieval into the skill download
 *     page and the choose page; indexing into custom). The parallel "delivery"
 *     folder was folded here — retrieval and delivery were the same axis.
 *   - QA & Testing is a single page describing the axe-a11y-context approach + the
 *     three-technique verification framework.
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
              label: 'Integrations',
              collapsible: true,
              collapsed: false,
              link: { type: 'doc', id: 'getting-started/ai-coding-agents/install/index' },
              items: [
                {
                  type: 'doc',
                  id: 'getting-started/ai-coding-agents/install/downloads',
                  label: 'Skill — Download & Install',
                },
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
              id: 'getting-started/ai-coding-agents/verification',
              label: "Verify It's Working",
            },
          ],
        },
        {
          type: 'category',
          label: 'QA & Accessibility Testing',
          link: { type: 'doc', id: 'getting-started/qa-testing/index' },
          items: [
            {
              type: 'doc',
              id: 'getting-started/qa-testing/catalog',
              label: 'Rule Catalog',
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
