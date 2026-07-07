---
title: Retrieval Options
---

# Retrieval Options

The corpus is the same in every mode; only the transport changes. Output quality showed no significant difference across transports in controlled testing — choose on operational fit.

## HTTP (recommended starting point)

The agent fetches pattern pages from this site at generation time.

- **How:** the skill/subagent fetches the catalog (`patterns.json`) to select patterns, then fetches the selected pattern pages.
- **Why:** zero infrastructure, always-current corpus, works in any client that can make web requests.
- **Needs:** network access from the agent.

## Local files

Copy the corpus (or just your stack's subtree) into the repo, for example into a skills or docs directory, and the agent reads it from disk.

- **Why:** fastest retrieval, fully offline, immune to network policy. A good fit for restricted environments.
- **Cost:** staleness. Pin a refresh cadence (the corpus carries a `catalog_revision`; check [Release Notes](/web/react/release-notes) when refreshing).

## Enterprise RAG

Index this site into your organization's AI knowledge layer and let assistants retrieve chunks.

- **Why:** fits organizations that already route all AI context through a managed retrieval system; no per-repo setup.
- **Cost:** retrieval quality depends on chunking and tuning. The pattern pages are written to survive chunking (canonical ID and summary at the top of every page), but follow the [indexing guidance](./indexing-guidance.md). A skill or subagent with invocation guidance in its description is still recommended — RAG provides the chunks; the skill ensures the agent actually pulls them on UI-generation tasks.

## Choosing

| | Setup | Freshness | Offline |
|---|---|---|---|
| HTTP | none | always current | no |
| Local | copy files | manual refresh | yes |
| RAG | index site | re-index cadence | depends |

When in doubt: start with HTTP. Move to Local when network policy demands it.
