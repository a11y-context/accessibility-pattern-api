---
title: OpenAI Assistants (In development)
---

# OpenAI Assistants

**Status: 🟡 In development.** Planned to ship as an installer CLI that uploads the current corpus release to an OpenAI Assistants file store and configures the assistant with the invocation directive, plus a sample project demonstrating end-to-end integration.

## What it will do

- **`@a11y-context/openai-assistant-installer`** — a one-shot CLI that creates an OpenAI Assistant, uploads the current corpus release to its file store, attaches file search, injects the invocation directive into the assistant's instructions, and returns the Assistant ID.
- **Sample project** — Node.js Express app calling the Assistant on a UI-generation prompt, verifying selection + retrieval + Golden Pattern application end to end.
- **Corpus version pinning** — installer accepts a `catalog_revision` flag so teams can pin to a specific release for reproducibility.

## Rough shape

```bash
npx @a11y-context/openai-assistant-installer \
  --api-key $OPENAI_API_KEY \
  --stack web/react \
  --model gpt-5
```

Returns:

```
Assistant created: asst_xxx
Files uploaded: 25 patterns, 1 Foundations (catalog_revision 0.4.7)
Instructions: invocation directive attached
```

## Available today: custom integration

While the managed installer is in development, the [Custom integration](./custom) path works today — the corpus is Apache-2.0 licensed and publicly accessible. Any team on the OpenAI stack can point their existing file-upload flow at the corpus repository and configure their assistant manually.

Track progress on the managed installer: [issue #TBD](https://github.com/a11y-context/accessibility-pattern-api/issues).
