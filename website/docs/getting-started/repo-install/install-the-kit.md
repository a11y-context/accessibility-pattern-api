---
title: Install the Kit
---

## Goal
- Add repo-scoped enforcement files so the assistant must retrieve and apply A11y Context guidance before coding.

> **`--mode`** is your retrieval mode: `mcp`, `docs`, or `auto`.

## Install command (example)
- `npx @a11y-context/init ...` (TBD final flags)
- Include examples for:
  - install all clients (default)
    - `npx @a11y-context/cli init --stack=web/react --mode=auto --clients=all`
  - install subset via flags (TBD)
    - `npx @a11y-context/cli init --stack=web/react --mode=auto --clients=cursor,claude,copilot`
  - stack selection (web/react, android/compose, etc.)

## What gets added to your repo
- `.a11y-context/config.json`
- Client instruction files (examples):
  - Cursor: `.cursor/rules/a11y-context.mdc`
  - Claude Code: `CLAUDE.md` + optionally `.mcp.json`
  - Copilot: `.github/copilot-instructions.md`
  - Android Studio Gemini: `AGENTS.md`
  - Gemini CLI: `GEMINI.md`

## Safe behavior expectation
- Installer does not overwrite existing instruction files.
- It either:
  - appends a clearly delimited “A11y Context” section, or
  - creates a separate file and references it.

## What this step does not do
- It does not automatically enable MCP inside every client UI.
- It does not create an index for docs retrieval.

## Next step
- If using docs-only or hybrid fallback, go to **Configure RAG**.
- Otherwise, go to **Enable in Your Client**.