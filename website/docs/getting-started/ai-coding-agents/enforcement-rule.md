---
title: The Enforcement Rule
---

# The Enforcement Rule

The single most important integration step is also the smallest: an always-on rule that requires the agent to retrieve accessibility guidance before generating UI code.

## Why it's required

Skills and subagents carry a description, and the agent decides when they're relevant. That sounds reasonable — and it fails for accessibility, because the agent treats accessibility as a sometimes-concern when it is an every-time concern.

Measured directly, in 15 runs per condition with no rule present:

- Inline skill invoked on its own: **2 of 15 runs (13%)**
- Subagent invoked on its own: **8 of 15 runs (53%)**
- With an always-on rule: **100% invocation, both architectures**

Every run that skipped retrieval produced the baseline failure rate: the corpus can't help if it's never consulted. Voluntary consultation does not survive contact with real sessions.

## What the rule does

The rule is short. It doesn't teach accessibility; it mandates a procedure:

1. Before generating or modifying UI code, run a pattern-selection pass for each component being implemented.
2. Select patterns using their `Use When` text; reject candidates whose `Do Not Use When` applies.
3. Retrieve each selected pattern once; retrieve the global rules when the task touches page structure, headings, landmarks, navigation, or focus-critical UI.
4. Apply Must Haves and the Golden Pattern; then write the code.
5. If no pattern matches, say so and proceed with native semantics plus global rules.

It also sets guardrails that keep the agent useful in a real codebase: preserve the project's design system and styling approach, prefer minimal-change compliance over component replacement, and keep retrieval mechanics out of user-facing chatter.

## Where it goes

| Client | Location |
|---|---|
| Claude Code | `CLAUDE.md` or `.claude/rules/` |
| Cursor | `.cursor/rules/a11y-context.mdc` with `alwaysApply: true` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Gemini (CLI / Android Studio) | `GEMINI.md` / `AGENTS.md` |

Ready-to-copy rule files for each client and retrieval mode are on the [Downloads](/getting-started/ai-coding-agents/downloads) page.
