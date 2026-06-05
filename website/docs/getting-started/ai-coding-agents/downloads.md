---
title: Downloads
---

# Downloads

Everything here is copy-in: no package manager, no installer. Add the files to your repo, commit, done.

## Rule files

The always-on enforcement rule, per client and retrieval mode. Each file mandates retrieval-before-generation, the single-pattern selection discipline, and codebase guardrails (preserve the design system, minimal-change compliance, no scope creep).

| Client | Mode | File |
|---|---|---|
| Claude Code | HTTP | *coming soon* |
| Claude Code | MCP | *coming soon* |
| Cursor | HTTP | *coming soon* |
| Cursor | MCP | *coming soon* |
| GitHub Copilot | HTTP | *coming soon* |

## Retrieval skill

The inline-skill implementation of the retrieval procedure: identify components → select via Use When / Do Not Use When → retrieve selected patterns + global rules → apply. Variants for HTTP and local retrieval.

*Coming soon.*

## Retrieval subagent

The subagent implementation: the main agent delegates; the subagent retrieves, condenses to a brief, and returns it. Trades some component-level nuance for main-context token isolation. Includes the memory-file convention observed to help across sessions.

*Coming soon.*

## The corpus itself

- Browse: [Web / React patterns](/web/react)
- Machine index: `patterns.json` at the [GitHub repository](https://github.com/jsweetdude/accessibility-pattern-api) (`patterns/web/react/patterns.json`)
- Clone for local mode: `git clone https://github.com/jsweetdude/accessibility-pattern-api`

## Verification prompt

After installing a rule + skill/subagent, run this in a UI repo (note that it never mentions accessibility):

```
Add a toast notification that confirms when an item is saved.
```

Pass criteria: the agent retrieves the toast pattern before writing code; the live region container is always mounted; the message is announced via role="status"; focus never moves to the toast; the toast auto-dismisses and the region is cleared.
