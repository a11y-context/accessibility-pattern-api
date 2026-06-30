---
title: Getting Started
---

# What A11y Context Is

A11y Context is a corpus of accessibility best practices written to be consumed by machines as well as people. Each component pattern specifies, in a stable structure:

- **Use When / Do Not Use When:** selection boundaries, so the right pattern is chosen and sibling patterns are never blended
- **Must Haves:** the non-negotiable semantics, ARIA wiring, focus behavior, and keyboard behavior for WCAG 2.2 AA conformance
- **A Golden Pattern:** a minimal, tested reference implementation
- **Acceptance Checks:** observable pass/fail behaviors a tester can verify with a keyboard and a screen reader

The corpus is one source of truth with many consumption modes: fetch it over HTTP, copy it locally, or index it into an enterprise RAG system. Browse it now: [Web / React patterns](/web/react).

## Why it exists

AI coding assistants generate inaccessible UI by default. In [Microsoft's A11y LLM Eval Report](https://microsoft.github.io/a11y-llm-eval-report/), models generating UI code with no accessibility instructions passed automated WCAG checks **12% of the time on average**; the best-performing model managed 25%. And automated checks only catch about half of real accessibility failures, so actual performance is worse than those numbers suggest.

This corpus exists to close that gap at the moment code is generated. In a controlled 48-run experiment, connecting AI coding agents to this corpus raised manual accessibility pass rates from **63% to 88–93%** (p < 0.001) and cut axe-core violations by **70–95%** (p < 0.02), compared to the same model working unassisted.

## Two ways to use it

**[For AI coding agents](/getting-started/ai-coding-agents/)** is the primary use. A skill (or subagent) handles retrieval: identify the components about to be built, pull only the relevant patterns plus the Foundations ruleset, and apply them before writing code. The skill's description carries invocation guidance so the agent reaches for it without prompting.

**[For QA and accessibility testing](/getting-started/qa-testing/)**, the same Must Haves and Acceptance Checks double as a component-aware test specification: a rulebook for automated harnesses and a script for manual AT verification.

Start with [Why This Works](/getting-started/why-this-works) if you want the reasoning before the setup.
