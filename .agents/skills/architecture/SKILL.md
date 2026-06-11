---
name: architecture
description: Explain, draft, or review ARCHITECTURE.md files. Use when describing system components, boundaries, data flow, decisions, tradeoffs, or technical diagrams.
---

# ARCHITECTURE.md

Use this skill when documenting how a system is built and how its parts fit together.

## What It Is For

`ARCHITECTURE.md` helps developers understand the big picture: components, responsibilities, data flow, dependencies, and important decisions.

## How To Use It

- Explain the current architecture, not only the ideal one.
- Show component boundaries and ownership.
- Record major decisions and tradeoffs.
- Link to diagrams or include simple text diagrams.

## Example Content

```markdown
# Architecture

## Overview

The app has three layers:

- UI layer: renders screens and user interactions.
- Application layer: coordinates workflows.
- Data layer: stores and retrieves state.

## Data Flow

User action -> UI handler -> service -> storage -> updated UI

## Decisions

- Use local storage for the first version.
- Keep UI and storage logic in separate modules.
```
