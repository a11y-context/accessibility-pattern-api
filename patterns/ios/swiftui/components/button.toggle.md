---
id: button.toggle
title: Toggle Button
stack: ios/swiftui
status: beta
latest_version: 0.1.0
tags: [button, toggle, pressed, selected, isSelected, mute-button]
aliases: [toggle button, pressed button]
summary: SwiftUI Button with two states (e.g. pressed/active) conveyed via either an accessible-name change or the .isSelected accessibility trait — never both.
---

# Toggle Button

## Use When
- Use when a control toggles a feature or action within the current context (e.g., "Mute", "Bold", "Pin", "Enable Closed Captioning"). Uses a SwiftUI `Button` with two states conveyed via either an accessible-name change or the `.isSelected` accessibility trait — never both.

## Do Not Use When
- Do not use when the control represents a persistent on/off system or application setting, such as "Enable notifications", "Dark mode" (use `switch.basic`).
- Do not use when the control navigates to a new screen (use `NavigationLink` (`link.basic`), not `Button`).

## Must Haves
- Use a native `Button` for built-in VoiceOver semantics and Switch Control / external-keyboard activation.
- The button has an accessible name that describes its purpose or action.
- Default strategy: represent state by changing the accessible name to the next action (e.g., "Mute" ↔ "Unmute", "Pin" ↔ "Remove Pin") via `.accessibilityLabel`.
- When the button has visible text and no override is needed, the visible text serves as the accessible name.
- For icon-only toggle buttons, provide an accessible name via `.accessibilityLabel` that reflects the current state's next action.
- Icons within toggle buttons must be decorative to VoiceOver — label the button as a whole, not the icon.
- If the action is unavailable, disable the button using `.disabled(true)`.
- Meets the touch target size baseline in `global_rules.md` (`global.touch-target-size`).
- Meets the system focus indicator baseline in `global_rules.md` (`global.focus-visible`).

### Formatting toolbar exception
- If the control is a formatting toggle in a toolbar (e.g., Bold/Italic/Underline), keep the accessible name stable (e.g., "Bold") and convey the pressed state with `.accessibilityAddTraits(isActive ? .isSelected : [])` instead of renaming it. VoiceOver appends "Selected" after the accessible name while the trait is present.
- There is no "not selected" trait in SwiftUI's accessibility trait set — when the toggle is inactive, simply omit `.isSelected` rather than trying to add an antonym trait. Add `.accessibilityValue("Not Selected")` for the inactive state only when the off state would otherwise be undiscoverable — which holds when **all** of these are true in the code:
  - The accessible name is stable across states (the trait strategy, not the name-change strategy), so the name alone never conveys off.
  - The control is rendered in isolation, not inside a visually grouped set of peer toggles (e.g., a `Picker`, segmented control, or an `HStack`/toolbar row of sibling formatting toggles) where the selected member is distinguishable by comparison.
  - No other accessible signal exposes the state: there is no visible value/state text, no `.accessibilityValue` already set, and no surrounding labeled context that implies off.
  - When any one of these is false, omit `.accessibilityValue` — the off state is already discoverable.

## Customizable
- For most toggles (non-toolbar), the "next action" wording may be expressed via visible text (preferred when space allows) and/or `.accessibilityLabel` (required for icon-only).
- Add context to the accessible name when multiple similar toggles exist on the same screen (e.g., "Mute Trailer", "Unmute Trailer").
- An `.accessibilityHint` may be added when the result of the action is not obvious from the visible label, per the same guidance as `button.basic`.

## Don'ts
- Do not add the `.isSelected` trait to a toggle button that is also changing its accessible name to the next action. Pick one state model, not both — combining them produces conflicting, confusing announcements like "Unmute, Selected".
- Do not leave `.isSelected` stale, always applied, or never applied when using the toolbar trait strategy — it must track the live state.
- Do not ship icon-only toggle buttons without an accessible name.
- Do not put state only in the icon's visual appearance — screen reader users must get the state via the accessible-name change or the `.isSelected` trait, depending on which strategy is in use.

## Golden Pattern
```swift
import SwiftUI

struct ToggleButtonDemo: View {
    @State private var muted = false
    @State private var pinned = false
    @State private var iconOnlyMuted = false
    @State private var bold = false

    var body: some View {
        VStack(spacing: 16) {
            // Toggle state indicated by accessible name change
            Button(muted ? "Unmute" : "Mute") {
                muted.toggle()
            }

            Button(pinned ? "Remove Pin" : "Pin") {
                pinned.toggle()
            }

            // Icon-only — accessible name itself carries the state
            Button {
                iconOnlyMuted.toggle()
            } label: {
                Image(systemName: iconOnlyMuted ? "speaker.slash" : "speaker.wave.2")
            }
            .accessibilityLabel(iconOnlyMuted ? "Unmute" : "Mute")

            // Toggle state indicated by the .isSelected trait (toolbar formatting)
            Button {
                bold.toggle()
            } label: {
                Image(systemName: "bold")
            }
            .accessibilityLabel("Bold")
            .accessibilityAddTraits(bold ? .isSelected : [])
        }
    }
}
```

## Acceptance Checks

All checks run in a UI test target via `xcodebuild test`. An element's `.label` is the accessible name (what VoiceOver speaks and Voice Control overlays); `.isSelected` reflects the `.isSelected` trait.

- Toggling activates and updates state: `app.buttons["Mute"].tap()` (covers VoiceOver double-tap and Space/Return), then `XCTAssertTrue(app.buttons["Unmute"].exists)` and `XCTAssertFalse(app.buttons["Mute"].exists)` — the accessible name changed to the next action.
- Icon-only name-change button: same before/after `.label` assertion on the icon-only button.
- Toolbar `.isSelected` button: the name stays stable and the trait tracks state — `XCTAssertFalse(app.buttons["Bold"].isSelected)` initially, `.tap()`, then `XCTAssertTrue(app.buttons["Bold"].isSelected)`; `app.buttons["Bold"]` remains queryable throughout (no "Selected" baked into the name).
- One state model, not both: a name-change button never also reports `isSelected == true`, and a toolbar button's `.label` never changes when toggled. This catches the conflicting "Unmute, Selected" antipattern programmatically.
- Icon is not a separate element: `XCTAssertEqual(app.buttons["Mute"].images.count, 0)`, and `try app.performAccessibilityAudit()` reports no `.elementDetection` failures.
