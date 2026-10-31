# Growthive Media — Master Workspace Directives

Welcome to **Growthive Media**. This project workspace is configured for full-stack multi-platform engineering across **Web**, **Mobile**, and **Windows Desktop** applications, paired with strict standards for **Team Collaboration**, **Client Deliverables**, and **Hackathon Sprints**.

---

## 1. Core Operating Principles

1. **Precision & Verification**: Do not guess or assume. Always verify file structures, dependencies, build logs, and runtime outputs before concluding any task.
2. **Security & Zero Leaks**: Never hardcode API keys, database credentials, or tokens in codebase files. Utilize `.env.local` or environment variables and follow the safe credentials protocol.
3. **Automated Tool Routing**: Whenever processing user requests, automatically evaluate the prompt against the **Tool Routing Matrix** in `.agents/rules/01-tool-routing-matrix.md` and trigger the appropriate MCP servers and skills.
4. **Clean Code & Modularity**: Write idiomatic, strictly-typed TypeScript/Kotlin/Rust code with clean architectural separation (UI components, services, state management, API routes).
5. **Team & Client Empathy**: Format deliverables, pull requests, and architecture notes so team members or non-technical clients can immediately understand changes, test flows, and business value.

---

## 2. Platform Specialization Guidelines

- **Web Stack (Next.js / React / Tailwind)**:
  - Adhere to modern App Router patterns, React Server Components (RSC) where appropriate, and fast responsive layouts.
  - Prioritize `shadcn/ui` and `21st.dev` for rapid, accessible UI development.
  - Follow the web rules in `.agents/rules/02-web-workflows.md`.

- **Mobile Stack (Android / React Native / Flutter)**:
  - Utilize `android-cli`, `android-device-hub`, and `compose-preview` for native Android development.
  - Keep layout hierarchies flat, support dark/light modes, and handle offline/loading states gracefully.
  - Follow the mobile rules in `.agents/rules/03-mobile-workflows.md`.

- **Windows Desktop (Tauri v2 / Electron)**:
  - Favor lightweight, secure Tauri architectures or modern Electron setups.
  - Respect Windows filesystem and sandbox execution rules (PowerShell commands, native path conventions).
  - Follow the desktop rules in `.agents/rules/04-desktop-windows-workflows.md`.

- **Testing & Debugging**:
  - Always verify UI behavior using the active `puppeteer` MCP server or Chrome DevTools.
  - Inspect console errors and network requests when debugging.
  - Follow the testing rules in `.agents/rules/05-testing-and-debugging.md`.

- **Teamwork, Client Projects & Hackathons**:
  - For hackathons, prioritize working end-to-end MVPs and rapid feedback loops over premature micro-optimizations.
  - For client projects, enforce rigorous documentation, test coverage, and clear deployment steps.
  - Follow the collaboration rules in `.agents/rules/06-teamwork-and-hackathons.md` and activate the `team-collaborator` skill.

---

## 3. Rule Index

Detailed specialized rules are modularized within `.agents/rules/`:
- `@[Tool Routing Matrix](.agents/rules/01-tool-routing-matrix.md)`
- `@[Web Workflows](.agents/rules/02-web-workflows.md)`
- `@[Mobile Workflows](.agents/rules/03-mobile-workflows.md)`
- `@[Desktop Workflows](.agents/rules/04-desktop-windows-workflows.md)`
- `@[Testing & Debugging](.agents/rules/05-testing-and-debugging.md)`
- `@[Teamwork & Hackathons](.agents/rules/06-teamwork-and-hackathons.md)`
