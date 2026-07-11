---
title: Choose an Integration
---

# Choose an Integration

Every integration has the same brain — a **skill** — and differs only in how that skill retrieves.

## The skill is always there

When invoked, the skill decomposes the request into components, selects patterns via each candidate's `Use When` / `Do Not Use When`, retrieves the selected patterns, and applies them. That selection logic is the whole point, and it lives in the skill regardless of which integration you pick.

What changes between integrations is **step 4 — retrieval**: where the skill goes to fetch the patterns it selected. So each integration is a skill *variant* whose retrieval step targets a different mechanism.

| Retrieval mechanism | The skill's retrieval step | Where the address lives | Status |
|---|---|---|---|
| **[HTTP](./downloads)** | fetches pattern pages from this site | baked into the skill (our URL) | ✅ Available |
| **[Local](./downloads)** | reads a bundled copy from disk | baked into the skill (bundled dir) | ✅ Available |
| **[MCP tools](./mcp-server)** | calls the server's `get_pattern` tool | your MCP client config | ✅ Available |
| **[Enterprise RAG](./custom)** | queries your vector DB | a config file you fill in | 🟡 In development |

⚪ **Planned managed wrappers:** [OpenAI Assistants](./openai-assistants), [LangChain](./langchain), LlamaIndex, Anthropic Files API, Glean, Confluence Cloud AI, Azure AI Search / Vertex / Bedrock. [Open an issue](https://github.com/a11y-context/accessibility-pattern-api/issues) to influence priority.

## What "where the address lives" means

- **HTTP and Local** — the address is baked into the skill we ship. Download and go; nothing to configure.
- **MCP** — you also install the [MCP server](./mcp-server); the address lives in your MCP client config. The skill's retrieval step calls the server's tools.
- **RAG** — the skill can't know your vector DB in advance, so the RAG skill variant ships with a config file you fill in at install (endpoint + index name). See [Custom / Enterprise RAG](./custom).

## Which one?

- **Most teams: [Skill — HTTP](./downloads).** Best measured quality at the lowest complexity — nothing to vendor locally, always current, invocation handled by the skill's description. Recommended starting point.
- **Offline or air-gapped: [Skill — Local](./downloads).** Fastest retrieval, no network; refresh periodically.
- **MCP-native clients (Claude Code, Cursor, Continue, Zed): [MCP server](./mcp-server).** Deterministic tool-based retrieval, composable with your other MCP sources.
- **Enterprise team with existing retrieval infrastructure: [Custom / Enterprise RAG](./custom).** Point your indexer at the public corpus and pair it with the RAG skill variant.

Once you've picked, set it up on its page above, then [verify it's working](/getting-started/ai-coding-agents/verification).
