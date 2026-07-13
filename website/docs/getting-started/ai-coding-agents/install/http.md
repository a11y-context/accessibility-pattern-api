---
title: HTTP
---

# HTTP

**The agent fetches each pattern from this site at generation time — nothing to vendor locally, always current.** The skill ships as a single `SKILL.md` plus a small local catalog; the pattern corpus itself lives on the docs site and is pulled over HTTP only for the patterns a given task actually selects.

## What gets fetched, and from where

HTTP is a **retrieval mechanism**, not a different brain. The skill's selection logic is identical to every other variant; only the retrieval step changes. Two of the three inputs stay local — only the per-component pattern pages travel over the network:

- **Catalog — local.** The skill reads `patterns.json` from its own directory (`${CLAUDE_SKILL_DIR}/patterns.json`) to select pattern IDs. It is *not* fetched over HTTP.
- **Pattern pages — remote.** For each selected ID, the skill issues `GET https://a11y-context-project.vercel.app/web/react/components/{id}` — all fetches in parallel, each URL at most once per session — and extracts Must Haves, Don'ts, Golden Pattern, and Customizable from the response.
- **Foundations rules — local.** The skill reads `global_rules.md` from its own directory and applies each rule by scope.

So HTTP mode is **local catalog + local Foundations rules + remote pattern pages**. The base URL is baked into the skill; there is nothing to configure.

## Install

**Download:** [a11y-context-web-react-http.zip ↓](./downloads#a11y-context--web-react-http)

Unzip into your tool's skills directory — the same one-step install as Local:

```bash
unzip a11y-context-web-react-http.zip -d .claude/skills/
```

The skill folder holds three files and no bundled corpus:

```text
your-project/
├── .claude/
│   └── skills/
│       └── a11y-context-web-react-http/
│           ├── SKILL.md          # brain: invocation + selection + fetch step
│           ├── patterns.json     # local catalog (selection only)
│           └── global_rules.md   # local Foundations rules
├── src/
└── package.json
```

Install locations for other tools (Cursor, Copilot, Codex, …) are on the [Downloads page](./downloads).

## When to pick HTTP

**HTTP is the low-friction default whenever the agent has network access.** It's the cheapest retrieval path measured and needs no local corpus to maintain:

- **Cheapest retrieval.** In a controlled experiment, HTTP used roughly **30–40% fewer subagent tokens** than Local or MCP (p < 0.001) — the agent pulls only the pages it selected, nothing more.
- **Always current.** Pattern updates land on your next request; there's no bundled copy to refresh and no `catalog_revision` to track.
- **Smallest footprint.** Three small files in your repo, no corpus to vendor.

**Needs:** network access from the agent to `https://a11y-context-project.vercel.app`. If a fetch fails, the skill surfaces the failure and never invents pattern guidance in its place.

## Not HTTP if…

- You're **offline or air-gapped**, or need a **pinned, deterministic snapshot** — use [Local](./local), which bundles the corpus and reads it from disk.
- You're **already MCP-native** and want retrieval composable with your other MCP sources — use the [MCP server](./mcp-server).
- You have **existing enterprise retrieval infrastructure** to reuse — see [Custom / Enterprise RAG](./custom).

## Verifying

After unzipping, run the prompts on [Verify It's Working](/getting-started/ai-coding-agents/verification). The agent should select pattern IDs from the local catalog, then fetch `…/web/react/components/{id}` for each before generating UI code.
