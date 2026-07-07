---
id: ios-intro
title: iOS / SwiftUI
slug: /
---

<!--
  TODO(ios overview): the SwiftUI catalog is still being built out. When the
  full component library ships, revisit this page:
    - remove the "in active development / will drop soon" framing below,
    - expand the Components row (or swap in a gallery link once one exists,
      matching the web/react component-gallery.md pattern),
    - add a Release Notes row to "What's here" once ios/swiftui/release-notes.md exists.
-->

# iOS / SwiftUI Accessibility Patterns

Welcome to the iOS / SwiftUI section of A11y Context.

This corpus provides prescriptive, production-ready accessibility patterns for SwiftUI applications.
Each pattern documents the **must-have** semantics, VoiceOver and focus behavior, and interaction
rules, plus a golden implementation and a checklist of acceptance criteria.

> **The SwiftUI catalog is in active development.** A first set of components is available now; the full component library is in progress and will drop soon.

## What's here

| Section | Description |
|---------|-------------|
| [Foundations](./swiftui/global/global_rules.md) | Baseline accessibility rules applied across all SwiftUI UI work |
| Components | Available today — [Basic Button](./swiftui/components/button.basic.md), [Toggle Button](./swiftui/components/button.toggle.md), [Switch](./swiftui/components/switch.basic.md). The full library is in progress. |

## How to use these patterns

1. **Select a component** from the sidebar.
2. Read the **Must Haves** section. These are non-negotiable for WCAG 2.2 AA conformance.
3. Apply the **Golden Pattern** code as your starting implementation.
4. Run through the **Acceptance Checks** as part of your pull request review.

> All patterns target WCAG 2.2 Level AA and Apple's accessibility guidance for iOS (Human Interface Guidelines, SwiftUI Accessibility).

## A note on the code in these patterns

The Golden Pattern code in each component file is a reference implementation, not a runnable demo. It is written to be **consumable by AI coding agents** at code-generation time: minimal SwiftUI that exposes the required semantic structure and behavior contract (accessibility labels, traits, and values), with no styling or app boilerplate that would distract from the accessibility decisions.

This is deliberate. A fully-styled, fully-wired example would render beautifully on this site but it would also bloat what the agent has to load and reason over, embed visual-design choices that are not the corpus's job to make, and tempt readers to copy-paste production code instead of authoring it inside their own app. The pattern is the spec; the agent applies it where the developer actually works.

Verification against assistive technology (VoiceOver, Full Keyboard Access) is performed by the project maintainer as part of pattern authoring and review.
