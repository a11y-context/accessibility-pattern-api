/**
 * Swizzled TOC (@docusaurus/theme-classic v3.7.0) — Version E right-hand TOC.
 *
 * T1: adds an "On This Page" heading above the table-of-contents list, matching
 * the Version E .toc-heading (design-mockups/vE-refined/component.html). The
 * heading lives INSIDE the sticky container so it tracks with the list. Styled
 * by .a11y-toc-heading in src/css/custom.css. Everything else is stock.
 *
 * Only the desktop TOC uses @theme/TOC; the mobile collapsible TOC uses
 * @theme/TOCCollapsible, so the heading appears on desktop only.
 */
import React from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import styles from './styles.module.css';

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

export default function TOC({className, ...props}) {
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
      <div className="a11y-toc-heading">On This Page</div>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </div>
  );
}
