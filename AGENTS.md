# Growthive Media — Master Workspace Directives

Welcome to **Growthive Media**, owned and directed by **Nitin Bharwad**. This workspace is configured for full-stack multi-platform engineering across **Web**, **Mobile**, and **Windows Desktop** applications, paired with strict standards for **Autonomous Task Execution**, **Team Collaboration**, **Client Deliverables**, and **Hackathon Sprints**.

---

## 1. Core Operating Principles

1. **Owner & Lead Developer**: **Nitin Bharwad**. All commits, configurations, documentation, and architecture decisions are tailored to Nitin's standards.
2. **"Say a Task & Do It" Automation**: When Nitin assigns a task, execute it autonomously end-to-end (decompose -> code -> self-correct -> test -> deliver) without pausing for trivial confirmations.
3. **Automated Tool & MCP Routing**: Automatically evaluate every prompt against the **Tool Routing Matrix** and trigger the corresponding MCP servers (`shadcn`, `21st`, `context7`, `puppeteer`, `vercel`, `supabase`, `github`, `sequential-thinking`).
4. **Precision & Verification**: Never declare a task complete without static checks (`tsc --noEmit`), build verification, and runtime/browser inspection (`puppeteer`).
5. **Security & Zero Leaks**: Never hardcode API keys, database credentials, or tokens in codebase files. Store secrets safely in `.env.local` or environment variables following the `credentials` skill protocol.
6. **Team & Client Empathy**: Format deliverables, pull requests, and architecture notes so team members, hackathon judges, or non-technical clients can immediately understand changes, test flows, and business value.

---

## 2. Modular Rules Index

The workspace rules are divided into specialized, single-responsibility files inside `.agents/rules/`:

1. `@[Developer Profile](.agents/rules/00-developer-profile.md)` — Persona, owner expectations, and code quality benchmarks.
2. `@[Autonomous Task Execution](.agents/rules/01-autonomous-task-execution.md)` — The "Say a Task & Do It" auto-execution and remediation engine.
3. `@[Tool & MCP Routing](.agents/rules/02-tool-and-mcp-routing.md)` — Automated prompt-to-MCP/skill dispatch table.
4. `@[Web Development](.agents/rules/03-web-development.md)` — Next.js App Router, React Server Components, TypeScript strictness, and Tailwind CSS.
5. `@[Mobile Development](.agents/rules/04-mobile-development.md)` — Android CLI & Device Hub, Compose preview, React Native, and Flutter.
6. `@[Desktop Windows Development](.agents/rules/05-desktop-windows-development.md)` — Tauri v2, Electron, PowerShell scripting, and Windows sandboxing.
7. `@[UI/UX & Design System](.agents/rules/06-ui-ux-and-design-system.md)` — Design tokens, theming, `shadcn/ui`, and `21st.dev` integration.
8. `@[Database & Backend](.agents/rules/07-database-and-backend.md)` — PostgreSQL, Supabase, Prisma/Drizzle ORM, and Row Level Security (RLS).
9. `@[Testing & Debugging](.agents/rules/08-testing-qa-and-debugging.md)` — Automated verification loop, Puppeteer browser validation, and error triage.
10. `@[Teamwork & Hackathons](.agents/rules/09-teamwork-and-hackathons.md)` — Hackathon velocity mode, PRDs, client deliverables, and team dynamics.
11. `@[Git & Version Control](.agents/rules/10-git-and-version-control.md)` — Conventional commits attributed to Nitin Bharwad, atomic branching, and PR preparation.
12. `@[Skills & MCP Directory](.agents/rules/11-skills-and-mcp-directory.md)` — Definitive catalog and usage guide for all available skills and MCP servers.
