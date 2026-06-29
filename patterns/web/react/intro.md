---
id: intro
title: Web / React
slug: /
---

# Web / React Accessibility Patterns

Welcome to the Web / React section of A11y Context.

This corpus provides prescriptive, production-ready accessibility patterns for React applications.
Each pattern documents the **must-have** semantics, focus management rules, and keyboard behavior,
plus a golden implementation and a checklist of acceptance criteria.

## What's here

| Section | Description |
|---------|-------------|
| [Foundations](./global/global_rules.md) | Baseline accessibility rules applied across all UI work |
| [Components](./component-gallery.md) | Browse all components at a glance |
| [Release Notes](./release-notes.md) | Catalog revision history |

## How to use these patterns

1. **Select a component** from the sidebar or the [Components](./component-gallery.md) catalog.
2. Read the **Must Haves** section. These are non-negotiable for WCAG 2.2 AA conformance.
3. Apply the **Golden Pattern** code as your starting implementation.
4. Run through the **Acceptance Checks** as part of your pull request review.

> All patterns target WCAG 2.2 Level AA and the ARIA Authoring Practices Guide (APG).

## A note on the code in these patterns

The Golden Pattern code in each component file is a reference implementation, not a runnable demo. It is written to be **consumable by AI coding agents** at code-generation time: minimal JSX that exposes the required semantic structure and behavior contract, with no styling or framework boilerplate that would distract from the accessibility decisions.

This is deliberate. A fully-styled, fully-wired example would render beautifully on this site but it would also bloat what the agent has to load and reason over, embed visual-design choices that are not the corpus's job to make, and tempt readers to copy-paste production code instead of authoring it inside their own design system. The pattern is the spec; the agent applies it where the developer actually works.

Live demos of these patterns — full styling, real handlers, verified with assistive technology — live in the [a11y-pattern-lab](https://github.com/jsweetdude/a11y-pattern-lab) repo.
