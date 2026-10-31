# Nitin Bharwad — Full-Stack Developer Ecosystem & Workflow Reference
> **Project:** `growthive-media`  
> **Lead Developer & Owner:** **Nitin Bharwad**  
> **Global Plugin:** `nitinbharwad-developer`

This document is your root quick-reference for the complete developer setup, covering the **"Say a Task & Do It"** automation engine, all **10 MCP Servers**, all **Skills**, and multi-platform workflows (Web, Mobile, Windows Desktop, Teamwork/Hackathons).

---

## 1. Core Operating Principles & Automation Engine

### "Say a Task & Do It" Automation Directive
Whenever Nitin issues any task (e.g., *"Build an auth modal with Supabase"*, *"Scaffold a Next.js landing page"*, *"Fix bug in mobile drawer"*), the agent executes it **autonomously end-to-end**:

```
[Nitin's Task Prompt]
         │
         ▼
[Phase 1: Instant Decomposition] ─── Scopes requirements, identifies files & MCP tools
         │
         ▼
[Phase 2: Deep Execution] ────────── Writes code, installs packages, sets configs
         │
         ▼
[Phase 3: Self-Correction Loop] ─── Auto-fixes compilation errors, syntax, or broken tests
         │
         ▼
[Phase 4: Runtime Verification] ──── Runs builds, unit tests, Puppeteer visual checks
         │
         ▼
[Phase 5: Proof & Delivery] ──────── Presents verified changes with proof & launch steps
```

- **Zero Premature Halting**: Never stops to ask trivial questions like *"Should I write this file?"*.
- **Auto-Remediation**: Compiler or test errors are diagnosed and surgically fixed without dumping stack traces back to Nitin.
- **Verification First**: Static checks (`tsc --noEmit`), build output, and browser screenshots (`puppeteer`) are validated before presenting the completed task.

---

## 2. Complete Skills Directory

| Skill Name | Location / Origin | What It Does | Example Prompt to Trigger |
|---|---|---|---|
| **`team-collaborator`** | Workspace & Global | Hackathon speed sprints (North Star MVP, pitch script), client deliverables, PR summaries, code review | *"Let's prepare for a 24-hr hackathon demo"* or *"Review this PR for our client project"* |
| **`fullstack-scaffolder`** | Workspace & Global | Rapid scaffolding for Next.js 15, React Native/Expo, and Windows Desktop Tauri v2 | *"Scaffold a modern Next.js 15 app with shadcn"* or *"Initialize a Tauri v2 desktop app"* |
| **`modern-web-guidance-plugin`** | Global (Google Chrome) | 124 modern web guidelines: CSS Subgrid, container queries, Core Web Vitals, accessible forms | *"Optimize page layout using modern CSS subgrid and container queries"* |
| **`android-cli`** | Global Plugin | Build native Android apps, compile Gradle, run on emulator, inspect UI hierarchy | *"Build Android debug APK and inspect screen layout"* |
| **`android-device-hub`** | Global Sidecar | Start/stop AVD emulators, mirror screens, control physical USB devices | *"Launch Android emulator and mirror screen"* |
| **`compose-preview`** | Global Sidecar | Real-time rendering of Jetpack Compose `@Preview` composables | *"Render Compose preview for user profile card"* |
| **`automation`** | Built-in | Create cron-scheduled background sidecars (`sidecar.json`) for recurring jobs | *"Schedule a daily git summary every morning at 9am"* |
| **`generative_ui`** | Built-in | Renders responsive HTML/Tailwind widgets directly inline in chat or auxiliary panes | *"Show an interactive visual chart of our system architecture"* |
| **`credentials`** | Built-in Protocol | Safely verifies and loads secrets from `.env.local` or `~/.env` without leaking | *"Connect to Supabase API using our environment keys"* |
| **`workflow-skill-creator`** | Built-in | Distills any completed workflow into a reusable agent skill | *"Make a skill from what we just accomplished"* |

---

## 3. Complete MCP Servers Directory

All 10 servers are configured globally in `~/.gemini/config/mcp_config.json` and in `.agents/mcp_config.json`:

| MCP Server | Package / Source | Transport | Capabilities & Tools | When to Use |
|---|---|---|---|---|
| **`shadcn`** | `shadcn-ui-mcp-server` | Stdio (`npx`) | `list_shadcn_components`, `get_component_details`, `get_component_examples`, `search_components` | Finding accessible Radix UI primitives, buttons, dialogs, forms, tables |
| **`21st`** | `@21st-dev/magic@latest` | Stdio (`npx`) | `search`, `get_component`, `search_logo`, `get_theme`, `get_inspiration`, video tools | Modern creative Tailwind components, brand SVG logos, hero sections |
| **`context7`** | `@upstash/context7-mcp` | Stdio (`npx`) | `resolve-library-id`, `query-docs` | Pulling version-specific, live documentation (Next.js 15, Tailwind v4) |
| **`puppeteer`** | `@modelcontextprotocol/server-puppeteer` | Stdio (`npx`) | `puppeteer_navigate`, `puppeteer_screenshot`, `puppeteer_click`, `puppeteer_fill` | Local UI testing, clicking buttons, submitting forms, visual screenshot verification |
| **`vercel`** | `https://mcp.vercel.com` | Stdio bridge | 200+ deployment, DNS, domain, observability, and runtime error tools | Deployments, preview links, diagnosing runtime errors, custom domain configs |
| **`supabase`** | `https://mcp.supabase.com/mcp` | Streamable HTTP | Database migrations, SQL queries, user authentication, RLS policies, storage | Setting up backend Postgres tables, auth flows, and edge functions |
| **`postgres`** | `@modelcontextprotocol/server-postgres` | Stdio (`npx`) | Direct SQL queries, schema inspection | Local or remote PostgreSQL databases, running complex analytics queries |
| **`github`** | `@modelcontextprotocol/server-github` | Stdio (`npx`) | PR management, issue tracking, repo search, GitHub Projects v2 boards | Creating PRs, reviewing code changes, managing team issues and sprint tickets |
| **`sequential-thinking`** | `@modelcontextprotocol/server-sequential-thinking` | Stdio (`npx`) | `sequentialthinking` dynamic reasoning loop | Complex system design, difficult algorithmic debugging, major refactorings |
| **`filesystem`** | `@modelcontextprotocol/server-filesystem` | Stdio (`npx`) | Sandboxed file search, read, write, directory trees | Scanning multi-directory project trees, bulk file checks |

---

## 4. Multi-Platform Development Guidelines

### Web (Next.js 15 / React / Tailwind)
- **App Router & RSC**: React Server Components by default; push `'use client'` strictly to interactive leaves (`useState`, `useEffect`, event handlers).
- **Component Stack**: `shadcn/ui` accessible primitives + `21st.dev` styling + `lucide-react` icons.
- **Verification**: `npx tsc --noEmit` + `npm run build` + Puppeteer screenshot.

### Mobile (Android / React Native / Flutter)
- **Ergonomics**: Minimum 48x48 dp/pt touch targets, thumb-zone primary actions (bottom 40%).
- **Resilience**: Explicit loading skeletons, empty states, and offline tolerance.
- **Tools**: `android-cli` for builds, `android-device-hub` for AVDs, `compose-preview` for live composables.

### Windows Desktop (Tauri v2 / Electron)
- **Tauri v2**: High performance, minimal footprint (~15MB); secure Rust IPC (`invoke`).
- **PowerShell Syntax**: Always format Windows shell commands for PowerShell (`Get-ChildItem`, semicolons, proper pathing).
- **Sandbox Boundary**: Dev servers running in standard sandbox are reachable within turn; bypass sandbox when interactive browser/port access is needed.

### Database & Backend (Supabase / Postgres)
- **Mandatory RLS**: Every table must have Row Level Security enabled (`ALTER TABLE ... ENABLE ROW LEVEL SECURITY;`).
- **Strict Validation**: All API routes and Server Actions validate payloads using `zod` before DB mutations.
- **Zero Leaks**: Secrets strictly stored in `.env.local`.

---

## 5. Teamwork, Hackathons & Client Deliverables

### Hackathon Velocity Mode
1. **Phase 1: Architecture Lock (0–10% time)**: Lock the 2-minute "North Star" user journey. Cut non-essential features.
2. **Phase 2: Rapid Assembly (10–80% time)**: Pre-built components (`shadcn`, `21st`), instant backend (Supabase/Firebase), live preview deployments (Vercel).
3. **Phase 3: Polish & Pitch (80–100% time)**: Micro-interactions, zero-crash happy path, structured pitch (Hook -> Solution -> Live Demo -> Tech Stack -> Roadmap).

### Git & Pull Request Protocol
- **Author Attribution**: `Nitin Bharwad <nitinbharwad84@gmail.com>`.
- **Atomic Branches**: `feat/<name>`, `fix/<name>`, `spike/<idea>`, `chore/<name>`.
- **Conventional Commits**: `feat(scope): concise description`.
- **PR Deliverables**: Summary of changes, motivation, step-by-step test instructions, visual screenshots.

---

## 6. Workspace Rules Index (`.agents/rules/`)

1. [`00-developer-profile.md`](.agents/rules/00-developer-profile.md) — Lead Developer: Nitin Bharwad.
2. [`01-autonomous-task-execution.md`](.agents/rules/01-autonomous-task-execution.md) — "Say a Task & Do It" Automation Engine.
3. [`02-tool-and-mcp-routing.md`](.agents/rules/02-tool-and-mcp-routing.md) — Prompt-to-MCP/skill routing matrix.
4. [`03-web-development.md`](.agents/rules/03-web-development.md) — Next.js, React, Tailwind, and Web Vitals standards.
5. [`04-mobile-development.md`](.agents/rules/04-mobile-development.md) — Android CLI, Jetpack Compose, React Native, and Flutter.
6. [`05-desktop-windows-development.md`](.agents/rules/05-desktop-windows-development.md) — Tauri v2, Electron, and PowerShell standards.
7. [`06-ui-ux-and-design-system.md`](.agents/rules/06-ui-ux-and-design-system.md) — Theming tokens, `shadcn/ui`, and `21st.dev`.
8. [`07-database-and-backend.md`](.agents/rules/07-database-and-backend.md) — PostgreSQL, Supabase, and Row Level Security.
9. [`08-testing-qa-and-debugging.md`](.agents/rules/08-testing-qa-and-debugging.md) — Automated verification loops and error triage.
10. [`09-teamwork-and-hackathons.md`](.agents/rules/09-teamwork-and-hackathons.md) — Sprint velocity and client deliverables.
11. [`10-git-and-version-control.md`](.agents/rules/10-git-and-version-control.md) — Conventional commits and branching strategy.
12. [`11-skills-and-mcp-directory.md`](.agents/rules/11-skills-and-mcp-directory.md) — Complete skills and MCP directory.
