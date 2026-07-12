/**
 * A11y Context — custom Prism (code block) themes.
 *
 * Shape follows prism-react-renderer v2: { plain, styles }.
 * Docusaurus reads `plain.backgroundColor` / `plain.color` into
 * --prism-background-color / --prism-color, so the surfaces below are the
 * authoritative code-block backgrounds.
 *
 * Light surface: #F0F0F3, default text #1F2328. Every syntax color below is
 * verified ≥ 4.5:1 on #F0F0F3 (WCAG 2.2 AA) — see DESIGN-SYSTEM.md §6.
 * Dark surface: #0B0B0C. Token colors are light and chosen to stay readable
 * (high contrast) on near-black.
 */

/** @type {import('prism-react-renderer').PrismTheme} */
const light = {
  plain: {
    color: '#1F2328',
    backgroundColor: '#F0F0F3',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: { color: '#59636E', fontStyle: 'italic' },
    },
    {
      types: ['punctuation', 'operator', 'entity'],
      style: { color: '#1F2328' },
    },
    {
      types: ['keyword', 'atrule', 'important', 'rule'],
      style: { color: '#6639BA' },
    },
    {
      types: ['tag', 'symbol', 'selector', 'namespace'],
      style: { color: '#0E7490' },
    },
    {
      types: ['attr-name', 'builtin', 'property'],
      style: { color: '#8A4600' },
    },
    {
      types: ['string', 'char', 'attr-value', 'inserted', 'url', 'regex'],
      style: { color: '#116329' },
    },
    {
      types: ['number', 'boolean', 'constant', 'variable'],
      style: { color: '#0A3069' },
    },
    {
      types: ['function', 'class-name'],
      style: { color: '#0550AE' },
    },
    {
      types: ['deleted'],
      style: { color: '#C23B2E' },
    },
  ],
};

/** @type {import('prism-react-renderer').PrismTheme} */
const dark = {
  plain: {
    color: '#E8EBF0',
    backgroundColor: '#0B0B0C',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: { color: '#8B95A3', fontStyle: 'italic' },
    },
    {
      types: ['punctuation', 'operator', 'entity'],
      style: { color: '#C9CDD6' },
    },
    {
      types: ['keyword', 'atrule', 'important', 'rule'],
      style: { color: '#C4B5FD' },
    },
    {
      types: ['tag', 'symbol', 'selector', 'namespace'],
      style: { color: '#5FD4E6' },
    },
    {
      types: ['attr-name', 'builtin', 'property'],
      style: { color: '#F0A868' },
    },
    {
      types: ['string', 'char', 'attr-value', 'inserted', 'url', 'regex'],
      style: { color: '#7EE0A5' },
    },
    {
      types: ['number', 'boolean', 'constant', 'variable'],
      style: { color: '#9DB8F5' },
    },
    {
      types: ['function', 'class-name'],
      style: { color: '#7DB2FF' },
    },
    {
      types: ['deleted'],
      style: { color: '#F09090' },
    },
  ],
};

module.exports = { light, dark };
