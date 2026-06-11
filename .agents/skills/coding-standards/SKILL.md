---
name: coding-standards
description: Explain, draft, or review CODING_STANDARDS.md files. Use when defining naming, formatting, error handling, comments, code organization, and maintainability rules.
---

# CODING_STANDARDS.md

Use this skill when documenting how code should be written in the project.

## What It Is For

`CODING_STANDARDS.md` makes code easier to read, review, and maintain by defining shared conventions.

## How To Use It

- Prefer concrete rules over vague preferences.
- Include examples of good and weak patterns.
- Keep standards aligned with existing linters and formatters.
- Avoid style rules that tools cannot enforce unless they matter.

## Example Content

```markdown
# Coding Standards

## Naming

- Use clear names for files, functions, and variables.
- Avoid abbreviations unless they are common in the domain.

## Functions

- Keep functions focused on one responsibility.
- Prefer explicit control flow over clever shortcuts.

## Comments

- Explain why, not what.
- Remove dead code instead of commenting it out.
```
