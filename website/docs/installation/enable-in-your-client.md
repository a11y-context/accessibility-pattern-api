---
title: Enable in your client
---

## Goal
Confirm your AI client:
1) loads the repo instructions added by the kit, and
2) can use MCP retrieval if you selected MCP-only or MCP-first mode.

After completing this page, run the verification checklist in your installation guide.

## Common prerequisites
- You are working inside the repository that contains the kit files.
- You have committed the kit files (or at least they exist locally in the repo).
- If using MCP: you know the MCP endpoint and your network allows access.

## Cursor
### Confirm instructions load
- Open the repo in Cursor.
- Confirm your repo rules file is present (commonly under `.cursor/rules/`).
- Start a new chat and ask it to "retrieve A11y Context guidance before writing code."

### Enable MCP (if applicable)
- Configure the MCP server in Cursor for this workspace/environment.
- Re-open the repo and re-run the verification prompt.

## Claude Code
### Confirm instructions load
- Ensure `CLAUDE.md` exists at the repo root (or whatever file your kit uses for Claude instruction loading).
- Start Claude Code from the repo root so it can load project context.

### Enable MCP (if applicable)
- Ensure the project MCP config file exists (commonly `.mcp.json` at the repo root).
- Start a new session and confirm tool retrieval happens before code generation.

## GitHub Copilot (VS Code / JetBrains / Xcode)
### Confirm instructions load
- Ensure the repo instruction file exists (commonly under `.github/`).
- Reload the workspace or restart the IDE to avoid cached instruction state.
- Start a new Copilot Chat and run the verification prompt.

### Enable MCP (if applicable)
- If your environment supports MCP with Copilot Chat, enable it for the IDE you're using.
- Re-run the verification prompt and confirm the assistant retrieves before coding.

## Android Studio Gemini
### Confirm instructions load
- Ensure the project instruction file exists at repo root (commonly `AGENTS.md` or your kit's equivalent).
- Open the project in Android Studio and start a Gemini chat from within the project context.

### Retrieval note
- If MCP is not available in your Android Studio environment, use docs retrieval (indexed mode) and confirm Gemini can retrieve the relevant headings.

## Gemini CLI
### Confirm instructions load
- Ensure `GEMINI.md` exists at repo root (or your kit's equivalent).
- Run Gemini CLI from the repo root so project context is applied.

### Retrieval note
- If using MCP-first mode, confirm your Gemini CLI setup supports MCP connectivity in your environment.
- Otherwise confirm docs retrieval works as intended.

## Quick verification prompt (works across clients)
Use this prompt to confirm enforcement + retrieval:

"Implement a Toast component for this stack. Before writing code, retrieve A11y Context guidance and apply Must Haves and Golden Pattern. Use only one pattern."

Pass criteria:
- Retrieval happens before code output.
- Output clearly reflects the retrieved Must Haves / Golden Pattern.
- The assistant does not mix multiple patterns or stacks.
