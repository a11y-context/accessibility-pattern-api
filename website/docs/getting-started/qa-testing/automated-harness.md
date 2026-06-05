---
title: Building an Automated Harness
---

# Building an Automated Harness

A robust accessibility harness is layered — each layer catches what the previous one can't. The corpus supplies the component-aware layers that generic tooling is missing.

## Layer 1 — Static lint

`eslint-plugin-jsx-a11y` at authoring and CI time. Catches structural mistakes in JSX before anything renders: missing `alt`, invalid ARIA attributes, interactive elements without keyboard handlers. Cheap, instant, shallow.

## Layer 2 — Runtime scans (axe-core)

[axe-core](https://github.com/dequelabs/axe-core) is the industry-standard open-source accessibility rules engine. It runs against the rendered DOM and reports WCAG violations with element-level detail. Integration points:

- **`jest-axe` / `vitest-axe`** — assert zero violations in component tests
- **`@axe-core/playwright`** — scan full pages in E2E tests
- **Lighthouse** — uses axe under the hood; useful for CI scoring
- **`pa11y`** — CLI sweeps across a sitemap

Run it on every PR. And know its boundary: automated rules catch roughly a third to half of real accessibility failures. A page with zero axe violations can still be unusable with a keyboard or a screen reader.

## Layer 3 — Component-aware behavioral assertions

This is where the corpus changes the picture. Most keyboard-facing Acceptance Checks translate directly into browser-automation assertions (Playwright or similar):

From the account menu pattern:
- Tab reaches the trigger; Enter opens; **`aria-expanded` flips to `"true"`**
- Tab moves into the first menu item; Tab from the last item exits and the menu closes
- Esc closes the menu **and focus returns to the trigger**

From the modal dialog pattern:
- Focus moves into the dialog on open; Tab and Shift+Tab stay inside
- Esc closes; **focus returns to the invoking element**
- Background content is not reachable while open

From the carousel pattern:
- Autoplay pauses when focus enters the region
- `prefers-reduced-motion: reduce` defaults the carousel to paused
- Non-visible slides are unreachable by keyboard

The harness shape: identify which patterns a page contains (by convention, annotation, or detection), then run that pattern's check suite against it. No generic tool can do this, because no generic tool knows the difference between a carousel and a collection row. The corpus does — that's the point.

## Layer 4 — Screen reader automation

[Guidepup](https://github.com/guidepup/guidepup) drives real VoiceOver and NVDA for announcement-level assertions ("the switch announces its name, role, and state"). Heavier and slower — reserve it for regression coverage of golden patterns rather than every PR.

## Layer 5 — Human AT verification

The residue automation can't reach: announcement quality, comprehension, real usability. Each pattern's Acceptance Checks double as the manual script, so human passes verify the same requirements the automation enforces.

## Roadmap

Planned for the corpus: per-pattern executable check suites — Playwright spec templates shipped alongside each golden pattern, so "add the pattern" and "add its tests" become the same step. The patterns aren't just generation guidance; they're the test spec.
