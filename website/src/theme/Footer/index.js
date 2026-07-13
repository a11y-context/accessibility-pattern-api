/**
 * Swizzled Footer (@docusaurus/theme-classic v3.7.0) — Version E slim footer.
 *
 * Replaces the stock multi-column DARK footer (Patterns / Resources link groups +
 * "Built with Docusaurus" credit) with the design-system footer from
 * design-mockups/vE-refined/getting-started.html: a slim single-row bar on the
 * light/dark SURFACE with a 1px top border — brand mark on the left, a meta line
 * "A11y Context · WCAG 2.2 AA · ARIA APG" on the right.
 *
 * themeConfig.footer is no longer consumed (its config was removed from
 * docusaurus.config.js). Styled by the .a11y-footer* rules in src/css/custom.css.
 */
import React from 'react';

export default function Footer() {
  return (
    <footer className="a11y-footer">
      <div className="a11y-footer-inner">
        <p className="a11y-footer-brand">
          <svg
            viewBox="0 -6 64 64"
            fill="none"
            width="20"
            height="20"
            aria-hidden="true">
            <path
              d="M32 22V13.5"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <path
              d="M23.3 37L16 41.3"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <path
              d="M40.7 37L48 41.3"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <rect x="23" y="23" width="18" height="18" rx="4.5" fill="currentColor" />
            <rect x="26.5" y="2.5" width="11" height="11" rx="2.8" fill="currentColor" />
            <rect
              x="5.7"
              y="38.5"
              width="11"
              height="11"
              rx="2.8"
              stroke="currentColor"
              strokeWidth="3.2"
            />
            <rect
              x="47.3"
              y="38.5"
              width="11"
              height="11"
              rx="2.8"
              stroke="currentColor"
              strokeWidth="3.2"
            />
          </svg>
          A11y Context
        </p>
        <p className="a11y-footer-meta">A11y Context · WCAG 2.2 AA · ARIA APG</p>
      </div>
    </footer>
  );
}
