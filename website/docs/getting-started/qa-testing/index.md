---
title: For QA & Accessibility Testing
---

# The Corpus as a Test Oracle

Every pattern in this corpus is also a test specification. The same structure that guides generation defines verification:

- **Must Haves** are requirements — each one is checkable against rendered output.
- **Acceptance Checks** are test procedures — observable, binary pass/fail behaviors, already grouped by verification method (Keyboard, Screen Reader, Semantics).
- **Do Not Use When** boundaries catch a failure class no scanner sees: the *wrong component* implemented accessibly.

## What this adds over generic tools

Automated accessibility tools (axe-core and its family) test generic rules: contrast, missing names, invalid ARIA. They are necessary and not sufficient — they catch roughly a third to half of real accessibility failures, because they can't know what a component is *supposed to do*.

The corpus knows. axe-core cannot flag a carousel that fails to pause when keyboard focus enters it, because axe doesn't know it's looking at a carousel. The carousel pattern's acceptance checks state that requirement explicitly, along with every other behavior that makes the component actually usable: focus restoration on dialog close, Tab-boundary behavior in disclosure menus, paging focus movement in collection rows.

That makes the corpus the missing layer between "no automated violations" and "actually accessible": component-aware requirements, written down, stable, and structured enough to automate against.

## Two ways to use it

**As a manual testing script.** Each pattern's Acceptance Checks are a ready-made AT verification protocol — what to press, what should happen, what the screen reader should announce. A tester with a keyboard and a screen reader can run any component's checks top to bottom. This works today, with no tooling.

**As the rulebook for an automated harness.** Map the components in a page or PR to their patterns, then assert each pattern's checks — generic scans from axe-core plus component-aware behavioral assertions in a browser-automation layer. See [Building an Automated Harness](/getting-started/qa-testing/automated-harness).

## Where post-development testing fits

Testing is the complement to generation-time guidance, not a replacement for it. Issues caught after generation carry remediation cost — architectural problems (a missing focus-management model, the wrong interaction pattern) are rebuilds, not patches. Prevent what you can at generation time ([the AI agents path](/getting-started/ai-coding-agents/)); verify everything afterward with the same rulebook, so both layers enforce identical requirements.
