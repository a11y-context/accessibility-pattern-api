// @ts-check
'use strict';

/**
 * remark-pattern-sections — Version E "component page" layout (DESIGN-SYSTEM.md §6).
 *
 * Build-time transform for Web/React component *pattern* docs. It restructures the
 * raw 7-H2 pattern Markdown into Version E's six on-page sections WITHOUT authoring
 * any of that presentation into the pattern Markdown itself. Registered as a
 * `beforeDefaultRemarkPlugins` entry on the web-react docs instance so it runs
 * BEFORE Docusaurus builds the table of contents and assigns heading slugs — that
 * way the right-hand TOC and anchors reflect the six Version E sections, not the
 * seven raw H2s.
 *
 * It only acts on docs that look like a component pattern (they contain both a
 * "Must Haves" and a "Golden Pattern" H2), so intro.md / component-gallery.md /
 * Foundations / Release Notes pass through untouched.
 *
 * What it does:
 *   1. Drops the leading `# Title` + "Pattern ID: …" + summary paragraph. The
 *      Version E page-head (eyebrow / breadcrumb / H1 / summary) is rendered from
 *      front matter by the swizzled DocItem/Content instead.
 *   2. Merges "Use When" + "Do Not Use When" into a single "Selection" section
 *      rendered as two stacked cards ("Use when" / "Try a different component
 *      when").
 *   3. Renames "Don'ts" → "Donts" (Version E drops the apostrophe).
 *   4. Reorders to Selection → Must Haves → Donts → Customizable → Golden Pattern
 *      → Acceptance Checks, wraps each in <section class="pattern-section …">, and
 *      injects a muted intro line under each H2.
 *
 * IMPORTANT — the per-section intro lines below are WEBSITE-ONLY presentational
 * annotations for human readers. They are the exact copy from DESIGN-SYSTEM.md §6
 * and are deliberately NOT part of any pattern's Markdown source; they are injected
 * here, keyed off the section title.
 *
 * Wrapper / card / intro nodes are created via `data.hName` + `data.hProperties`
 * (honored by mdast-util-to-hast), i.e. no raw HTML and no JSX — safe inside the
 * CommonMark (`format: 'md'`) pattern files, whose prose is full of literal
 * <button>/aria-* text.
 */

// Section key → website-only muted intro line (DESIGN-SYSTEM.md §6). Website-only.
const INTROS = {
  selection: 'The criteria an agent checks before retrieving this component.',
  'must-haves':
    'Non-negotiable structure. Every generated instance must satisfy these rules.',
  donts: 'Avoid these accessibility and UX barriers.',
  customizable:
    'Alternatives and options that give the AI agent some room to move.',
  'golden-pattern':
    'The tested reference implementation. Agents start from this shape and adapt to the developer’s codebase and context.',
  'acceptance-checks':
    'The component’s test spec — an optional body of checks for verification.',
};

// Order + display title of the flat (non-Selection) sections, by normalized key.
const FLAT_SECTIONS = [
  {norm: 'must haves', key: 'must-haves', title: 'Must Haves'},
  {norm: 'donts', key: 'donts', title: 'Donts'},
  {norm: 'customizable', key: 'customizable', title: 'Customizable'},
  {norm: 'golden pattern', key: 'golden-pattern', title: 'Golden Pattern'},
  {norm: 'acceptance checks', key: 'acceptance-checks', title: 'Acceptance Checks'},
];

/** Recursively extract the plain text of an mdast node. */
function toText(node) {
  if (!node) return '';
  if (typeof node.value === 'string') return node.value;
  if (Array.isArray(node.children)) return node.children.map(toText).join('');
  return '';
}

/** Normalize a heading title for matching: lowercase, strip apostrophes/punctuation. */
function normTitle(s) {
  return s
    .toLowerCase()
    .replace(/[’'`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** A generic container element node (rendered via data.hName by mdast-util-to-hast). */
function container(hName, className, children) {
  return {
    type: 'patternContainer',
    children,
    data: {hName, hProperties: {className}},
  };
}

/** The muted, website-only intro line shown under a section H2. */
function introNode(key) {
  return {
    type: 'paragraph',
    data: {hProperties: {className: ['section-sub']}},
    children: [{type: 'text', value: INTROS[key]}],
  };
}

/** A fresh H2 heading node with plain-text content (Docusaurus assigns the slug). */
function h2(text) {
  return {type: 'heading', depth: 2, children: [{type: 'text', value: text}]};
}

/** One Selection card: an <div class="sel-card …"> with a non-heading title + body. */
function selectionCard(variant, label, body) {
  const title = container('h3', ['sel-card-title'], [{type: 'text', value: label}]);
  return container('div', ['sel-card', variant], [title, ...body]);
}

module.exports = function remarkPatternSections() {
  return (tree) => {
    const nodes = Array.isArray(tree.children) ? tree.children : [];

    // Gate: only transform genuine component-pattern docs.
    const h2Titles = nodes
      .filter((n) => n.type === 'heading' && n.depth === 2)
      .map((n) => normTitle(toText(n)));
    if (!h2Titles.includes('must haves') || !h2Titles.includes('golden pattern')) {
      return;
    }

    // Preserve front matter / imports; drop the H1 + "Pattern ID" + summary prose
    // (the Version E page-head re-renders title + summary from front matter).
    const preserved = nodes.filter((n) =>
      ['yaml', 'toml', 'mdxjsEsm', 'import', 'export'].includes(n.type),
    );

    // Group content into H2 sections.
    const firstH2 = nodes.findIndex((n) => n.type === 'heading' && n.depth === 2);
    /** @type {Record<string, {title: string, body: any[]}>} */
    const byNorm = {};
    let current = null;
    for (const node of nodes.slice(firstH2)) {
      if (node.type === 'heading' && node.depth === 2) {
        current = {title: toText(node), body: []};
        byNorm[normTitle(node && toText(node))] = current;
      } else if (current) {
        current.body.push(node);
      }
    }

    const sections = [];

    // 1. Selection (from "Use When" + "Do Not Use When") — two stacked cards.
    const useWhen = byNorm['use when'];
    const doNotUse = byNorm['do not use when'];
    if (useWhen || doNotUse) {
      const stack = container('div', ['selection-stack'], [
        selectionCard('sel-use', 'Use when', useWhen ? useWhen.body : []),
        selectionCard(
          'sel-alt',
          'Try a different component when',
          doNotUse ? doNotUse.body : [],
        ),
      ]);
      sections.push(
        container(
          'section',
          ['pattern-section', 'pattern-section--selection'],
          [h2('Selection'), introNode('selection'), stack],
        ),
      );
    }

    // 2. Flat sections, in Version E order.
    for (const {norm, key, title} of FLAT_SECTIONS) {
      const group = byNorm[norm];
      if (!group) continue;
      let body = group.body;
      // C1: drop the authored framing line above the Golden Pattern code block
      // ("Structural reference for AI coding assistants — …"). Version E shows
      // only the website-only section-sub intro + the code block, so this extra
      // paragraph is stripped from the rendered page (the source Markdown / MCP
      // feed keep it).
      if (key === 'golden-pattern') {
        body = body.filter(
          (n) =>
            !(
              n.type === 'paragraph' &&
              toText(n)
                .trim()
                .startsWith('Structural reference for AI coding assistants')
            ),
        );
      }
      sections.push(
        container(
          'section',
          ['pattern-section', `pattern-section--${key}`],
          [h2(title), introNode(key), ...body],
        ),
      );
    }

    tree.children = [...preserved, ...sections];
  };
};
