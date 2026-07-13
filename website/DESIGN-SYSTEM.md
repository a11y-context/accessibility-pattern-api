# A11y Context — Design System

The design system for the A11y Context documentation site. **Standalone** — it does not
inherit from or override any other system. Source of record: the Version E mockups
(`design-mockups/vE-refined/`). This site must practice what it preaches: every token and
component below meets WCAG 2.2 AA in both themes.

---

## 1. Design intent

Clarity-first, engineered, confident. A grotesk display face over a humanist body face,
generous negative space, restrained use of a single violet accent for actions and emphasis.
Not decorative, not playful, not enterprise-gray. When in doubt: remove decoration, add
space, let type and hierarchy do the work.

Reads as a serious developer-docs tool (Radix / Stripe / Linear family), not a charity or
medical brand.

---

## 2. Color tokens

### Light (default)

```css
--bg:          #F5F6F8;  /* page canvas */
--surface:     #FFFFFF;  /* cards, panels */
--ink:         #0E1116;  /* primary text */
--muted:       #5A6270;  /* secondary text, section intro lines */
--border:      #E2E4E8;  /* lines, dividers, card borders */
--field-bg:    #FBFBFC;  /* inputs */

--accent:      #5B3FD6;  /* actions, emphasis, active states, the mark */
--accent-hover:#4E36C0;
--accent-soft: #ECEAFB;  /* accent tint backgrounds, badges */
--link:        #4A34B8;  /* inline link TEXT (AA on white; do NOT use #5B3FD6 for body links) */

--success:#138A5E;  --warning:#B7791F;  --error:#C23B2E;  --info:#1E6FA8;
```

### Dark

```css
--bg:          #0D1117;
--surface:     #161B22;
--ink:         #E8EBF0;
--muted:       #8B95A3;
--border:      #262C36;
--field-bg:    #0F141B;

--accent:      #9C82F5;
--accent-hover:#B9A6FA;
--accent-soft: #23203A;
--link:        #B9A6FA;
```

**Accent rules:** violet on surfaces for primary actions, active nav, and emphasis only.
Inline body links use `--link` (the deeper violet), never the raw accent. Never signal
state with color alone — pair with text, icon, or shape.

**Link decoration:** inline body links are **underlined by default**, not on hover only —
color alone must never be the sole affordance. The underline is scoped to rendered prose
(`.markdown a`); navigation, sidebar, TOC, and breadcrumb chrome and custom landing links
(cards, buttons) are excluded and manage their own affordance (active nav uses the straight
underline in §6). Hover changes the color to `--accent` but leaves the underline in place.

---

## 3. Typography

Google Fonts: **Schibsted Grotesk** (display/headings, 600–800), **Hanken Grotesk** (body +
all labels/eyebrows, 400–600), **JetBrains Mono** (code ONLY).

**No monospace for labels, eyebrows, or UI chrome.** Mono is reserved exclusively for code
blocks and inline `<code>`. (This is the deliberate departure from a mono-label convention;
it is a defining rule of this system.)

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / hero | Schibsted | 800 | tight tracking |
| H1 | Schibsted | 700 | large |
| H2 | Schibsted | 600 | |
| Eyebrow | Hanken | 700 | small, BOLD, sans (e.g. "Web / React · WCAG 2.2 AA") |
| Section intro line | Hanken | 400 | `--muted`, sits under an H2 (see §6) |
| Body | Hanken | 400 | 16px, 1.55 line-height |
| Label / metadata | Hanken | 500–600 | sans, NOT mono |
| Code | JetBrains Mono | 400–500 | code blocks + inline `<code>` |

---

## 4. Spacing, radius, borders

- Spacing: 8pt system — `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64`.
- Radius: `--radius-sm: 6px` · `--radius-md: 8px` · `--radius-lg: 12px` · pill `999px`.
- Borders: 1px solid `--border` default. Prefer borders over shadows.

---

## 5. Focus & motion

- **Surface-aware double focus ring** on `:focus-visible` only. Light surface: inner white,
  outer accent (`0 0 0 2px #fff, 0 0 0 4px var(--accent)`); dark surface: inner accent, outer bg.
- Honor `prefers-reduced-motion`. Transitions subtle (~150ms interactions, ~250ms theme).

---

## 6. Components

**Navbar** — fixed to the top, pinned on scroll. Brand mark (violet) + wordmark "A11y
Context" at weight 700 with a `v0.5` pill immediately right of the wordmark. Links: `Getting
Started`, `React (Web)`, `SwiftUI (iOS)` — active link marked with a **straight** underline
(not a curved bottom border). Right side, in order: search combobox → GitHub icon → dark-mode
toggle.

**Search** — an accessible ARIA 1.2 combobox: case-insensitive **prefix** match over page
titles; full keyboard (Arrow keys, Enter, Escape; `aria-expanded`, `aria-activedescendant`,
roles listbox/option; visible focus). Titles formatted `{Name} · {Platform}` for components,
`{Title}` for section pages.

**Sidebar (component docs)** — platform label (e.g. "React (Web)") at the top; `Overview`,
`Foundations`, then the components list. Active item marked with a **curved (rounded)
left-border** accent bar. Clear vertical gap between `Foundations` and the components group.
No horizontal divider rules.

**Table of contents** — right rail, minimal. No extra "conformance/source/corpus" box.

**Code block** — toolbar chrome: filename (e.g. `AccordionItem.tsx`) + language badge (`TSX`)
on the LEFT; line-wrap toggle + copy button on the RIGHT. No "Tested" badge. Surfaces:
**dark mode = `#0B0B0C`**; **light mode = `#F0F0F3`** (1px `--border`, default text `#1F2328`).
Light-mode syntax palette (all ≥4.5:1 on `#F0F0F3`):

```
keyword #6639BA · function #0550AE · string #116329 · tag #0E7490
attribute #8A4600 · number/const #0A3069 · comment #59636E · text/punct #1F2328
```

**Component (pattern) page** — section order: **Selection** → **Must Haves** → **Donts** →
**Customizable** → **Golden Pattern** → **Acceptance Checks**. Breadcrumb is `Components /
{Name}` (no platform segment). Eyebrow bold sans. Each H2 carries a **website-only** muted
intro line (below) — these are presentational for human readers and are NOT part of the
pattern's Markdown source.

- Selection: cards (two stacked blocks — "Use when" / "Try a different component when"). Intro:
  "The criteria an agent checks before retrieving this component."
- Must Haves: flat text. Intro: "Non-negotiable structure. Every generated instance must satisfy these rules."
- Donts (no apostrophe): flat text. Intro: "Avoid these accessibility and UX barriers."
- Customizable: flat text. Intro: "Alternatives and options that give the AI agent some room to move."
- Golden Pattern: the code block. Intro: "The tested reference implementation. Agents start from this shape and adapt to the developer's codebase and context."
- Acceptance Checks: flat text with checkmark markers. Intro: "The component's test spec — an optional body of checks for verification."

Only **Selection** uses cards; the other sections are flat text on the page background.

**Getting Started** — a multi-page section with its own LEFT sidebar (What This Is · Why This
Works · For AI Coding Agents ▸ Overview / Retrieval Options / Downloads · For QA & Testing
[In progress]). Because the section has a left sidebar, no right-hand TOC. (Note: no
enforcement-rule page yet — that card component style is kept for future reuse.)

**Home** — left-aligned hero; proof stat framed as before→after ("Manual accessibility pass
rate: 63% → 90%", "axe-core violations: −84%"); how-it-works three steps; framework cards
(React (Web) — Available; SwiftUI (iOS) — Beta; Compose (Android) — Coming soon).

---

## 7. Accessibility (non-negotiable — the site is the proof)

- All text ≥ AA contrast (4.5:1 body, 3:1 large/graphical) in **both** themes.
- Visible `:focus-visible` on every interactive element (the double ring above).
- Never color-alone; honor `prefers-reduced-motion`; real semantic HTML and heading order.
