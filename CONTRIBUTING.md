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

## Scope of the public corpus

The corpus in this repository is intentionally **generic** and **publicly derivable**. It exists to serve any consumer — independent developers, design systems, AI coding assistants, enterprise teams — without entangling any one organization's internal practices.

### What belongs in the public corpus

- Component patterns derived from WCAG, WAI-ARIA, the ARIA Authoring Practices Guide (APG), and other public normative sources
- Implementation patterns common to the public web / React / Android / iOS ecosystems
- Foundational accessibility rules (focus management, color contrast, semantics, screen reader behavior, keyboard interaction)
- Generic golden patterns built from standard HTML, ARIA, or framework-standard components
- General "Use When" / "Do Not Use When" criteria phrased without reference to any specific product, team, or organization

### What does NOT belong in the public corpus

- References to a specific organization's design system, component library, or framework wrapper
- Internal product names, team names, application names, or infrastructure references
- Content lifted or paraphrased from a proprietary internal knowledge base, Confluence space, wiki, or internal docs
- Organization-specific conventions ("the way we do it here")
- Patterns whose justification depends on internal context unavailable to the public

**Rule of thumb:** if publishing the contribution as a public blog post tomorrow would require an internal review at your organization, it does not belong here. If you would happily cite the contribution as your own published work without checking with anyone, it does.

### Where organization-specific content does belong

Enterprise consumers should **fork this repository** into their own infrastructure and layer organization-specific content on top of the public corpus there. The public corpus is intended as the upstream baseline; downstream forks can extend it with org-specific patterns, design-system component references, and internal conventions without ever pushing that content back to the public repo.

Generic improvements discovered while building an org-specific overlay (a new universally-applicable WCAG-derived pattern, a foundational rule that applies regardless of design system) are welcomed back upstream, subject to the same scope rules above and with appropriate clearance from your organization.

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
