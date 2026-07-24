---
id: date-picker.basic
title: Date Picker
stack: ios/swiftui
status: beta
latest_version: 0.1.0
tags: [date-picker, time-picker, calendar, date-entry, form-control]
aliases: [DatePicker, date picker, time picker, calendar picker, compact date picker, graphical date picker, wheel date picker, date and time picker]
summary: A native SwiftUI DatePicker for choosing a date or time, whose accessible name is supplied per style — an accessibilityLabel for compact and default styles, but the visible DatePicker label text for graphical and wheel styles.
---

# Date Picker

Pattern ID: `date-picker.basic`

A native SwiftUI `DatePicker` for choosing a date or time, whose accessible name is supplied per style: an `.accessibilityLabel` for compact and default styles, but the visible `DatePicker` label text for `.graphical` and `.wheel` styles.

## Use When
- Use when the user selects a calendar date, a time, or a combined date and time from a native control (e.g., "Start date", "Scheduled time", "Reservation"). Uses a SwiftUI `DatePicker` with `displayedComponents` set to `.date`, `.hourAndMinute`, or both.
- Use when the value must stay a valid date or time, optionally bounded to a range with the `in:` parameter.

## Do Not Use When
- Do not use when the wheel spins through values that are not dates or times (use `select.wheel`).
- Do not use when the user types the date or time as free text rather than picking it (use `text-field.basic`).
- Do not use when the choice is among a few visible options that fit inline (use `select.segmented`).

## Must Haves
- Use the native `DatePicker` so it exposes the date or time value, the adjustable behavior, and the correct role to VoiceOver, Switch Control, and Full Keyboard Access (WCAG 4.1.2).
- Set `displayedComponents` to match what is being chosen: `.date` for a calendar date, `.hourAndMinute` for a time, or `[.date, .hourAndMinute]` for both.
- Name the picker per style, because the visible `DatePicker` label text does not automatically become the accessible name (WCAG 1.3.1, 4.1.2):
  - For the default and `.compact` styles, add an `.accessibilityLabel` that matches the visible label text, so VoiceOver speaks the name when the picker is focused.
  - For the `.graphical` and `.wheel` styles, supply a non-empty `DatePicker("Label")` string, which is spoken to VoiceOver as the accessible name; do not also add an `.accessibilityLabel`, or both the visible label and the accessibility label are spoken.
- Give every picker a clear, specific name that identifies which date or time it sets when several appear together (e.g., "Start date", "End date"), so they are distinguishable (WCAG 1.3.1).
- Meets the touch target size baseline in `global_rules.md` (`global.touch-target-size`).
- Meets the system focus indicator baseline in `global_rules.md` (`global.focus-visible`).

## Customizable
- The style may be default, `.compact`, `.graphical`, or `.wheel`; the naming approach above follows from the chosen style.
- The value may be bounded with the `in:` parameter (an open or closed range), as long as the picker still exposes a valid, announced value.
- On the `.wheel` and `.graphical` styles, the visible label may be hidden from layout with `.labelsHidden()` while the `DatePicker("Label")` string remains set, so the accessible name is preserved even when the label is not shown.

## Don'ts
- Do not add an `.accessibilityLabel` to a `.graphical` or `.wheel` `DatePicker`; combined with the required visible `DatePicker("Label")` string, VoiceOver speaks both and the name is announced twice.
- Do not leave the label empty (`DatePicker("", ...)`) on a `.graphical` or `.wheel` picker; VoiceOver then has no accessible name to speak.
- Do not rely on the visible `DatePicker("Label")` text alone on the default or `.compact` style; it is not exposed as the accessible name, so add a matching `.accessibilityLabel`.
- Do not attempt to restore VoiceOver focus to the picker with `@AccessibilityFocusState`; it does not work with `DatePicker` (an Apple platform defect), so do not build a focus-return requirement on it.
- Do not use a `DatePicker` for values that are not dates or times; that is a `select.wheel`.

## Golden Pattern

Structural reference for AI coding assistants — semantics, focus, and keyboard behavior. Styling, copy, and demo data are illustrative.

```swift
import SwiftUI

struct DatePickerBasicDemo: View {
    @State private var startDate = Date()
    @State private var scheduledTime = Date()
    @State private var checkIn = Date()
    @State private var checkOut = Date()

    var body: some View {
        Form {
            // Compact/default style: the visible label is NOT exposed as the
            // accessible name, so add a matching .accessibilityLabel.
            DatePicker("Start date", selection: $startDate, displayedComponents: .date)
                .accessibilityLabel("Start date")

            DatePicker("Scheduled time", selection: $scheduledTime, displayedComponents: .hourAndMinute)
                .accessibilityLabel("Scheduled time")

            // Graphical/wheel styles: the DatePicker("Label") string IS spoken as
            // the accessible name; do NOT also add .accessibilityLabel (double announcement).
            DatePicker("Check in", selection: $checkIn, displayedComponents: .date)
                .datePickerStyle(.graphical)

            DatePicker("Check out", selection: $checkOut, displayedComponents: .hourAndMinute)
                .datePickerStyle(.wheel)
                .labelsHidden() // label hidden from layout; the "Check out" name is still spoken
        }
    }
}
```

## Acceptance Checks

Observable behaviors a tester verifies with iOS assistive technologies, grouped by AT method. The runtime-testable subset is the spec for the iOS test harness (XCUITest); it is not part of this pattern.

**Traits & semantics**
- The picker exposes its accessible name and its current date or time value, with the adjustable behavior of a native `DatePicker`.
- On default and `.compact` styles the name comes from an `.accessibilityLabel`; on `.graphical` and `.wheel` styles it comes from the `DatePicker("Label")` string, with no duplicate label.

**VoiceOver**
- Focusing the picker speaks its name and current value; on `.graphical` and `.wheel` styles the name is spoken once, not twice.
- Adjusting the picker updates the announced date or time value.
- A `DatePicker("", ...)` with an empty label on a `.graphical` or `.wheel` style speaks no name (a failure the pattern prevents).

**Switch Control & Full Keyboard Access**
- The picker is reachable and its value is adjustable via Switch Control and a hardware keyboard.

**Dynamic Type**
- The picker's visible label scales with Dynamic Type. Date, time, and wheel picker controls do not support Dynamic Type text resize or the Large Content Viewer (an Apple platform defect); verify legibility at large text sizes on device.

**Visual**
- Wheel-style non-selected options and the day-of-week column headers (S, M, T, W, T, F, S) can fall below the text-contrast minimum (Apple platform defects); verify contrast against your target appearances.
