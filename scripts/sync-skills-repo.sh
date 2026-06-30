#!/usr/bin/env bash
#
# Syncs the corpus content from this repo into a11y-context/a11y-context-skills.
# Runs as a GitHub Action on push to main when patterns/ changes (see
# .github/workflows/sync-skills.yml). Authentication uses a fine-grained PAT
# stored in the SKILLS_REPO_TOKEN secret.
#
# What gets synced:
#   - patterns.json → skills/web-react/{local,http}/patterns.json
#   - global/global_rules.md → skills/web-react/{local,http}/global_rules.md
#   - Each registered pattern's .md (per patterns.json source.path) →
#     skills/web-react/local/components/
#
# Patterns with status: draft or deprecated are excluded from patterns.json
# already, so they don't appear in source.path entries and won't be synced.

set -euo pipefail

if [[ -z "${SKILLS_REPO_TOKEN:-}" ]]; then
  echo "::error::SKILLS_REPO_TOKEN secret is not set"
  exit 1
fi

CORPUS_DIR="${GITHUB_WORKSPACE:-$(pwd)}/patterns/web/react"
SKILLS_DIR="${RUNNER_TEMP:-/tmp}/a11y-context-skills"
SKILLS_REPO_URL="https://x-access-token:${SKILLS_REPO_TOKEN}@github.com/a11y-context/a11y-context-skills.git"

echo "Cloning a11y-context-skills..."
git clone --depth 1 "$SKILLS_REPO_URL" "$SKILLS_DIR"

cd "$SKILLS_DIR"
git config user.name "a11y-context-bot"
git config user.email "a11y-context-bot@users.noreply.github.com"

LOCAL_DIR="$SKILLS_DIR/skills/web-react/local"
HTTP_DIR="$SKILLS_DIR/skills/web-react/http"

echo "Syncing patterns.json + global_rules.md to both variants..."
cp "$CORPUS_DIR/patterns.json" "$LOCAL_DIR/patterns.json"
cp "$CORPUS_DIR/patterns.json" "$HTTP_DIR/patterns.json"
cp "$CORPUS_DIR/global/global_rules.md" "$LOCAL_DIR/global_rules.md"
cp "$CORPUS_DIR/global/global_rules.md" "$HTTP_DIR/global_rules.md"

echo "Refreshing local-variant components/ from registered patterns..."
rm -rf "$LOCAL_DIR/components"
mkdir -p "$LOCAL_DIR/components"

mapfile -t SOURCE_PATHS < <(jq -r '.patterns[].source.path' "$CORPUS_DIR/patterns.json")
for source_path in "${SOURCE_PATHS[@]}"; do
  filename=$(basename "$source_path")
  cp "$CORPUS_DIR/$source_path" "$LOCAL_DIR/components/$filename"
done
echo "Copied ${#SOURCE_PATHS[@]} component files."

echo "Checking for changes..."
git add -A
if git diff --cached --quiet; then
  echo "No changes to sync. Done."
  exit 0
fi

CATALOG_REVISION=$(jq -r '.catalog_revision' "$CORPUS_DIR/patterns.json")
SOURCE_COMMIT="${GITHUB_SHA:-unknown}"
SHORT_COMMIT="${SOURCE_COMMIT:0:7}"

git commit -m "Sync to corpus ${CATALOG_REVISION} (${SHORT_COMMIT})

Auto-synced from accessibility-pattern-api@${SHORT_COMMIT}.
Catalog revision: ${CATALOG_REVISION}.
Component count: ${#SOURCE_PATHS[@]}."

echo "Pushing..."
git push

echo "Sync complete."
