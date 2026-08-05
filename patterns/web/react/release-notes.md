---
id: release-notes
title: Release Notes
slug: /release-notes
---

# Release Notes

Catalog and per-pattern versions use semver (MAJOR.MINOR.PATCH). Catalog revisions are dated. Each release lists changes by pattern.

## 0.23.0 — 2026-08-05

**A segmented code field, where every requirement follows from one decision: the boxes are paint, not structure.**

- **New pattern `pin-input.basic` ("PIN Input")**, beta at 0.1.0. The fixed-length numeric code entered across segmented boxes, covering parental controls, profile locks, purchase confirmation, and out-of-band verification codes. The requirement implementations miss is that the expected length has to reach assistive technology as text: a sighted user counts four boxes and knows what is being asked, and nobody else gets that from the rendering, so the count lives in a description rather than in the box count. Everything else follows from building the field as one `<input>` holding the whole code, with the boxes and any group separator as `aria-hidden` presentation. Typing advancing, Backspace retreating, arrow keys moving between boxes, and paste filling the whole field stop being re-implemented key handling and become native caret behavior. One `<input>` per box is the anti-pattern the pattern exists to prevent: each box announces as an unlabeled text field, and the control consumes one tab stop per digit.
- **Masking is real, not painted, and assistive-technology testing is what caught it.** The draft masked the value by rendering bullet glyphs into the presentational boxes while the input stayed `type="text"`. VoiceOver read the actual digits aloud while the screen showed dots, which inverts who the masking protects: the viewer keeps shoulder-surfing protection while the listener has their PIN spoken through the speakers. The field now carries `type="password"` while masked and `type="text"` when revealed, and a Don't names the painted-glyph version specifically.
- **1.3.5 Identify Input Purpose does not bind here; 3.3.8 does.** Identify Input Purpose is scoped to inputs collecting information about the user, and its normative token list carries no PIN, passcode, or one-time code. `one-time-code` is a valid HTML autofill token and is absent from WCAG's 53. What does bind is Accessible Authentication (Minimum): remembering a PIN is a cognitive function test, and the Understanding document is explicit that blocking copy and paste, or blocking password managers from filling the field, fails the criterion unless an alternative is provided. Paste working across the whole field is therefore a conformance requirement rather than a convenience, and `autocomplete` is omitted on a stored PIN rather than set to `"off"`, which would suppress the autofill the criterion depends on.
- **The group separator is decorative, and now says so against a sibling.** With `separator.basic` shipped in 0.21.0, a dash between digit groups has a plausible-looking wrong answer. It is presentation inside a single field, so it never takes `role="separator"` or `<hr>`, never enters the value, and never appears in the caret path.
- **Forward reference seeded:** `form.error-summary`, for form-level error collection and submit-time focus handling. Already referenced in production by `checkbox.basic` and `checkbox.group` without ever being logged, so the backlog entry covers all three.

`qa-catalog.json` is unchanged: the new pattern is queued for a derive batch.

## 0.22.0 — 2026-08-05

**Two small display components that carry status, split on the mechanism rather than the host. The style guide gains a full Golden Pattern strategy and a rule about what the selection sections are for.**

- **New pattern `avatar.basic` ("Avatar")**, beta at 0.1.0. The image, initials, or glyph standing for a person or entity. The requirement that actually breaks in production is name stability: the photograph carries `alt="Jane Okonkwo"` while the initials fallback renders a bare `<span>JO</span>` with no name at all, so the same person is named differently depending on whether an image loaded. Which fallback an implementation picks is Customizable; that every branch reports the same name is not. The pattern's sharpest trap is verified against ARIA directly, since the `img` role takes its name from author only, requires one, and makes its descendants presentational, so initials placed inside `role="img"` are never announced and `aria-label` is the only thing naming the element.
- **New pattern `badge.basic` ("Badge")**, beta at 0.1.0. The small indicator annotating a host with a count or a status. Its value must be discoverable but never announced: the count belongs in the accessible name of the host or the badge, so arriving at a control reports "Notifications, 3 unread", while a count that increments as the user reads elsewhere interrupts work the badge was never urgent enough to interrupt. An indicator whose appearance is itself the notification is not a badge and redirects to `toast.basic`. Bootstrap's documented markup arrives at the same structure independently, down to visually-hidden text naming what the number counts.
- **The boundary between them, settled once.** `badge.basic` owns the overlay mechanism and `avatar.basic` owns identity, so a presence dot on an avatar is a badge rather than an avatar feature. The split follows the mechanism rather than the host for the same reason `progress-bar.basic` and `spinner.basic` split on composition: a rule that lives with the mechanism is stated once, and a rule that lives with the host is stated twice and drifts. The cost is that "avatar with presence" is documented across two pages, which page-level self-containment makes worth paying.
- **Forward references seeded:** `avatar.group` for stacked avatars with an overflow affordance, and `tag.basic` for an indicator the user can select, dismiss, or remove. Both are declared in the authoring backlog rather than left dangling.
- **Style guide: a Golden Pattern strategy replaces a flat rule list.** The section was eleven unordered conventions with no organizing principle, which is why it both permitted `XDemo` naming and said nothing about composition. It now runs from the three-slot shape through the gate deciding whether a pattern needs examples at all, the rule that examples are illustrative rather than exhaustive, when a Customizable option earns one, props versus composition, and the requirement that comments and state each earn their place. The load-bearing rule is that a Golden Pattern exports exactly one component named for the pattern: a snippet naming a composition `ChannelRow` collides with the real `collection-row.basic`, and a chunked corpus gives a retrieving agent no way to tell an illustration from a component it should build.
- **Style guide: Use When and Do Not Use When select a pattern; they never describe one.** Both are extracted into `selection_excerpt`, and in retrieval they are often all a model sees, so a bullet spent on behavior is a bullet not spent on choosing. A requirement phrased as a selection criterion selects nothing, and an agent cannot select on an absence, which is what a negative capability asks it to do.

`qa-catalog.json` is unchanged: both patterns are queued for a derive batch.

## 0.21.0 — 2026-08-05

**`role="separator"` covers two components, and the corpus now covers both separately. A twelfth Foundations rule takes on icons, and the style guide gains two rules about how requirements are written.**

- **New pattern `separator.basic` ("Separator")**, beta at 0.1.0. The static line, which is what a design system means when it ships a Separator or a Divider. Every requirement follows from one question: is the boundary already in the markup? Where the content on either side sits in its own `<section>` or begins with a heading, a screen reader already knows where the break is and the line only repeats it, so it is `<hr aria-hidden="true">`. Where the run is flat and the line is the only marker of a topic change, it is a plain `<hr>`. That test is stated first because an agent has to answer it before it can write either version. The pattern also carries the fact that `<hr>` is not permitted inside `<ul>`, `<ol>`, or `<menu>`, verified on both sides of the content model: `<hr>` belongs "where flow content is expected", and a list accepts "zero or more `li` and script-supporting elements". A divider between list items is an `<li role="separator">`.
- **New pattern `splitter.basic` ("Splitter")**, beta at 0.1.0. The focusable form, which every design system that ships it calls a Splitter or Split Panel rather than a Separator. ARIA reuses one role name for both, and the two are not variants of each other, so the IDs follow the component names and each rejects the other in Do Not Use When. The pattern is the corpus's first use of the `Pointer & touch` Must Haves group, and that is where its least obvious requirement sits: the step buttons flanking the splitter are required, not chrome. WCAG 2.5.7 asks for a single-pointer route that does not involve dragging, and the Understanding document is explicit that "achieving keyboard equivalence for a dragging operation does not automatically meet this success criterion". Double-clicking to collapse does not satisfy it either where the splitter has a range, since that reaches two positions and dragging reaches all of them.
- **New rule `global.icon` ("Icons")**, scope component and style. 5 Must Haves, 4 Don'ts, 3 snippets, 6 Acceptance Checks. Four patterns already carried the decorative-icon boilerplate, and nothing owned the decision that boilerplate is one branch of. `role="img"` appeared nowhere in the corpus before this release, so a meaningful icon that no adjacent text explains had no guidance at all. The rule leads with the test, because an agent must pick a branch before it can apply either one. Contrast stays with `global.non-text-contrast`; what this rule adds is that the decorative/meaningful split decides whether that requirement binds.
- **Style guide: two rules on how requirements are written.** Must Haves state the right answer, with alternatives moved to Customizable and prohibitions moved to Don'ts, because a Must Have offering four equivalent routes gives a generating agent nothing to choose between. And a Don't must add something the Must Haves do not already say, since the negation of a requirement is the same rule twice and buries the real failure modes beneath it.

Foundations now carries 12 rules. `qa-catalog.json` is unchanged: the two new patterns are queued for a derive batch, and Foundations rules carry their acceptance checks inline.

## 0.20.0 — 2026-08-04

**QA catalog: the `foundations` section catches up completely — all 11 `global.*` rules now carry blocks, at their current text.** No pattern `.md` or Foundations `.md` changed — classification only.

- **`global.forced-colors` gets its block** — 6 checks. The rule shipped in 0.15.0 with no catalog entry.
- **The three color rules are re-derived** against their extended text: `global.text-contrast` 1 → 3 checks, `global.non-text-contrast` 2 → 3, `global.use-of-color` 2 → 3.
- **`global.motion` gets its block** — 11 checks. The rule shipped in 0.19.0.
- **`global.sr-only` is re-derived** 2 → 3 checks, picking up the stranded-focusable Don't added in 0.19.0.

Foundations now carries **58 checks across all 11 `global.*` rules**, matching `global_rules.md` exactly, at 34% `llm-eval` and 1.36 techniques per check.

**Forced colors is the case that most clearly justifies the catalog.** These failures are invisible to every other layer: the markup is correct, so a static ARIA check sees nothing wrong, and the contrast passes in the authored palette, so a normal runtime contrast check passes too. A boundary drawn only with `background-color` does not merely lose contrast under Windows High Contrast Mode — it is repainted with the system palette and disappears. Only a check that emulates forced colors catches it.

That also makes these rules unusually **runtime-tractable** rather than judgment-bound, which is why the classification leans on it: Playwright emulates `forced-colors: active` directly, so "does this boundary survive?" is a real assertion rather than an opinion. `global.use-of-color`'s state rule gains a runtime check for the first time in this release — under forced colors, a state carried by a background tint disappears outright, which is decisive where a grayscale eyeball test was not.

`global.motion` classifies the same way for the same reason. Reduced motion and forced colors are both emulable browser states, so "does this still animate?" and "did focus survive the removal?" are runtime assertions rather than opinions. Only two of its eleven checks lead with `llm-eval`: whether an automatic animation running past 5 seconds is genuinely essential, and whether a change signalled by movement is also available without perceiving that movement. Neither has a cheaper decider.

Foundations sits at the corpus's highest `llm-eval` share and correctly so: "do these authored colors carry meaning the system palette would erase?" and "is this graphic meaningful or decorative?" have no cheaper decider, and dropping them would delete the check rather than relocate it.

## 0.19.0 — 2026-08-04

**Foundations gains an eleventh rule, `global.motion`, `global.sr-only` closes a focus gap, and three broken redirects are corrected.**

- **New rule `global.motion` ("Motion and Unmounting")**, scope component and style. 6 Must Haves, 5 Don'ts, 3 snippets, 6 Acceptance Checks. Animation and content removal are one rule because they fail together: an element animating out is still in the DOM while it is visually gone, and that window is where keyboard focus is lost and the accessibility tree stops matching the screen. Four patterns already restated `prefers-reduced-motion` independently (`carousel.dots`, `carousel.thumbnails`, `progress-bar.basic`, `spinner.basic`) with nothing owning it. The rule draws the line WCAG 2.3.3 draws: changes to color, opacity, or blur that do not alter perceived size, shape, or position are not motion animation, and neither is movement driven by a value the user is waiting on. It also carries the removal half — focus is moved off an element before that element is removed or disabled, and `aria-hidden="true"` never lands on a focusable element or its ancestor.
- **`global.sr-only`** gains a Don't, a snippet, and two Acceptance Checks for stranded focusable content. A control inside a visually hidden container that stays hidden while focused is reachable by keyboard with nothing on screen, and the focus indicator appears to vanish. The rescue is the skip-link case, so the rule now ships the `:focus` and `:focus-within` restoration alongside the base `.sr-only` class.
- **Three broken redirects corrected.** `button.basic` and `button.toggle` pointed at `` `link` ``, and `link.basic` pointed at `` `button` `` in two bullets. The real IDs are `link.basic` and `button.basic`. A redirect to a nonexistent ID silently defeats the mechanism that keeps an agent from blending sibling patterns, and unlike the corpus's deliberate forward references, these targets already existed. `button.basic` → 0.2.2, `button.toggle` → 0.2.2, `link.basic` → 0.2.1, all PATCH.

Foundations now carries 11 rules. The `foundations` section of `qa-catalog.json` does not yet cover `global.motion` or the amended `global.sr-only`; both are queued for the next derive batch.

## 0.17.0 — 2026-08-04

**QA catalog: web/react is complete — every published pattern has a block, and every block uses the escalation model.** No pattern `.md` changed. This release re-derives the last four pre-escalation blocks and adds the two patterns that shipped in 0.14.0 without catalog entries.

Re-derived (82 rules become 58):

| pattern | before | after |
|---|---|---|
| `popover.basic` | 19 rules, 5% llm-eval, 1.53 avg | 12 rules, 8%, 1.42 |
| `toast.basic` | 11 rules, 9%, 1.27 | 9 rules, 0%, 1.11 |
| `tooltip.basic` | 17 rules, 6%, 1.29 | 13 rules, 0%, 1.23 |
| `select.basic` | 35 rules, 9%, 1.49 | 24 rules, 0%, 1.42 |

Newly derived, closing the coverage gap opened in 0.14.0:

| pattern | rules |
|---|---|
| `progress-bar.basic` | 23 rules, 17% llm-eval, 1.35 avg |
| `spinner.basic` | 21 rules, 29%, 1.24 |

`spinner.basic` carries the corpus's highest llm-eval share, and that is the correct reading of the pattern rather than a classification problem. Its central requirement is that announcement text is **derived, not invented** — the status word, the borrowed host name, and the completed-form end message are all judgments about whether wording matches what the user can see. No static or runtime check can decide "does this text reuse the host's existing name?", so the alternative to an llm-eval tag is no check at all. `select.basic` sits at the other extreme and reaches 0%: it is a native form control mirrored by a custom UI, and every requirement is an attribute, a role, or an observable keyboard behavior.

Every component block now carries a `catalog_revision` of `0.7.0` or later. No block remains at `0.5.2`, the stamp that marked the pre-escalation "tag all that apply" semantics. Corpus totals: **27 components, 452 rules, 9% `llm-eval`**.

Still outstanding, and tracked for the next release: the `foundations` section predates 0.15.0, so it does not yet carry `global.forced-colors` or the forced-colors requirements added to `global.text-contrast`, `global.non-text-contrast`, and `global.use-of-color`.

## 0.16.0 — 2026-08-04

**QA catalog: third re-derive batch — `combobox.autocomplete`, `grid.channel-guide`, `listbox.basic`, `menu.menubar`, `navigation-menu.basic`.** No pattern `.md` changed — classification only. These are the five largest blocks in the corpus; 146 rules become 109.

| pattern | before | after |
|---|---|---|
| `combobox.autocomplete` | 28 rules, 0% llm-eval, 1.29 avg | 23 rules, 0%, 1.30 |
| `grid.channel-guide` | 25 rules, 4%, 1.28 | 20 rules, 0%, 1.20 |
| `listbox.basic` | 23 rules, 0%, 1.17 | 15 rules, 0%, 1.13 |
| `menu.menubar` | 30 rules, 10%, 1.27 | 21 rules, 10%, 1.19 |
| `navigation-menu.basic` | 40 rules, 12%, 1.40 | 30 rules, 3%, 1.27 |

These five were already close to the reference on llm-eval, so the reduction here is almost entirely **structural noise rather than mis-tiering**: section-label bullets that carry no requirement ("Keyboard model:", "The grid must expose its dimensions:", "Tab boundary behavior:"), branch details that belong in a single rule's hint rather than as competing rules, and the recurring inverted Don'ts.

`combobox.autocomplete` contains the corpus's clearest example of a **partial** Foundations restatement: "Ensure a visible focus state … around the input, **and a distinct visual highlight on the active option**." The focus-state half is dropped as a restatement of `global.focus-states`; the active-option highlight is a genuine combobox requirement and is kept as its own rule. That is the caveat the 0.11.0 decision called out, and this is the pattern where it applies.

`navigation-menu.basic`'s three top-level item shapes (simple link / parent link + toggle / parent button) collapse from six competing rules into one branching rule, matching how the checkbox and dialog fallbacks are handled: competing rules would make every valid implementation fail two of them.

Corpus totals: 432 component rules, 8% `llm-eval`. Four blocks remain at `0.5.2`.

## 0.15.0 — 2026-08-04

**Foundations gains a tenth rule, `global.forced-colors`, and the three color rules that were silent about it now carry it.** No pattern `.md` changed.

Windows High Contrast Mode was covered in exactly one place, `global.focus-states`, which requires a `forced-colors` override for focus indicators. Nothing owned the general case, and the other color rules said nothing at all. Forced colors is not a dark theme: the browser re-maps `background-color`, `border-color`, and `color` to a user-chosen system palette, removes `box-shadow`, and can drop background images. Anything whose meaning rested on those properties alone disappears, and the failure is invisible to every other check in the corpus, since the markup is correct and the contrast passes in the authored palette.

- **New rule `global.forced-colors`** (scope: component, style), 7 Must Haves, 5 Don'ts, 5 Acceptance Checks. The load-bearing requirement is that an element distinguished from its surroundings only by `background-color` also carries a real `border` — that one covers progress fills against their tracks, selected rows, badges, chips, and custom form-control indicators in a single assertion. Where authored colors carry meaning the system palette erases, a `@media (forced-colors: active)` block restates the distinction using the CSS system color keywords, which the rule enumerates so authors do not have to look them up. `forced-color-adjust: none` is permitted only where the authored color is itself the information (a color-picker swatch, a chart series key, a brand preview); using it to preserve an ordinary palette overrides the colors the user chose and defeats the mode.
- **`global.non-text-contrast`** gains a Must Have, a Don't, a snippet, and an Acceptance Check. This rule needed it most: a boundary carried by `background-color` alone does not merely lose contrast under forced colors, it disappears, and the old rule could be fully satisfied by a design that vanishes.
- **`global.use-of-color`** gains a Must Have, a Don't, and an Acceptance Check, requiring the additional cue to be an icon, shape, border, or text rather than a second color treatment. A darker tint satisfies a grayscale check and still fails forced colors, which is the gap this closes.
- **`global.text-contrast`** gains two Must Haves, a Don't, and an Acceptance Check covering the two ways text fails there: contrast established by a background image that gets dropped, and `forced-color-adjust: none` pinning authored text colors so the user's palette cannot apply. It gets no snippet, because the fix is a `background-color` fallback rather than a `forced-colors` block.
- **`global.focus-states` is unchanged.** It already carried a Must Have, a Don't, the required `Highlight` override snippet, and an Acceptance Check. The new rule cross-references it rather than absorbing it; splitting a well-formed published rule to centralize one clause would have cost more than the duplication saves.

Foundations now carries 10 rules. The `foundations` section of `qa-catalog.json` is not re-derived in this release; the new rule and the three amended ones are queued for the next derive batch.

## 0.14.0 — 2026-07-30

**Progress indicators arrive as a pair, split on composition rather than shape.**

Two new patterns at 0.1.0. The boundary between them is the interesting part, and it is deliberately not the obvious one: shape does not decide which pattern applies. A progress bar is the labeled indicator for a piece of work; a spinner decorates something that is already labeled and has no label of its own. A determinate ring is therefore a progress bar, and a bar-shaped indeterminate loader inside a panel is still a progress bar, while a glyph inside a Save button is a spinner regardless of how it is drawn.

- **`progress-bar.basic`** ("Progress Bar"), new pattern at 0.1.0. Covers both determinate and indeterminate bars. The native `<progress>` element is preferred, with `<div role="progressbar">` documented as the fallback for visual treatments the native element cannot express, since it is styled through three vendor-specific pseudo-element systems and offers no control over its indeterminate animation. Indeterminate means `aria-valuenow` is omitted entirely rather than set to `0`, which would report stalled progress instead of unknown progress. Announcements are the load-bearing requirement: the progress bar never carries `aria-live` itself, because a live region on the element announces every value change and interrupts the user's reading. A separate live region receives only the status messages the design defines plus completion.
- **`spinner.basic`** ("Spinner"), new pattern at 0.1.0. The graphic is decorative — `aria-hidden="true"`, no role, no label, no text — and the loading state is carried by the control or region it sits in, plus a separate live region. This follows the more cautious of the two models in production: Primer documents that its spinner "isn't exposed to screen readers, and has no built-in announcement," so relying on the graphic to announce anything is treated as the failure mode rather than the norm. A control that becomes busy after activation uses `aria-disabled="true"` and never the native `disabled` attribute, which destroys focus and returns the user to the start of the document.

**Announcement text is derived, not invented.** Both patterns require the announcement to borrow its words from the indicator's existing accessible name rather than authoring new prose, so what is announced matches what is on screen. A panel named "Recommendations" yields "Loading recommendations"; "Loading" alone is correct when there is no short name to borrow.

**Reduced motion diverges between the two, deliberately.** A spinner replaces its animated graphic with visible text. A progress bar stops any looping animation, such as a barber-pole stripe or a sweeping fill, but keeps advancing its fill as the value changes, since value-driven movement is not the motion the preference is about. Neither indicator disappears, because a vanished indicator reads as a frozen process.

**Six forward redirects seeded**, none of which resolve yet: `skeleton.basic`, `meter.basic`, `slider.basic`, `slider.seek`, `stepper.basic`, and the mutual pair between the two new patterns, which does resolve. `meter.basic` matters most — disk usage, storage quota, and battery level are `role="meter"`, not `progressbar`, and the APG carries a Meter pattern while documenting no progressbar or loading pattern at all.

Neither pattern has a `qa-catalog.json` block yet; both are queued as the next derive batch.

## 0.13.0 — 2026-07-27

**QA catalog: second re-derive batch — `accordion.basic`, `disclosure.basic`, `navigation-menu.dropdown`, `carousel.dots`, `carousel.thumbnails`, `menu.basic`.** No pattern `.md` changed — classification only. 127 rules become 87.

| pattern | before | after |
|---|---|---|
| `accordion.basic` | 16 rules, 19% llm-eval, 1.50 avg | 11 rules, 0%, 1.27 |
| `disclosure.basic` | 15 rules, 13%, 1.40 | 10 rules, 10%, 1.60 |
| `navigation-menu.dropdown` | 25 rules, 16%, 1.32 | 18 rules, 11%, 1.28 |
| `carousel.dots` | 18 rules, 11%, 1.50 | 10 rules, 0%, 1.40 |
| `carousel.thumbnails` | 18 rules, 11%, 1.50 | 10 rules, 0%, 1.40 |
| `menu.basic` | 35 rules, 14%, 1.37 | 28 rules, 7%, 1.25 |

The dominant reduction is again Don'ts that invert a captured Must Have — the "do not leave it visible while `aria-expanded="false"`" pairing appears in four of these six patterns, and each was already asserted positively by that pattern's own state rule.

`menu.basic` keeps 28 rules because its keyboard contract is genuinely eleven separate observable behaviors rather than padding: Arrow keys with wrap, Home/End, type-ahead, activation, Esc, Tab, and outside-click each fail independently. `disclosure.basic` is the one pattern whose average rose (1.40 → 1.60), because dropping five inverted Don'ts left a smaller set in which the legitimately paired `static` + `runtime` checks — attribute authored, reference resolves — are a larger share; its rule count fell by a third at the same time.

Both carousels come out identical at 10 rules, which is correct: they differ only in whether the navigation controls are dots or thumbnails.

Corpus totals: 469 component rules, 9% `llm-eval`. Nine blocks remain at `0.5.2`.

## 0.12.0 — 2026-07-27

**QA catalog: first re-derive batch — `button.basic`, `link.basic`, `select.native`, `collection-row.basic`, `dialog.basic`.** No pattern `.md` changed — classification only. These five carried the heaviest pre-escalation classifications remaining; 91 rules become 58.

| pattern | before | after |
|---|---|---|
| `button.basic` | 16 rules, 38% llm-eval, 1.69 avg | 9 rules, 22%, 1.44 |
| `link.basic` | 19 rules, 26%, 1.58 | 12 rules, 17%, 1.50 |
| `select.native` | 11 rules, 27%, 1.55 | 6 rules, 0%, 1.17 |
| `collection-row.basic` | 17 rules, 24%, 1.59 | 14 rules, 7%, 1.43 |
| `dialog.basic` | 28 rules, 21%, 1.68 | 17 rules, 0%, 1.41 |

Most of the reduction is Don'ts that invert a Must Have already captured, and `llm-eval` tags that restated a runtime assertion in prose. `select.native` and `dialog.basic` come out with no `llm-eval` at all, which is the honest answer for them: one is a native form control whose requirements are entirely structural, and the other is an element choice plus six observable behaviors. Nothing in either turns on judgment.

Two rules flagged in 0.11.0 as possible Foundations restatements are resolved here and dropped: `dialog.basic`'s "Focus indicators … follow the Foundations focus rule" (a restatement by reference) and `button.basic`'s "Do not hide focus outlines without providing a strong custom focus style."

Corpus totals: 509 component rules, 11% `llm-eval`. Fifteen blocks remain at `0.5.2` and are queued for the next batches.

## 0.11.0 — 2026-07-27

**QA catalog: web/react gains a `foundations` section, and the duplicated focus-state check is relocated into it.** No pattern `.md` changed — classification only.

- **New `foundations` section**, derived from the 9 `global.*` rules in `global_rules.md` (`sr-only`, `page-title`, `landmarks`, `headings`, `text-contrast`, `non-text-contrast`, `use-of-color`, `focus-not-obscured`, `focus-states`) — 36 checks. `qa-catalog.json` moves from a bare map of pattern ids to `{ stack, catalog_revision, components, foundations }`, the shape iOS already uses. **Consumers reading the top level as a components map must now read `.components`.**
- **23 per-pattern focus-state restatements removed.** Every pattern's Must Haves close with the same focus formula, which the catalog was turning into 23 copies of one assertion — 23 findings for a single defect. Focus visibility is now a single check in `global.focus-states`. Only exact restatements of the formula were dropped; component-specific focus requirements stay, including `tabs.basic`'s "The focus indicator on a focused tab is distinguishable from the selected-tab styling."
- **The pattern docs keep their restatement.** The corpus and the catalog have different readers. A pattern doc is retrieved a chunk at a time by an AI agent and has to stand alone, since a consumer's RAG pipeline may never pull `global_rules.md` alongside it; a harness loads the whole catalog at once and needs the check exactly once. The same duplication is correct in one file and noise in the other.

Components now carry 542 rules across 25 patterns; foundations 36 checks across 9 rules.

## 0.10.0 — 2026-07-27

**QA catalog: the checkbox family gets its blocks; web/react QA coverage reaches 25 of 25.** No pattern `.md` changed — classification only. `checkbox.basic` and `checkbox.group` published in 0.8.0, before deriving QA alongside a new pattern was a convention, and were the only two published patterns without a catalog block.

- `checkbox.basic` → 22 rules (static 14 / runtime 13 / llm-eval 3; 14% llm-eval, 1.36 techniques/rule). The native-input vs `role="checkbox"` choice is one branching rule rather than two competing ones, with the fallback's `tabindex`, `aria-checked`, and Space-handler obligations carried in its static hint. Space-toggles and Enter-does-not-toggle are runtime, not static: a key handler's presence does not prove what it does. The required-field error contract splits into four separable assertions — container always in the DOM, `aria-live="polite"`, referenced by the input's `aria-describedby`, and populated on blur — of which only the timing one is runtime-only.
- `checkbox.group` → 19 rules (static 10 / runtime 10 / llm-eval 3; 16%, 1.21). The two valid group forms are one branching rule. Hint and error `aria-describedby` belong on **each `<input>`**, never on the `<fieldset>` or `role="group"` container, and the static hints flag container-level placement as a failure. No rule requires `aria-invalid` on the group: the attribute is deliberately absent from the pattern. The highest-value check in the pattern is runtime — the group error fires once when focus leaves the whole group, never as focus moves between options.
- Both patterns keep one rule restating `global.focus-states`, flagged and not dropped, pending the corpus-wide Foundations-duplication decision.

Per-block `catalog_revision` is provenance: it records the revision at which a block was last derived. The catalog now reads as its own backlog — 20 blocks at `0.5.2` still use the pre-escalation "tag all that apply" semantics and are queued for re-derive; `tabs.basic` (`0.7.0`), `switch.basic` and `button.toggle` (`0.9.0`), and the checkbox family (`0.10.0`) are current.

## 0.9.0 — 2026-07-27

**QA catalog: `switch.basic` and `button.toggle` re-derived under the ordered-escalation model.** No pattern `.md` changed — this is a classification-only release. These two carried the corpus's highest llm-eval ratios and serve as the calibration pair for the remaining re-derives.

- `switch.basic` → 15 rules (53% llm-eval, 1.80 techniques/rule) becomes 16 rules (25%, 1.25). Keyboard activation, the accessible-name prefix check, and the focus-state check drop their narrated `llm-eval` and `static` tags: pressing a key and comparing a computed accessible name are runtime assertions, and a `static` tag that cannot resolve what runtime left open is not a fallback. The `aria-describedby` bullet splits into placement on the switch (`static` + `runtime`, because static cannot prove the IDREF resolves) and the container prohibition (`static` alone).
- `button.toggle` → 16 rules (44% llm-eval, 1.81) becomes 13 rules (23%, 1.38). Three Don'ts drop as duplicates of captured Must Haves: stale `aria-pressed` restates the toolbar rule's own reflect-state requirement, the icon-only Don't inverts the icon-only Must Have, and "state only in the icon" is the disjunction of two strategies already required. Native `disabled` collapses from three techniques to `static`.
- Both patterns keep one rule that restates `global.focus-states`. These are flagged rather than dropped: the corpus-wide Foundations-duplication decision is still open, and settling it removes roughly 25 rules across the corpus in one sweep.
- The checkbox family published in 0.8.0 (`checkbox.basic`, `checkbox.group`) has no `qa-catalog.json` block yet and is queued as the next derive batch.

## 0.8.0 — 2026-07-27

**The checkbox family arrives: a single binary checkbox and a related-set group.**

Two new patterns at 0.1.0, completing the binary-control trio alongside `switch.basic` and `button.toggle`. The selection boundary between them is now explicit in all three: a checkbox records a value read at submit, a switch changes a setting immediately, and a toggle button acts on the current context.

- **`checkbox.basic`** ("Checkbox"), new pattern at 0.1.0. A single, self-sufficient binary choice submitted with a form (consent, "Remember me", marketing opt-in). Native `<input type="checkbox">` is the preferred implementation, with `role="checkbox"` documented as the fallback for when a native input cannot be used. Customizable carries the three-step styling ladder that keeps a real input under custom visuals: `accent-color`, then `appearance: none`, then the visually-hidden-input technique. Required checkboxes get a field-level inline error: a container present in the DOM at all times carrying `aria-live="polite"`, referenced by the input's `aria-describedby`, populated on blur, with focus never moved.
- **`checkbox.group`** ("Checkbox Group"), new pattern at 0.1.0. A set of checkboxes that together answer one question, named with `<fieldset>` + `<legend>` (preferred) or `role="group"` + `aria-labelledby`. Validation is group-level, never per option, and the error fires once when focus leaves the whole group rather than repeating as the user tabs across options. Group-level hints and errors are referenced from **each `<input>`**, not from the group container: NVDA does not announce a container description when the first control in the group is a checkbox ([nvaccess/nvda#11617](https://github.com/nvaccess/nvda/issues/11617)), and container descriptions are dropped in browse mode. `aria-invalid` is omitted on the group, which has no valid host for it — the attribute is deprecated on the `group` role in ARIA 1.2.

**Redirects now resolve.** The forward references already carried by `switch.basic` (to `checkbox.basic` and `checkbox.group`) and `button.toggle` (to `checkbox.basic`) point at published patterns for the first time. Both new patterns seed their own forward redirects to `checkbox.tristate`, `radio.group`, and `form.error-summary`, none of which exist yet.

## 0.7.0 — 2026-07-27

**New pattern: Tabs.**

- `tabs.basic` → 0.1.0 — initial pattern. Same-page view switching with `role="tablist"`, roving tabindex keyed to selection, and wrapping arrow-key traversal. The activation model is a Must Have rather than a preference: whichever model is used must be implemented consistently, with automatic activation appropriate only when panels display without noticeable latency. The explicit `aria-selected="false"` on a focused-but-unselected tab is required so user agents do not report the focused tab as selected. Horizontal tablists deliberately leave Up and Down Arrow alone so the page can still scroll, per APG.
- `qa-catalog.json` → 31 classified rules for `tabs.basic` (static 17 / runtime 21 / llm-eval 4), the first pattern derived under the ordered-escalation technique model: `techniques` is cheapest-first, and later entries are fallbacks that run only when the primary is indeterminate. The remaining web and iOS patterns still use the previous "tag all that apply" semantics and are queued for re-derive.

## 0.6.0 — 2026-07-24

**Overlay family split: the non-modal dialog becomes Popover, and the modal dialog becomes the family's default member.**

Two renames. Both old IDs are retained as deprecated tombstones for backward compatibility and are excluded from the generated catalog, following the `menu.account` precedent.

- `dialog.nonmodal` → **`popover.basic`** ("Popover"), new pattern at 0.1.0. An anchored, non-blocking overlay is what every widely used design system calls a popover; no major system ships a "non-modal dialog" as a named component, so the old name was a poor retrieval anchor for the thing it describes. The accessibility contract is unchanged (accessible name, focus in on open, focus restored on close, no focus trap, no `aria-modal`, no `inert`, Esc from anywhere, visible close control). Reframed around the anchored-overlay model, with positioning added to Customizable. The old terms stay in `aliases` so "non-modal dialog" and "modeless dialog" still retrieve this pattern. `dialog.nonmodal` → 1.0.0, deprecated.
- `dialog.modal` → **`dialog.basic`** ("Dialog (Basic)"), new pattern at 0.1.0. With the non-modal overlay moved out, the `(Modal)` qualifier no longer distinguished anything: every remaining member of the `dialog.` family is modal, and what makes this one the default member is that it holds arbitrary content rather than a fixed message shape. Requirement text, Golden Pattern, and Acceptance Checks are unchanged from `dialog.modal` 0.3.1. "modal" is retained in `tags` and `aliases` for retrieval. `dialog.modal` → 1.0.0, deprecated.

**Redirects reconciled.** `tooltip.basic` now points at `popover.basic`. `toast.basic` pointed at a bare `dialog`, which was never a valid ID, and now points at `dialog.basic`. `dialog.basic`'s own "content does not block the page" rejection previously carried no redirect and now points at `popover.basic`; its status-message rejection pointed at a bare `toast` and now points at `toast.basic`.

Also updated: `qa-catalog.json` keys, the navbar search index, and the `grid.channel-guide` documentation note. iOS is unaffected by this release; the matching iOS rename travels with the open iOS pattern PR.

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
