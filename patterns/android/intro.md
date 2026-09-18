---
id: android-intro
title: Android / Compose
slug: /
---

# Android / Jetpack Compose Accessibility Patterns

Welcome to the Android / Compose section of A11y Context.

This corpus provides prescriptive, production-ready accessibility patterns for Jetpack Compose applications. Each pattern documents the **must-have** semantics, TalkBack and focus behavior, and interaction rules, plus a golden implementation.

> **The Compose catalog is in active development.** Foundations are published; component patterns are in progress.

## What's here

| Section | Description |
|---------|-------------|
| [Foundations](./compose/global/global_rules.md) | Baseline accessibility rules applied across all Compose UI work |
| Components | In progress. The taxonomy that governs which patterns exist, and what each is called, is settled |

## How to use these patterns

1. **Select a component** from the sidebar.
2. Read the **Must Haves**. These are non-negotiable for WCAG 2.2 AA conformance.
3. Apply the **Golden Pattern** code as your starting implementation.

> All patterns target WCAG 2.2 Level AA, Material 3, and Google's accessibility guidance for Android.

## What differs on this platform

Compose ships correct components, which changes what a pattern is for. On the web there is no native dialog, so a pattern tells you what to assemble. Compose has `AlertDialog`, so the pattern instead documents the boundary where Material's guarantee stops.

That boundary is usually one level up from the composable. A checkbox's contract is not `Checkbox`; it is `Checkbox` plus its label plus the row that owns the click. A text field's contract is `TextField` plus its label, supporting-text, and error slots. Material gets the composable right, and nothing ships the composition around it.

So these patterns say three things: reach for the Material component, compose it correctly, and here is what to build when Material ships nothing.

## A note on the code in these patterns

The Golden Pattern code in each component file is a reference implementation, not a runnable demo. It is written to be **consumable by AI coding agents** at code-generation time: minimal Compose that exposes the required semantic structure and behavior contract, with no styling or app boilerplate that would distract from the accessibility decisions.

Verification against assistive technology (TalkBack, Switch Access, and a hardware keyboard) is performed by the project maintainer as part of pattern authoring and review.
