---
title: Install the Skill
---

# Install the Skill

The skill is the brain of every integration: it carries the invocation directive (so the agent reaches for the corpus on its own), the selection logic (decompose the request, pick patterns via Use When / Do Not Use When), and the retrieval step. There's **one skill variant per retrieval method** — they differ only in where the skill's retrieval step goes.

| Skill variant | Retrieval | Download | Extra setup |
|---|---|---|---|
| **HTTP** (recommended) | fetches pattern pages from this site | [ZIP ↓](#a11y-context--web-react-http) | none |
| **Local** | reads a bundled copy from disk | [ZIP ↓](#a11y-context--web-react-local) | none |
| **MCP** | calls the MCP server's tools | [ZIP ↓](#a11y-context--web-react-mcp) | install the [MCP server](./mcp-server) |
| **RAG** | queries your vector DB | [ZIP ↓](#a11y-context--web-react-rag) | [index the corpus + fill config](./custom) |

**HTTP and Local** are self-contained — download, unzip, done. **MCP and RAG** add a retrieval mechanism the skill points at (a server, or your vector DB), so each has an extra setup step on its own page. All four are the same brain; only the retrieval step differs.

## How to install

Every variant installs the same way — unzip into your tool's skills directory. MCP and RAG then need their one extra retrieval-setup step (the server, or the config + indexing), linked in the table above.

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

The unzipped skill sits in your tool's skills directory:

```text
your-project/
├── .claude/
│   └── skills/
│       └── a11y-context-web-react-http/
│           └── SKILL.md
├── src/
└── package.json
```

For org-level distribution, point your internal skills registry (or a sanctioned fork) at the [a11y-context-skills repository](https://github.com/a11y-context/a11y-context-skills) directly rather than redistributing the ZIP.

## Web / React

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

### A11y Context — Web React (MCP)

[**Download a11y-context-web-react-mcp.zip**](pathname:///downloads/a11y-context-web-react-mcp.zip) · [View source](https://github.com/a11y-context/a11y-context-skills/tree/main/skills/web-react/mcp)

The skill (the brain) whose retrieval step calls the MCP server's tools. The skill selects patterns; the server retrieves them.

**Needs:** the [A11y Context MCP server](./mcp-server) configured in your MCP client. Install the skill and the server together.

### A11y Context — Web React (RAG)

[**Download a11y-context-web-react-rag.zip**](pathname:///downloads/a11y-context-web-react-rag.zip) · [View source](https://github.com/a11y-context/a11y-context-skills/tree/main/skills/web-react/rag)

The skill plus an `a11y-context.config.json` scaffold. Fill in your vector-DB endpoint and index name, then the skill queries your retrieval system.

**Needs:** the A11y Context corpus indexed into your retrieval system, and the config filled in. See [Custom / Enterprise RAG](./custom).

## iOS / SwiftUI

*Beta — coming soon.*

## Android / Compose

*Coming soon.*

## Other consumption paths

- **Browse the corpus directly:** [Web / React patterns](/web/react). Useful for QA testing, manual reference, and custom integrations.
- **Clone the skills repo:** `git clone https://github.com/a11y-context/a11y-context-skills` — and copy any skill folder into your AI tool's skills directory.

## Verifying installation

See [Verify it's working](/getting-started/ai-coding-agents/verification) for the test prompts and pass criteria.
