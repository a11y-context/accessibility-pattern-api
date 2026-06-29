# Contributing to A11y Context

Thanks for considering a contribution. This document covers the license terms, the scope of the public corpus, how to author a pattern, and how to version your changes.

---

## License and contribution terms

This project is licensed under **Apache License 2.0** (see `LICENSE` at the repo root).

By submitting a contribution (PR, issue, patch, documentation change), you confirm that:

1. The contribution is your own work, or you have permission to submit it under Apache 2.0.
2. You agree to license the contribution under Apache 2.0 — the same terms as the rest of the project.
3. The contribution does **not** contain proprietary, confidential, or internal material from any employer, client, or third party that you do not have explicit permission to release publicly under Apache 2.0.

If you are contributing as part of work at another organization, confirm with that organization (legal, OSPO, or equivalent) before submitting. Most companies have an open-source contribution policy.

---

## Scope

The corpus is WCAG-derived and standards-based. Contributions should be:

- Component patterns derived from WCAG, WAI-ARIA, the ARIA Authoring Practices Guide (APG), and other public normative sources
- Foundational accessibility rules (focus management, color contrast, semantics, screen reader behavior, keyboard interaction)
- Golden Patterns built from standard HTML, ARIA, or framework-standard primitives

The canonical format for every pattern file is `schema/pattern-template.md`. The canonical conventions for filling in each section, prose voice, and boilerplate formulas live in `schema/style-guide.md`. Read both before authoring or revising a pattern. Existing patterns under `patterns/web/react/components/` are good shape references.

---

## Authoring a new pattern — high-level checklist

Full checklist with rules in `schema/style-guide.md` § Definition of done.

1. Pattern doc at `patterns/<stack>/components/<id>.md` (filename = full ID). All sections per the template in the canonical order.
2. `patterns.json` entry with `selection_excerpt` copied verbatim from the doc.
3. Catalog regeneration runs in `prebuild`; manual via `npm run gen:gallery` from `/website`.
4. Release notes entry under the bumped catalog version + `catalog_revision` bump (see Versioning below).
5. Lab demo in [`a11y-pattern-lab`](https://github.com/jsweetdude/a11y-pattern-lab), AT-tested.
6. Site builds clean.

---

## Pattern technical rules

Brief checklist; full conventions in `schema/style-guide.md`.

1. Follow `schema/pattern-template.md` (format) and `schema/style-guide.md` (conventions) exactly.
2. Golden Pattern code must be runnable with placeholders.
3. Must Haves must be behavioral and testable. All Must Haves are required; do not phrase them with "may", "should", or "recommended" — those phrasings belong in Customizable.
4. No opinionated styling requirements in the Golden Pattern.
5. Do not invent ARIA beyond canonical pattern guidance.
6. Every pattern must include Acceptance Checks.

---

## Versioning

The corpus uses semver (`MAJOR.MINOR.PATCH`) for both the catalog as a whole and each pattern individually.

### Catalog version

`catalog_revision` in `patterns.json` is bumped on **every** release that ships any change, including typography-only sweeps. Catalog versions are dated in `release-notes.md`.

### Per-pattern versions

Each pattern's `latest_version` in `patterns.json` is bumped only when its **semantic content** changes:

- **MAJOR (X+1.0.0)** — a Must Have is removed or fundamentally changed, the scope of `Use When` narrows, the pattern ID is renamed, or any breaking change for consumers
- **MINOR (Y+1.0)** — a new Must Have is added, a Customizable item is added, an Acceptance Check is added, `selection_excerpt` aliases are expanded, an existing requirement is semantically clarified or reframed
- **PATCH (Z+1)** — typo, wording fix, golden-pattern code clarification with no requirements change, single-pattern formatting fix
- **No bump** — pure typography sweeps applied corpus-wide (e.g., a corpus-wide "Don't" → "Do not" normalization). These bump only `catalog_revision`.

### Every corpus PR includes

1. Appropriate `latest_version` bumps in `patterns.json` for each touched pattern.
2. A `catalog_revision` bump.
3. A new entry in `release-notes.md` under the bumped catalog version, with one line per changed pattern explaining the bump and the reason.

PRs without aligned version bumps and release-notes entries will be flagged in review.

### Working with Claude as your authoring pair

If you use Claude Code (or an equivalent AI coding assistant) to author or revise patterns, the assistant should surface a versioning proposal for every corpus edit using the form **"X.Y.Z because <reason>"** and ask for your approval before suggesting a commit. The protocol is enforced for John's own sessions; external contributors are encouraged to follow the same shape.

---

## Where other contributions belong

- **New accessibility patterns, pattern revisions, foundational rules** → this repo, this CONTRIBUTING.
- **Live testing demos** → [`jsweetdude/a11y-pattern-lab`](https://github.com/jsweetdude/a11y-pattern-lab).

### What about the skills repo?

[`a11y-context/a11y-context-skills`](https://github.com/a11y-context/a11y-context-skills) ships the installable artifacts (skill folders for various AI coding agents) and bundles a snapshot of this corpus for the offline-local skill variant. It is **downstream of this repo** — bundled content is synced by the maintainer as part of each release, not edited directly.

If you are contributing a pattern change here, do **not** also open a PR against `a11y-context-skills`. The maintainer will pick up the change as part of the next release sync. If you spot a bug in the skill infrastructure itself (the SKILL.md instructions, install layout, etc.), open an issue there; that part of the repo is open to contribution.
