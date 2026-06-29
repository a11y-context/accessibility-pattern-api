# Pattern Template

This file is the canonical structure for every pattern file in `patterns/<stack>/components/`. The section-by-section guidance below explains what each section is for; the bare template at the bottom is what to copy when starting a new pattern.

---

## How to use each section

### Frontmatter (required)

- `id` — pattern identifier (e.g., `button.basic`). Used as the URL slug and the catalog key.
- `stack` — platform path (e.g., `web/react`, `android/compose`, `ios/swiftui`)
- `status` — `stable` | `beta` | `deprecated`
- `tags` — short list of selection keywords surfaced to retrieval (e.g., `["button", "primary action", "form"]`)
- `summary` — one sentence describing the pattern, surfaced in the catalog page and in retrieval excerpts

### `# Pattern Title`

Short human title (e.g., "Basic Button", "Modal Dialog"). Matches `title` in `patterns.json`.

### `## Use When`

Selection criteria. The agent picks this pattern when a task matches one of these. Phrase as **conditions**, not generalities — "text-only or icon+text triggers that perform a synchronous action" instead of "for buttons."

### `## Do Not Use When`

Hard rejection criteria. Sibling patterns that look similar but require different handling go here ("for toggle behavior — use `button.toggle` instead"). Without these, the agent will blend variants.

### `## Must Haves`

Non-negotiable WCAG 2.2 AA behaviors. Each bullet should be **observable** — testable with a keyboard and a screen reader. Prefer behavioral statements ("Tab moves focus to the next focusable control") over structural ones ("must have an aria-label") when the behavior is what matters.

### `## Don'ts`

Hard constraints. Anti-patterns the agent must never produce.

### `## Golden Pattern`

The canonical reference implementation. Rules:

- **Ideal HTML / semantic structure.** Use the standard element or canonical ARIA composition. No bespoke wrappers.
- **Minimal JSX functionality — just enough to convey the UX and any dynamic behavior.** A state hook to show toggle behavior, an `onClick` with `alert()` to show the trigger fires, a conditional render to show what changes at runtime. The agent should be able to see what changes when the user interacts.
- **No styling except what is required for understanding the behavior.** Strip Tailwind, CSS modules, design-system classes, color values. Keep only structural styling that carries behavioral meaning (e.g., `aria-hidden` on icon spans, `sr-only` for visually-hidden text). The Golden Pattern showcases *semantic and behavioral correctness*, not visual design.
- **Use placeholders for things that would be real in production.** `[icon]` text or a `<span aria-hidden="true">` instead of importing an icon library; `alert()` or `console.log()` instead of a real handler; `// fetch data here` instead of a real fetch call.
- **Multiple short variants in one snippet are encouraged** when they belong to the same pattern — text-only, icon+text, and icon-only buttons in one Golden Pattern is better than three pattern files. Each variant should be minimal.

### `## Customizable` (optional)

Acceptable variations the pattern allows. Include this section **only** when the pattern has known acceptable variations that an implementer might reasonably choose between — for example, "icon-only buttons may use either `aria-label` or a visually-hidden text span; both are acceptable." Omit the section entirely if no meaningful variations exist; Must Haves cover the non-negotiables.

The section earns its place when the difference between "Must Have" and "personal preference" would otherwise be unclear to an implementer. If you find yourself writing "could also do X" in a Must Haves bullet, that's a Customizable item.

### `## Acceptance Checks`

Observable pass/fail behaviors. These double as a test specification for QA. Each bullet should be something a tester can verify with a keyboard + screen reader, with a clear pass criterion. Bullet form: "*Action* → *expected observable result*."

---

## Template (copy this into a new pattern file)

```
---
id: <required>
stack: <required>
status: stable | beta | deprecated
tags: []
summary: <one sentence>
---

# <Pattern Title>

## Use When
- 

## Do Not Use When
- 

## Must Haves
- 

## Don'ts
- 

## Golden Pattern

​```<language>
// canonical implementation
​```

## Customizable
- 

## Acceptance Checks
- 
```

(Delete the `Customizable` section if the pattern has no meaningful variations.)
