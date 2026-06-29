# Contributing to A11y Context

Thanks for considering a contribution. This document covers what belongs in the public corpus, the license terms your contribution will be released under, and the technical rules for pattern files.

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

The canonical format for every pattern file is `schema/pattern-template.md`. Follow it exactly. Existing patterns under `patterns/web/react/components/` are good shape references.

---

## Pattern technical rules

These rules apply to every pattern file in `patterns/<stack>/components/`.

1. Follow `pattern-template.md` exactly.
2. Golden Pattern code must be runnable with placeholders.
3. Must Haves must be behavioral and testable.
4. No opinionated styling requirements.
5. Do not invent ARIA beyond canonical pattern guidance.
6. Every pattern must include Acceptance Checks.

## Review criteria

- Is the pattern minimal?
- Is it semantically correct?
- Is focus behavior fully handled?
- Would this pass keyboard + screen reader testing?

## Catalog update reminder

When adding or renaming a pattern, also update `patterns/<stack>/patterns.json`. The Docusaurus sidebar and the website's component gallery are generated from that file.
