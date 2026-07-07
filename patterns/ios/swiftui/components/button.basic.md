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

## Use When
- Use when the user triggers an immediate action and stays within the present screen, including opening popovers, modals, bottom sheets, etc. Supports text-only, icon+text, and icon-only labeling patterns.

## Do Not Use When
- Do not use when the control represents an on/off pressed state (use `button.toggle`).
- Do not use when the control navigates to a new unique page/screen (use `NavigationLink` (`link.basic`), not `Button`).
- Do not use when the control brings you out of the app completely.

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

All checks run in a UI test target via `xcodebuild test` (no VoiceOver or GUI required). An element's `.label` is exactly what VoiceOver speaks and what Voice Control's "Show Names" overlays, so asserting `.label` covers all three.

- Each button is queryable as a button, confirming the `.isButton` trait: `XCTAssertTrue(app.buttons["Save"].exists)`.
- Text-only button: `XCTAssertEqual(app.buttons["Save"].label, "Save")`.
- Icon+text button: `XCTAssertEqual(app.buttons["Download"].label, "Download")` and `XCTAssertEqual(app.buttons["Download"].images.count, 0)` — the icon must not surface as its own labeled element.
- Icon-only button: `XCTAssertEqual(app.buttons["Open settings"].label, "Open settings")` and `XCTAssertFalse(app.buttons["Open settings"].label.contains("Button"))`.
- Activation fires the action: `app.buttons["Save"].tap()`, then assert the observable result. `.tap()` routes through the same action as a VoiceOver double-tap, Space/Return, and Switch Control.
- Disabled button is non-interactive: `XCTAssertFalse(app.buttons["Disabled"].isEnabled)` — a disabled element is not hit-tested and is skipped by keyboard focus.
- Run `try app.performAccessibilityAudit()`: no failures. The `.sufficientElementDescription` audit flags any unlabeled icon-only button; `.elementDetection` flags an icon exposed as a separate element.
