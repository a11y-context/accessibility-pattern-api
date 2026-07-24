---
title: MCP Server
---

# MCP Server

**Model Context Protocol (MCP) is Anthropic's open standard for connecting AI agents to context sources.** The A11y Context MCP server exposes the corpus as MCP tools that any MCP-compatible agent can call.

**Server repo:** [`a11y-context/accessibility-pattern-mcp`](https://github.com/a11y-context/accessibility-pattern-mcp)

## Server + skill: two pieces

MCP is a **retrieval mechanism**, not a replacement for the skill. Two pieces work together, and you install both:

1. **The skill** provides the brain — invocation, and the selection logic that decides *which* patterns to fetch. Same brain as every other integration; only its retrieval step differs.
2. **The MCP server** provides the retrieval tools the skill calls once it has selected pattern IDs.

The server exposes three tools:

- **`list_patterns`** — the catalog (`id`, `title`, `summary`, `latest_version`, `tags`, `aliases`) for selection.
- **`get_pattern(id)`** — the full spec (Must Haves, Don'ts, Golden Pattern, Acceptance Checks).
- **`get_foundations()`** — the cross-cutting Foundations ruleset.

Retrieval is deterministic — the skill selects by ID from a small structured catalog, not by embedding similarity. No drift, no embedding cost.

## Step 1 — Install the skill

The skill is the brain, and it's required no matter which transport you pick below.

**Download:** [a11y-context-web-react-mcp.zip ↓](./downloads#a11y-context--web-react-mcp)

Unzip it into your tool's skills directory — the same one-step install as every other variant:

```bash
unzip a11y-context-web-react-mcp.zip -d .claude/skills/
```

Unlike the HTTP and Local variants, the MCP skill carries **only the brain** — the catalog and Foundations rules come from the server's tools at retrieval time, so nothing is bundled alongside it:

```text
your-project/
├── .claude/
│   └── skills/
│       └── a11y-context-web-react-mcp/
│           └── SKILL.md          # brain: invocation + selection, retrieves via MCP tools
├── src/
└── package.json
```

Install locations for other tools (Cursor, Copilot, Codex, …) are on the [Downloads page](./downloads).

## Step 2 — Add the MCP server

The skill selects patterns; the server answers the retrieval calls. Add the server one of two ways — pick the transport that matches your client.

### Local (stdio)

The MCP client spawns the server as a local subprocess. Zero hosting — it runs on your machine. The bundled corpus refreshes with each server release, the same model as the Local skill.

**Claude Code.** Run this **from your project's root directory** — the config is scoped to the directory you run it in. Use `--scope project` (recommended) so the server is written to a committed `.mcp.json`: A11y Context needs no secrets or per-user config, and every developer on the project wants it identically, so sharing it via the repo is the right default.

```bash
claude mcp add --scope project a11y-context -- npx -y @a11y-context/mcp-server
```

The pieces after `claude mcp add`:
- **`--scope project`** — writes the config to a `.mcp.json` at your repo root, committed and shared with your team. Omit it and the server is added only to your personal config for this project (private to you, no file in the repo) — fine for a solo "just trying it" run.
- **`a11y-context`** — the name you'll see in `/mcp` (your choice).
- **`--`** — separates Claude's own flags from the command that launches the server.
- **`npx -y @a11y-context/mcp-server`** — the command Claude runs to start the server.

`--scope project` produces a `.mcp.json` at your project root:

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

**Cursor, Continue, Zed, other clients.** Add the same `mcpServers` block to the client's MCP config file (`.cursor/mcp.json` for Cursor; the equivalent for others). The `command` / `args` shape is identical.

### HTTP (hosted or self-hosted)

For clients that connect by URL rather than spawning a subprocess — enterprise setups, remote agents, hosted-agent platforms.

```bash
claude mcp add --transport http a11y-context https://accessibility-pattern-mcp-production.up.railway.app/
```

Health check: `GET /health` returns `{"ok":true,"contract_version":"v1"}`. You can also self-host — the repo includes the HTTP entry point (`node dist/http.js`); deploy it to any Node host (Railway, Fly, Render) and point your client at your own URL.

## When MCP, when a skill is simpler

Be honest about the fit. Most MCP servers wrap data that is live, changing, high-cardinality, or side-effectful — databases, APIs, file systems, ticketing systems. A11y Context is the opposite: a static, versioned corpus of a couple dozen documents. That's at the simpler end of what MCP is for, and for the core case the [HTTP skill](./http) fetches the same content with **zero infrastructure** — no server to run, no config beyond the skill file.

So MCP here is a deliberate option, not the default. Reach for it when its specific properties earn the extra piece:

- You (or your org) are **already MCP-native** and want accessibility guidance in the same tool paradigm as your other context sources.
- You want retrieval **composable** with your other MCP servers in one session.
- You want the tools **callable by any agent**, including ones that don't have the skill installed.
- You want deterministic, ID-based tool calls rather than an HTTP fetch inside the skill.

If none of those apply, the [HTTP skill](./http) is the simpler, recommended choice — and produces the same output quality measured in testing.

## Why MCP over vector RAG (if you've chosen a retrieval server)

- **Deterministic retrieval.** ~50 patterns per stack once complete — direct ID selection beats embedding search on accuracy and cost. No vector DB, no embeddings to refresh, no chunking to tune.
- **Stable contract.** MCP is a standard, not a vendor API.
- **Composable.** Combine with your other MCP servers in the same session.

## Verifying

After installing the skill and adding the server, restart your client, then run the prompts on [Verify It's Working](/getting-started/ai-coding-agents/verification). The agent should call `list_patterns` then `get_pattern` before generating UI code.
