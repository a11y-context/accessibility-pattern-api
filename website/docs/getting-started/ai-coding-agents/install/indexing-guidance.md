---
title: Enterprise RAG Indexing
---

# Enterprise RAG Indexing

## When you need this
- Required when [Enterprise RAG](./retrieval-options.md) is the retrieval mode
- Recommended when RAG serves as a fallback alongside another retrieval mode

## Choose scope
- Index all stacks (broader coverage)
- Index a single stack (recommended default for precision)

## URL stability expectation
- Treat URLs as an API surface (stable paths, redirects for changes)

## Chunking guardrails
- Preserve headings (Use When, Do Not Use When, Must Haves, Golden Pattern)
- Avoid giant chunks that merge major sections
- Prefer one major heading per chunk

## Retrieval tuning
- Prefer top 1–3 chunks
- Prefer precision over recall
- Filter by stack path/metadata

## Refresh cadence
- Re-index after minor/major updates
- Re-index sooner when semantics change (Must Haves / Golden Pattern)