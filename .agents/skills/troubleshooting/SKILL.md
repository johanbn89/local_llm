---
name: troubleshooting
description: Explain, draft, or review TROUBLESHOOTING.md files. Use when documenting common problems, symptoms, diagnosis steps, fixes, logs, or escalation paths.
---

# TROUBLESHOOTING.md

Use this skill when documenting how to diagnose and fix common problems.

## What It Is For

`TROUBLESHOOTING.md` helps users and developers recover from known issues without rediscovering the same fixes.

## How To Use It

- Organize by symptom.
- Include likely causes.
- Include commands or checks.
- Explain when to escalate.
- Keep fixes current with the project.

## Example Content

````markdown
# Troubleshooting

## App Does Not Start

### Symptoms

- The dev server exits immediately.

### Checks

```bash
npm install
npm run dev
```

### Fix

Install dependencies and verify required environment variables.

## Tests Fail Locally

Run the same command used in CI and inspect the first failure.
````
