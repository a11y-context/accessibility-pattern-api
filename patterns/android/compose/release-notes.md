---
id: release-notes
title: Release Notes
slug: /compose/release-notes
---

# Release Notes

Catalog and per-pattern versions use semver (MAJOR.MINOR.PATCH). Catalog revisions are dated. Each release lists changes by pattern.

## 0.7.0 — 2026-10-06

The last wave-1 patterns, which completes the first wave: eighteen patterns. Checked against the stable Compose Foundation and UI 1.12.1 and Material 3 1.4.0 sources.

- **Link → 0.1.0** — Compose has no link role and no Link composable. A `LinkAnnotation` is announced as a link but its tap area is clipped to the outline of its characters, so a standalone link is a `TextButton` whose text names the destination, with a click label when it leaves the app. Named `link.basic` to match web and iOS; it was `link.standalone` in the taxonomy, with no recorded reason to diverge.
- **Inline Link → 0.1.0** — Compose exposes each `LinkAnnotation` as a `URLSpan` or `ClickableSpan` on its text, not as a node, so TalkBack reaches it through its Links menu and the link text has to stand on its own. The link node sets no indication and Material's default link style sets no `focusedStyle`, so keyboard focus is invisible until the caller supplies one.
- **Progress Indicator → 0.1.0** — One pattern for measured and unmeasured progress. The `progress` lambda overloads report `ProgressBarRangeInfo` with a value and the others an indeterminate range, both on a merged node with no name, so a standalone indicator is named for its work and one inside a control hands its meaning to that control. A control showing its own progress stays focusable: a clickable set to `enabled = false` drops its focusable node, which throws away a keyboard user's focus the moment "Save" becomes "Saving". The taxonomy had planned this as two patterns, split on determinacy; written out, they shared most of their rules, so they ship as one.
- **Button → 0.2.2** — Its redirect for a control that opens a URL now names `link.basic`.
- **Image → 0.1.1** — Its redirect for a graphic showing work in progress now names `progress-indicator.basic`.

## 0.6.0 — 2026-10-06

Four wave-1 patterns in two pairs, each pair sharing a mechanism, checked against the stable Material 3 1.4.0 source.

- **Navigation Bar → 0.1.0** — Items report `Role.Tab`, selected state, and position through `selectable` and `selectableGroup`. `NavigationBarItem` wraps its icon in `clearAndSetSemantics {}` whenever the label shows, which is right for the icon's description and silently drops a `BadgedBox` count drawn in the same slot. The badge's meaning goes in the item's name, and each icon still carries a description, because it is the item's only name when labels are hidden.
- **Tabs → 0.1.0** — The same `Role.Tab` contract, with the opposite icon rule: `Tab` does not clear its icon, so an icon beside a tab's text takes `contentDescription = null`. Only the selected tab's content is composed, and a swipeable pager keeps the selected tab in step.
- **Snackbar → 0.1.0** — Everything accessible lives in `SnackbarHost`, not `Snackbar`: a polite live region, a `dismiss` action, and a duration run through the system's recommended timeout. A `Snackbar` drawn by hand behind a timer gets none of it. `showSnackbar` queues messages rather than replacing them.
- **Snackbar with Action → 0.1.0** — Focus never moves to the message, so its action is also available elsewhere on the screen. `showSnackbar` already defaults an action snackbar to `SnackbarDuration.Indefinite`; the pattern keeps that default and adds a visible dismiss control.

## 0.5.1 — 2026-10-06

- **Foundations** — The `Rule:` prefix is gone from every rule heading, so the list reads as rule names ("Focus States", "Native First") instead of the same word repeated down the page. No rule changed. `@a11y-context/mcp-server` reads both forms, so `get_foundations` returns the same rules either way.

## 0.5.0 — 2026-10-05

Three wave-1 patterns, and four corrections that came from checking their mechanisms against the stable Material 3 1.4.0 and Compose UI 1.12.1 sources.

- **Image → 0.1.0** — Informative, decorative, and functional images. `contentDescription` is a required parameter on `Image` and `Icon`, so the decision is explicit at every call site, and `""` is not decorative: it still applies `Role.Image`. Only `null` removes an image from the tree.
- **Menu → 0.1.0** — `DropdownMenu` is a focusable popup that closes on back, Escape, and a tap outside it with no extra code. Its items carry no role, so each label has to stand on its own as a command. An overflow trigger is named "More options", the label Android uses for its own overflow control.
- **Dialog (Alert) → 0.1.0** — `AlertDialog` blocks the screen and closes on back and Escape, but sets its pane title to the generic word "Dialog". The title is the first content the user lands on, so it carries the question; the icon before it is decorative. The dialog's own window takes focus, so no button is focused on open.
- **List Item → 0.2.0** — Replaced a Don't that warned against omitting `contentDescription`, which cannot be omitted on Compose. The real trap is passing `""` to a decorative thumbnail.
- **Content Shelf → 0.2.0** — The same correction for tile artwork.
- **Bottom Sheet (Modal) → 0.3.0** — The focus request moves inside the sheet's content, because the sheet composes in its own window and an effect in the parent can run before its target exists. The Escape Must Have now says the sheet is the exception: `AlertDialog` and `DropdownMenu` handle Escape themselves. The Escape handler now restores focus to the trigger, as back press already did.

Every Golden Pattern in the stack drops its explanatory comments. Each one restated a Must Have or argued a choice for a human reviewer; the agent retrieves the sections with the code, so they cost tokens and said nothing new.

- **Button → 0.2.1** — Golden Pattern comments removed; no requirements change.
- **Checkbox → 0.1.1** — Golden Pattern comments removed; no requirements change.
- **Radio Group → 0.1.1** — Golden Pattern comments removed; no requirements change.
- **Switch → 0.1.1** — Golden Pattern comments removed; no requirements change.
- **Text Field → 0.2.1** — Golden Pattern comments removed; no requirements change.

Foundations change in the same release:

- `global.icon` replaces a Don't about an "unset" `contentDescription` with the two Compose traps that are real: passing `""` instead of `null`, and drawing a meaningful graphic with `Modifier.paint`, `Canvas`, or a background, none of which applies semantics.

## 0.4.0 — 2026-09-23

Two gaps found by auditing formula coverage across all eight patterns.

- **Text Field → 0.2.0** — Adds the disabled-control Must Have, which every other form-control pattern carried and this one did not, plus the `readOnly` distinction: read-only keeps the value focusable and copyable, disabled removes it from the interaction flow. Touch-target Must Have also reworded to match the style guide's formula verbatim.
- **Bottom Sheet (Modal) → 0.2.0** — Adds the focus-states Must Have. The pattern makes its content container focusable in order to move focus into the sheet on open, and never said that a container which can hold focus has to show it.

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
