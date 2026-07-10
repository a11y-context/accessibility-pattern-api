---
title: LangChain document loader (In development)
---

# LangChain document loader

**Status: 🟡 In development.** Planned to ship as a small npm and pip package exposing the corpus as LangChain `Document` objects, ready for indexing into any vector store or use directly as tool responses in a LangChain-based agent.

## What it will do

- **`@a11y-context/langchain`** (npm) — TypeScript / JavaScript loader for LangChain.js.
- **`a11y-context-langchain`** (pip) — Python loader for LangChain.
- Exposes `A11yContextLoader.load()` returning documents with metadata tagged by pattern ID, stack, and catalog revision.
- Auto-tracks the current corpus release; consumers can pin to a specific `catalog_revision`.

## Rough shape

```ts
import { A11yContextLoader } from '@a11y-context/langchain';

const docs = await new A11yContextLoader({
  stack: 'web/react',
  // optional: catalog_revision: '0.4.7',
}).load();

// docs: LangChain Document[] tagged with pattern IDs, ready for indexing
```

## Available today: custom integration

While the managed loader is in development, the [Custom integration](./custom) path works today. The corpus is public and structured — the pattern pages chunk cleanly on standard headings (`## Must Haves`, `## Golden Pattern`, etc.), and `patterns.json` provides a machine-readable catalog for building your own selection layer.

Track progress: [issue #TBD](https://github.com/a11y-context/accessibility-pattern-api/issues).
