---
title: Verify It's Working
---

# Verify It's Working

After installing a skill, run this prompt in any UI project (note: it never mentions accessibility):

```
Add a toast notification that confirms when an item is saved.
```

## Pass criteria

The agent should:

1. **Retrieve the toast pattern before writing code** — observable in tool-use logs or the agent's own narration. If the skill's invocation directive is working, the agent reaches for it on this prompt.
2. **Mount the live region container at all times** in the generated component — not conditionally rendered when a toast appears.
3. **Announce the message via `role="status"`** — or the equivalent `aria-live="polite"` + `aria-atomic="true"` combination.
4. **Not move focus to the toast** — the user's focus stays where it was when the toast appeared.
5. **Auto-dismiss the toast** and clear the live region text afterward, so a screen reader doesn't re-announce stale content later.

If any of these are missing, the skill is installed but is not being invoked. Check that:

- The skill folder is at the path your AI tool expects (`.claude/skills/<name>/`, `.cursor/skills/<name>/`, etc.).
- The skill's `name` field in `SKILL.md` frontmatter matches the folder name.
- The agent's tool/skill listing shows the skill as available.

If invocation is the problem rather than the install, consider adding the [optional enforcement rule](/getting-started/ai-coding-agents/#optional-belt-and-suspenders-with-an-enforcement-rule) for guaranteed invocation.

## Other prompts to try

Once toast works, any of these should produce a result matching the corresponding pattern's Must Haves:

- "Build a modal dialog for editing a profile."
- "Add a button group for filtering products."
- "Create a hero carousel with three slides."
- "Add an accordion section for FAQ entries."
- "Render a navigation menu with a sub-menu for the Products section."

If the agent retrieves the relevant pattern in each case and the generated code passes a quick screen reader + keyboard check, the install is working as designed.
