// @ts-check
'use strict';

/**
 * remark-foundation-rules — Foundations ("global rules") page transform.
 *
 * Build-time transform for the Foundations docs (patterns/{stack}/global/global_rules.md,
 * served at /foundations). Each rule there is authored as:
 *
 *     ## Rule: Offscreen Text Utility (sr-only)
 *     ```yaml
 *     id: global.sr-only
 *     scope: [utility, component, style]
 *     ```
 *     ### Must Haves
 *     …
 *     ### Don'ts
 *     …
 *
 * The raw ```yaml id/scope block is machine metadata, not something a human reader
 * should see as a literal code block. This plugin:
 *
 *   1. HIDES the `id` entirely (it is never rendered).
 *   2. Renders the `scope` values as a small plain-text meta line ("Scope: utility ·
 *      component · style") placed BETWEEN the rule heading and the "Must Haves"
 *      heading — by replacing the yaml code block in place, so the code block is
 *      removed from the rendered output.
 *   3. Renames the per-rule "Don'ts" sub-headings to "Donts" (no apostrophe), matching
 *      what remark-pattern-sections already does for component pages.
 *
 * Gating: it runs only on foundation docs — detected by the source path containing
 * "global"/"foundation", with a content fallback (a page that actually carries an
 * id/scope yaml block) so it still fires if the vfile path is unavailable. Component
 * pattern pages carry no id/scope yaml block and are untouched.
 *
 * Registered as a `beforeDefaultRemarkPlugins` entry on every docs instance that has
 * a Foundations page (web/react and ios), so the heading rename lands before
 * Docusaurus assigns slugs. Nodes are built via `data.hName` + `data.hProperties`
 * (honored by mdast-util-to-hast) — no raw HTML — matching remark-pattern-sections.
 */

/** Recursively extract the plain text of an mdast node. */
function toText(node) {
  if (!node) return '';
  if (typeof node.value === 'string') return node.value;
  if (Array.isArray(node.children)) return node.children.map(toText).join('');
  return '';
}

/** A generic container element node (rendered via data.hName by mdast-util-to-hast). */
function container(hName, className, children) {
  return {
    type: 'foundationContainer',
    children,
    data: {hName, hProperties: {className}},
  };
}

/** True if a heading's text is a "Don'ts" variant (apostrophe-insensitive). */
function isDontsText(s) {
  return (
    String(s)
      .replace(/[’'`]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase() === 'donts'
  );
}

/** True if a code node is a foundation rule's id/scope yaml metadata block. */
function isRuleMetaBlock(node) {
  return !!(
    node &&
    node.type === 'code' &&
    (node.lang === 'yaml' || node.lang === 'yml') &&
    typeof node.value === 'string' &&
    /(^|\n)\s*id\s*:/.test(node.value) &&
    /(^|\n)\s*scope\s*:/.test(node.value)
  );
}

/** Parse the `scope` values out of a rule's yaml metadata block. Returns string[]. */
function parseScope(value) {
  // Inline flow sequence: scope: [utility, component, style]
  const inline = value.match(/scope\s*:\s*\[([^\]]*)\]/);
  if (inline) {
    return splitScalars(inline[1]);
  }
  // Block sequence fallback:
  //   scope:
  //     - utility
  //     - component
  const block = value.match(/scope\s*:\s*\n((?:[ \t]*-[ \t]*.+\n?)+)/);
  if (block) {
    return block[1]
      .split('\n')
      .map((l) => l.replace(/^[ \t]*-[ \t]*/, '').trim())
      .filter(Boolean)
      .map(stripQuotes);
  }
  return [];
}

function splitScalars(s) {
  return s
    .split(',')
    .map((v) => stripQuotes(v.trim()))
    .filter(Boolean);
}

function stripQuotes(s) {
  return s.replace(/^["']|["']$/g, '').trim();
}

/**
 * The small plain-text scope meta line. A "Scope" label followed by each scope value
 * as a badge span, separated by "·" so it reads correctly even before any CSS styles
 * .foundation-scope. Class names are provided as styling hooks.
 */
function scopeMeta(scopes) {
  const children = [
    container('span', ['foundation-scope__label'], [{type: 'text', value: 'Scope'}]),
    {type: 'text', value: ': '},
  ];
  scopes.forEach((scope, i) => {
    if (i > 0) children.push({type: 'text', value: ' · '});
    children.push(
      container('span', ['foundation-scope__badge'], [{type: 'text', value: scope}]),
    );
  });
  return container('div', ['foundation-scope'], children);
}

module.exports = function remarkFoundationRules() {
  return (tree, file) => {
    const nodes = Array.isArray(tree.children) ? tree.children : [];

    // Gate: foundation docs only. Prefer the source path; fall back to content
    // (a page that actually carries an id/scope yaml block) if the path is absent.
    const path = (file && (file.path || (file.history && file.history[0]))) || '';
    const isFoundation =
      /global|foundation/i.test(String(path)) || nodes.some(isRuleMetaBlock);
    if (!isFoundation) return;

    const out = [];
    for (const node of nodes) {
      // 1 + 2: replace the id/scope yaml block with the scope meta line (id hidden,
      // code block removed). If scope can't be parsed, still drop the block.
      if (isRuleMetaBlock(node)) {
        const scopes = parseScope(node.value);
        if (scopes.length) out.push(scopeMeta(scopes));
        continue;
      }
      // 3: rename "Don'ts" → "Donts" on the rule sub-headings.
      if (node.type === 'heading' && isDontsText(toText(node))) {
        out.push({...node, children: [{type: 'text', value: 'Donts'}]});
        continue;
      }
      out.push(node);
    }
    tree.children = out;
  };
};
