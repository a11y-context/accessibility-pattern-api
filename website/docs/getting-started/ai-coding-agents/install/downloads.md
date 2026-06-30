---
title: Downloads
---

# Downloads

Ready-to-install skills for connecting your AI coding agent to the A11y Context corpus. Download a ZIP, unzip it into your AI tool's skills directory, and the skill is ready to use — the agent picks it up automatically when generating UI.

## How to install

Each download is a folder containing a `SKILL.md` plus any supporting files. The skill's canonical name (declared in its frontmatter) is also the folder name, so the install target is straightforward:

| AI tool | Install location |
|---|---|
| Claude Code | `.claude/skills/` |
| Cursor | `.cursor/skills/` |
| GitHub Copilot (VSCode) | `.github/skills/` |
| Opencode | `.opencode/skills/` |
| Codex | `.agents/skills/` |

```bash
unzip a11y-context-web-react-http.zip -d .claude/skills/
```

For org-level distribution, point your internal skills registry (or a sanctioned fork) at the [a11y-context-skills repository](https://github.com/a11y-context/a11y-context-skills) directly rather than redistributing the ZIP.

## Web / React

Two variants. Pick based on whether the agent has network access and whether you want freshness-by-default.

### A11y Context — Web React (HTTP)

[**Download a11y-context-web-react-http.zip**](pathname:///downloads/a11y-context-web-react-http.zip) · [View source](https://github.com/a11y-context/a11y-context-skills/tree/main/skills/web-react/http)

The agent fetches patterns from this site at generation time. One file, no bundled corpus, always current.

- **Always current** — pattern updates land on every consumer's next request; no manual refresh
- **Smallest footprint** — a single `SKILL.md` file in your repo; the corpus lives on the docs site
- **30–40% cheaper in retrieval-side tokens** than alternative transports in controlled testing

**Needs:** network access from the agent (HTTP fetch to `https://a11y-context-project.vercel.app`).

### A11y Context — Web React (Local)

[**Download a11y-context-web-react-local.zip**](pathname:///downloads/a11y-context-web-react-local.zip) · [View source](https://github.com/a11y-context/a11y-context-skills/tree/main/skills/web-react/local)

The agent reads patterns from a copy of the corpus bundled with the skill. Fully offline.

- **Works offline** — no network dependency; survives air-gapped or network-restricted environments
- **Fastest retrieval** — local disk reads, no HTTP latency
- **Pinned corpus version** — reproducible builds and predictable agent behavior; ideal when an organization wants control over when pattern updates roll out

**Needs:** periodic refresh as the upstream corpus evolves. The bundled corpus carries a `catalog_revision`; check [Release Notes](/web/react/release-notes) and re-download to update.

## iOS / SwiftUI

*Coming soon.*

## Android / Compose

*Coming soon.*

## Other consumption paths

- **Browse the corpus directly:** [Web / React patterns](/web/react). Useful for QA testing, manual reference, and custom integrations.
- **Clone the skills repo:** `git clone https://github.com/a11y-context/a11y-context-skills` — and copy any skill folder into your AI tool's skills directory.
- **Clone the corpus repo:** `git clone https://github.com/a11y-context/accessibility-pattern-api` for the raw markdown patterns.

## Verifying installation

See [Verify it's working](/getting-started/ai-coding-agents/verification) for the test prompt and pass criteria.
