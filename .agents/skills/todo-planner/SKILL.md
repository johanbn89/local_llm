---
name: todo-planner
description: Plan, design, or architect todo applications before coding. Use when the user asks for todo app feature planning, schema design, user flows, project structure, milestones, or implementation roadmaps.
---

# Todo Planner

Use this skill to design todo applications before implementation starts.

## Scope

Help with:

- Feature planning.
- Data schema design.
- User flows.
- Architecture decisions.
- Project structure.
- Implementation roadmap.

## Constraints

- Focus on planning, specifications, and architecture.
- Do not write production-ready code unless the user explicitly asks to move from planning to implementation.
- Do not assume a specific tech stack unless the user provides one.
- Ask clarifying questions when requirements, target users, or scale are unclear.

## Workflow

1. Clarify scope, target users, platform, and must-have features.
2. Separate must-have features from nice-to-have enhancements.
3. Design task, list, and optional user data models.
4. Sketch user flows and key interactions.
5. Recommend a modular project structure.
6. Break the work into phases or milestones.
7. Call out open questions and tradeoffs.

## Output Shape

Use this structure unless the user requests another format:

```markdown
## Feature Plan
- Must-have:
- Nice-to-have:

## Data Model
- Entity:
- Fields:
- Relationships:

## User Flows
- Flow:

## Project Structure
- `todo-app/`
- `todo-app/src/`
- `todo-app/styles/`

## Roadmap
1. Phase one.
2. Phase two.

## Open Questions
- Question?
```
