---
title: Choose a Retrieval Mode
---

# Choose a Retrieval Mode

**Every mode runs the same skill. Only the place it fetches patterns from changes.** When invoked, the skill decomposes the request into components, selects patterns by each candidate's `Use When` / `Do Not Use When`, retrieves the ones it selected, and applies them. That selection logic is identical in every mode. So pick the mode that fits your network, your AI tools, and how you want pattern updates to arrive, then install it from its page.

## Where to start

- **Most teams: [HTTP](./http).** Lowest measured token cost, and pattern pages are always current. Needs network access from the agent.
- **Several AI tools, or Codex: [Local](./local).** Reads a bundled copy from disk, so it behaves the same in every tool with no network access to configure. Codex keeps network access off by default.
- **Already MCP-native: [MCP server](./mcp-server).** Deterministic tool calls, composable with your other MCP servers.
- **Existing retrieval infrastructure: [Custom / Enterprise RAG](./custom).** Index the public corpus into your own vector database. In development.

## Compare the modes

| | [HTTP](./http) | [Local](./local) | [MCP server](./mcp-server) | [Enterprise RAG](./custom) |
|---|---|---|---|---|
| **Where patterns come from** | Pattern pages on this site | A copy bundled with the skill | The server's `get_pattern` tool | Your vector database |
| **Setup** | Unzip the skill | Unzip the skill | Unzip the skill, then add the server | Index the corpus, unzip the skill, fill in its config file |
| **Network** | The agent reaches `a11y-context-project.vercel.app` | None | npm access to start a local server, or a hosted server's URL | Your infrastructure |
| **Updates** | Pattern pages are always current. New patterns arrive when you re-download, because the catalog ships with the skill. | Pinned to the bundled `catalog_revision` until you re-download | Pinned to the corpus in each server release | Whenever you re-index |
| **Works in** | Tools that can fetch a URL | Any tool that reads files | MCP clients (Claude Code, Cursor, Continue, Zed, and others) | Wherever your index is reachable |
| **Status** | Available | Available | Available | In development |

## What testing measured

In the 48-run controlled experiment:

- **Token cost.** HTTP used roughly **30–40% fewer subagent tokens** than Local or MCP (p < 0.001). The agent pulls only the pattern pages it selected.
- **Quality.** No mode was significantly better than another. Local ran about **4 percentage points lower** on manual pass rate than HTTP and MCP (p = 0.054, just short of significance), and MCP matched HTTP.
- Enterprise RAG has not been measured.

## Each mode in detail

### HTTP

The skill reads its catalog and the Foundations rules from its own folder and fetches only the pattern pages it selected from this site. Nothing to vendor, and nothing to configure: the base URL is baked into the skill.

**Pick it when** the agent has network access and you want the lowest token cost with pattern pages that stay current on their own.

**Not HTTP if:**

- You're offline or air-gapped, or need a pinned, deterministic snapshot. Use Local.
- You're already MCP-native and want retrieval composable with your other MCP sources. Use MCP.
- You have enterprise retrieval infrastructure to reuse. Use Enterprise RAG.

If a fetch fails, the skill reports the failure and never invents pattern guidance in its place.

### Local

The skill ships with the catalog, the Foundations rules, and every pattern file. Retrieval never leaves your machine.

**Pick it when** you need offline operation or a pinned snapshot: an air-gapped environment, a build you want reproducible, or an organization that controls when pattern updates roll out. It's also the mode that behaves the same in every AI tool.

**The trade-offs:**

- **Refresh cadence.** The bundle drifts from the live corpus. Watch the release notes for `catalog_revision` bumps and re-download to update.
- **Cost and quality.** Local carries none of HTTP's token savings, and it ran about 4 points lower on manual pass rate (not significant).

**Not Local if** you have network access and want the cheapest, always-current path (use HTTP), you're MCP-native (use MCP), or you have retrieval infrastructure to reuse (use Enterprise RAG).

### MCP server

Two pieces work together: the same skill, and an MCP server whose `list_patterns`, `get_pattern`, and `get_foundations` tools answer its retrieval calls. Retrieval is deterministic: the skill selects by ID from a small structured catalog, not by embedding similarity.

Most MCP servers wrap data that is live, changing, high-cardinality, or side-effectful, such as databases, APIs, and ticketing systems. A11y Context is the opposite: a static, versioned corpus. For the core case, HTTP fetches the same content with no server to run. So MCP is a deliberate option, not the default. **Pick it when** its properties earn the extra piece:

- You or your organization are already MCP-native and want accessibility guidance in the same tool paradigm as your other context sources.
- You want retrieval composable with your other MCP servers in one session.
- You want the tools callable by any agent, including ones without the skill installed.
- You want deterministic, ID-based tool calls rather than an HTTP fetch inside the skill.

If none of those apply, HTTP is the simpler choice and measured the same output quality.

### Enterprise RAG

You index the public corpus into your own vector database, and a RAG variant of the skill queries it. The skill can't know your endpoint in advance, so it ships with a config file you fill in at install.

**Pick it when** your team already runs retrieval infrastructure and wants accessibility patterns in it. If what you want is a retrieval server rather than your own index, compare MCP first:

- **Deterministic retrieval.** About 50 patterns per stack once complete, so direct ID selection beats embedding search on accuracy and cost, with no embeddings to refresh and no chunking to tune.
- **A stable contract.** MCP is a standard, not a vendor API.
- **Composable.** It combines with your other MCP servers in the same session.

### Planned managed wrappers

[OpenAI Assistants](./openai-assistants), [LangChain](./langchain), LlamaIndex, Anthropic Files API, Glean, Confluence Cloud AI, and Azure AI Search, Vertex, and Bedrock. [Open an issue](https://github.com/a11y-context/accessibility-pattern-api/issues) to influence priority.

## Next

Install your mode from its page: [HTTP](./http), [Local](./local), [MCP server](./mcp-server), or [Enterprise RAG](./custom). Then [verify it's working](/getting-started/ai-coding-agents/verification).
