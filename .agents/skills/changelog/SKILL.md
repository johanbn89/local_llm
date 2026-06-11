---
name: changelog
description: Explain, draft, or review CHANGELOG.md files. Use when summarizing releases, documenting notable changes, categorizing added/changed/fixed items, or preparing release notes.
---

# CHANGELOG.md

Use this skill when documenting what changed between versions.

## What It Is For

`CHANGELOG.md` gives humans a readable history of important changes, grouped by version or date.

## How To Use It

- Focus on user-visible or operator-visible changes.
- Group entries by type: added, changed, fixed, removed, security.
- Keep internal refactors out unless they affect users.
- Link issues or pull requests when useful.

## Example Content

```markdown
# Changelog

## 1.1.0 - 2026-06-11

### Added

- Added repo-specific Codex skills under `.agents/skills`.

### Changed

- Updated README with skill discovery rules.

### Fixed

- Removed obsolete root-level skill documents.
```
