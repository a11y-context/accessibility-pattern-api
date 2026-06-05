---
title: Retrieval Options
---

# Retrieval Options

The corpus is the same in every mode; only the transport changes. Output quality showed no significant difference across transports in controlled testing — choose on operational fit.

## HTTP (recommended starting point)

The agent fetches pattern pages from this site at generation time.

- **How:** the skill/subagent fetches the catalog (`patterns.json`) to select patterns, then fetches the selected pattern pages.
- **Why:** zero infrastructure, always-current corpus, works in any client that can make web requests. In testing it was 30–40% cheaper in retrieval-side tokens than MCP, with identical output quality.
- **Needs:** network access from the agent.

## Local files

Copy the corpus (or just your stack's subtree) into the repo — for example into a skills or docs directory — and the agent reads it from disk.

- **Why:** fastest retrieval, fully offline, immune to network policy. A good fit for restricted environments.
- **Cost:** staleness. Pin a refresh cadence (the corpus carries a `catalog_revision`; check [Release Notes](/web/react/release-notes) when refreshing).

## MCP server

A deterministic tool contract over the same corpus:

- `list_patterns({ stack, query?, tags? })` — catalog with `selection_excerpt` (the Use When / Do Not Use When bullets) for cheap selection
- `get_pattern({ stack, id })` — one pattern, structured
- `get_global_rules({ stack })` — the Foundations rule set

- **Why:** the strongest guarantees — structured JSON responses, enforced selection metadata, no markdown parsing. The right choice when you want auditable, deterministic retrieval behavior.
- **Cost:** an endpoint to run and MCP support in your client. Enterprises should plan to self-host; a public demo endpoint, when available, is not guaranteed.

## Enterprise RAG

Index this site into your organization's AI knowledge layer and let assistants retrieve chunks.

- **Why:** fits organizations that already route all AI context through a managed retrieval system; no per-repo setup.
- **Cost:** retrieval quality depends on chunking and tuning. The pattern pages are written to survive chunking (canonical ID and summary at the top of every page), but follow the [indexing guidance](/guides/indexing-guidance) — and the enforcement rule is still required.

## Choosing

| | Setup | Freshness | Determinism | Offline |
|---|---|---|---|---|
| HTTP | none | always current | prompt-discipline | no |
| Local | copy files | manual refresh | prompt-discipline | yes |
| MCP | run endpoint | endpoint-controlled | enforced contracts | self-host |
| RAG | index site | re-index cadence | heuristic | depends |

When in doubt: start with HTTP, move to MCP when determinism requirements or network policy demand it.
