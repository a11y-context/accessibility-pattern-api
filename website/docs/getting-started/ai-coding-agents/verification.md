---
title: Verify It's Working
---

# Verify It's Working

After installing a skill (or connecting the MCP server), confirm the agent is actually retrieving patterns before it writes code. The prompts below escalate — start with Level 1, and if it passes, work up. None of them mention accessibility, which is the point: the skill's invocation directive should fire on the shape of the task alone.

## Level 1 — single component (~30 seconds)

Run this in any UI project:

```
Add a toast notification that confirms when an item is saved.
```

The agent should:

1. **Retrieve the toast pattern before writing code** — observable in tool-use logs or the agent's own narration. If invocation is working, the agent reaches for it on this prompt.
2. **Mount the live region container at all times** — not conditionally rendered when a toast appears.
3. **Announce the message via `role="status"`** — or the equivalent `aria-live="polite"` + `aria-atomic="true"`.
4. **Not move focus to the toast** — the user's focus stays where it was.
5. **Auto-dismiss and clear the live region text** afterward, so a screen reader doesn't re-announce stale content.

If any are missing, the skill is installed but not being invoked — see [Troubleshooting](#if-it-didnt-work) below.

## Level 2 — a focus-critical component (~1 minute)

```
Build a modal dialog for editing a profile.
```

Expect the agent to retrieve the **dialog.modal** pattern and produce:

- A native `<dialog>` opened with `.showModal()` (not a bare `<div>` overlay)
- Focus moving into the dialog on open, trapped while open, restored to the trigger on close
- Escape closing the dialog
- An accessible name via `aria-labelledby`
- Background content inert while open

One pattern, but a demanding one — this is where a non-invoked agent visibly falls short (it'll hand-roll a `<div>` overlay with no focus management).

## Level 3 — multi-component build (~10 minutes dev time)

```
Build a product page: a horizontally scrollable row of product cards,
a details modal that opens when a card is activated, and a toast that
confirms when a product is added to the cart.
```

This is the one that demonstrates **selective retrieval** working. Expect the agent to:

- Retrieve **collection-row**, **dialog.modal**, **button**, and **toast** — and *nothing else* (it should not pull the channel guide grid, the carousel, or unrelated patterns)
- Apply each pattern's Must Haves and avoid its Don'ts
- Produce a page where: the card row is a single-focus-stop list with paging, activating a card opens a focus-trapped modal, closing the modal restores focus to the originating card, and the add-to-cart toast announces without stealing focus

If the agent retrieves exactly the relevant patterns and skips the irrelevant ones, selective retrieval is working as designed — the corpus is scoping context to the task instead of dumping everything.

## Other single-component prompts to spot-check

Each should produce code matching the corresponding pattern's Must Haves:

- "Add a button group for filtering products." → button
- "Create a hero carousel with three slides." → carousel.dots
- "Add an accordion section for FAQ entries." → accordion.basic
- "Render a navigation menu with a sub-menu for the Products section." → navigation-menu.basic
- "Add an on/off setting for dark mode." → switch.basic

## If it didn't work

If the agent skips retrieval, the skill is installed but not being invoked. Check:

- The skill folder is at the path your AI tool expects (`.claude/skills/<name>/`, `.cursor/skills/<name>/`, etc.).
- The skill's `name` field in `SKILL.md` frontmatter matches the folder name.
- The agent's tool/skill listing shows the skill as available.

If install is correct but invocation is inconsistent, add the [optional enforcement rule](/getting-started/ai-coding-agents/#optional-belt-and-suspenders-with-an-enforcement-rule) for guaranteed invocation.
