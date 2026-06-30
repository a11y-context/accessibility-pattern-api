---
title: For AI Coding Agents
---

# Using the Corpus with AI Coding Agents

The integration has two moving parts:

1. **The corpus** (the library): per-component accessibility specifications plus the [Foundations](/web/react/foundations) ruleset, structured for selective retrieval.
2. **A skill or subagent** (the librarian): the retrieval procedure plus the invocation directive that gets it consulted. Look at the task, identify the components about to be built, evaluate each candidate pattern's `Use When` / `Do Not Use When`, retrieve only what applies, apply Must Haves and the Golden Pattern.

A skill or subagent does the librarian's job *only if it's actually invoked*. The skills published here carry an invocation directive in their `description` — phrasing engineered so the agent reaches for the skill on any UI-generation task without the user needing to remember.

## The two design decisions

Building this for your environment means picking a value on two axes. A 48-run controlled experiment tested the combinations:

**Retrieval transport: HTTP or local files.** Output quality showed no significant difference. They differ in operational properties: HTTP needs network access but the corpus stays always-current; local files are fastest and work offline. Details: [Retrieval Options](/getting-started/ai-coding-agents/retrieval-options).

**Processing: inline skill or subagent.** Overall pass rates were statistically indistinguishable (91.3% vs 90.9%), but the failure modes differ. Skills were better at component-level "Critical" checks (98.7% vs 89.3%) because the full pattern documentation stays in the working context. Subagents condense guidance into a brief, which loses component-specific nuance, but they were better at cross-component concerns like heading structure, and they isolate retrieval tokens from the main agent's context.

## Why invocation matters

In testing, when a skill's description carried no explicit invocation directive, agents reached for it on their own only **13% of the time** (inline skill) or **53% of the time** (subagent). The corpus can't help if it's never consulted. The skills here have an invocation directive baked into the description, empirically reliable across UI-generation tasks.

## Recommended starting point

**Inline skill + HTTP retrieval.** Matches the best quality results in testing at the lowest operational complexity: nothing to vendor locally, the corpus is always current, and the skill's description handles invocation.

Setup:

1. Download the skill from [Downloads](/getting-started/ai-coding-agents/downloads) and unzip it into your AI tool's skills directory.
2. Verify: ask the agent to "implement a toast notification for this app," with no mention of accessibility. The agent should retrieve the toast pattern before writing code, and the output should match the pattern's Must Haves.
