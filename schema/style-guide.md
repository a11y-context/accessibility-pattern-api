# Pattern Documentation Style Guide

The canonical reference for writing component pattern files and global rules in this corpus. Complements `schema/pattern-template.md` (which defines the format) — this document explains how to fill in each section and what conventions the corpus follows.

The published patterns are the voice ground truth; this guide is the compression of what they demonstrate. When in doubt about a phrasing, check how `accordion.basic`, `menu.account`, or `select.basic` handled the equivalent situation and match it.

---

## What a pattern doc is

A pattern doc is a **prescriptive specification, not a tutorial**. Its primary reader is an AI coding agent retrieving guidance at code-generation time; its secondary reader is an engineer reviewing a PR.

Every sentence in a pattern doc is one of four things:

1. A selection boundary (when this pattern applies or does not)
2. A requirement (what the implementation must do)
3. A permitted variation (what may differ without breaking the pattern)
4. A verifiable check (what a tester observes to confirm conformance)

What a pattern doc is **not**:

- Not a WCAG explainer. No lectures on why accessibility matters.
- Not a history of the ARIA spec. No "in the past, developers used to..."
- Not motivational. No "accessibility is everyone's responsibility."
- Not hedged. Requirements are stated flat, not "you should probably consider using..."

Target standard: WCAG 2.2 Level AA + the ARIA Authoring Practices Guide (APG), with deliberate divergences where APG patterns are impractical (the corpus prefers Tab-based disclosure navigation over `role="menu"` widgets; see `navigation-menu.basic` and `menu.account`).

---

## Frontmatter contract

Every component file opens with YAML frontmatter. All eight fields, every time:

```yaml
---
id: family.variant
title: Human Name
stack: web/react
status: beta
latest_version: 0.1.0
tags: [noun, interaction-mechanism, domain-keyword]
aliases: [synonym, jargon, what a developer would call it]
summary: One sentence naming the component and its key accessibility mechanism.
---
```

**The .md file is the single source of truth for everything in `patterns.json`.** The JSON is regenerated from frontmatter + body sections by `website/scripts/generate-patterns-json.js` during `npm run prebuild`. Do not hand-edit `patterns.json` — author the .md only.

### Field rules

- **`id`** — Dot notation `family.variant` (`accordion.basic`, `carousel.dots`, `menu.account`). The family groups siblings; the variant disambiguates. Even a pattern with no current siblings gets a variant (`.basic`) so future siblings do not force a rename. IDs are a public contract once published; do not rename without a deprecation plan. The filename equals the full ID (`accordion.basic.md`).
- **`title`** — Title Case human name. Parenthetical or "with X" qualifier when the family name alone is ambiguous: "Dialog (Modal)", "Carousel with Dot Navigation", "Basic Button".
- **`status`** — one of:
  - `draft` — in-progress, **excluded** from `patterns.json` by the generator. Use this for patterns that exist as .md files but are not ready for the published catalog.
  - `beta` — published in the catalog. Default state for a new pattern.
  - `stable` — promoted from beta after significant production use.
  - `deprecated` — retired; **excluded** from `patterns.json` by the generator.
- **`latest_version`** — semver for this pattern (`0.1.0` for a new pattern). Bumped when the pattern's content changes per the rules in `CONTRIBUTING.md` § Versioning (MAJOR for breaking changes, MINOR for added requirements, PATCH for clarifications). This is the field consumers read.
- **`tags`** — 3–7 lowercase kebab-case terms. Mix the component noun, its interaction mechanisms (`focus-trap`, `live-region`, `roving-tabindex`, `reduced-motion`, `disclosure`), and domain keywords (`form`, `navigation`, `ecommerce`).
- **`aliases`** — 4–8 generous synonyms. Everything a developer or AI agent might call this thing, including streaming/ecommerce domain jargon (`shelf`, `rail`, `epg`, `marquee`, `hero carousel`, `avatar menu`). This field carries weight in MCP selection and RAG retrieval. When writing aliases, ask: what would a prompt say? A pattern named "Collection Row" must match "product card grid" and "product cards" too.
- **`summary`** — Exactly one sentence, mechanism-dense. Pattern: *what it is* + *the load-bearing ARIA/interaction mechanism*. "Two-state on/off control representing a persistent setting. Uses `role='switch'` with `aria-checked`, or native checkbox semantics when applicable." This sentence is reused verbatim in `patterns.json` and the Component Gallery — write it to stand alone.

---

## Section anatomy

Sections appear in this exact order with these exact H2 names:

1. `# Title` (H1, matches frontmatter title)
2. **Pattern ID line**: `` Pattern ID: `family.variant` `` on its own line directly under the H1
3. **Summary paragraph**: the frontmatter summary repeated as visible body text, with code tokens backticked for rendering
4. *(optional)* one- or two-sentence scoping preamble — only when a scoping caveat changes everything downstream
5. `## Use When`
6. `## Do Not Use When`
7. `## Must Haves`
8. `## Customizable`
9. `## Don'ts`
10. `## Golden Pattern`
11. `## Acceptance Checks`

The Pattern ID line and Summary paragraph satisfy the RAG chunking requirement (canonical ID + summary in the first lines of every page).

### Use When

- 1–4 bullets. Every bullet starts with "Use when".
- Describes the **user-facing situation**, not the implementation: "Use when a control represents a persistent binary setting that remains on or off beyond the current interaction" — not "Use when you need `role='switch'`".
- Include concrete examples in parentheses with quotes: (e.g., "Enable notifications", "Dark mode").
- These bullets are extracted into `patterns.json` as `selection_excerpt.use_when` by the prebuild generator (backticks stripped, otherwise verbatim). They are the AI's primary selection signal — write them so a model holding only these bullets picks correctly.

### Do Not Use When

- Every bullet starts with "Do not use when".
- Each bullet carries a redirect to the alternative in a trailing parenthetical with a backticked pattern ID: `(use \`button.toggle\`)`. This redirect mechanism prevents AI agents from blending sibling patterns.
- Redirects may point to patterns that do not exist yet (`combobox`, `dialog.alert`, `menu.menubar`). Encouraged — it seeds the boundary map and doubles as an authoring backlog.

### Must Haves

The heart of the document. Non-negotiables for WCAG 2.2 AA conformance.

- **All Must Haves are required.** Do not use "(required)" inline labels — they implicitly deprioritize the rest.
- **Phrase as imperatives or declaratives.** "Use", "Ensure", "Provide", "Render", or flat statements of fact ("The switch has `role='switch'`."). Do **not** use "may", "should", or "recommended when" in Must Haves — those phrasings belong in Customizable.
- **Brief conditionality is fine.** "When X, do Y" or "If X (rare case), do Y" are acceptable when the requirement remains firm under the condition.
- **One requirement per bullet.** Conditionals and elaborations go in nested sub-bullets, not run-on sentences. Maximum nesting depth: 2. Sub-bullets are used for exactly two purposes: **elaboration** of the parent bullet or **carve-out exception** to the parent. Parallel items at the same logical level are flat siblings.
- **Every element, attribute, and value in backticks**, spelled exactly as in spec: `aria-expanded="true"`, `<button>`, `tabindex="0"`.
- **Quote exact attribute–value pairs** when the value matters: `aria-haspopup="listbox"`, not "an appropriate haspopup value".
- **Group with H3 subsections when bullets exceed ~12.** Canonical example: `navigation-menu.basic` uses `### Structure`, `### Toggle button semantics`, `### Sub-menu container`, `### Keyboard and closing behavior`, `### Multi-menu coordination`.
- **No bold on attribute names.** Backticks (code formatting) carry the semantic weight for code tokens; bold is reserved for prose emphasis, used sparingly.
- **Preferred + alternative pairs.** When stating a preferred element with an acceptable fallback, mark the preferred one with `(preferred)` parenthetical: `<button>` (preferred), or `role="button"` only when a native button cannot be used.

### Customizable

The legitimate variation space — what an implementer may change without breaking conformance.

Customizable serves four purposes. Identify which type the content fits:

1. **Equal alternatives.** Two acceptable implementations of the same behavior, no preference.
   > Either A or B is acceptable.

2. **Preferred + fallback.** The default is X; if the engineer cannot use X, here is the acceptable substitute and the conditions under which it applies. The Must Have flags the preference briefly; Customizable elaborates the fallback path with reasons. Canonical example (`dialog.modal`):
   > The native `<dialog>` element is preferred when feasible. If the implementation cannot use `<dialog>` — for example because of inadequate browser support for an older target matrix, portal-based architecture that conflicts with `<dialog>`'s top-layer behavior, or interactions with custom stacking contexts — substitute `<div role="dialog">`. Either implementation requires `aria-modal="true"` and the full focus, dismiss, and background-isolation contract above.

3. **Customization within bounds.** The engineer's discretion as long as a constraint holds.
   > The X is at the engineer's discretion as long as [constraint].

4. **Tradeoff with guidance.** A known tradeoff with a recommendation and conditions. Canonical example (`accordion.basic`):
   > `role="region"` is recommended when panels contain headings; avoid `role="region"` when it would create landmark proliferation (e.g., many panels can be expanded at once, especially > ~6).

Customizable is **not** a duplicate of Must Haves. It elaborates aspects that need explanation; it does not repeat conditions already stated. If a pattern has no meaningful variations, write:

> No accessibility-relevant variations beyond the Must Haves above.

### Don'ts

Failure modes — the anti-pattern catalog. Target the mistakes AI agents and developers actually make.

- Section heading remains `## Don'ts` (the canonical noun-plural).
- Bullets use "Do not" — not "Don't".
- Where a Don't has a conditional rescue, nest it as a sub-bullet explaining the acceptable case.
- For any pattern that toggles visibility, always include the state/visibility desync don't (see Boilerplate Formulas below).

### Golden Pattern

The canonical reference implementation. It is a **teaching artifact for AI consumption**, not production library code.

Rules:

- **Ideal HTML / semantic structure.** Use the standard element or canonical ARIA composition. No bespoke wrappers.
- **Minimal JSX functionality — just enough to convey the UX and any dynamic behavior.** A state hook to show toggle behavior, an `onClick` with `alert()` to show the trigger fires, a conditional render to show what changes at runtime. The agent should be able to see what changes when the user interacts.
- **No styling except what is required for understanding the behavior.** Strip Tailwind, CSS modules, design-system classes, and color values. Keep only structural styling that carries behavioral meaning (`aria-hidden` on icon spans, `sr-only` for visually-hidden text). The Golden Pattern showcases semantic and behavioral correctness, not visual design.
- **Use placeholders for things that would be real in production.** `[icon]` text or a `<span aria-hidden="true">` instead of importing an icon library; `alert()` or `console.log()` instead of real handlers; `// fetch data here` instead of a real fetch call.
- **Multiple short variants in one snippet are encouraged** when they belong to the same pattern — text-only, icon+text, and icon-only buttons in one Golden Pattern is better than three pattern files. Each variant should be minimal.

Code conventions:

- Open with `"use client";` when the component has state or event handlers; omit for stateless demos.
- `import * as React from "react";` as the import style.
- One exported named function component. Name it `XDemo` for showcase-style demos (`SwitchDemo`, `ButtonBasicDemo`) or a reusable component name when the pattern IS a reusable component (`ModalDialog`, `CollectionRow`, `AccountMenu`).
- Demo data as `const` arrays at the bottom of the block (`DEFAULT_ITEMS`, `ITEMS`) with realistic streaming/ecommerce-flavored content (show titles, products, channels). Realistic data teaches the AI what slots the pattern fills.
- Layout-dependent patterns may use inline `style` objects for positioning and visible boundaries only — no design-system styling.
- Visually-hidden helpers are inlined as `srOnly` style objects with a comment tying them to the global utility: `// Visually-hidden styles matching the global sr-only utility (global.sr-only).`
- No CSS frameworks, no styled-components, no external dependencies — including icon libraries.
- Stable prefixed kebab-case IDs (`acc-btn-overview`, `color-select-listbox`) in single-instance demos; `React.useId()` when the component is written as reusable.
- Comments only where they teach an accessibility decision: `{/* Live region is always mounted */}`, `// Capture the opener at the moment we open (so focus can be restored on close).`. No TODOs, no commented-out code, no framework tips unrelated to accessibility.
- Fence language: ```jsx.

### Acceptance Checks

Observable behaviors a human tester can verify with a keyboard and a screen reader. Binary pass/fail. Present-tense assertions: "Tab moves focus to each switch." "The expanded/collapsed state is announced via `aria-expanded`."

Grouping rules:

- **Default**: `Keyboard` and `Screen Reader` (plain text or bold group labels with nested bullets).
- **Lifecycle phases** when the pattern has distinct phases: `On open`, `While open`, `On close` (canonical example: `dialog.modal`).
- **Structural categories** when the pattern's correctness is verified across orthogonal dimensions: `Structure`, `Accessible naming`, `Visual focus`, `Keyboard` (canonical example: `collection-row.basic`).

Every Must Have should be coverable by at least one acceptance check. If a Must Have has no observable check, either the Must Have is too abstract or a check is missing.

---

## Boilerplate formulas

These recurring sentences appear nearly verbatim across the corpus. **Reuse them word-for-word** — consistency across patterns is a feature, it teaches retrieval systems and AI agents a stable vocabulary. Do not paraphrase creatively.

### Native button formula

> Use a native `<button>` (preferred), or `role="button"` only when a native button cannot be used.
> - If `role="button"` is used instead of a native `<button>`, add `tabindex="0"` and keyboard support for Enter and Space, ensuring Space prevents page scrolling while activating the control.

### DOM show/hide formula

> The [panel/menu/listbox] is shown/hidden in the DOM (e.g., via the `hidden` attribute), so that when closed, [its content] cannot be reached by keyboard or screen readers.

### Focus state formula (every pattern, near end of Must Haves)

> Ensure a visible focus state (e.g., a 2px solid outline offset by 1-2px) around [enumerate the focusables].

### Accessible name formulas

> The [control] has an accessible name that describes its purpose or action.

> When the [control] has visible text, the visible text serves as the accessible name.

> When additional context is needed beyond the visible text, add it via `aria-label`, `aria-labelledby`, or offscreen text. The visible text appears at the start of the accessible name.

> For icon-only [controls], provide an accessible name using `aria-label` or `aria-labelledby`.

> Icons within [controls] must be decorative (`aria-hidden="true"`).

### Non-modal disclosure suite (menus and submenus that do not trap focus)

> When the menu opens, focus remains on the invoking button.
> - Keyboard users reach the first menu item with Tab.

> The menu does not trap focus. Users can Tab through the menu items and continue to the rest of the page.

> When focus moves outside the button + menu (Tab away, click elsewhere), the menu closes.

> Esc closes the menu and returns focus to the invoking button.

### Disabled control formula

> If the action is unavailable, disable the [control] using the native `disabled` attribute. (It becomes unfocusable and non-interactive.)

### State/visibility desync don't

For any pattern that toggles visibility (menus, accordions, modals, etc.) — always include this in Don'ts:

> Do not leave [X] visible while `aria-expanded="false"` (and vice versa).

### Backdrop role formula

For any overlay pattern with a backdrop:

> Backdrop uses `role="presentation"` (or equivalent non-semantic container).

### Deferred focus restoration

When closing a transient widget (menu, dialog) where focus needs to return to the trigger after a state-change-driven DOM update:

```jsx
requestAnimationFrame(() => trigger.focus());
```

The rAF defers the focus call until React has flushed the state change and the trigger is back in a focusable state. Used in `collection-row.basic` (paging focus moves), `menu.account` (Esc restoration), and similar patterns.

---

## Prose and punctuation

- **Concrete over abstract — the prime rule.** Every requirement names the element, attribute, value, or key. "Add `aria-expanded="true|false"` reflecting open/closed" — never "expose appropriate state semantics." If a bullet could appear in any component's doc unchanged, it is too abstract (the focus-state formula being the deliberate exception).
- **No hedging, no filler.** Banned: "simply", "just", "easy", "obviously", "best practice" as decoration, "consider using" (either require it, permit it in Customizable, or omit it).
- **Em dashes: effectively zero.** This genre does not use them. Use commas, parentheses, or restructure the bullet.
- **Oxford comma**, always.
- **Straight quotes and apostrophes** everywhere.
- Bullets are sentence case and end with periods.
- Examples ride in parentheses with "e.g.,": (e.g., "Save", "Continue", "Dismiss").
- Numbers as digits everywhere technical: "3–10 items", "2px", "~5 seconds".
- Cross-references to sibling patterns are always backticked IDs (`carousel.dots`), never prose titles, never relative links inside body bullets. Markdown links to `.md` files appear only in gallery and intro tables.
- Keyboard keys capitalized bare: Tab, Shift+Tab, Enter, Space, Esc, Arrow Up/Down. No `<kbd>` wrappers, no backticks on key names.

---

## Self-containment (RAG discipline)

Pages get chunked arbitrarily by enterprise RAG systems, so:

- Every page must be self-contained. Never "as described above" pointing across pages.
- Pattern boundaries live in the page: the Use When / Do Not Use When pair must be sufficient to select or reject the pattern without any other page.
- The canonical pattern ID and summary appear early (the H1-adjacent elements above satisfy this).

---

## Global rules (Foundations) anatomy

Global rules live in `global/global_rules.md` as `## Rule:` sections within a single page. Each rule:

````markdown
## Rule: Human Name

```yaml
id: global.kebab-name
scope: [utility | page | layout | component | style]
```

### Must Haves
### Don'ts
### Snippets        ← optional; CSS/code the rule mandates
### Acceptance Checks
````

`scope` drives the apply policy (`apply_policy.scopes_in_order` in the page frontmatter: utility, page, layout, component, style). Pick the scopes where the rule could bind during a code change. Same prose rules as components. Same boilerplate formulas where applicable.

---

## Definition of done — new component

A new component is not done when the markdown is written. Full checklist:

1. **Pattern doc** at `patterns/<stack>/components/<id>.md` (filename = full ID), all sections per the order above including the Pattern ID line and body summary. Frontmatter includes `latest_version: 0.1.0` and `status: beta` (or `status: draft` if not ready for the catalog yet).
2. **Catalog metadata bump** — increment `catalog_revision` in `patterns/<stack>/catalog-meta.json` (MINOR for a new pattern). `patterns.json` itself is regenerated automatically by `npm run prebuild` — do not hand-edit it. Run `npm run gen:patterns-json` from `/website` to verify the entry generates correctly.
3. **Catalog page regeneration** — automatic via prebuild; manual via `npm run gen:gallery` from `/website`.
4. **Release notes entry** in `release-notes.md` under the bumped catalog version. See `CONTRIBUTING.md` § Versioning for the bump rules.
5. **Lab demo** (separate repo: [`a11y-pattern-lab`](https://github.com/jsweetdude/a11y-pattern-lab)) — component + route page + landing entry, tested with assistive technology before the Golden Pattern is finalized.
6. **Build check**: the site builds clean (`onBrokenLinks: 'throw'` will catch reference mistakes).
7. **Skills repo sync** — copy the new `.md` file plus the regenerated `patterns.json` and `global_rules.md` into [`a11y-context-skills`](https://github.com/a11y-context/a11y-context-skills) per the maintainer's release process.

---

## Write like this, not like this

**Like this:**

> The header button uses `aria-expanded="true"` when its panel is visible and `"false"` when hidden.

**Not like this:**

> You should make sure to use the aria-expanded attribute appropriately so that screen reader users can understand whether the panel is open. This is important because state information is essential for assistive technology.

Same requirement. The first is a rule an AI can apply and a tester can verify; the second is a paragraph about the rule.
