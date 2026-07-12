# axe-a11y-context — runtime harness (v0.1 reference)

The corpus's `qa-catalog.json` tags every Must Have and Don't with the technique
that can verify it: **static** (a linter), **llm-eval** (a review agent), or
**runtime** (a rendered-and-exercised assertion). This directory is the reference
implementation of the **runtime** layer — the component-aware behavioral checks
that generic axe-core cannot perform, because axe does not know a given element is
supposed to *be* a modal dialog, a carousel, or a combobox.

## What's here

- [`dialog.modal/`](./dialog.modal/) — the first worked example. A Playwright
  spec whose tests are generated one-to-one from the `runtime`-tagged rules of
  `dialog.modal` in [`patterns/web/react/qa-catalog.json`](../patterns/web/react/qa-catalog.json),
  run against a native `<dialog>` golden fixture. Each test names the catalog
  rule it verifies.

## Run it

```bash
cd harness/dialog.modal
npm install
npx playwright install chromium   # first run only
npm test
```

The spec loads `dialog-modal.golden.html` (the native `<dialog>` + `.showModal()`
golden implementation). To run the same contract against **your** component,
point `page.goto(...)` in `dialog-modal.spec.js` at your rendered component's URL
— the assertions are the specification, independent of the implementation.

## How this maps to the catalog

`dialog.modal` has 28 classified rules; ~20 carry a `runtime` technique. The spec
covers the deterministic native-`<dialog>` subset — the six-behavior contract
(focus-in, trap, Escape, focus return, background inertness, scroll lock) plus the
`:modal` state, the `aria-labelledby` → visible-title link, the labelled close
control, reflow at a 320px viewport, and top-layer hit-testing. The
manual-`<div role="dialog">`-fallback rules are out of scope for the native golden
fixture (they exist to be run against a hand-built fallback).

This is a reference, not a published package yet — the point is to show the
catalog driving real, passing behavioral tests. Broader coverage (more patterns,
the ESLint/static layer, the axe-core plugin form) is on the QA roadmap.
