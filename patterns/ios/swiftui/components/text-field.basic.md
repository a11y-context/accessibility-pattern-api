---
id: text-field.basic
title: Text Field
stack: ios/swiftui
status: beta
latest_version: 0.1.0
tags: [text-field, form, input, autofill, secure-field]
aliases: [textfield, text input, input field, secure field, email field, password field]
summary: A single-line SwiftUI text field whose visible label is exposed to VoiceOver through the field title, an accessibility label, or LabeledContent, with keyboardType and textContentType set so the correct keyboard and AutoFill appear.
---

# Text Field

Pattern ID: `text-field.basic`

A single-line SwiftUI `TextField` whose visible label is exposed to VoiceOver through the field title, an `.accessibilityLabel`, or `LabeledContent`, with `.keyboardType` and `.textContentType` set so the correct keyboard and AutoFill appear.

## Use When
- Use when the user enters a single line of free-form text such as a name, email address, or search query (e.g., "Email", "Search"). Uses a native SwiftUI `TextField` so the field exposes editable-text semantics, its label, and its typed value to VoiceOver.
- Use when the entered value maps to a system AutoFill category such as credentials or contact details, so the keyboard can offer to fill it (e.g., "Password", "One-Time Code", "Street Address").
- Use when the input has a natural on-screen keyboard tied to its data type, such as an email address or a numeric postal code.

## Do Not Use When
- Do not use when the user enters more than one line of text, such as a message body or review (use `text-editor.basic`).
- Do not use when the value is chosen from a fixed set of options rather than typed (use `select.menu`).
- Do not use when the value is a date or time selected from a calendar or wheel (use `date-picker.basic`).

## Must Haves
- The field has an accessible name matching its visible label, supplied by the `TextField` title, an `.accessibilityLabel` on a titleless field, or a `LabeledContent` wrapper.
  - When a `LabeledContent` supplies the name, do not also add an `.accessibilityLabel`; the wrapper already provides the name and a second one overrides it.
- Set `.keyboardType` to match the expected input (e.g., `.emailAddress`, `.numberPad`) so the correct software keyboard appears.
- Set `.textContentType` to the matching semantic type (e.g., `.emailAddress`, `.password`, `.oneTimeCode`, `.postalCode`) so AutoFill and QuickType offer the right value.
- Give the field a visible boundary that meets 3:1 non-text contrast against its background, e.g., `.textFieldStyle(.roundedBorder)` or `.border(.secondary)`; the default borderless `TextField` boundary can fall below 3:1.
- When the field can show a validation error, expose the error text through `.accessibilityValue` and signal it with more than color, so VoiceOver announces the error and the state is not conveyed by color alone.
  - Move VoiceOver focus to the errored field with `@AccessibilityFocusState` and `.accessibilityFocused` when validation fails on submit.
- Support Dynamic Type: use a built-in text style so the field's label and text scale, and allow the label to wrap rather than truncate at accessibility sizes.
- Meets the touch target size baseline in `global_rules.md` (`global.touch-target-size`).
- Meets the system focus indicator baseline in `global_rules.md` (`global.focus-visible`).

## Customizable
- The accessible name may come from the `TextField` title, an `.accessibilityLabel` on a titleless field, or a `LabeledContent` wrapper. These are equivalent as long as exactly one name results.
- For masked secret entry, `SecureField` may replace `TextField`; it carries the same labeling and content-type requirements and additionally hides the typed value (pair it with `.textContentType(.password)`, `.newPassword`, or `.oneTimeCode`).
- The visual field style (`.textFieldStyle(.roundedBorder)`, a custom `.border`, or a bespoke background) is at the engineer's discretion as long as the boundary keeps 3:1 non-text contrast.
- Editing-behavior modifiers such as `.textInputAutocapitalization` and `.autocorrectionDisabled()` may be tuned to the field's data (e.g., disabling both on an email field) without affecting the accessible name.

## Don'ts
- Do not rely on a placeholder as the only label; the placeholder disappears once the user types, can fall below text contrast, and leaves the field with no accessible name for VoiceOver.
- Do not wrap the field in a `LabeledContent` styled to stack its label vertically above the field (a custom vertical `LabeledContentStyle`); VoiceOver then cannot double-tap to activate the field and Voice Control cannot target it by name, due to a known Apple bug.
- Do not add an `.accessibilityLabel` on top of a `LabeledContent`-supplied name; the extra label overrides the paired one and can desync from the visible text.
- Do not include the control type in the label (e.g., `.accessibilityLabel("Email text field")`); VoiceOver already announces "Text Field", so this doubles it.
- Do not leave `.keyboardType` and `.textContentType` unset on a field that maps to a known type; it suppresses the right keyboard and blocks AutoFill.
- Do not signal a validation error with color alone.

## Golden Pattern

Structural reference for AI coding assistants — semantics, focus, and keyboard behavior. Styling, copy, and demo data are illustrative.

```swift
import SwiftUI

struct TextFieldDemo: View {
    @State private var email = ""
    @State private var password = ""
    @State private var fullName = ""
    @State private var zip = ""
    @State private var emailError: String?
    @AccessibilityFocusState private var emailFocused: Bool

    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            // Name from the field's own title; email keyboard + AutoFill via content type
            TextField("Email", text: $email)
                .textFieldStyle(.roundedBorder)          // visible boundary, 3:1 non-text contrast
                .keyboardType(.emailAddress)
                .textContentType(.emailAddress)
                .textInputAutocapitalization(.never)
                .autocorrectionDisabled()
                .accessibilityValue(emailError ?? "")    // error is announced as the field's value
                .accessibilityFocused($emailFocused)

            // Masked secret entry keeps the same labeling contract
            SecureField("Password", text: $password)
                .textFieldStyle(.roundedBorder)
                .textContentType(.password)

            // Name supplied by LabeledContent: do NOT also add .accessibilityLabel
            LabeledContent("Full name") {
                TextField("", text: $fullName)
                    .textFieldStyle(.roundedBorder)
                    .textContentType(.name)
            }

            // Titleless field: the name comes from .accessibilityLabel
            TextField("", text: $zip)
                .textFieldStyle(.roundedBorder)
                .keyboardType(.numberPad)
                .textContentType(.postalCode)
                .accessibilityLabel("ZIP code")

            if let emailError {
                Text(emailError)
                    .foregroundStyle(.red)               // color PLUS text, never color alone
                    .font(.footnote)
            }

            Button("Sign In") {
                if email.contains("@") {
                    emailError = nil
                } else {
                    emailError = "Enter a valid email address."
                    emailFocused = true                  // move VoiceOver to the errored field
                }
            }
        }
        .padding()
    }
}
```

## Acceptance Checks

Observable behaviors a tester verifies with iOS assistive technologies, grouped by AT method. The runtime-testable subset is the spec for the iOS test harness (XCUITest); it is not part of this pattern.

**Traits & semantics**
- Each field is a single accessible element exposing the text-field trait, its accessible name, and its current value; a `SecureField` masks its value and surfaces separately as a secure text field.
- The accessible name does not repeat the control type (no "text field" in the name).

**VoiceOver**
- VoiceOver speaks each field's name from its title, `.accessibilityLabel`, or `LabeledContent` wrapper; the titleless ZIP field speaks "ZIP code", never silence or a blank name.
- Double-tapping a field begins editing, including the `LabeledContent`-named field; this is the exact activation a vertical `LabeledContentStyle` breaks.
- On submitting an invalid email, VoiceOver announces the error text carried on `.accessibilityValue`, and focus moves to the errored field.
- The secure field does not speak its typed characters.

**Switch Control & Full Keyboard Access**
- Each field is reachable and focusable via Switch Control and a hardware keyboard, and editing can begin from either.

**Dynamic Type**
- Field labels and entered text scale with Dynamic Type and stay fully visible (no clipping or truncation) at accessibility text sizes.

**Visual**
- Each field has a visible boundary meeting 3:1 non-text contrast against the background, including the borderless default case.
- The validation error is conveyed by more than color (error text plus color, not color alone).
