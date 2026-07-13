---

id: "global_ruleset.baseline"
title: "Foundations"
toc_max_heading_level: 2
slug: "/foundations"
stack: "ios/swiftui"
rule_set: "baseline"
status: "beta"
summary: "Baseline accessibility rules applied across most SwiftUI UI work."
cache_ttl_seconds: 86400
apply_policy:
  instruction: "Apply all MUST rules that match the current change scope. If the task does not touch a scope, do not introduce unrelated changes."
  scopes_in_order: ["control", "layout", "component"]

---

# Foundations

The cross-cutting accessibility rules that apply across most SwiftUI work, independent of any single component. Each rule is a best practice an AI applies while authoring SwiftUI code. Component patterns reference these rules rather than restating them.

Verification (audits, contrast measurement, on-device and human/LLM review) is a QA concern and lives in the QA layer, not here.

## Rule: Touch Target Size

```yaml
id: global.touch-target-size
scope: [control, component]
```

### Must Haves
- Every tappable control has a hit area of at least 24x24 points (WCAG 2.2 AA, [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)).
  - Inline targets within a run of text are exempt from this minimum.
  - For icon-only controls where the visible glyph is smaller than 24x24, use `.frame(minWidth: 24, minHeight: 24)` on the tappable element to extend the hit area without resizing the glyph.
- Prefer a 44x44 point hit area where layout allows, matching Apple's Human Interface Guidelines. Treat 44x44 as the target and 24x24 as the non-negotiable floor.

### Don'ts
- Do not rely on the visible glyph size alone to satisfy the minimum; extend the frame, not the icon.

## Rule: System Focus Indicator

```yaml
id: global.focus-visible
scope: [control, component]
```

### Must Haves
- Every interactive control shows a visible system focus indicator for Full Keyboard Access, external-keyboard, and Switch Control users. The default `Button`, `Toggle`, and other native control styles preserve this automatically.

### Don'ts
- Do not apply a custom style modifier (e.g., a `ButtonStyle` or `ToggleStyle` built with `PlainButtonStyle` or a bespoke shape) that suppresses the system focus indicator without restoring an equivalent visible focus treatment.

## Rule: Semantic Color

```yaml
id: global.semantic-color
scope: [control, layout, component]
```

### Must Haves
- Use semantic color for text and control surfaces: the design system's color tokens, or SwiftUI system colors (`.primary`, `.secondary`, `Color(.label)`, `Color(.systemBackground)`, `.tint`). These adapt to light and dark mode and are pre-vetted for contrast.
- Use native control styles (`.borderedProminent`, `.roundedBorder`, the system `Toggle`) so a control's border, track, and state fills inherit their contrast instead of being hand-drawn.
- Give any custom-drawn indicator (a selection outline, a custom toggle track) a semantic or design-token color rather than a fixed literal.

### Don'ts
- Do not hardcode raw colors (`Color.black`, `Color.white`, or gray literals like `Color(white: 0.7)`) for text or control chrome; they do not adapt to the color scheme and often fail contrast.
- Do not restyle a native control in a way that strips its default border, track, or state contrast.
- Do not convey a control's state (on/off, selected) by color alone; keep a shape, fill, or label difference as well.

## Rule: Dynamic Type

```yaml
id: global.dynamic-type
scope: [control, layout, component]
```

### Must Haves
- Use a built-in text style (`.body`, `.headline`, `.caption`) or a `Text` with no fixed point size, so text scales with the user's setting (WCAG 2.1 AA [1.4.4 Resize Text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text)).
- Size any glyph-tracking dimension (icon size, control height, glyph padding) with `@ScaledMetric(relativeTo:)` rather than a fixed point value.
- Let text wrap and containers grow, and place long content in a `ScrollView`. For a `TextField` that can hold long input, use `axis: .vertical`.

### Don'ts
- Do not set a fixed `.font(.system(size:))` on content text.
- Do not apply a truncating `.lineLimit()` to meaningful text, or wrap it in a fixed-height frame that clips it when enlarged.
- Do not clamp the app's Dynamic Type range to protect a layout; fix the layout instead.

## Rule: Custom Control Representation

```yaml
id: global.custom-control-representation
scope: [control, component]
```

### Must Haves
- Any control drawn from primitives (shapes, `Canvas`, `Path`, raw gestures) rather than a native control exposes a hidden native equivalent through `.accessibilityRepresentation { }`, supplying an accessible name, the current value (for a slider, stepper, or toggle), the correct role and trait, and the control's actions (WCAG 2.2 A [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)).
- Bind the representation and the visible control to the same state so the announced value stays in sync as the user interacts.
- For a control adjusted by dragging, add `.accessibilityAddTraits(.allowsDirectInteraction)` so a VoiceOver user can move it directly.

### Don'ts
- Do not ship a custom-drawn control with only a tap gesture and a visual label; it is unreachable and inoperable for VoiceOver, Switch Control, and Full Keyboard Access users.
- Do not hand-rebuild the contract with loose `.accessibilityLabel`, `.accessibilityValue`, and traits when a native representation supplies the role behaviors (adjustable actions, toggling) that loose traits alone do not.

## Rule: Navigation Focus

```yaml
id: global.navigation-focus
scope: [layout, component]
```

### Must Haves
- Set a `navigationTitle` on every pushed screen so its screen change is announced by name (WCAG 2.2 A [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order)).
- Let the system manage VoiceOver focus on a `NavigationStack` push; do not force focus to the back button or an arbitrary element.
- On pop, restore focus to the row that triggered the navigation by binding it with `@AccessibilityFocusState` and setting that focus when the pushed screen is dismissed, where the system does not restore it.

### Don'ts
- Do not push a screen with no title, which leaves the change without a clear spoken announcement.
- Do not override the system's push-focus placement.
