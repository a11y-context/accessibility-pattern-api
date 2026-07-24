/**
 * Swizzled DocBreadcrumbs (@docusaurus/theme-classic v3.7.0) — Version E treatment.
 *
 * Replaces the stock breadcrumb (home GLYPH + chevron separators + current page
 * title inside a tinted PILL) with the design-system breadcrumb from
 * design-mockups/vE-refined/getting-started.html: a plain "Home" text link, slash
 * separators, and a plain current crumb. Reuses the shared .a11y-breadcrumb*
 * classes already used by the pattern-page breadcrumb (src/theme/DocItem/Content).
 *
 * For the main-docs sections the current crumb is the SECTION label — Version E
 * shows "Home / Getting Started", not "Home / What This Is"; page identity is
 * carried by the H1 + the active sidebar item, not the trail. The label is derived
 * from the first route segment (SECTION_LABELS). Any other docs instance falls
 * back to the plain-styled full trail, so nothing renders the stock pill/chevron.
 *
 * NOTE: web/react docs set `breadcrumbs: false` and render their own breadcrumb in
 * the swizzled DocItem/Content, so this component is not used there.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';
import {useSidebarBreadcrumbs} from '@docusaurus/plugin-content-docs/client';
import {useHomePageRoute} from '@docusaurus/theme-common/internal';

// Main-docs sections render a coarse "Home / {Section}" breadcrumb (Version E).
const SECTION_LABELS = {
  'getting-started': 'Getting Started',
  troubleshooting: 'Troubleshooting',
};

function firstSegment(pathname) {
  const parts = pathname.replace(/^\/+|\/+$/g, '').split('/');
  return parts[0] || '';
}

export default function DocBreadcrumbs() {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();
  const {pathname} = useLocation();

  if (!breadcrumbs) {
    return null;
  }

  const homeHref = homePageRoute?.path ?? '/';
  const section = SECTION_LABELS[firstSegment(pathname)];

  const sep = (
    <span className="a11y-breadcrumb-sep" aria-hidden="true">
      /
    </span>
  );

  const trail = section ? (
    <>
      {sep}
      <span className="a11y-breadcrumb-current">{section}</span>
    </>
  ) : (
    // Fallback: plain-styled full trail for any non-main docs instance.
    breadcrumbs.map((item, idx) => {
      const isLast = idx === breadcrumbs.length - 1;
      const href =
        item.type === 'category' && item.linkUnlisted ? undefined : item.href;
      return (
        <React.Fragment key={idx}>
          {sep}
          {isLast || !href ? (
            <span className="a11y-breadcrumb-current">{item.label}</span>
          ) : (
            <Link to={href}>{item.label}</Link>
          )}
        </React.Fragment>
      );
    })
  );

  return (
    <nav
      className="a11y-breadcrumb"
      aria-label={translate({
        id: 'theme.docs.breadcrumbs.navAriaLabel',
        message: 'Breadcrumbs',
        description: 'The ARIA label for the breadcrumbs',
      })}>
      <Link to={homeHref}>Home</Link>
      {trail}
    </nav>
  );
}
