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
| [Dialog (Alert)](./components/dialog.alert.md) | A native SwiftUI .alert modal that takes VoiceOver focus on presentation, with each action returning focus to the trigger because native alerts do not restore it automatically. |
| [Link (Standalone)](./components/link.basic.md) | SwiftUI Link that opens a URL or web view, exposing the link trait (with the redundant button trait removed) so VoiceOver signals that activating it leaves the app. |
| [Link (Inline)](./components/link.inline.md) | A hyperlink embedded in a run of Text via an AttributedString .link run (preferred) or Markdown, reachable through the VoiceOver Links rotor but non-operable under Full Keyboard Access and Voice Control because of Apple platform defects. |
| [List Row (Navigable)](./components/list.row.md) | A NavigationLink rendered as a row in a List, where the whole row is one target that drills into another in-app screen and reads as a button to VoiceOver, with a decorative trailing disclosure chevron. |
| [Select (Menu)](./components/select.menu.md) | A SwiftUI Picker with the menu style, a pop-up button that shows the current value and opens a list to choose one option, named by the Picker label text rather than an accessibilityLabel. |
| [Slider](./components/slider.basic.md) | A native SwiftUI Slider that VoiceOver adjusts by swiping up or down, paired with single-tap controls so the value is adjustable without a drag gesture. |
| [Stepper](./components/stepper.basic.md) | A native SwiftUI Stepper whose visible label text becomes its accessible name and which VoiceOver increments or decrements automatically, with no .adjustable trait to add. |
| [Switch](./components/switch.basic.md) | Native SwiftUI Toggle representing a persistent on/off setting. The label and switch state merge into a single accessible element. |
| [Text Field](./components/text-field.basic.md) | A single-line SwiftUI text field whose visible label is exposed to VoiceOver through the field title, an accessibility label, or LabeledContent, with keyboardType and textContentType set so the correct keyboard and AutoFill appear. |

<!-- gallery:end -->
