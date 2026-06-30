---
id: release-notes
title: Release Notes
slug: /release-notes
---

# Release Notes

Catalog and per-pattern versions use semver (MAJOR.MINOR.PATCH). Catalog revisions are dated. Each release lists changes by pattern.

## 0.4.1 — 2026-06-30

Getting Started information-architecture cleanup; Foundations title/intro alignment; first run of the auto-sync workflow.

**Site changes (Getting Started restructure):**
- "For AI Coding Agents" renamed to "Using with AI Coding Agents" — clearer that the page is for human readers about using A11y Context with AI agents.
- AI Coding Agents index page reframed: "two moving parts" (corpus + skill) replaces the prior three; "two design decisions" (transport + processing) replaces the prior three; new "Why invocation matters" section preserves the original 13% / 53% / 100% invocation data from the controlled experiment; recommended starting point is now "inline skill + HTTP."
- Enforcement rule is presented as an **optional belt-and-suspenders** for environments requiring guaranteed invocation, with a link to the original rule file preserved in the archive org.
- The standalone `enforcement-rule.md` page is deleted.
- New `install/` subfolder consolidates the three install paths. `downloads.md`, `retrieval-options.md`, and `indexing-guidance.md` moved into `install/`. New `install/index.md` orients visitors to ZIP-download vs git-clone vs enterprise-RAG.
- New top-level `verification.md` page (formerly a section inside downloads.md), with extended pass criteria and additional test prompts.
- `downloads.md`: Atlas mention removed from the org-level distribution guidance.
- `retrieval-options.md`: Enterprise RAG section now references skill-based invocation rather than the deleted rule mechanism.

**Corpus changes:**
- Foundations page H1 changed from "Global Rules (Baseline)" to "Foundations" with a new intro paragraph explaining what's covered (utilities, page-level structure, visual fundamentals). Aligns with the frontmatter title and the site navigation.

No per-pattern semantic changes; per-pattern versions unchanged.

## 0.4.0 — 2026-06-28 (infrastructure)

Infrastructure change: `patterns.json` is now **generated** from each pattern's `.md` frontmatter and `## Use When` / `## Do Not Use When` body sections by a prebuild script. Authors only edit the .md files; the JSON is a derived artifact (still committed so the MCP server and consumers can read it without running the build).

**What changed:**

- `latest_version` migrated to frontmatter on all 14 published patterns. Each .md is now the single source of truth for its catalog metadata.
- New `patterns/web/react/catalog-meta.json` carries the hand-edited top-level metadata (`catalog_revision`, `schema_version`, `stack`, `cache_ttl_seconds`).
- New `website/scripts/generate-patterns-json.js` (~120 lines) regenerates `patterns.json` from the .md files + `catalog-meta.json` during `npm run prebuild`. Run manually with `npm run gen:patterns-json` from `/website`.
- Existing `patterns.json` inconsistencies normalized: bullet backticks stripped consistently in `selection_excerpt`, frontmatter titles propagated to the JSON output (Basic Button, Carousel with Dot Navigation, etc.).
- `generated_at` field removed — no consumer used it and it complicated reproducible builds.

**Status convention extended:**

- `draft` — in-progress, **excluded** from the generated `patterns.json`. Currently applied to `checkbox.basic` and `checkbox.group` (authored but not yet published in the catalog).
- `beta` — published in the catalog. Default state.
- `stable` — promoted (not yet used).
- `deprecated` — retired; excluded from the generated `patterns.json`.

Per-pattern versions did not change in this release — the changes are infrastructure-only.

## 0.3.0 — 2026-06-28

Author-conventions tightening pass. No new patterns; no breaking changes to pattern IDs, URLs, or required behaviors.

**Conventions tightened across the corpus:**
- Don't bullets standardized to "Do not" form. Section heading remains `## Don'ts`.
- "(required)" inline labels removed — all Must Haves are required by definition.
- Bold removed from inline attribute references; emphasis is reserved for prose, not code tokens.
- Customizable sections recast using a preferred-vs-fallback framing where applicable (see Dialog Modal).
- Accessible-name boilerplate reframed across multiple patterns: soft "may serve as" / "may be added" phrasings in Must Haves replaced with conditional Musts ("When X, do Y").

**Components:**
- Button → 0.2.0 — accessible-name boilerplate reframed.
- Toggle Button → 0.2.0 — accessible-name boilerplate reframed.
- Link → 0.2.0 — accessible-name boilerplate reframed.
- Switch → 0.3.0 — accessible-name boilerplate reframed; "should have" tightened to "has" on the visible-label requirement.
- Dialog (Modal) → 0.2.0 — Customizable reframed to preferred-vs-fallback (`<dialog>` preferred, `<div role="dialog">` fallback with conditions); "(required)" inline labels removed; Must Haves flattened.
- Account Menu → 0.2.1 — bold removed from `aria-expanded` reference.

All other patterns received the corpus-wide typography normalization (Don't → Do not) without per-pattern semantic changes; no per-pattern bumps.

## 0.2.0 — 2026-06-05

Corpus strengthening from controlled experimentation, plus catalog corrections. No new patterns; no breaking changes to pattern IDs or URLs. Per-pattern versions are now recorded retroactively for the changes that landed in this release.

**Foundations:**
- Focus States: added a strongly recommended two-layer focus ring (2px ring inside a 4px white background extension) that remains visible against any surrounding surface; a verified simple outline remains acceptable.
- Heading Structure: footer link-group titles, when present, are `<h2>` headings.
- Non-text Contrast: corrected misplaced bullets in Don'ts and Acceptance Checks.

**Components:**
- Accordion → 0.1.1 — golden pattern notes that the demo's `<h3>` must match the surrounding heading hierarchy.
- Account Menu → 0.2.0 — `aria-expanded` on the trigger elevated to a hard gate (new Must Have, new Don't, strengthened acceptance check).
- Carousel (Dot Navigation) → 0.2.0 — non-visible slides must be unreachable by keyboard and screen readers (new Must Have + acceptance check); autoplay golden-pattern code cleaned up.
- Carousel (Thumbnail Navigation) → 0.2.0 — same non-visible-slides update.
- Collection Row → 0.2.0 — aliases expanded (product card grid, product cards, card row, media row); Don'ts clarified.
- Dialog (Modal) → 0.1.1 — golden pattern adds a Tab-wrapping fallback so focus stays contained even when no inert target exists.
- Channel Guide Grid → 0.2.0 — rows and cells now expose `aria-rowindex` / `aria-colindex` for lazy-loading correctness.
- Navigation Menu → 0.2.0 — logo carries `aria-current="page"` on the homepage when no explicit Home link exists.
- Switch → 0.2.0 — Customizable expanded to document base-element options (`div` / `button` / `input[type="checkbox"]` with `role="switch"`) and the emerging native HTML switch control.

**Catalog and formatting:**
- Every pattern page now states its canonical Pattern ID and summary in visible text directly under the title (chunk-resilient retrieval).
- The Components catalog page is generated from `patterns.json` at build time (no more manual drift).
- Five pattern files renamed to full-ID filenames (`accordion.basic.md`, `switch.basic.md`, `collection-row.basic.md`, `link.basic.md`, `toast.basic.md`). Page URLs unchanged — they derive from pattern IDs, not filenames.
- Golden patterns no longer import icon libraries; icon slots use placeholder spans corpus-wide.
- Typographic quotes normalized to straight quotes; all golden-pattern fences use `jsx`.

## 0.1.0 — 2026-02-17

Initial beta release of the Web / React accessibility pattern corpus.

**New patterns (beta, all at 0.1.0):**
- Accordion
- Account Menu
- Button
- Toggle Button
- Carousel (Dot Navigation)
- Carousel (Thumbnail Navigation)
- Channel Guide Grid
- Collection Row
- Dialog (Modal)
- Link
- Navigation Menu
- Select
- Switch
- Toast

All patterns carry `status: beta`. Breaking changes will be communicated via catalog version bumps and per-pattern major version bumps.
