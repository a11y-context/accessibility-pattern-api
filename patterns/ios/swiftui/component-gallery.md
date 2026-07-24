---
id: component-gallery
title: Components
slug: /swiftui/component-gallery
---

# Components

Browse all accessibility patterns available for iOS / SwiftUI.

<!-- gallery:start — generated from patterns.json; do not edit by hand. Run `npm run gen:gallery` in /website. -->

| Component | Summary |
|-----------|---------|
| [Button (Basic)](./components/button.basic.md) | SwiftUI Button that triggers an action. Supports text-only, icon+text, and icon-only labeling patterns. |
| [Button (Toggle)](./components/button.toggle.md) | SwiftUI Button with two states (e.g. pressed/active) conveyed via either an accessible-name change or the .isSelected accessibility trait, never both. |
| [Checkbox](./components/checkbox.basic.md) | A checkbox built from a SwiftUI Toggle with a custom square toggle style, using accessibilityValue to announce Checked or Unchecked, since SwiftUI has no native checkbox control or trait. |
| [Date Picker](./components/date-picker.basic.md) | A native SwiftUI DatePicker for choosing a date or time, whose accessible name is supplied per style — an accessibilityLabel for compact and default styles, but the visible DatePicker label text for graphical and wheel styles. |
| [Dialog (Alert)](./components/dialog.alert.md) | A native SwiftUI .alert modal that takes VoiceOver focus on presentation, with each action returning focus to the trigger because native alerts do not restore it automatically. |
| [Dialog (Confirmation)](./components/dialog.confirmation.md) | A native SwiftUI .confirmationDialog action sheet that takes VoiceOver focus on presentation, with each action returning focus to the trigger because native confirmation dialogs do not restore it automatically. |
| [Dialog (Modal)](./components/dialog.modal.md) | A native SwiftUI .sheet or .fullScreenCover modal that takes VoiceOver focus on presentation, carries a heading title and an explicit close control, and returns focus to the trigger via onDismiss because sheets do not restore it automatically. |
| [Link (Standalone)](./components/link.basic.md) | SwiftUI Link that opens a URL or web view, exposing the link trait (with the redundant button trait removed) so VoiceOver signals that activating it leaves the app. |
| [Link (Inline)](./components/link.inline.md) | A hyperlink embedded in a run of Text via an AttributedString .link run (preferred) or Markdown, reachable through the VoiceOver Links rotor but non-operable under Full Keyboard Access and Voice Control because of Apple platform defects. |
| [List Row (Navigable)](./components/list.row.md) | A NavigationLink rendered as a row in a List, where the whole row is one target that drills into another in-app screen and reads as a button to VoiceOver, with a decorative trailing disclosure chevron. |
| [Menu](./components/menu.basic.md) | A SwiftUI Menu that presents a pull-down list of command buttons, takes VoiceOver focus when opened, with commands carrying the destructive role where applicable. |
| [Radio Button](./components/radio.basic.md) | A mutually exclusive choice group built from custom Button elements, since SwiftUI has no native radio control, using the selected trait plus an accessibilityValue to announce the radio role and its checked or unchecked state. |
| [Select (Menu)](./components/select.menu.md) | A SwiftUI Picker with the menu style, a pop-up button that shows the current value and opens a list to choose one option, named by the Picker label text rather than an accessibilityLabel. |
| [Select (Segmented)](./components/select.segmented.md) | A SwiftUI Picker with the segmented style, showing two to five mutually exclusive options inline where selecting one takes effect immediately, and which requires an accessibilityLabel matching its visible label plus accessibilityElement children contain to be named to VoiceOver. |
| [Select (Wheel)](./components/select.wheel.md) | A SwiftUI Picker with the wheel style, an always-visible spinning drum of values that requires an accessibilityLabel matching its visible label plus accessibilityElement(children:.contain) for VoiceOver to speak the name. |
| [Slider](./components/slider.basic.md) | A native SwiftUI Slider that VoiceOver adjusts by swiping up or down, paired with single-tap controls so the value is adjustable without a drag gesture. |
| [Stepper](./components/stepper.basic.md) | A native SwiftUI Stepper whose visible label text becomes its accessible name and which VoiceOver increments or decrements automatically, with no .adjustable trait to add. |
| [Switch](./components/switch.basic.md) | Native SwiftUI Toggle representing a persistent on/off setting. The label and switch state merge into a single accessible element. |
| [Text Field](./components/text-field.basic.md) | A single-line SwiftUI text field whose visible label is exposed to VoiceOver through the field title, an accessibility label, or LabeledContent, with keyboardType and textContentType set so the correct keyboard and AutoFill appear. |

<!-- gallery:end -->
