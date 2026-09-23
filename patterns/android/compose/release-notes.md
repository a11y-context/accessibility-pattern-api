---
id: release-notes
title: Release Notes
slug: /compose/release-notes
---

# Release Notes

Catalog and per-pattern versions use semver (MAJOR.MINOR.PATCH). Catalog revisions are dated. Each release lists changes by pattern.

## 0.3.0 — 2026-09-23

- **Button → 0.2.0** — Fixed the `IconButton` example in the Golden Pattern. `onClick(label = ...) { false }` passed a real action lambda that overrode the button's click handler in the accessibility tree, so a TalkBack double-tap did nothing while touch still worked. `action = null` attaches the label without overriding the handler. Must Haves and Don'ts now cover components, like `IconButton`, that take no `onClickLabel` parameter directly.

## 0.2.0 — 2026-09-22

First component release. Eight patterns, all at `0.1.0`.

- **Bottom Sheet (Modal) → 0.1.0** — Modal sheet. Material supplies more of the dismissal contract than expected, and each part of it disappears under a configuration the caller controls: the drag handle's expand, collapse, and dismiss actions are conditional, and Escape is never handled.
- **Button → 0.1.0** — Text, icon-only, floating, and action-chip presentations, which share one role and differ in where the accessible name comes from.
- **Checkbox → 0.1.0** — Independent yes-or-no choice submitted with a form. The row that owns `toggleable` owns the role and the touch target.
- **Content Shelf → 0.1.0** — Horizontally scrolling strip of tiles. A `LazyRow` is one row of many columns, and reversing the collection axes reports position against the wrong one.
- **List Item → 0.1.0** — A row in a vertical list, as one accessibility node. A secondary control inside it becomes a custom action rather than a nested target.
- **Radio Group → 0.1.0** — Exactly one choice from a mutually exclusive set. `selectableGroup` on the container is what makes each option announce its position, and the group ships with one option already selected.
- **Switch → 0.1.0** — Persistent on-or-off setting that takes effect immediately.
- **Text Field → 0.1.0** — Single-line entry. `isError` announces a generic default string rather than the supporting text, and supporting text is laid out without being attached to the field, so both have to be handled deliberately.

Foundations changes in the same release:

- `global.collection-semantics` now requires naming the collection container outright. The rule previously asked for a name only when the heading was not adjacent in traversal order, a condition that did no work, since nothing on Android associates a heading with the list below it.
- `global.native-first` no longer names `androidx.compose.material3` as the thing to prefer over foundation primitives. It says not to hand-assemble a control when a component that meets the contract is available, whether that is the Material composable or the design system's own.

Every component pattern states its contract first — the role, state, and actions the control must expose — and names Material 3 as the reference implementation rather than as the instruction. A design system's own component satisfies the same contract by forwarding to the same semantics.

## 0.1.0

Stack scaffolding and Foundations. No component patterns yet.

- Foundations established with 18 baseline rules.
- Component taxonomy settled in `schema/android-component-taxonomy.md`.
