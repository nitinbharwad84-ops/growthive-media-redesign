---
name: team-collaborator
description: >-
  Specialized workflows for team collaboration, client projects, and hackathons.
  Use when planning sprints, breaking down PRDs, writing pull requests, organizing
  task boards, reviewing code, or preparing hackathon demo pitches.
---

# Team Collaborator Skill

This skill equips the agent with structured workflows to act as an active technical team partner, sprint facilitator, and hackathon co-pilot for Nitin Bharwad.

---

## When to Activate This Skill

Activate when Nitin or team members:
- Mention a **hackathon**, hackathon deadline, or pitch preparation.
- Ask for **sprint planning**, task breakdown, or PRD (Product Requirements Document) conversion.
- Request a **code review**, pull request description, or git commit strategy.
- Mention working on a **client project**, client presentation, or stakeholder handoff.
- Ask to coordinate with team members or simulate multiple technical roles (frontend, backend, design).

---

## 1. Hackathon Sprint Execution Framework

When a hackathon is mentioned, run this rapid execution pipeline:

### Step 1: Scoping & The "North Star" Demo
- Identify the single 2-minute demo flow that judges will evaluate.
- Cut every feature that does not directly support that flow.
- Choose fast velocity tools:
  - Frontend: Next.js + Tailwind + `shadcn/ui` + `21st.dev`
  - Backend/Auth/DB: Supabase or Firebase (instant auth + Postgres)
  - Deployment: Vercel (one-command preview URLs)

### Step 2: Milestone Allocation (Timer-Based)
- **Phase A (0–25% time)**: Project scaffolding, DB schema, UI wireframe with dummy data.
- **Phase B (25–75% time)**: Core feature integration, real data connections, API endpoints.
- **Phase C (75–100% time)**: Edge case handling on happy path, UI polish, slide deck/pitch script, recorded demo.

### Step 3: Hackathon Pitch Architecture
Produce a pitch outline covering:
1. **The Hook / Problem**: 30 seconds describing the painful status quo.
2. **The Solution**: 30 seconds showing what you built.
3. **Live Demo Walkthrough**: 60 seconds demonstrating the happy path in action.
4. **Tech Stack & Architecture**: 20 seconds highlighting modern stack and innovation.
5. **Future Roadmap**: 10 seconds on monetization or scale.

---

## 2. Client Project Delivery Standards

When working on client deliverables:

### Step 1: Requirements Clarification
- Convert ambiguous client requests into explicit User Stories:
  - *As a [user role], I want to [action] so that [business benefit].*
- Define Acceptance Criteria (Definition of Done) before writing code.

### Step 2: Architectural Safety
- Never modify production configuration without creating a backup.
- Separate environments: Development (`localhost`), Staging/Preview, Production.
- Provide comprehensive environment variable templates (`.env.example`).

### Step 3: Client Handoff Document
Every client milestone should conclude with:
- **What Was Built**: Plain-language feature summary.
- **How to Test**: Step-by-step test URL, test accounts, and credentials.
- **Maintenance Notes**: How to run updates, view logs, and monitor errors.

---

## 3. Pull Request & Code Review Protocol

### Pull Request Generation Template
When drafting a PR:
```markdown
## Summary of Changes
- Implemented [feature name] with [technologies used]
- Added unit/integration tests covering [cases]

## Verification & Testing
1. Step 1: Run `npm run dev`
2. Step 2: Navigate to `/example`
3. Step 3: Click [Button] and observe [Result]

## Screenshots / Evidence
[Include Puppeteer screenshots or UI captures]

## Deployment Considerations
- Environment variables required: `NEXT_PUBLIC_EXAMPLE_KEY`
- Database migrations needed: None
```

### Self-Review Checklist
Before pushing:
- [ ] No console.log or commented-out dead code.
- [ ] Strict TypeScript typing with no unhandled `any`.
- [ ] Error boundaries and loading states in place.
- [ ] Responsive design verified on mobile and desktop.
