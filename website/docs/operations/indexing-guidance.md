---
title: Indexing guidance
sidebar_position: 2
---

## When you need this
You need indexing guidance if you plan to retrieve A11y Context documentation through a docs retriever (often a vector index / RAG system), either:
- as your primary retrieval mode (docs-only), or
- as fallback when MCP is unavailable (MCP-first with docs fallback)

If you are using MCP-only and you do not need fallback yet, you can skip this page.

## Choose your indexing scope
You can index either:

### Option A: All stacks (broader coverage)
Index the entire documentation site so any stack can be retrieved.

Use this when:
- you support multiple stacks (web + native),
- your retriever can reliably filter by path/namespace.

Risk:
- wrong-stack retrieval if filtering is weak.

### Option B: Single stack (recommended default)
Index only one stack's documentation (for example web/react).

Use this when:
- you want maximum precision,
- you are onboarding one team at a time.

## URL stability expectation
Treat documentation URLs like an API surface:
- Keep URLs stable across releases.
- If you must change URLs, use redirects and document the change.

## Chunking guardrails (high impact)
Your indexing pipeline should preserve meaningful headings and avoid oversized chunks.

### Preserve headings
Ensure retrieved chunks retain headings like:
- Use When
- Do Not Use When
- Must Haves
- Golden Pattern
- Acceptance Checks (or equivalent)

### Avoid oversized chunks
- Prefer chunks that align to a single major heading section.
- Avoid chunks that combine multiple major sections into one blob.

### Retrieval tuning
- Prefer retrieval that returns the top 1 to 3 chunks, not 10+.
- Prefer higher precision over high recall for this use case.
- Prefer retrieval that returns heading + body together (not body-only).

## Stack filtering (prevent cross-stack contamination)
Whichever retriever you use, support one of these filtering strategies:
- Path-based filtering (recommended): only retrieve from `/web/react/` when you're in web/react.
- Metadata tagging: index stack as metadata and filter queries by that tag.

## Refresh cadence (operational expectation)
Refresh indexing:
- after minor and major documentation releases
- after any release that changes "Must Haves" or "Golden Pattern" semantics

If your org batches indexing, do not let it drift so far that the assistant repeatedly retrieves stale guidance.

## What "good retrieval" looks like
A good retrieval result:
- includes the correct component pattern for the requested UI element
- includes the relevant headings (especially Must Haves and Golden Pattern)
- is short (1 to 3 chunks) and directly actionable

A bad retrieval result:
- mixes multiple patterns
- omits headings
- pulls content from the wrong stack
- returns too many chunks to be useful
