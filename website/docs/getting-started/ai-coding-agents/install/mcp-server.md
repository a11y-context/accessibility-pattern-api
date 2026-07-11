---
title: MCP Server
---

# MCP Server

**Model Context Protocol (MCP) is Anthropic's open standard for connecting AI agents to context sources.** The A11y Context MCP server exposes the corpus as MCP tools that any MCP-compatible agent can call.

**Repository:** [`a11y-context/accessibility-pattern-mcp`](https://github.com/a11y-context/accessibility-pattern-mcp)

## Server + skill: two pieces

MCP is a **retrieval mechanism**, not a replacement for the skill. Two pieces work together:

1. **The MCP server** provides the retrieval tools. Install it in your MCP client.
2. **The skill** provides the brain — invocation, and the selection logic that decides *which* patterns to fetch before calling the server's tools.

The server exposes three tools:

- **`list_patterns`** — the catalog (`id`, `title`, `summary`, `latest_version`, `tags`, `aliases`) for selection.
- **`get_pattern(id)`** — the full spec (Must Haves, Don'ts, Golden Pattern, Acceptance Checks).
- **`get_foundations()`** — the cross-cutting Foundations ruleset.

Retrieval is deterministic — the skill selects by ID from a small structured catalog, not by embedding similarity. No drift, no embedding cost.

## Option A — Local (stdio)

The MCP client spawns the server as a local subprocess. Zero hosting — it runs on your machine. The bundled corpus refreshes with each server release, the same model as the Local skill.

### Claude Code

Add it with the CLI:

```bash
claude mcp add a11y-context -- npx -y @a11y-context/mcp-server
```

The pieces after `claude mcp add`:
- **`a11y-context`** — the name you'll see in `/mcp` (your choice).
- **`--`** — separates Claude's own flags from the command that launches the server.
- **`npx -y @a11y-context/mcp-server`** — the command Claude runs to start the server.

Add `--scope project` to write the config into your repo's `.mcp.json` (shareable with your team) instead of your personal user config:

```bash
claude mcp add --scope project a11y-context -- npx -y @a11y-context/mcp-server
```

That produces a `.mcp.json` at your project root:

```text
your-project/
├── .mcp.json          # created by `claude mcp add --scope project`
├── src/
└── package.json
```

```json
// .mcp.json
{
  "mcpServers": {
    "a11y-context": {
      "command": "npx",
      "args": ["-y", "@a11y-context/mcp-server"]
    }
  }
}
```

Run `/mcp` in Claude Code to confirm `a11y-context` is listed and connected. (`/mcp` shows your *configured* servers and lets you check status — you add the server first, then it appears there.)

### Cursor, Continue, Zed, other clients

Add the same `mcpServers` block to the client's MCP config file (`.cursor/mcp.json` for Cursor; the equivalent for others). The `command` / `args` shape is identical.

## Option B — HTTP (hosted or self-hosted)

For clients that connect by URL rather than spawning a subprocess — enterprise setups, remote agents, hosted-agent platforms.

```bash
claude mcp add --transport http a11y-context https://accessibility-pattern-mcp-production.up.railway.app/
```

Health check: `GET /health` returns `{"ok":true,"contract_version":"v1"}`. You can also self-host — the repo includes the HTTP entry point (`node dist/http.js`); deploy it to any Node host (Railway, Fly, Render) and point your client at your own URL.

## When MCP, when a skill is simpler

Be honest about the fit. Most MCP servers wrap data that is live, changing, high-cardinality, or side-effectful — databases, APIs, file systems, ticketing systems. A11y Context is the opposite: a static, versioned corpus of a couple dozen documents. That's at the simpler end of what MCP is for, and for the core case the [HTTP skill](./downloads) fetches the same content with **zero infrastructure** — no server to run, no config beyond the skill file.

So MCP here is a deliberate option, not the default. Reach for it when its specific properties earn the extra piece:

- You (or your org) are **already MCP-native** and want accessibility guidance in the same tool paradigm as your other context sources.
- You want retrieval **composable** with your other MCP servers in one session.
- You want the tools **callable by any agent**, including ones that don't have the skill installed.
- You want deterministic, ID-based tool calls rather than an HTTP fetch inside the skill.

If none of those apply, the HTTP skill is the simpler, recommended choice — and produces the same output quality measured in testing.

## Why MCP over vector RAG (if you've chosen a retrieval server)

- **Deterministic retrieval.** ~50 patterns per stack once complete — direct ID selection beats embedding search on accuracy and cost. No vector DB, no embeddings to refresh, no chunking to tune.
- **Stable contract.** MCP is a standard, not a vendor API.
- **Composable.** Combine with your other MCP servers in the same session.

## Verifying

After adding the server and restarting your client, run the prompts on [Verify It's Working](/getting-started/ai-coding-agents/verification). The agent should call `list_patterns` then `get_pattern` before generating UI code.
