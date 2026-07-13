// @ts-check

// Custom AA-verified Prism code-block themes (see src/prism/a11yContextThemes.js
// and DESIGN-SYSTEM.md §6). Light surface #F0F0F3 / dark surface #0B0B0C.
const { light: prismLight, dark: prismDark } = require('./src/prism/a11yContextThemes');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'A11y Context',
  tagline: 'Accessibility patterns built for AI coding agents',
  favicon: 'img/favicon.svg',

  // NOTE: this is a manually-declared canonical URL (used for sitemap and
  // canonical links). It must match the actual deployment domain.
  url: 'https://a11y-context-project.vercel.app',
  baseUrl: '/',

  organizationName: 'a11y-context',
  projectName: 'accessibility-pattern-api',

  // Fail the build on broken internal links so Vercel catches regressions before deploy.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Process .md files as standard CommonMark (not MDX) so that HTML tags
  // like <button> or <a href> in prose text do not cause JSX parse errors.
  markdown: {
    format: 'detect',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Google Fonts (see DESIGN-SYSTEM.md §3):
  //   Schibsted Grotesk 600–800 → display/headings
  //   Hanken Grotesk   400–600  → body + all labels/UI (never mono)
  //   JetBrains Mono   400–500  → code ONLY
  // Preconnects go in headTags (correct rel); the font CSS is a stylesheet.
  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=Schibsted+Grotesk:wght@600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // Disable the preset's built-in docs plugin; we use plugin instances below.
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.8,
        },
      }),
    ],
  ],

  plugins: [
    // ── Main (Installation + Operations) ──────────────────────────────────────
    // routeBasePath: '/' serves docs at /installation/... and /operations/...
    // Docs root: /docs at repo root (sibling of /patterns and /website).
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'main',
        path: 'docs',
        routeBasePath: '/',
        sidebarPath: './sidebars-main.js',
        breadcrumbs: true,
      },
    ],

    // ── Web / React ───────────────────────────────────────────────────────────
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'web-react',
        path: '../patterns/web/react',
        routeBasePath: 'web/react',
        sidebarPath: './sidebars-web-react.js',
        exclude: ['**/patterns.json'],
        // Show last-updated date from git
        showLastUpdateTime: true,
        // Version E renders its own minimal "Components / {Name}" breadcrumb in the
        // swizzled DocItem/Content, so the stock breadcrumb trail is disabled here.
        breadcrumbs: false,
        // Restructures component-pattern Markdown into the Version E section layout
        // (Selection cards, website-only intro lines, reordered/renamed sections).
        // Runs before Docusaurus' TOC/slug pass so the on-page TOC lists the six
        // Version E sections. See website/remark/pattern-sections.js.
        // foundation-rules handles the /foundations page (hides rule `id`, renders
        // `scope` as a meta line, renames "Don'ts" → "Donts"). It self-gates to
        // foundation docs, so it's inert on component pages. See
        // website/remark/foundation-rules.js.
        beforeDefaultRemarkPlugins: [
          require('./remark/pattern-sections'),
          require('./remark/foundation-rules'),
        ],
      },
    ],

    // ── Compose (Android) ─────────────────────────────────────────────────────
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'android',
        path: '../patterns/android',
        routeBasePath: 'android',
        sidebarPath: './sidebars-android.js',
        breadcrumbs: true,
        // Future-proof: when Android/Compose patterns land they get the same Version E
        // restructure + foundation transform. Both self-gate, so they're inert on the
        // current coming-soon content.
        beforeDefaultRemarkPlugins: [
          require('./remark/pattern-sections'),
          require('./remark/foundation-rules'),
        ],
      },
    ],

    // ── iOS (SwiftUI) ─────────────────────────────────────────────────────────
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ios',
        path: '../patterns/ios',
        routeBasePath: 'ios',
        sidebarPath: './sidebars-ios.js',
        exclude: ['**/patterns.json'],
        // Version E renders its own "Components / {Name}" breadcrumb in the swizzled
        // DocItem/Content, so the stock trail is disabled (matches web-react).
        breadcrumbs: false,
        // iOS component patterns get the same Version E section restructure as
        // web-react (pattern-sections); foundation-rules handles the iOS Foundations
        // page (id/scope yaml → scope meta, "Don'ts" → "Donts"). Both self-gate.
        beforeDefaultRemarkPlugins: [
          require('./remark/pattern-sections'),
          require('./remark/foundation-rules'),
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'A11y Context',
        logo: {
          alt: 'A11y Context logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        // Version E navbar (see DESIGN-SYSTEM.md §6): no separator between the
        // links; GitHub is an icon-only link (styled via .header-github-link in
        // custom.css). The "v0.5" pill and the search combobox are rendered by
        // the swizzled Navbar/Content (src/theme/Navbar/Content), not here.
        items: [
          {
            label: 'Getting Started',
            to: '/getting-started',
            position: 'left',
          },
          {
            label: 'React (Web)',
            to: '/web/react',
            position: 'left',
          },
          {
            label: 'SwiftUI (iOS)',
            to: '/ios',
            position: 'left',
          },
          {
            href: 'https://github.com/a11y-context/accessibility-pattern-api',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'A11y Context on GitHub',
          },
        ],
      },

      // NOTE: no `footer` config. The Version E footer (DESIGN-SYSTEM.md §6) is a
      // slim single-row bar rendered entirely by the swizzled src/theme/Footer,
      // which does not read themeConfig.footer. Adding footer links/copyright here
      // would have no effect.

      prism: {
        theme: prismLight,
        darkTheme: prismDark,
        additionalLanguages: ['bash', 'json', 'yaml'],
      },

      docs: {
        sidebar: {
          // Version E sidebar has no collapse affordance — drop the stock
          // bottom-left « collapse control (DESIGN-SYSTEM.md §6).
          hideable: false,
          autoCollapseCategories: false,
        },
      },
    }),
};

module.exports = config;
