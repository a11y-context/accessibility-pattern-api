---
title: Local
---

# Local

**The agent reads each pattern from a copy of the corpus bundled with the skill — fully offline, zero network.** The skill ships with the catalog, the Foundations rules, and every pattern file on disk; retrieval never leaves your machine.

## What gets read, and from where

Local is a **retrieval mechanism**, not a different brain — the selection logic is identical to every other variant; only the retrieval step changes. Every input sits on disk under the skill's own directory; nothing is fetched:

- **Catalog — local.** The skill reads `patterns.json` to select pattern IDs. Each entry carries a `source.path` field pointing at that pattern's bundled file.
- **Pattern files — local.** For each selected ID, the skill reads `${CLAUDE_SKILL_DIR}/{source.path}` (for example `components/toast.basic.md`) and extracts Must Haves, Don'ts, Golden Pattern, and Customizable.
- **Foundations rules — local.** The skill reads `global_rules.md` and applies each rule by scope.

The skill's only allowed tool is `Read` — there is no network step at all.

## Install

**Download:** [a11y-context-web-react-local.zip ↓](./downloads#a11y-context--web-react-local)

Unzip into your tool's skills directory — the same one-step install as HTTP, but the folder carries the whole corpus:

```bash
unzip a11y-context-web-react-local.zip -d .claude/skills/
```

The skill folder bundles the catalog, the Foundations rules, and a `components/` directory of pattern files:

```text
your-project/
├── .claude/
│   └── skills/
│       └── a11y-context-web-react-local/
│           ├── SKILL.md          # brain: invocation + selection + read step
│           ├── patterns.json     # local catalog (with source.path)
│           ├── global_rules.md   # local Foundations rules
│           └── components/       # bundled pattern files (accordion.basic.md … tooltip.basic.md)
├── src/
└── package.json
```

Install locations for other tools (Cursor, Copilot, Codex, …) are on the [Downloads page](./downloads).

## When to pick Local

**Pick Local when you need offline operation or a pinned, deterministic snapshot** — an air-gapped environment, a build you want reproducible, or an org that controls when pattern updates roll out:

- **Works offline.** No network dependency; safe in air-gapped or network-restricted environments.
- **Fastest retrieval.** Local disk reads, no HTTP latency.
- **Pinned corpus version.** The bundled corpus carries a `catalog_revision`; your builds stay reproducible until you choose to re-download.

## The honest trade-offs

Local is the right call for offline and pinned use — but be clear-eyed about the costs when neither applies:

- **Refresh cadence.** The bundle can drift from the live corpus. Watch the [Release Notes](/web/react/release-notes) for `catalog_revision` bumps and re-download to update.
- **A small quality dip, and no token savings.** In the same controlled experiment, Local ran roughly **4 percentage points lower on manual pass rate** than HTTP and MCP (p = 0.054 — just shy of significance), with none of HTTP's token-cost advantage.

Net: reach for Local when offline or determinism is the requirement. Otherwise [HTTP](./http) or [MCP](./mcp-server) is the better default.

## Not Local if…

- You have network access and want the cheapest, always-current path — use [HTTP](./http).
- You're **already MCP-native** and want retrieval composable with your other MCP sources — use the [MCP server](./mcp-server).
- You have **existing enterprise retrieval infrastructure** to reuse — see [Custom / Enterprise RAG](./custom).

## Verifying

After unzipping, run the prompts on [Verify It's Working](/getting-started/ai-coding-agents/verification). The agent should select pattern IDs from the catalog, then read the matching `components/{id}.md` files from disk before generating UI code.
