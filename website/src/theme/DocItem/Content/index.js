/**
 * Swizzled from @docusaurus/theme-classic DocItem/Content (v3.7.0).
 *
 * For Web/React component *pattern* docs it renders the Version E page-head
 * (DESIGN-SYSTEM.md §6): a minimal "Components / {Name}" breadcrumb, a bold sans
 * eyebrow "Web / React · WCAG 2.2 AA", a large H1, and the summary — all pulled
 * from front matter. The section body itself (Selection cards, the website-only
 * intro lines, flat lists, the Golden Pattern code block) is produced by the
 * remark plugin website/remark/pattern-sections.js and rendered via <MDXContent>.
 *
 * Every other doc (Foundations / gallery / intro / release notes and the other
 * docs instances) falls through to the stock synthetic-title behavior unchanged.
 *
 * NOTE: the web-react docs instance sets `breadcrumbs: false`, so the stock
 * <DocBreadcrumbs> is suppressed and the breadcrumb below is the only one.
 */
import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import MDXContent from '@theme/MDXContent';
import displayNames from '@site/patternDisplayNames.json';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Eyebrow platform label, derived from the pattern's `stack` front matter.
const STACK_LABELS = {
  'web/react': 'Web / React',
  'ios/swiftui': 'iOS / SwiftUI',
  'android/compose': 'Android / Compose',
};

// Catalog ("Components") page per stack, for the breadcrumb link. Stacks without
// a gallery page fall through to a plain (unlinked) "Components" label.
const GALLERY_HREF = {
  'web/react': '/web/react/component-gallery',
  'ios/swiftui': '/ios/swiftui/component-gallery',
};

/**
 * Stock synthetic-title logic: render an <h1> only when the author hasn't hidden
 * it and the Markdown has no top-level heading of its own.
 */
function useSyntheticTitle() {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

/**
 * A pattern doc is a published component pattern: it carries a `stack` and a
 * `summary`, and has no explicit `slug` (Foundations / gallery / intro / release
 * all declare one, so this cleanly excludes them).
 */
function isPatternDoc(frontMatter) {
  return (
    ['web/react', 'ios/swiftui', 'android/compose'].includes(frontMatter.stack) &&
    Boolean(frontMatter.summary) &&
    !frontMatter.slug
  );
}

export default function DocItemContent({children}) {
  const {frontMatter, metadata} = useDoc();
  const syntheticTitle = useSyntheticTitle();
  const {siteConfig} = useDocusaurusContext();

  if (isPatternDoc(frontMatter)) {
    const title =
      (displayNames[frontMatter.stack] || {})[frontMatter.id] ||
      frontMatter.title ||
      metadata.title;
    const platform = STACK_LABELS[frontMatter.stack] || 'Web / React';
    return (
      <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
        <Head>
          <title>{`${title} | ${siteConfig.title}`}</title>
        </Head>
        <nav className="a11y-breadcrumb" aria-label="Breadcrumb">
          {GALLERY_HREF[frontMatter.stack] ? (
            <Link to={GALLERY_HREF[frontMatter.stack]}>Components</Link>
          ) : (
            <span>Components</span>
          )}
          <span className="a11y-breadcrumb-sep" aria-hidden="true">
            /
          </span>
          <span className="a11y-breadcrumb-current">{title}</span>
        </nav>
        <header className="a11y-page-head">
          <span className="a11y-eyebrow">{platform} · WCAG 2.2 AA</span>
          <Heading as="h1" className="a11y-page-title">
            {title}
          </Heading>
          {frontMatter.summary && (
            <p className="a11y-page-summary">{frontMatter.summary}</p>
          )}
        </header>
        <MDXContent>{children}</MDXContent>
      </div>
    );
  }

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
