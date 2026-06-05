---
title: For AI Coding Agents
---

# Using the Corpus with AI Coding Agents

The integration has three moving parts. Each exists because the previous one isn't enough on its own.

1. **The corpus** (the library): per-component accessibility specifications plus global rules, structured for selective retrieval.
2. **A skill or subagent** (the librarian): the retrieval procedure. Look at the task, identify the components about to be built, evaluate each candidate pattern's `Use When` / `Do Not Use When`, retrieve only what applies, apply Must Haves and the Golden Pattern.
3. **An always-on rule** (the trigger): a small instruction file, loaded in every session, that requires the agent to run the retrieval procedure before generating UI code. Without it, agents rarely consult guidance on their own (see [The Enforcement Rule](/getting-started/ai-coding-agents/enforcement-rule)).

## The three design decisions

Building this for your environment means picking a value on three axes. A 48-run controlled experiment tested the combinations; the findings:

**Retrieval transport: local files, HTTP, or MCP.** Output quality showed no significant difference across the three. They differ in cost and operational properties: HTTP retrieval was 30–40% cheaper in retrieval-side tokens than MCP; local files are fastest and work offline; MCP adds deterministic tool contracts and structured selection metadata. Details: [Retrieval Options](/getting-started/ai-coding-agents/retrieval-options).

**Processing: inline skill or subagent.** Overall pass rates were statistically indistinguishable (91.3% vs 90.9%), but the failure modes differ. Skills were better at component-level "Critical" checks (98.7% vs 89.3%) because the full pattern documentation stays in the working context. Subagents condense guidance into a brief, which loses component-specific nuance, but they were better at cross-component concerns like heading structure, and they isolate retrieval tokens from the main agent's context.

**Enforcement: rule or self-discovery.** Not actually a choice. With a rule: 100% invocation. Without: 13% for skills, 53% for subagents. The rule is mandatory.

## Recommended starting point

**Rule + inline skill + HTTP retrieval.** It matched the best quality results in testing at the lowest operational complexity: no server to run, no MCP client support required, and the corpus is always current because it's fetched from this site.

Setup:

1. Add the [enforcement rule](/getting-started/ai-coding-agents/enforcement-rule) to your repo's AI-instructions location.
2. Add the retrieval skill or subagent from [Downloads](/getting-started/ai-coding-agents/downloads).
3. Verify: ask the agent to "implement a toast notification for this app," with no mention of accessibility. It should retrieve the toast pattern before writing code, and the output should match the pattern's Must Haves.
