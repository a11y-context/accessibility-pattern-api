---

id: "global_ruleset.baseline"
title: "Foundations"
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

# Global Rules (Baseline)

## Rule: Touch Target Size

```yaml
id: global.touch-target-size
scope: [control, component]
```

### Must Haves
- Every tappable control has a hit area of at least 24x24 points (WCAG 2.2 AA, [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)).
  - Inline targets within a run of text are exempt from this minimum.
  - For icon-only controls where the visible glyph is smaller than 24x24, use `.frame(minWidth: 24, minHeight: 24)` on the tappable element to extend the hit area without resizing the glyph.
- Prefer a 44x44 point hit area where layout allows. This matches Apple's Human Interface Guidelines and is what Xcode's Accessibility Inspector and `.performAccessibilityAudit()` check (WCAG 2.1 AAA, exceeds the AA minimum) — treat 44x44 as the target, 24x24 as the non-negotiable floor.

### Don'ts
- Do not rely on the visible glyph size alone to satisfy the minimum — extend the frame, not the icon.

### Acceptance Checks
- Run Xcode's Accessibility Inspector or `.performAccessibilityAudit()` against the view: no target-size warnings.
- Tap near the edge of a small icon-only control (not just its visual center): the action still fires.

## Rule: System Focus Indicator

```yaml
id: global.focus-visible
scope: [control, component]
```

### Must Haves
- Every interactive control shows a visible system focus indicator for Full Keyboard Access, external-keyboard, and Switch Control users. The default `Button`, `Toggle`, and other native control styles preserve this automatically.

### Don'ts
- Do not apply a custom style modifier (e.g., a `ButtonStyle` or `ToggleStyle` built with `PlainButtonStyle` or a bespoke shape) that suppresses the system focus indicator without restoring an equivalent visible focus treatment.

### Acceptance Checks
- Tab to the control with Full Keyboard Access or an external keyboard: a visible system focus highlight appears around it.
