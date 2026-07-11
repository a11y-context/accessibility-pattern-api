---
id: release-notes
title: Release Notes
slug: /release-notes
---

# Release Notes

Catalog and per-pattern versions use semver (MAJOR.MINOR.PATCH). Catalog revisions are dated. Each release lists changes by pattern.

## 0.5.2 — 2026-07-10

**Backfill of the eight-concern Must Haves subheaders to the pre-0.5.0 patterns. Structure-only; no requirement changes.**

Applied the canonical Must Haves subheader vocabulary (introduced in 0.5.1) to the older patterns that meet the density trigger. Two qualified:

- `grid.channel-guide` → grouped under `### Roles & structure`, `### Keyboard`, `### Focus`.
- `navigation-menu.dropdown` → grouped under `### Roles & structure`, `### Accessible name`, `### State & properties`, `### Focus`, `### Dismissal`.

All other pre-0.5.0 patterns were assessed against the density rule (long list *and* at least two concerns each carrying several bullets) and correctly stay flat — including `dialog.modal` (Focus-dominated; its six-behavior contract is a single bullet, so no second concern carries several top-level bullets) and the button/link/toast family (short lists). Bullets moved verbatim; verified no requirement text changed. No per-pattern version bumps (structure-only, mirroring the 0.4.2 and 0.5.1 precedent).

## 0.5.1 — 2026-07-10

**Canonical Must Haves structure — an eight-concern subsection vocabulary, a density-based grouping trigger, and two new Foundations rules. Structure-only; no requirement changes.**

Replaces the old "group when bullets exceed ~12" heuristic, which had produced drift (the same concern appearing as `### Focus` vs `### Focus management`, `### Structure` vs `### Container` vs `### Menu container`, etc.).

**Style guide (`schema/style-guide.md`):**
- Grouping trigger changed from bullet-count to *density*: group Must Haves under subsections only when the list is long and at least two concerns each carry several bullets; otherwise stay flat, regardless of length.
- Closed vocabulary in canonical order — five core (`### Roles & structure`, `### Accessible name`, `### State & properties`, `### Keyboard`, `### Focus`) and three conditional (`### Pointer & touch`, `### Motion & timing`, `### Dismissal`); use only those that apply, in order. Boundary tie-breakers documented (the whole focus lifecycle including restore-on-close is Focus; close triggers are Dismissal; `aria-modal` is State & properties; position-in-set and input-purpose are Roles & structure).

**Foundations (`global/global_rules.md`):**
- New `global.use-of-color` (WCAG 1.4.1) — a meaningful state must be distinguishable without relying on color alone.
- New `global.focus-not-obscured` (WCAG 2.4.11) — the focused element must not be fully hidden by sticky or overlapping chrome.

**Components restructured** (Must Haves relocated onto the canonical subsections; no requirement added, removed, or reworded): `menu.basic`, `menu.menubar`, `listbox.basic`, `combobox.autocomplete`, `navigation-menu.basic`. `dialog.modal` and `dialog.nonmodal` stay flat: their requirements concentrate in Focus, so the density trigger is not met (the rule working as intended).

Structure-only change: `catalog_revision` bump only, no per-pattern `latest_version` bumps.

## 0.5.0 — 2026-07-07

**Promote the dropdown and overlay component family (9 patterns) from draft to beta.**

The 9 patterns added as draft in 0.4.6 are promoted to `status: beta`, entering the published `patterns.json` (22 published), the component gallery, and the site: `navigation-menu.dropdown`, `disclosure.basic`, `menu.basic`, `menu.menubar`, `select.native`, `combobox.autocomplete`, `listbox.basic`, `dialog.nonmodal`, `tooltip.basic`. Per-pattern versions remain 0.1.0. Screen-reader (AT) verification is in progress; patterns will be patched as testing surfaces fixes.

## 0.4.6 — 2026-07-07

**Dropdown and overlay component family — 9 new patterns (draft), plus a rename, a deprecation, and redirect reconciliation.**

Nine new component patterns added as `status: draft` (excluded from `patterns.json` until AT-verified and promoted to beta). They establish a taxonomy for "dropdown"-shaped UI classified by interaction intent rather than visual shape, with strict Use When / Do Not Use When boundaries cross-referencing each sibling.

**New patterns (all 0.1.0, draft):**
- `navigation-menu.dropdown` — single-trigger dropdown of navigation links plus optional actions; disclosure semantics, never `role="menu"` or `aria-haspopup`.
- `disclosure.basic` — foundational show/hide button plus content region.
- `menu.basic` — button-triggered action menu (`role="menu"`, roving tabindex, full keyboard contract).
- `menu.menubar` — desktop-application command bar (`role="menubar"`); cautionary, never for site navigation.
- `select.native` — styled native `<select>`, the default single-value picker.
- `combobox.autocomplete` — editable combobox with list filtering (`aria-activedescendant`).
- `listbox.basic` — always-visible single-select or multi-select listbox.
- `dialog.nonmodal` — non-modal dialog (no focus trap, no background inerting).
- `tooltip.basic` — supplementary-text tooltip (`role="tooltip"`, hoverable, dismissible, persistent).

**Renamed:**
- `menu.button` → `menu.basic` (draft, never published). Aligns with the Menu vocabulary used across the ecosystem; H1 title is "Menu". All redirect references updated.

**Deprecated:**
- `menu.account` → 1.0.0, `status: deprecated`. An account menu is a navigation disclosure, not an ARIA menu; superseded by `navigation-menu.dropdown`. Excluded from the catalog.

**Reconciled (published patterns):**
- `navigation-menu.basic` → 0.3.0. Removed the `aria-haspopup` Must Have (a submenu of links is not a menu, so `aria-expanded` alone is the correct signal), removed it from the Golden Pattern toggles, and added a matching Don't. Fixed the stale `navigation-menu.menubar` redirect to `menu.menubar` and the form-value redirect to `select.native` / `combobox.autocomplete`.
- `select.basic` → 0.2.0. Added a native-first Do Not Use When redirect to `select.native`; updated redirects to `combobox.autocomplete`, `listbox.basic`, and `navigation-menu.dropdown`.
- `button.basic` → 0.2.1 and `button.toggle` → 0.2.1. Menu redirect target renamed to `menu.basic`.

The 9 new families remain out of the published `patterns.json` (draft). Promoting them to beta after AT verification will ship the catalog's MINOR bump to 0.5.0.

## 0.4.5 — 2026-07-07

**Dialog (Modal) → 0.3.1 — clarifications.**

- **Must Have combined**: the `.showModal()` and `.close()` lifecycle endpoints are now expressed as one bullet — `Open with .showModal(), close with .close()`. Adds explicit language that unmounting the `<dialog>` while open (rather than calling `.close()`) does not restore focus to the invoker, because the browser's focus-restoration runs on `.close()` (or on the browser's implicit close from Esc's `cancel` event and from `<form method="dialog">` submits). Consolidates the "why showModal is required" and "why close is required" into a single lifecycle rule.
- **Customizable trimmed**: replaced four H3 subsections with four flat top-level bullets (one level of nesting under Initial focus target). Cut the "why fall back" mini-taxonomy, the `<form method="dialog">` HTML example, and the `dialog.returnValue` prose. The manual-fallback behavior contract remains as a single dense bullet.

No new Must Haves and no removals — PATCH bump reflects wording clarification and structural tightening.

## 0.4.4 — 2026-06-30

**Dialog (Modal) → 0.3.0 — native-first rewrite.**

The Golden Pattern is now built on the native `<dialog>` element with `.showModal()` so the browser handles the modal contract — focus trap, background inertness, Escape dismissal, focus restoration, top-layer rendering, and body scroll lock. Resolves a long-standing inconsistency where the doc's Must Haves said `<dialog>` was preferred but the Golden Pattern shipped the manual `<div role="dialog">` variant.

**New Must Haves:**
- `.showModal()` is required to produce the modal contract — bare `<dialog>` in the DOM is non-modal.
- Fluid dialog width so content reflows at 400% zoom (WCAG 1.4.10 Reflow). Prefer `max-width: min(<Npx>, 100%)`; do not set fixed widths that would exceed the 320-CSS-pixel viewport.
- The invoking control on the page declares dialog-trigger semantics via `aria-haspopup="dialog"`.
- Focus indicator reference points to the Foundations focus rule (from 0.4.3) instead of restating the outline spec inline.

**Customizable restructured:**
- Manual `<div role="dialog">` fallback documented as an explicit alternative for legacy target matrices, portal/top-layer conflicts, and specific stacking-context edge cases. Full behavior contract listed as manual-only Must Haves (focus trap, inert application root, body scroll lock with iOS Safari specificity, Escape, focus restoration, portal to `document.body`).
- Backdrop click contract: default closes; may be intentionally disabled for destructive confirmations.
- Initial focus target: three acceptable defaults (dialog surface, safe-default control, first interactive) with guidance on when to pick each.
- `<form method="dialog">` variant documented for form-shaped confirmations that dismiss with a `returnValue`.

**Don'ts updated** to add rendering `<dialog>` without `.showModal()` and setting fixed pixel widths that break reflow.

**Golden Pattern** rewritten to native. Uses `useEffect` to imperatively open/close via `.showModal()` and `.close()`, listens for the browser's `cancel` (Escape) and `close` events, and handles backdrop click via target-check on the `<dialog>` element itself. No more manual focus trap, `inert` toggling, portal, or key listeners — all provided by the browser under `.showModal()`.

## 0.4.3 — 2026-06-30

Foundations focus rule updated with Windows High Contrast Mode support and refined two-layer ring geometry.

**Foundations → Focus States:**
- Primary two-layer focus snippet updated: `outline-offset` changed from `0` → `2px` so the white halo sits between the element and the colored ring (more surface-independent visibility on colored elements).
- Added required `@media (forced-colors: active)` override snippet using the `Highlight` CSS system color and `box-shadow: none`. Support for Windows High Contrast Mode is now stated as required for any focus style, not optional.
- Customizable and Don'ts updated with the forced-colors requirement.
- Acceptance Checks: added a check that the focus indicator remains visible under forced-colors mode.

No component patterns changed; the boilerplate focus formula referenced across all components continues to point at Foundations, so the update propagates by reference without touching any component file.

## 0.4.2 — 2026-06-30

Golden Pattern presentation polish across all 14 components. Frames the snippets for their actual audience (AI coding assistants) and modernizes React import style.

**Changes to every component pattern:**
- Added a single-sentence framing line above each `## Golden Pattern` heading: "Structural reference for AI coding assistants — semantics, focus, and keyboard behavior. Styling, copy, and demo data are illustrative." Clarifies that snippets demonstrate *behavior contracts* (semantics, ARIA, focus, keyboard) rather than production-realistic styling, copy, or demo data.
- Removed `import * as React from "react";` from every snippet. The LLM consumer doesn't need the reminder, and removing it lets the body switch to named-import style.
- Stripped the `React.` namespace prefix from all hook calls in the snippet bodies: `React.useState` → `useState`, `React.useRef` → `useRef`, `React.useEffect` → `useEffect`, `React.useCallback` → `useCallback`, `React.useLayoutEffect` → `useLayoutEffect`, `React.useId` → `useId`, `React.useMemo` → `useMemo`, `React.useContext` → `useContext`, `React.createContext` → `createContext`. Matches contemporary React conventions.
- `dialog.modal` additionally drops `import { createPortal } from "react-dom";` for the same reason; the `createPortal(...)` call remains in the body.

**No semantic changes.** No per-pattern version bumps — these are presentation-only edits to the snippets; the rules, prose, and acceptance checks are unchanged. The `"use client";` directive remains where applicable as a structural signal for Next.js App Router consumers.

**Contributor docs updated to match:**
- `schema/style-guide.md` § Golden Pattern: codified the framing-line requirement and rewrote the import/hook-call code conventions (no `import * as React`, no `React.` prefix, named-style hooks).
- `schema/pattern-template.md`: framing-line guidance added to the Golden Pattern section description; the bare template at the bottom now includes the framing sentence.

## 0.4.1 — 2026-06-30

Getting Started information-architecture cleanup; Foundations title/intro alignment; first run of the auto-sync workflow.

**Site changes (Getting Started restructure):**
- "For AI Coding Agents" renamed to "Using with AI Coding Agents" — clearer that the page is for human readers about using A11y Context with AI agents.
- AI Coding Agents index page reframed: "two moving parts" (corpus + skill) replaces the prior three; "two design decisions" (transport + processing) replaces the prior three; new "Why invocation matters" section preserves the original 13% / 53% / 100% invocation data from the controlled experiment; recommended starting point is now "inline skill + HTTP."
- Enforcement rule is presented as an **optional belt-and-suspenders** for environments requiring guaranteed invocation, with a link to the original rule file preserved in the archive org.
- The standalone `enforcement-rule.md` page is deleted.
- New `install/` subfolder consolidates the three install paths. `downloads.md`, `retrieval-options.md`, and `indexing-guidance.md` moved into `install/`. New `install/index.md` orients visitors to ZIP-download vs git-clone vs enterprise-RAG.
- New top-level `verification.md` page (formerly a section inside downloads.md), with extended pass criteria and additional test prompts.
- `downloads.md`: Atlas mention removed from the org-level distribution guidance.
- `retrieval-options.md`: Enterprise RAG section now references skill-based invocation rather than the deleted rule mechanism.

**Corpus changes:**
- Foundations page H1 changed from "Global Rules (Baseline)" to "Foundations" with a new intro paragraph explaining what's covered (utilities, page-level structure, visual fundamentals). Aligns with the frontmatter title and the site navigation.

No per-pattern semantic changes; per-pattern versions unchanged.

## 0.4.0 — 2026-06-28 (infrastructure)

Infrastructure change: `patterns.json` is now **generated** from each pattern's `.md` frontmatter and `## Use When` / `## Do Not Use When` body sections by a prebuild script. Authors only edit the .md files; the JSON is a derived artifact (still committed so the MCP server and consumers can read it without running the build).

**What changed:**

- `latest_version` migrated to frontmatter on all 14 published patterns. Each .md is now the single source of truth for its catalog metadata.
- New `patterns/web/react/catalog-meta.json` carries the hand-edited top-level metadata (`catalog_revision`, `schema_version`, `stack`, `cache_ttl_seconds`).
- New `website/scripts/generate-patterns-json.js` (~120 lines) regenerates `patterns.json` from the .md files + `catalog-meta.json` during `npm run prebuild`. Run manually with `npm run gen:patterns-json` from `/website`.
- Existing `patterns.json` inconsistencies normalized: bullet backticks stripped consistently in `selection_excerpt`, frontmatter titles propagated to the JSON output (Basic Button, Carousel with Dot Navigation, etc.).
- `generated_at` field removed — no consumer used it and it complicated reproducible builds.

**Status convention extended:**

- `draft` — in-progress, **excluded** from the generated `patterns.json`. Currently applied to `checkbox.basic` and `checkbox.group` (authored but not yet published in the catalog).
- `beta` — published in the catalog. Default state.
- `stable` — promoted (not yet used).
- `deprecated` — retired; excluded from the generated `patterns.json`.

Per-pattern versions did not change in this release — the changes are infrastructure-only.

## 0.3.0 — 2026-06-28

Author-conventions tightening pass. No new patterns; no breaking changes to pattern IDs, URLs, or required behaviors.

**Conventions tightened across the corpus:**
- Don't bullets standardized to "Do not" form. Section heading remains `## Don'ts`.
- "(required)" inline labels removed — all Must Haves are required by definition.
- Bold removed from inline attribute references; emphasis is reserved for prose, not code tokens.
- Customizable sections recast using a preferred-vs-fallback framing where applicable (see Dialog Modal).
- Accessible-name boilerplate reframed across multiple patterns: soft "may serve as" / "may be added" phrasings in Must Haves replaced with conditional Musts ("When X, do Y").

**Components:**
- Button → 0.2.0 — accessible-name boilerplate reframed.
- Toggle Button → 0.2.0 — accessible-name boilerplate reframed.
- Link → 0.2.0 — accessible-name boilerplate reframed.
- Switch → 0.3.0 — accessible-name boilerplate reframed; "should have" tightened to "has" on the visible-label requirement.
- Dialog (Modal) → 0.2.0 — Customizable reframed to preferred-vs-fallback (`<dialog>` preferred, `<div role="dialog">` fallback with conditions); "(required)" inline labels removed; Must Haves flattened.
- Account Menu → 0.2.1 — bold removed from `aria-expanded` reference.

All other patterns received the corpus-wide typography normalization (Don't → Do not) without per-pattern semantic changes; no per-pattern bumps.

## 0.2.0 — 2026-06-05

Corpus strengthening from controlled experimentation, plus catalog corrections. No new patterns; no breaking changes to pattern IDs or URLs. Per-pattern versions are now recorded retroactively for the changes that landed in this release.

**Foundations:**
- Focus States: added a strongly recommended two-layer focus ring (2px ring inside a 4px white background extension) that remains visible against any surrounding surface; a verified simple outline remains acceptable.
- Heading Structure: footer link-group titles, when present, are `<h2>` headings.
- Non-text Contrast: corrected misplaced bullets in Don'ts and Acceptance Checks.

**Components:**
- Accordion → 0.1.1 — golden pattern notes that the demo's `<h3>` must match the surrounding heading hierarchy.
- Account Menu → 0.2.0 — `aria-expanded` on the trigger elevated to a hard gate (new Must Have, new Don't, strengthened acceptance check).
- Carousel (Dot Navigation) → 0.2.0 — non-visible slides must be unreachable by keyboard and screen readers (new Must Have + acceptance check); autoplay golden-pattern code cleaned up.
- Carousel (Thumbnail Navigation) → 0.2.0 — same non-visible-slides update.
- Collection Row → 0.2.0 — aliases expanded (product card grid, product cards, card row, media row); Don'ts clarified.
- Dialog (Modal) → 0.1.1 — golden pattern adds a Tab-wrapping fallback so focus stays contained even when no inert target exists.
- Channel Guide Grid → 0.2.0 — rows and cells now expose `aria-rowindex` / `aria-colindex` for lazy-loading correctness.
- Navigation Menu → 0.2.0 — logo carries `aria-current="page"` on the homepage when no explicit Home link exists.
- Switch → 0.2.0 — Customizable expanded to document base-element options (`div` / `button` / `input[type="checkbox"]` with `role="switch"`) and the emerging native HTML switch control.

**Catalog and formatting:**
- Every pattern page now states its canonical Pattern ID and summary in visible text directly under the title (chunk-resilient retrieval).
- The Components catalog page is generated from `patterns.json` at build time (no more manual drift).
- Five pattern files renamed to full-ID filenames (`accordion.basic.md`, `switch.basic.md`, `collection-row.basic.md`, `link.basic.md`, `toast.basic.md`). Page URLs unchanged — they derive from pattern IDs, not filenames.
- Golden patterns no longer import icon libraries; icon slots use placeholder spans corpus-wide.
- Typographic quotes normalized to straight quotes; all golden-pattern fences use `jsx`.

## 0.1.0 — 2026-02-17

Initial beta release of the Web / React accessibility pattern corpus.

**New patterns (beta, all at 0.1.0):**
- Accordion
- Account Menu
- Button
- Toggle Button
- Carousel (Dot Navigation)
- Carousel (Thumbnail Navigation)
- Channel Guide Grid
- Collection Row
- Dialog (Modal)
- Link
- Navigation Menu
- Select
- Switch
- Toast

All patterns carry `status: beta`. Breaking changes will be communicated via catalog version bumps and per-pattern major version bumps.
