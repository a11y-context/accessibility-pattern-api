<!--
Thanks for contributing! A few quick checks before review.
Full contributor docs:
- CONTRIBUTING.md (license, scope, versioning, walkthrough)
- schema/pattern-template.md (format)
- schema/style-guide.md (conventions)
-->

## Summary

<!-- One or two sentences: what does this PR change and why? -->

## What kind of change is this?

- [ ] New pattern (component or global rule)
- [ ] Revision to an existing pattern
- [ ] Documentation / site change
- [ ] Build pipeline / tooling change
- [ ] Other (describe below)

## Versioning

- [ ] **Bumped `latest_version` in each touched pattern's `.md` frontmatter.** See `CONTRIBUTING.md` § Versioning for the MAJOR / MINOR / PATCH rules.
- [ ] **Bumped `catalog_revision` in `patterns/web/react/catalog-meta.json`.** Required on every release that ships any change.
- [ ] **Added a release notes entry** under the new catalog version in `patterns/web/react/release-notes.md`.
- [ ] **Regenerated `patterns.json` and `component-gallery.md`.** Ran `npm run prebuild` from `website/` and committed the regenerated files. (CI fails the build if these drift from the `.md` sources.)

## Quality

- [ ] **Followed `schema/pattern-template.md` (format) and `schema/style-guide.md` (conventions).** Spot-check against `button.basic.md` or `dialog.modal.md` if anything is unclear.
- [ ] **Verified the site renders.** Ran `npm install && npm start` from `website/` and clicked through the changed pages.
- [ ] **AT verification (optional for contributors).** If you have access to assistive technology, verifying with VoiceOver / NVDA + keyboard against a working implementation is welcome. The maintainer runs AT verification as part of PR review either way.

## Notes for reviewer

<!-- Anything reviewers should know? Open questions? Tradeoffs you considered? -->
