---
title: Install
---

# Install A11y Context

Three install paths, depending on how you want to consume the corpus:

## Quick start: download a ZIP

Best for individuals and most teams. Per-skill ZIPs are built from the [a11y-context-skills](https://github.com/a11y-context/a11y-context-skills) repo on every release. Pick a variant, download the ZIP, and unzip it into your AI tool's skills directory.

→ [Downloads](/getting-started/ai-coding-agents/install/downloads)

## Git clone

For developers who want to fork, customize, or track updates with `git pull`. Clone the skills repo and copy the relevant skill folder into your AI tool's skills directory.

→ [Downloads § Alternative: clone the repo](/getting-started/ai-coding-agents/install/downloads)

## Enterprise RAG

For organizations that route AI context through a managed retrieval system. Index this site into your knowledge base and let assistants retrieve chunks.

→ [Retrieval Options § Enterprise RAG](/getting-started/ai-coding-agents/install/retrieval-options) and [Indexing Guidance](/getting-started/ai-coding-agents/install/indexing-guidance)

## Picking between HTTP and Local

For the ZIP and git-clone paths, two skill variants exist:

- **HTTP (recommended starting point)** — small footprint (one `SKILL.md` file), always-current corpus, needs network access from the agent
- **Local** — fully offline, fastest retrieval, requires periodic refresh as the upstream corpus evolves

Details and operational tradeoffs: [Retrieval Options](/getting-started/ai-coding-agents/install/retrieval-options).

## After installing

Run a test prompt to confirm the skill is being invoked. The verification page walks through what to expect:

→ [Verify it's working](/getting-started/ai-coding-agents/verification)
