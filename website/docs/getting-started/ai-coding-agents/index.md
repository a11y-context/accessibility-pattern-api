---
title: Using with AI Coding Agents
---

# Using A11y Context with AI Coding Agents

The integration has two moving parts:

1. **The corpus** (the library): per-component accessibility specifications plus the [Foundations](/web/react/foundations) ruleset, structured for selective retrieval.
2. **A skill** (the librarian): the retrieval procedure plus the invocation directive that gets it consulted. Look at the task, identify the components about to be built, evaluate each candidate pattern's `Use When` / `Do Not Use When`, retrieve only what applies, then apply the Must Haves, avoid the Don'ts, use judgment on the Customizable options, and follow the Golden Pattern. (A subagent can play the same role — see the design decisions below.)

A skill does the librarian's job *only if it's actually invoked*. The skills published here carry an invocation directive in their `description` — phrasing engineered so the agent reaches for the skill on any UI-generation task without the user needing to remember.

![Architecture flow. A developer prompt invokes the AI coding agent on UI tasks. Inside the agent, the skill or subagent retrieves matching patterns from the A11y Context corpus — patterns.json, the pattern files, and Foundations. The agent then applies the Must Haves and Golden Pattern to produce the generated code.](/img/a11y-context-architecture.png)

## The two design decisions

Building this for your environment means picking a value on two axes. A 48-run controlled experiment tested the combinations:

**Retrieval transport: HTTP, local files, MCP, or enterprise RAG.** The skill fetches its selected patterns over whichever transport you choose. HTTP and local were measured head-to-head with no significant quality difference — HTTP needs network access but stays always-current; local is fastest and works offline. MCP tool calls and enterprise RAG are two further transports; the skill's retrieval step just points at a different place. Details: [Choose an Integration](/getting-started/ai-coding-agents/install/).

**Processing: inline skill or subagent.** Overall pass rates were statistically indistinguishable (91.3% vs 90.9%), but the failure modes differ. Skills were better at component-level "Critical" checks (98.7% vs 89.3%) because the full pattern documentation stays in the working context. Subagents condense guidance into a brief, which loses component-specific nuance, but they were better at cross-component concerns like heading structure, and they isolate retrieval tokens from the main agent's context.

## Why invocation matters

In testing with the original (non-engineered) skill description, agents reached for the skill on their own only **13% of the time** (inline skill) or **53% of the time** (subagent). The corpus can't help if it's never consulted. With a separate enforcement rule loaded in every session, invocation jumped to **~100%** for both architectures.

The skills published here have rule-like invocation phrasing engineered into the description itself, designed to make the skill self-enforcing without a separate rule file. For most environments this will be sufficient.

## Recommended starting point

**Inline skill + HTTP retrieval.** Matches the best quality results in testing at the lowest operational complexity: nothing to vendor locally, the corpus is always current, and the skill's description handles invocation.

Next: [Choose an Integration](/getting-started/ai-coding-agents/install/) compares the options (skill, MCP, enterprise RAG) and links each setup. Then [Verify it's working](/getting-started/ai-coding-agents/verification) with a test prompt.

## Optional: belt-and-suspenders with an enforcement rule

For environments where guaranteed invocation matters more than operational simplicity — regulated industries, organizations with mixed AI tools whose skill-invocation behavior is inconsistent — adding a separate enforcement rule provides the defensible 100% invocation rate measured in the original experiment.

The rule is a small instruction file loaded in every session that mandates the same procedure the skill encodes:

1. Before generating UI code, run a pattern-selection pass.
2. Select patterns using `Use When` / `Do Not Use When`.
3. Retrieve each selected pattern once, and always retrieve Foundations — each Foundations rule carries a scope (utility, page, layout, component, style) that determines which rules apply to the change.
4. Apply the Must Haves, avoid the Don'ts, use judgment on Customizable, and follow the Golden Pattern, then write the code.

The original rule files (one per AI tool) are preserved in the archived variant repos. The `.claude/rules/a11y-policy.md` file in [`a11y-context-archive/claude-rule-skill-http`](https://github.com/a11y-context-archive/claude-rule-skill-http) is the rule used in the controlled experiment.
