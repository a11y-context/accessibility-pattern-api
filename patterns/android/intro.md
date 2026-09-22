---
id: android-intro
title: Android / Compose
slug: /
---

# Android / Jetpack Compose Accessibility Patterns

Welcome to the Android / Compose section of A11y Context.

This corpus provides prescriptive, production-ready accessibility patterns for Jetpack Compose applications. Each pattern documents the **must-have** semantics, TalkBack and focus behavior, and interaction rules, plus a golden implementation.

> **The Compose catalog is in active development.** Foundations and the first eight components are published. Thirteen more are planned for the first wave, and further waves follow that.

## What's here

| Section | Description |
|---------|-------------|
| [Foundations](./compose/global/global_rules.md) | Baseline accessibility rules applied across all Compose UI work |
| [Components](./compose/component-gallery.md) | Eight patterns published. The taxonomy that governs which patterns exist, and what each is called, is settled |
| [Release Notes](./compose/release-notes.md) | Catalog revisions and per-pattern versions |

## How to use these patterns

1. **Select a component** from the sidebar.
2. Read the **Must Haves**. These are non-negotiable for WCAG 2.2 AA conformance.
3. Apply the **Golden Pattern** code as your starting implementation.

> All patterns target WCAG 2.2 Level AA and Google's accessibility guidance for Android.

## What differs on this platform

Compose has a component layer that the web does not, and that changes what a pattern is for. On the web there is no native dialog, so a pattern tells you what to assemble. Compose has a dialog, so the pattern instead documents the contract that dialog has to meet and where a component's guarantee stops.

Every pattern here states its contract first: the role, state, and actions the control must expose. Material 3 is named alongside it as the reference implementation, because it is the most widely available component set that already meets the contract, and because naming a concrete implementation is more useful than describing one. It is a reference, not a requirement. A design system's own component satisfies the same contract by forwarding to the same semantics, and a control assembled from foundation primitives satisfies it by declaring role, state, and actions itself.

The contract also usually sits one level above the composable. A checkbox's contract is not the checkbox; it is the checkbox plus its label plus the row that owns the click. A text field's contract is the field plus its label, supporting-text, and error slots. Component libraries get the control right, and none of them ship the composition around it.

So these patterns say three things: here is the contract, here is how to compose it correctly, and here is what to build when nothing ships it.

## A note on the code in these patterns

The Golden Pattern code in each component file is a reference implementation, not a runnable demo. It is written to be **consumable by AI coding agents** at code-generation time: minimal Compose that exposes the required semantic structure and behavior contract, with no styling or app boilerplate that would distract from the accessibility decisions.

Verification against assistive technology (TalkBack, Switch Access, and a hardware keyboard) is performed by the project maintainer as part of pattern authoring and review.
