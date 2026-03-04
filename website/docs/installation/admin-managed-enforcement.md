---
title: Admin-managed enforcement
---

# Admin-managed enforcement

## What this is
Admin-managed enforcement applies an organization-level mandate that AI assistants must retrieve and apply A11y Context guidance before generating code.

This can reduce per-repo setup, but it depends on:
- which AI clients your organization uses,
- whether those clients support admin-managed instruction mechanisms,
- your organization's security posture and governance model.

If admin-managed enforcement is not available or not permitted for your preferred client, use the repo-scoped kit installation instead.

After you finish this page, return to **[Installation](./install-guide.md)** and continue at **Retrieval: MCP and Docs (RAG)**.

---

## What admin-managed enforcement should accomplish
At minimum, admin-managed enforcement should:
1. Require retrieval of A11y Context guidance before code output.
2. Require the assistant to apply "Must Haves" and "Golden Pattern" guidance in implementation.
3. Prevent wrong-stack usage by requiring stack filtering (web/react vs android/compose, etc.).
4. Maintain predictable behavior (avoid mixing multiple patterns unless explicitly implementing multiple components).

---

## Cursor (Team Rules)

### When to use
Use Cursor Team Rules if:
- your organization is on a Cursor plan that supports Team Rules,
- your security posture allows centralized rules,
- Cursor is a primary assistant used across your engineering org.

### What to configure
Create an org/team rule that:
- mandates A11y Context retrieval before code,
- sets the retrieval mode you want (recommended: MCP-first with docs fallback),
- includes your organization's canonical MCP server URL,
- includes your canonical docs base URL (only needed if you want docs fallback or docs-only).

### Suggested Team Rule content (template)
Use the following as a starting point for a Team Rule. Adjust the references to your org's MCP server and docs site.

- Before generating or editing UI code, retrieve A11y Context guidance for the current stack.
- Preferred retrieval mode: MCP-first. If MCP is unavailable, retrieve guidance from the indexed docs site.
- Always apply "Must Haves" and "Golden Pattern" requirements in the final code.
- Do not mix multiple patterns unless implementing multiple distinct components.
- Do not use guidance from a different stack.

> Notes:
> - Keep this rule short and directive.
> - If your org cannot support docs retrieval, change the policy to MCP-only.

### Next step
After enabling Team Rules, return to **[Installation](./install-guide.md)** and continue at **Retrieval: MCP and Docs (RAG)** to choose whether you want MCP-only, docs-only, or MCP-first with docs fallback.

---

## Claude Code (placeholder)
### What we need to document
- Whether Claude Code supports an org-admin enforcement mechanism equivalent to Team Rules
- If not, what the recommended enterprise path is (often: repo-scoped kit + policy guidance)
- How to standardize the enforcement text across repos if admin-managed is unavailable

> Add your org's confirmed approach here once validated.

---

## GitHub Copilot (placeholder)
### What we need to document
- Whether Copilot org-level instruction management can enforce rules across repos
- How repo instructions interact with org settings
- How to ensure consistent behavior across VS Code, JetBrains, and Xcode setups

> Add your org's confirmed approach here once validated.

---

## Android Studio Gemini (placeholder)
### What we need to document
- Whether Android Studio Gemini has an admin-managed enforcement feature usable org-wide
- How Gemini "Rules" and `AGENTS.md` should be used in an enterprise posture
- Recommended fallback when admin-managed enforcement is not available (repo-scoped kit)

> Add your org's confirmed approach here once validated.

---

## Gemini CLI (placeholder)
### What we need to document
- Whether Gemini CLI supports centrally managed instruction policies in your environment
- How those interact with repo-level `GEMINI.md` files

> Add your org's confirmed approach here once validated.

---

## If admin-managed enforcement is not available
Use the repo-scoped kit installation:
- It works across clients and repos.
- It is the most portable enforcement method.
Go to **[Installation](./install-guide.md)** and follow the "Install the kit" section.
