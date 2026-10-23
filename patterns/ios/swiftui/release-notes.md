---
id: release-notes
title: Release Notes
slug: /swiftui/release-notes
---

# Release Notes

Catalog and per-pattern versions use semver (MAJOR.MINOR.PATCH). Catalog revisions are dated. Each release lists changes by pattern.

## 0.7.0 — 2026-10-21

**Two Golden Pattern accuracy fixes, and a sweep that brings the SwiftUI patterns to the style guide.** The text field and wheel picker examples showed labels that are not visible on iOS. Every example drops the legacy `Demo` naming for `<Pattern>Examples`, following a new SwiftUI rule in the style guide. Use When bullets lose the implementation sentences that told an agent how to build the control rather than whether to pick the pattern, and the SwiftUI type names move to `aliases`. 46 Don'ts that restated a Must Have or a Do Not Use When redirect without adding a symptom, a look-alike mistake, or a platform defect are removed, along with the prohibitions and cross-pattern comparisons that sat inside Must Haves. 17 patterns now reference `global.native-first`.

- **Text Field → 0.3.0** — The `TextField` title renders only as placeholder text on iOS, so it no longer counts as the visible label. Each field carries a persistent visible `Text` label, hidden from VoiceOver, with a matching `TextField` title as the name. The titleless field named only by `.accessibilityLabel` is gone, horizontal `LabeledContent` remains the alternative, and a native `TextField` Must Have and a `prompt:` Customizable item are added.
- **Select (Wheel) → 0.2.0** — New Must Have: a visible `Text` label, hidden from VoiceOver, since a wheel `Picker` does not display its label text outside a `Form`. The Golden Pattern now shows it.
- **Select (Segmented) → 0.2.0** — New Must Have: the visible `Text` label is hidden from VoiceOver, so the name is spoken once, on the picker.
- **Switch → 0.3.0** — The hand-built switch Don't no longer accepts `.accessibilityElement(children: .combine)` as a rescue; it supplies no switch trait, value, or action. A hand-drawn switch follows `global.custom-control-representation`.
- **Basic Button → 0.2.0** — `Button` added to aliases.
- **Toggle Button → 0.2.0** — Aliases expanded from 2 to 6, meeting the 4 to 8 range.
- **Checkbox → 0.2.0** — `ToggleStyle checkbox` added to aliases. The exported `CheckboxToggleStyle` now precedes `CheckboxExamples`.
- **Radio Button → 0.1.2** — The exported `RadioButton` now precedes `RadioGroupExamples`.
- **List Row (Navigable) → 0.1.2** — The `SettingDetail` view is inlined as the destination.
- **Date Picker → 0.1.2**
- **Dialog (Alert) → 0.1.4**
- **Dialog (Confirmation) → 0.1.2**
- **Dialog (Modal) → 0.1.2**
- **Inline Link → 0.1.2**
- **Link → 0.1.2**
- **Menu → 0.1.3**
- **Select (Menu) → 0.1.3**
- **Slider → 0.1.3**
- **Stepper → 0.1.3**

Patterns listed without a note change only by the sweep above. No requirement changed in them.

## 0.6.0 — 2026-10-21

**Contradictions inside and between patterns resolved, and a stale scope removed.** Each fix lines a sentence up with a requirement the corpus already states; one selection redirect is added.

- **Foundations** — `global.native-first` scope corrected from `[control, component]` to `[component]`. `control` left the scope vocabulary in 0.4.0, and the site was rendering it as a stray scope label. No rule changed.
- **Switch → 0.2.0** — Do Not Use When redirects a value submitted with a form to `checkbox.basic`, matching web and Android.
- **Stepper → 0.1.2** — Customizable no longer calls the paired `TextField` "recommended" on a wide range, where a Must Have requires it.
- **Select (Menu) → 0.1.2** — A Must Have that repeated a Don't word for word is removed; the prohibition on `.accessibilityLabel` stays in Don'ts, and the positive naming Must Have is unchanged.
- **Dialog (Alert) → 0.1.3** — The redirect to `dialog.confirmation` no longer calls it non-blocking, which its own Must Haves contradict. The boundary is unchanged.
- **Menu → 0.1.2** — Customizable no longer says an icon-only trigger "may" carry the `.accessibilityLabel` its Must Have requires, and the focus-return Don't no longer implies `.sheet()` and `.popover()` restore focus on their own (`global.focus-management`).

## 0.5.2 — 2026-10-06

**Golden Pattern comments removed, to the standard in the style guide.** Of 57 comment blocks across the nineteen examples, 56 restated a Must Have, Don't, or summary in the same pattern, often word for word, or argued a choice for a reviewer. The agent retrieves those sections with the code, so the comments cost tokens on every lookup and added nothing. Each was checked against its pattern's text before it came out, including the three closest calls: `onDismiss` focus return in Dialog (Modal), the decorative chevron in List Row, and the hidden-but-spoken label on a wheel Date Picker, all of which a Must Have already states. The one survivor, in Dialog (Alert), marks elided code. No requirement changed.

- **Basic Button → 0.1.1**
- **Checkbox → 0.1.1**
- **Date Picker → 0.1.1**
- **Dialog (Alert) → 0.1.2**
- **Dialog (Confirmation) → 0.1.1**
- **Dialog (Modal) → 0.1.1**
- **Inline Link → 0.1.1**
- **Link → 0.1.1**
- **List Row (Navigable) → 0.1.1**
- **Menu → 0.1.1**
- **Radio Button → 0.1.1**
- **Select (Menu) → 0.1.1**
- **Select (Segmented) → 0.1.1**
- **Select (Wheel) → 0.1.1**
- **Slider → 0.1.2**
- **Stepper → 0.1.1**
- **Switch → 0.1.1**
- **Text Field → 0.2.1**
- **Toggle Button → 0.1.1**

## 0.5.1 — 2026-10-06

- **Foundations** — The `Rule:` prefix is gone from every rule heading, so the list reads as rule names ("Focus States", "Native First") instead of the same word repeated down the page. No rule changed. `@a11y-context/mcp-server` reads both forms, so `get_foundations` returns the same rules either way.

## 0.5.0 — 2026-09-18

**WCAG citations removed, the focus rule renamed to match the rest of the corpus, and a native-first rule added.**

- **23 WCAG criterion citations removed** from Must Haves and Don'ts across 11 SwiftUI patterns and `global_rules.md`, for the same reason as the web 0.28.0 release: the style guide says state the requirement, not the reason, and a criterion identifier never changes what gets built. `release-notes.md` keeps its own references.
- **`global.focus-visible` is now `global.focus-states`**, matching web. It was the only Foundations ID that differed across stacks, and 32 references across 20 files moved with it. The rule heading becomes "Focus States". The surrounding prose in each pattern is unchanged; only the ID moved.
- **New rule `global.native-first`**, scope control and component. It states the contract an interactive control owes assistive technology, its role, its value or state, and its actions, and names SwiftUI's own controls as the reference implementation that already satisfies it. Mostly a consolidation: `global.semantic-color` already said to use native control styles, `global.custom-control-representation` already covered the from-primitives case, and the focus rule already noted that native styles preserve the indicator. Stating it once lets component patterns reference it rather than restate it.

The rename and the citation removal change no requirement. The new rule adds one. No per-pattern version bumps.

## 0.4.2 — 2026-09-17

**Section order corrected in the source files.**

- **`Don'ts` now precedes `Customizable`** in all 19 SwiftUI patterns, matching the canonical order shared with web: Use When, Do Not Use When, Must Haves, Don'ts, Customizable, Golden Pattern.
- The website previously re-sorted sections at render time regardless of source order, which hid the drift on every page while the skills repo and the npm package shipped the raw file. Rendering now follows the source, and `npm run check:section-order` fails the build on any deviation.

No requirement text changed.

## 0.4.1 — 2026-09-17

**WCAG hyperlinks removed from the Foundations rules.**

- Six Must Haves carried a markdown link to the WCAG Understanding page for the criterion they implement. **The success criterion number and name are kept as plain text**; only the URLs are gone. The reference still identifies the criterion precisely for a human reviewer, at roughly a quarter of the characters.
- This file was the only place in the corpus doing it: the web Foundations carry zero such links, and so do all 52 component patterns across both stacks. Removing them makes iOS consistent with everything else rather than introducing a new divergence.
- The corpus is retrieved by coding agents, which do not follow links, and `global_rules.md` is fetched on every UI task, so the URLs were spending retrieval budget on every lookup to deliver something no consumer uses.

No requirement changed.

## 0.4.0 — 2026-09-17

**Adopts the shared scope vocabulary: `screen`, `layout`, `component`. `control` is gone.**

- **`control` removed.** It never appeared without `component`, so it was a strict subset that could not narrow anything a reader did not already have, and `component` sat on all 8 rules, so that one could not narrow anything either. Between them the two buckets made 8 of 8 rules match whatever was asked for.
- **Now the same three words as web/react**, so a rule's scope reads identically across stacks rather than each platform inventing its own set.
- **All 8 rules rescoped:** `global.navigation-focus` `[screen]`, since focus landing on a pushed screen is a screen-level concern; `global.dynamic-type` and `global.focus-management` `[layout, component]`; the remaining five `[component]`.
- Distribution is screen 1/8, layout 2/8, component 7/8. Every bucket excludes something.

No requirement text changed in any rule, and no component pattern was touched.

## 0.3.0 — 2026-09-16

**Acceptance Checks leave the SwiftUI patterns, bringing this stack in line with web/react and with the shared pattern format.**

- **Acceptance Checks removed from all 19 SwiftUI patterns.** The web/react stack shed the section in its own 0.25.0 release, which also removed it from `schema/style-guide.md` and `schema/pattern-template.md`. Those two files are stack-agnostic, so from that point the SwiftUI patterns were the only ones in the corpus still carrying a section the format no longer defines. The section restated in observation form what the Must Haves and Don'ts already state as requirements, and a pattern doc's job is to say what to build rather than how to confirm it was built. **No per-pattern version bumps:** no requirement changed in any of the 19, which puts this in the same class as a corpus-wide typography sweep.
- **The SwiftUI Foundations rules are unaffected**, because `global/global_rules.md` on this stack never carried Acceptance Checks. Its web counterpart still does, and is now the only place in the corpus the section survives.

`qa-catalog.json` is unchanged and never referenced the section.

## 0.2.0 — 2026-07-19

**Principal accessibility review of the component set; two patterns corrected. Seven new component patterns and two new Foundations rules added. This release also introduces this release-notes file and backfills the nine patterns and four Foundations rules added since 0.1.0.**

**New patterns (beta, all at 0.1.0):**
- Dialog (Confirmation) (`dialog.confirmation`) — native `.confirmationDialog` action sheet with per-action focus return.
- Dialog (Modal) (`dialog.modal`) — `.sheet` / `.fullScreenCover` with heading-coded title, explicit close control, and `onDismiss` focus return.
- Select (Segmented) (`select.segmented`) — segmented `Picker`; requires `.accessibilityLabel` plus `.accessibilityElement(children: .contain)`, the documented opposite of the menu style.
- Select (Wheel) (`select.wheel`) — wheel `Picker` with the same labeling contract and the documented wheel defects (contrast, Voice Control, Large Content Viewer).
- Radio Button (`radio.basic`) — custom radio group from `Button` elements with trait surgery and "Radio button, checked/unchecked" values; SwiftUI has no native radio control.
- Menu (`menu.basic`) — `Menu` of commands; documents that focus cannot be restored to the trigger (unlike sheets and popovers), an Apple platform defect.
- Date Picker (`date-picker.basic`) — `DatePicker` with the per-style naming split: `.accessibilityLabel` for default/compact, visible label text only for `.graphical`/`.wheel`.

**New Foundations rules:**
- `global.announcements` — announce passive dynamic changes with `AccessibilityNotification.Announcement` instead of moving focus (WCAG 4.1.3).
- `global.focus-management` — move VoiceOver focus to must-act content and restore it on overlay close with `@AccessibilityFocusState`, including the documented limits (`Menu` and `DatePicker` cannot restore focus).

New patterns are AI-drafted and principal-reviewed against the reference patterns and the CVS Health `ios-swiftui-accessibility-techniques` repo; the on-device AT pass (VoiceOver, Switch Control) remains the gate before promotion.

**Components:**
- Text Field → 0.2.0 — validation errors are now appended to the field's accessibility label dynamically instead of being exposed through `.accessibilityValue`, which replaced the typed text so VoiceOver stopped speaking the field's actual value. New Don'ts bar error text in `.accessibilityValue` and hint-only exposure (users can turn hints off in VoiceOver settings and would never hear the error). Golden Pattern and Acceptance Checks updated to match.
- Dialog (Alert) → 0.1.1 — Golden Pattern demo copy replaced with an original example scenario; no requirement changes.
- Slider → 0.1.1 — Golden Pattern: removed the redundant `.accessibilityValue("N percent")` override on the 0–100 brightness example; the native `Slider` already announces a percentage for that range, and the override is reserved for values with meaningful units (e.g., "72 degrees"). No requirement changes.

**Backfill (added 2026-07-11 as beta, all at 0.1.0, without a catalog bump at the time):**
- Checkbox (`checkbox.basic`)
- Dialog (Alert) (`dialog.alert`)
- Link (`link.basic`)
- Inline Link (`link.inline`)
- List Row (Navigable) (`list.row`)
- Select (Menu) (`select.menu`)
- Slider (`slider.basic`)
- Stepper (`stepper.basic`)
- Text Field (`text-field.basic`)

Foundations rules from the same window:
- `global.custom-control-representation`
- `global.semantic-color`
- `global.dynamic-type`
- `global.navigation-focus`

The full component set was reviewed against the reference patterns and the CVS Health `ios-swiftui-accessibility-techniques` repo; the seven patterns not listed under Components above were verified accurate and are unchanged.

## 0.1.0 — 2026-07-07

Initial beta release of the iOS / SwiftUI accessibility pattern corpus.

**New patterns (beta, all at 0.1.0):**
- Button
- Toggle Button
- Switch

All patterns carry `status: beta`. Breaking changes will be communicated via catalog version bumps and per-pattern major version bumps.
