---
id: release-notes
title: Release Notes
slug: /release-notes
---

# Release Notes

## rev_2026-06-05 (catalog_revision rev_2026-06-05T12:00:00Z)

Corpus strengthening informed by controlled experimentation (AIML 2026 study), plus catalog corrections. No new patterns; no breaking changes to pattern IDs or URLs.

**Foundations:**
- Focus States: added a strongly recommended two-layer focus ring (2px ring inside a 4px white background extension) that remains visible against any surrounding surface; a verified simple outline remains acceptable.
- Heading Structure: footer link-group titles, when present, must be `<h2>` headings.
- Non-text Contrast: corrected misplaced bullets in Don'ts and Acceptance Checks.

**Components:**
- Account Menu: `aria-expanded` on the trigger elevated to a hard gate (bolded requirement, new Don't, strengthened acceptance check).
- Carousels (both): non-visible slides must be unreachable by keyboard and screen readers (new Must Have + acceptance check); autoplay golden-pattern code cleaned up.
- Collection Row: aliases expanded (product card grid, product cards, card row, media row); Don'ts clarified.
- Navigation Menu: logo carries `aria-current="page"` on the homepage when no explicit Home link exists.
- Switch: documented the customizable base element (`div`/`button`/`input[type="checkbox"]` with `role="switch"`) and the emerging native HTML switch control.
- Dialog (Modal): golden pattern adds a Tab-wrapping fallback so focus stays contained even when no inert target exists.
- Channel Guide Grid: rows and cells now expose `aria-rowindex`/`aria-colindex` for lazy-loading correctness.
- Accordion: golden pattern notes that the demo's `<h3>` must match the surrounding heading hierarchy.

**Catalog and formatting:**
- Every pattern page now states its canonical Pattern ID and summary in visible text directly under the title (chunk-resilient retrieval).
- The Components catalog page is generated from `patterns.json` at build time (no more manual drift).
- Five pattern files renamed to full-ID filenames (`accordion.basic.md`, `switch.basic.md`, `collection-row.basic.md`, `link.basic.md`, `toast.basic.md`). Page URLs are unchanged — they derive from pattern IDs, not filenames.
- Golden patterns no longer import icon libraries; icon slots use placeholder spans corpus-wide.
- Typographic quotes normalized to straight quotes; all golden-pattern fences use `jsx`.

Per-pattern versions remain `0.1.0` for this revision.

## rev_2026-02-17 (catalog_revision rev_2026-02-17T18:00:00Z)

Initial beta release of the React (Web) accessibility pattern corpus.

**New patterns (beta):**
- Accordion
- Basic Button
- Toggle Button
- Carousel with Dot Navigation
- Carousel with Thumbnail Navigation
- Collection Row
- Dialog (Modal)
- Channel Guide Grid
- Link
- Switch
- Toast

All patterns are versioned at `0.1.0` and carry `status: beta`.
Breaking changes will be communicated through catalog revision bumps.
