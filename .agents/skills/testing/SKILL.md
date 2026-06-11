---
name: testing
description: Explain, draft, or review TESTING.md files. Use when documenting test strategy, test commands, coverage expectations, manual QA, regression tests, or CI validation.
---

# TESTING.md

Use this skill when documenting how the project is tested.

## What It Is For

`TESTING.md` explains what types of tests exist, how to run them, and what quality bar changes should meet.

## How To Use It

- Include exact test commands.
- Explain unit, integration, and end-to-end test scope.
- State when manual testing is needed.
- Include regression notes for known bug classes.

## Example Content

````markdown
# Testing

## Commands

```bash
npm test
npm run test:e2e
```

## Test Types

- Unit tests: small logic units.
- Integration tests: module interaction.
- End-to-end tests: user workflows.

## Pull Request Expectations

- Add tests for behavior changes.
- Update snapshots only when output changes intentionally.
````
