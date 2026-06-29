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

Pattern ID: `button.toggle`

SwiftUI `Button` with two states (e.g. pressed/active) conveyed via either an accessible-name change or the `.isSelected` accessibility trait — never both.

## Use When
- Use when a control toggles a feature or action within the current context (e.g., "Mute", "Bold", "Pin", "Enable Closed Captioning").

## Do Not Use When
- Do not use when the control represents a persistent on/off system or application setting, such as "Enable notifications", "Dark mode" (use `switch.basic`).
- Do not use when the control navigates to a new screen (use `NavigationLink`, not `Button`).

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
- There is no "not selected" trait in SwiftUI's accessibility trait set — when the toggle is inactive, simply omit `.isSelected` rather than trying to add an antonym trait. Only add `.accessibilityValue("Not Selected")` in the rare case where silence alone would be ambiguous to the user.

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
- Press Space/Return with an external keyboard, or double-tap with VoiceOver: the control toggles.
- Name-change buttons: VoiceOver announces the updated label after toggling (e.g., "Mute, Button" becomes "Unmute, Button").
- Icon-only name-change button: VoiceOver announces the updated `.accessibilityLabel` after toggling.
- Toolbar `.isSelected` button: VoiceOver announces "Bold, Selected, Button" when active, and "Bold, Button" (no "Selected") when inactive.
- Icons are not announced separately from the button's accessible name.
- Enable Voice Control and turn on "Show Names": the overlay label matches the button's current accessible name, not a stale or generic one.
