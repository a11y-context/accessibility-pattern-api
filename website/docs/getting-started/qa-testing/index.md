---
title: QA & Accessibility Testing
---

# QA & Accessibility Testing

**The corpus doubles as a machine-readable test specification.** Every pattern's Must Haves, Don'ts, Golden Pattern, and Acceptance Checks define what "correct" looks like for that component — not just "no WCAG violations in the DOM" (what generic tools like axe-core check) but "the component's behavior contract holds" (what generic tools can't check).

Different rules need different verification techniques. A well-designed harness routes each rule to the cheapest layer that can actually verify it.

## The verification framework

Every Must Have and Don't in the corpus is tagged with one of three verification techniques:

- **Static** — structural markers checkable from source (element type, attribute presence, ID reference). Runs in a linter on every save, or in CI on every commit. Fast, cheap, catches "you forgot `aria-label`."
- **LLM evaluation** — semantic judgment on the code (does the accessible name describe the action? does the ARIA role match the interaction?). Runs in a PR review agent. Medium cost, catches "you have an `aria-label` but it says the wrong thing."
- **Runtime** — behavior observable only in a rendered environment (focus indicator visible, `aria-pressed` reflects state, Escape closes the dialog). Compiles to Playwright / DOM assertions on CI. Slower, catches "the code looks right but doesn't behave right."

Same corpus, three verification cost tiers, each rule routed to the cheapest layer that can verify it.

## Available today

**Manual testing.** Every pattern's Acceptance Checks are a ready-made keyboard + screen-reader verification protocol. A tester runs each pattern's checks top to bottom against the rendered component. Zero tooling required, works today.

**Generic axe-core.** Standard `axe.run(page)` catches the ~40% of accessibility failures that are structural (missing labels, invalid ARIA, contrast). This is the layer generic tooling already covers well; the corpus complements it, doesn't replace it.

## In development

**`axe-a11y-context`.** An axe-core plugin ecosystem that dispatches each pattern's rules to the appropriate verification technique and reports findings alongside axe's generic WCAG output.

Same command developers already run:

```js
const results = await axe.run(page);
```

Same tool. New signal: component-aware behavioral checks — the ~60% of accessibility failures generic axe misses because it doesn't know what the component is supposed to do.

Ships in three forms:

- **axe-core plugin** — adds pattern-derived rules to `axe.run()`.
- **ESLint variant** — the static-analyzable rules also compile to ESLint plugin form for author-time catching, before the code ever renders.
- **GitHub Action** — runs the full check set on rendered PR previews, posts inline summary comments categorized by verification layer.

**Categorized rule catalog.** Building `axe-a11y-context` requires classifying every corpus rule by verification technique. That classification ships as `qa-catalog.json` — a machine-readable artifact alongside `patterns.json` — that consumers can also use directly to build their own harnesses. **[Browse the live catalog →](./catalog)** — every published web/react Must Have and Don't, tagged and filterable by technique.

## On the roadmap

**Pattern-native review agents.** Because the corpus is structured and retrievable, a review agent can identify the components in a diff, retrieve their specifications, and evaluate the diff against them. Post-generation validation using the same specification that guided generation. Same rules enforced at both ends of the lifecycle — one source of truth, checked twice.

The generation-side skill catches what it can before code exists; the review-side agent catches what slipped through. Together they close the loop that generic post-hoc tooling can only half-open.

**Playwright spec templates** shipped alongside each golden pattern, so "add the pattern" and "add its tests" become the same step for teams that want per-pattern runtime coverage without building it themselves.

## Where testing fits

Testing is the complement to generation-time guidance, not a replacement for it. Issues caught after generation carry remediation cost: architectural problems (a missing focus-management model, the wrong interaction pattern) are rebuilds, not patches. Prevent what you can at generation time (the [AI coding agents path](/getting-started/ai-coding-agents/)); verify everything afterward with the same specification, so both layers enforce identical requirements.
