---
title: Installation
---

# Installation

## What you'll get
Once installed, your AI assistant will retrieve and apply accessibility best practices before generating or editing UI code. This improves consistency and reduces accessibility regressions by making patterns and global rules part of the code-generation workflow.

## Enforcement

Enforcement determines **how** the mandate is applied: per-repository (most common) or centrally (admin-managed).

### Enforcement options
- **Admin-managed (org-level)**
  Your organization centrally enforces the use of A11y Context guidance (for example via Cursor Team Rules). This can reduce per-repo setup, but depends on the capabilities and security posture of each AI client.

- **Project-scoped (repo-level, more common)**
  You install the kit repo-by-repo. This is the default approach because it is portable across tools and works even when admin-managed enforcement is not allowed.

If you plan to use admin-managed enforcement, go to **[Admin-managed enforcement](./admin-managed-enforcement.md)**.
Then return here and continue at **Retrieval: MCP and Docs (RAG)** below.

---

## Install the kit (one command)

This section is for **project-scoped (repo-level) enforcement**.

> If you are rolling this out to many repos, the process is the same. You run this installation for each repo you want to enable.

### Recommended: zero-dependency initializer
Run from the repository root.

#### Recommended mode: MCP-first with docs fallback
```bash
npx @a11y-context/init --mode=auto --stack=web/react --mcpServerUrl=https://YOUR_MCP_SERVER --docsBaseUrl=https://YOUR_DOCS_SITE
```
You can also choose MCP-only or docs-only (see Retrieval options below).

> Replace web/react with your stack, for example android/compose.

## What gets added to your repo

The installer should add:

- A small configuration file (example): .a11y-context/config.json
- One instruction file per supported client (generated or updated safely), for example:
  - Cursor: .cursor/rules/a11y-context.mdc
  - Claude Code: CLAUDE.md and optionally .mcp.json
  - GitHub Copilot: .github/copilot-instructions.md
  - Android Studio Gemini: AGENTS.md
  - Gemini CLI: GEMINI.md

### Safe behavior expectation

The installer should not overwrite existing instruction files. It should either:
- Append a clearly delimited "A11y Context" section, or
- Create a separate file and reference it from the existing one.

---

## Retrieval: MCP and Docs (RAG)

Retrieval determines how the assistant fetches A11y Context guidance at runtime.

### Retrieval options

- MCP-first with Docs fallback (recommended). The assistant attempts to retrieve guidance via the MCP server first. If MCP is unavailable, it can fall back to retrieving guidance from documentation (typically via your indexing/RAG system).
  - If you want docs fallback, you must index the documentation. See Indexing guidance
- MCP-only. The assistant retrieves guidance only via the MCP server.
  - You do not need to index documentation if you choose MCP-only.
- Docs-only (RAG-only). The assistant retrieves guidance only from documentation retrieval (typically via your indexing/RAG system).
  - This requires indexing the documentation. See Indexing guidance

### Which should you choose?

- Choose MCP-first with docs fallback if you want the best balance of determinism and resilience.
- Choose MCP-only if you want the simplest operational model and you trust MCP availability in your environment.
- Choose Docs-only if MCP is not permitted or not available.

## If you choose a mode that requires docs retrieval

Proceed to Indexing guidance

If you choose MCP-only, you can skip indexing and continue to Enablement below.

---

## Enablement (AI client setup)

After installing the kit (repo-scoped) and choosing retrieval, you must ensure your AI client actually loads the instructions and can access MCP (if applicable).

Go to Enable in your client
, complete the steps for your client, then return here.

## Verify it worked (quick check)

Use this prompt in your AI client:

> "Implement a Toast component for this stack. Before writing code, retrieve A11y Context guidance and apply Must Haves and Golden Pattern. Use only one pattern."

Pass criteria:
- Retrieval happens before code output.
- The output clearly reflects the retrieved Must Haves and Golden Pattern guidance.
- The assistant does not mix multiple patterns or stacks.
If retrieval does not happen, start with:
- confirming your client loaded the repo instructions (see Enablement),
- confirming MCP connectivity (if using MCP),
- confirming docs retrieval works (if using docs fallback or docs-only).

## Security and privacy notes (brief)
- Do not include secrets in instruction files or pattern docs.
- If you use docs retrieval, treat docs URLs as stable and controlled.
- If you use MCP, ensure the MCP endpoint is accessible within your network policy.
- For more detail, see your organization's internal AI usage policies.
