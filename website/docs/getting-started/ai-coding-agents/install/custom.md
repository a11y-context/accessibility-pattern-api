---
title: Custom / Enterprise RAG
---

# Custom / Enterprise RAG

**Point your own retrieval infrastructure at the public corpus, then install the RAG skill variant to drive it.** The corpus is public, structured, and Apache-2.0 licensed — every pattern is a self-contained markdown file and `patterns.json` is a machine-readable catalog, so any vector DB or enterprise search platform can index it.

RAG has two halves, and you set up both:

1. **Index the corpus** into your vector DB or enterprise search system (Step 1).
2. **Install the RAG skill** — the same brain as every other integration — and fill in the config file so it knows where your index lives (Step 2).

## Step 1 — Index the corpus

Point your indexer at the docs site (safe to crawl; URLs are stable) or the corpus repository (raw markdown, no HTML overhead). This works today for:

- **Glean, Confluence Cloud AI, Notion AI** — enterprise search platforms with website connectors. Point at the docs site.
- **Pinecone, Weaviate, Chroma, Qdrant** — vector databases. Ingest the raw markdown and embed on your side.
- **Azure AI Search / Vertex AI Search / AWS Bedrock Knowledge Bases** — hyperscaler retrieval services. Point at the docs site or ingest the repository.

Sources:

- **Docs site:** [`https://a11y-context-project.vercel.app`](https://a11y-context-project.vercel.app) — every pattern is at a stable URL, with a canonical ID + summary at the top of every page for chunking survivability.
- **Corpus repository:** [`a11y-context/accessibility-pattern-api`](https://github.com/a11y-context/accessibility-pattern-api) — raw markdown + `patterns.json` catalog + Foundations rules.
- **Release notes:** [Release Notes](/web/react/release-notes) — `catalog_revision` bumps on every release; pin to a version for reproducibility.

The [Chunking guardrails](#chunking-guardrails) and [Retrieval tuning](#retrieval-tuning) sections below are the config you'll want when you build the index.

## Step 2 — Install the RAG skill

Indexing the corpus is only the retrieval half. You still need the **brain** — a skill that gets invoked, decomposes the request, selects patterns via `Use When` / `Do Not Use When`, and *then* queries your index. That's the same skill as every other integration; only its retrieval step differs.

**Download:** [a11y-context-web-react-rag.zip ↓](./downloads#a11y-context--web-react-rag)

Unzip it into your tool's skills directory, the same one-step install as every other variant:

```bash
unzip a11y-context-web-react-rag.zip -d .claude/skills/
```

The catch: the HTTP and Local skills have their address baked in (our URL, a bundled dir), but a RAG skill can't — your vector DB is your infrastructure, unknown when we author the skill. So the RAG variant ships with a **config file** you fill in at install with the index you built in Step 1:

```json
// a11y-context.config.json
{
  "ragEndpoint": "https://your-vector-db.internal/query",
  "indexName": "a11y-context",
  "stack": "web/react"
}
```

The skill and its config live together in your project's skills directory:

```text
your-project/
├── .claude/
│   └── skills/
│       └── a11y-context-web-react-rag/
│           ├── SKILL.md                  # the brain: invocation + selection
│           └── a11y-context.config.json  # ← your vector DB endpoint + index
├── src/
└── package.json
```

The skill reads the config at retrieval time to know where to send its queries. This mirrors how MCP servers are configured (`.mcp.json`) — the address lives in a config file the user edits once at install, not something the agent prompts for at runtime.

## When you need indexing config

- Required when RAG is your retrieval mode.
- Recommended when RAG serves as a fallback alongside another retrieval mode.

## Chunking guardrails

The pattern pages are written to survive chunking:

- **Preserve major-heading boundaries.** `## Must Haves`, `## Customizable`, `## Don'ts`, `## Golden Pattern`, `## Acceptance Checks` are the safe chunk boundaries — do not split within these sections.
- **Prefer one major heading per chunk.** Avoid giant chunks that merge major sections.
- **Retain the pattern ID and summary at the top of every chunk.** Every page opens with `Pattern ID: <id>` and a one-sentence summary — keep these in the chunk so retrieval results are self-identifying.
- **Filter by `stack` metadata.** Frontmatter carries `stack: web/react` (or `ios/swiftui`, etc.); use it to restrict retrievals to the platform your consumers work in.

## Retrieval tuning

- **Prefer the top 1–3 chunks.** A well-constructed prompt selects one or two patterns; over-retrieval dilutes the agent's context.
- **Prefer precision over recall.** The `Use When` / `Do Not Use When` boundaries make patterns distinguishable; retrieval should return the right pattern rather than adjacent similar ones.
- **Filter by stack on every retrieval** to avoid cross-platform noise.

## URL & refresh expectations

- **Treat the docs URLs as an API surface** — paths are stable; changes ship with redirects.
- **Re-index on every `catalog_revision` bump.** Release cadence is roughly weekly during active development; re-index sooner when semantics change (Must Haves / Golden Pattern). Watch the [release notes](/web/react/release-notes) for MINOR and MAJOR bumps.
