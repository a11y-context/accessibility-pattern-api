#!/usr/bin/env bash
#
# Syncs the corpus content from this repo into a11y-context/a11y-context-skills.
# Runs as a GitHub Action on push to main when patterns/ changes (see
# .github/workflows/sync-skills.yml). Authentication uses a fine-grained PAT
# stored in the SKILLS_REPO_TOKEN secret.
#
# What gets synced, for every stack in STACKS that has a skills directory:
#   - patterns.json            → skills/<skill-dir>/{local,http}/patterns.json
#   - global/global_rules.md   → skills/<skill-dir>/{local,http}/global_rules.md
#   - each registered pattern's .md (per patterns.json source.path)
#                              → skills/<skill-dir>/local/components/
#
# Every stack the corpus publishes must appear in STACKS. This script synced
# web/react alone until 2026-10-06, so the android-compose and ios-swiftui
# skills, added on 2026-09-23, never received a corpus release after the one
# they were created with: android-compose sat at catalog 0.4.0 while the corpus
# shipped 0.5.0. A stack with no skills directory is skipped with a note rather
# than failing, so a stack can be added here before its skills exist.
#
# Patterns with status: draft or deprecated are excluded from patterns.json
# already, so they don't appear in source.path entries and won't be synced.
#
# Local test: SKILLS_DIR=<path to a clone> DRY_RUN=1 bash scripts/sync-skills-repo.sh
# copies into that clone and stops before committing.

set -euo pipefail

# corpus stack : skills directory
STACKS=(
  "web/react:web-react"
  "ios/swiftui:ios-swiftui"
  "android/compose:android-compose"
)

CORPUS_ROOT="${GITHUB_WORKSPACE:-$(pwd)}/patterns"

if [[ -z "${SKILLS_DIR:-}" ]]; then
  if [[ -z "${SKILLS_REPO_TOKEN:-}" ]]; then
    echo "::error::SKILLS_REPO_TOKEN secret is not set"
    exit 1
  fi
  SKILLS_DIR="${RUNNER_TEMP:-/tmp}/a11y-context-skills"
  SKILLS_REPO_URL="https://x-access-token:${SKILLS_REPO_TOKEN}@github.com/a11y-context/a11y-context-skills.git"
  echo "Cloning a11y-context-skills..."
  git clone --depth 1 "$SKILLS_REPO_URL" "$SKILLS_DIR"
fi

cd "$SKILLS_DIR"
git config user.name "a11y-context-bot"
git config user.email "a11y-context-bot@users.noreply.github.com"

SUMMARY=()
for entry in "${STACKS[@]}"; do
  stack="${entry%%:*}"
  skill_dir="${entry##*:}"
  corpus_dir="$CORPUS_ROOT/$stack"
  local_dir="$SKILLS_DIR/skills/$skill_dir/local"
  http_dir="$SKILLS_DIR/skills/$skill_dir/http"

  if [[ ! -d "$local_dir" || ! -d "$http_dir" ]]; then
    echo "Skipping $stack: no skills/$skill_dir/{local,http} in the skills repo."
    continue
  fi
  if [[ ! -f "$corpus_dir/patterns.json" ]]; then
    echo "Skipping $stack: no patterns.json in the corpus."
    continue
  fi

  echo "Syncing $stack → skills/$skill_dir ..."
  cp "$corpus_dir/patterns.json" "$local_dir/patterns.json"
  cp "$corpus_dir/patterns.json" "$http_dir/patterns.json"
  cp "$corpus_dir/global/global_rules.md" "$local_dir/global_rules.md"
  cp "$corpus_dir/global/global_rules.md" "$http_dir/global_rules.md"

  rm -rf "$local_dir/components"
  mkdir -p "$local_dir/components"
  mapfile -t source_paths < <(jq -r '.patterns[].source.path' "$corpus_dir/patterns.json")
  for source_path in "${source_paths[@]}"; do
    cp "$corpus_dir/$source_path" "$local_dir/components/$(basename "$source_path")"
  done

  revision=$(jq -r '.catalog_revision' "$corpus_dir/patterns.json")
  echo "  $stack $revision, ${#source_paths[@]} components."
  SUMMARY+=("$stack $revision (${#source_paths[@]} components)")
done

echo "Checking for changes..."
git add -A
if git diff --cached --quiet; then
  echo "No changes to sync. Done."
  exit 0
fi

if [[ -n "${DRY_RUN:-}" ]]; then
  echo "DRY_RUN set: changes staged in $SKILLS_DIR, not committed."
  git diff --cached --stat | tail -1
  exit 0
fi

SOURCE_COMMIT="${GITHUB_SHA:-unknown}"
SHORT_COMMIT="${SOURCE_COMMIT:0:7}"
{
  echo "Sync to corpus (${SHORT_COMMIT})"
  echo
  echo "Auto-synced from accessibility-pattern-api@${SHORT_COMMIT}."
  for line in "${SUMMARY[@]}"; do echo "- $line"; done
} > /tmp/sync-msg.txt
git commit -F /tmp/sync-msg.txt

echo "Pushing..."
git push
echo "Sync complete."
