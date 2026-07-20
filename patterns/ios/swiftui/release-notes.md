---
id: release-notes
title: Release Notes
slug: /swiftui/release-notes
---

# Release Notes

Catalog and per-pattern versions use semver (MAJOR.MINOR.PATCH). Catalog revisions are dated. Each release lists changes by pattern.

## 0.2.0 — 2026-07-19

**Principal accessibility review of the component set; two patterns corrected. Seven new component patterns and two new Foundations rules added. This release also introduces this release-notes file and backfills the nine patterns added since 0.1.0.**

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

The full component set was reviewed against the reference patterns and the CVS Health `ios-swiftui-accessibility-techniques` repo; the seven patterns not listed under Components above were verified accurate and are unchanged.

## 0.1.0 — 2026-07-07

Initial beta release of the iOS / SwiftUI accessibility pattern corpus.

**New patterns (beta, all at 0.1.0):**
- Button
- Toggle Button
- Switch

All patterns carry `status: beta`. Breaking changes will be communicated via catalog version bumps and per-pattern major version bumps.
