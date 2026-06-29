---
id: button.basic
title: Basic Button
stack: ios/swiftui
status: beta
latest_version: 0.1.0
tags: [button, control, action, icon-button]
aliases: [btn, primary button, icon button, call to action, cta]
summary: SwiftUI Button that triggers an action. Supports text-only, icon+text, and icon-only labeling patterns.
---

# Basic Button

Pattern ID: `button.basic`

SwiftUI `Button` that triggers an action. Supports text-only, icon+text, and icon-only labeling patterns.

## Use When
- Use when the user triggers an immediate action (e.g., "Save", "Continue", "Dismiss").

## Do Not Use When
- Do not use when the control represents an on/off pressed state (use `button.toggle`).
- Do not use when the control navigates to a new screen (use `NavigationLink`, not `Button`).

## Must Haves
- Use a native `Button` for built-in VoiceOver semantics, the `.isButton` trait, and Switch Control / external-keyboard activation.
- The button has an accessible name that describes its purpose or action.
- When the button has visible text, the visible text serves as the accessible name.
- When additional context is needed beyond the visible text, add it via `.accessibilityLabel`, with the visible text appearing at the start of the label.
- For icon-only buttons, provide an accessible name via `.accessibilityLabel`.
- When multiple buttons on the same screen share visible text (e.g., a repeated "Edit" button per row), give each one a unique, specific `.accessibilityLabel` (e.g., "Edit Username") so VoiceOver users can distinguish them.
- Icons within buttons must be decorative to VoiceOver (`Image(systemName:)` inside a `Button` is decorative by default; do not add a separate `.accessibilityLabel` to the icon itself — label the button as a whole).
- If the action is unavailable, disable the button using `.disabled(true)`. (It becomes non-interactive and is announced as dimmed/disabled.)
- Meets the touch target size baseline in `global_rules.md` (`global.touch-target-size`).
- Meets the system focus indicator baseline in `global_rules.md` (`global.focus-visible`).

## Customizable
- An `.accessibilityHint` may be added when the result of the action is not obvious from the visible label (e.g., a song title that plays on tap might use "Plays the song."). Most buttons with a clear action label ("Save", "Delete") do not need one. Hints describe the result in third-person singular, never the gesture or control type ("button", "tap").

## Don'ts
- Do not include the word "Button" in `.accessibilityLabel` — VoiceOver already appends the "Button" trait, so doing this causes it to announce "Button, Button".
- Do not create icon-only buttons without an `.accessibilityLabel` (no unlabeled icons).
- Do not use an `.accessibilityLabel` that conflicts with (or is wildly different from) the visible label text. Accessible names should at least begin with the visible label.

## Golden Pattern
```swift
import SwiftUI

struct ButtonBasicDemo: View {
    var body: some View {
        VStack(spacing: 16) {
            // Text-only
            Button("Save") {
                print("Saved")
            }

            // Icon + text
            Button {
                print("Downloaded")
            } label: {
                Label("Download", systemImage: "arrow.down.circle")
            }

            // Icon-only (must have accessible name)
            Button {
                print("Settings")
            } label: {
                Image(systemName: "gearshape")
            }
            .accessibilityLabel("Open settings")

            // Disabled
            Button("Disabled") {
                print("Won't fire")
            }
            .disabled(true)
        }
    }
}
```

## Acceptance Checks
- Swipe to the button with VoiceOver: it is announced with the correct accessible name and the "Button" trait.
- Double-tap with VoiceOver: the button activates.
- Text-only button: VoiceOver announces the visible label (e.g., "Save, Button").
- Icon+text button: VoiceOver announces the text label, not a separate icon description.
- Icon-only button: VoiceOver announces the `.accessibilityLabel` (e.g., "Open settings, Button").
- Disabled button: VoiceOver announces it as "dimmed" or "disabled" and double-tap does not fire the action.
- Disabled button with Full Keyboard Access (or an external keyboard) enabled: Tab does not move focus to the button at all — it is skipped, not just inert.
- Activating the button via an external keyboard (Space/Return) or Switch Control also fires the action.
- Enable Voice Control and turn on "Show Names": the overlay label shown over the button matches its accessible name (not the word "Button" alone, and not empty for icon-only buttons).
