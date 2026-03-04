// @ts-check

/**
 * Sidebar for the main docs instance (Installation + Operations).
 * Docs root: website/docs/
 * routeBasePath: '/' — pages are served at /installation/... and /operations/...
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    // ── Installation ──────────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Installation',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'installation/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'installation/install-guide',
          label: 'Install Guide',
        },
        {
          type: 'doc',
          id: 'installation/admin-managed-enforcement',
          label: 'Admin-managed enforcement',
        },
        {
          type: 'doc',
          id: 'installation/enable-in-your-client',
          label: 'Enable in your client',
        },
      ],
    },

    // ── Operations ────────────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Operations',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'operations/update-policy-url-stability',
          label: 'Update policy and URL stability',
        },
        {
          type: 'doc',
          id: 'operations/indexing-guidance',
          label: 'Indexing guidance (chunking, retrieval guardrails)',
        },
        {
          type: 'doc',
          id: 'operations/troubleshooting',
          label: 'Troubleshooting',
        },
      ],
    },
  ],
};

module.exports = sidebars;
