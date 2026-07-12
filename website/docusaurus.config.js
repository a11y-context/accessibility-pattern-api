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
        // Breadcrumbs for better navigation
        breadcrumbs: true,
      },
    ],

    // ── Android (Compose) ─────────────────────────────────────────────────────
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'android',
        path: '../patterns/android',
        routeBasePath: 'android',
        sidebarPath: './sidebars-android.js',
        breadcrumbs: true,
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
        breadcrumbs: true,
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
        items: [
          {
            label: 'Getting Started',
            to: '/getting-started',
            position: 'left',
          },
          // Vertical separator dividing Getting Started from the platform links.
          // Styled via .navbar__separator in src/css/custom.css.
          {
            type: 'html',
            position: 'left',
            value: '<span class="navbar__separator" aria-hidden="true"></span>',
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
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Patterns',
            items: [
              { label: 'Web / React', to: '/web/react' },
              // Restore when these platforms have published docs:
              // { label: 'Android / Compose', to: '/android' },
              // { label: 'iOS / SwiftUI', to: '/ios' },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/a11y-context/accessibility-pattern-api',
              },
              {
                label: 'WCAG 2.2',
                href: 'https://www.w3.org/TR/WCAG22/',
              },
              {
                label: 'ARIA Authoring Practices Guide',
                href: 'https://www.w3.org/WAI/ARIA/apg/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} A11y Context Project. Built with Docusaurus.`,
      },

      prism: {
        theme: prismLight,
        darkTheme: prismDark,
        additionalLanguages: ['bash', 'json', 'yaml'],
      },

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
    }),
};

module.exports = config;
