# Architecture

This repository uses a flat skill package structure.

## Overview

- `SKILL.md` is the main file an LLM should load when the skill triggers.
- `AGENTS.md` guides agents that edit or maintain this repository.
- Supporting files at the root provide reference material, standards, tests,
  deployment notes, and troubleshooting guidance.

## Loading Model

1. The LLM sees the metadata in `SKILL.md`.
2. If the skill triggers, the LLM reads the body of `SKILL.md`.
3. The LLM reads extra root files only when `SKILL.md` or the task calls for them.

## Design Goal

Keep the package easy to inspect. Use the flat layout when the skill is small
enough that nested folders would add friction rather than clarity.

