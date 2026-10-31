# Comprehensive Skills & MCP Directory

This rule serves as the definitive reference manual for all Antigravity **Skills** and **Model Context Protocol (MCP) Servers** available in Nitin Bharwad's development environment. The agent consults this directory to select the optimal toolchain for any incoming request.

---

## 1. Complete Skills Catalog

### A. Development & Collaboration Skills
1. **`team-collaborator`** (Workspace & Global)
   - **What it does**: Provides structured workflows for client projects, team task boards, sprint planning, pull request generation, and hackathon pitch architecture.
   - **When to use**: Keywords: *hackathon, sprint, client, PR review, code review, pitch, team board, user story*.
   - **Capabilities**: 3-phase hackathon speed scoping, non-destructive client modifications, standardized PR format with visual verification.

2. **`fullstack-scaffolder`** (Workspace & Global)
   - **What it does**: Scaffolds production-grade Web (Next.js 15 + Tailwind + shadcn), Mobile (React Native/Expo/Android), and Windows Desktop (Tauri v2 / Electron) boilerplates.
   - **When to use**: Keywords: *scaffold, create project, setup app, bootstrap, boilerplate*.
   - **Capabilities**: Sets up typed directory architectures, package scripts, linting, and initial conventional commits.

3. **`modern-web-guidance-plugin`** (Global Plugin by Google Chrome)
   - **What it does**: Curated suite of 124 modern web design and performance standards.
   - **When to use**: Building web pages, CSS layout (subgrid, container queries), Web Vitals optimization (LCP, INP, CLS), accessible forms, and modern web APIs.

### B. Mobile & Desktop Sidecar Skills
4. **`android-cli`** (`android-cli-plugin`)
   - **What it does**: Compiles, builds, runs, and inspects native Android applications via the `android` CLI.
   - **When to use**: Native Android tasks, APK/AAB generation, Gradle builds, SDK installations, and layout dumping.

5. **`android-device-hub`** (`android-cli-plugin`)
   - **What it does**: Manages Android Virtual Devices (AVDs) and USB physical devices; mirrors and streams device screens.
   - **When to use**: Starting/stopping emulators, inspecting screen hierarchies via `android layout`, and capturing screenshots.

6. **`compose-preview`** (`android-cli-plugin`)
   - **What it does**: Renders Jetpack Compose `@Preview` composables live in the auxiliary sidecar panel.
   - **When to use**: Writing Kotlin Jetpack Compose UI to verify layout without full app compilation.

### C. Automation & Utility Skills
7. **`automation`** (Built-in)
   - **What it does**: Guides the creation of cron-scheduled background sidecars (`sidecar.json`) that spawn fresh agent conversations.
   - **When to use**: Scheduled tasks, recurring digests, nightly audits, periodic synchronization.

8. **`generative_ui`** (Built-in)
   - **What it does**: Renders responsive HTML/Tailwind widgets directly inline or in sidepane artifacts.
   - **When to use**: Data visualizations, interactive UI mockups, walkthrough diagrams, and live preview components.

9. **`credentials`** (Built-in Protocol)
   - **What it does**: Safely checks and prompts for API keys and tokens without exposing secrets in logs.
   - **When to use**: Any workflow requiring API tokens, DB connection strings, or cloud access keys.

10. **`agy-customizations` & `antigravity-guide`** (Built-in)
    - **What it does**: Comprehensive references for the Antigravity IDE, CLI (`agy`), and customization architecture (rules, skills, plugins, MCP, hooks).

11. **`workflow-skill-creator`** (Built-in)
    - **What it does**: Distills a completed multi-step interaction into a permanent reusable skill.
    - **When to use**: When Nitin says *"turn this workflow into a skill"* or *"make a skill from this"*.

---

## 2. Complete Model Context Protocol (MCP) Catalog

### 1. `shadcn` MCP (`shadcn-ui-mcp-server`)
- **Transport**: Stdio (`npx`)
- **Tools**: `list_shadcn_components`, `get_component_details`, `get_component_examples`, `search_components`.
- **Purpose**: Instantly retrieve accessible Radix UI component anatomies, props, and installation commands.
- **When to use**: Building forms, modals, navbars, cards, and UI controls in Next.js/React.

### 2. `21st` MCP (`@21st-dev/magic@latest`)
- **Transport**: Stdio (`npx`)
- **Tools**: `search`, `get_component`, `search_logo`, `get_theme`, `get_inspiration`, `video_*`.
- **Purpose**: Search thousands of creative Tailwind components, pull SVG brand logos, and extract UI themes.
- **When to use**: Creative styling, hero sections, animations, brand logos, and UI polish.

### 3. `context7` MCP (`@upstash/context7-mcp`)
- **Transport**: Stdio (`npx`)
- **Tools**: `resolve-library-id`, `query-docs`.
- **Purpose**: Fetches real-time, version-specific documentation directly from official source repositories.
- **When to use**: Next.js 15, Tailwind v4, React 19, or newly updated libraries to eliminate API hallucinations.

### 4. `puppeteer` MCP (`@modelcontextprotocol/server-puppeteer`)
- **Transport**: Stdio (`npx`)
- **Tools**: `puppeteer_navigate`, `puppeteer_screenshot`, `puppeteer_click`, `puppeteer_fill`, `puppeteer_select`, `puppeteer_hover`, `puppeteer_evaluate`.
- **Purpose**: Full browser automation, end-to-end user interaction simulation, and visual screenshot verification.
- **When to use**: Verifying web apps locally, taking screenshots of UI changes, checking responsive rendering.

### 5. `vercel` MCP (`mcp-remote https://mcp.vercel.com`)
- **Transport**: Stdio bridge to Remote Endpoint
- **Tools**: 200+ deployment, DNS, domain, observability, and runtime error tools.
- **Purpose**: Inspect build failures, query production logs, manage custom domains, and configure Edge Config.
- **When to use**: Deploying web applications, investigating production errors (`get_runtime_errors`), and DNS setups.

### 6. `supabase` MCP (`https://mcp.supabase.com/mcp`)
- **Transport**: Streamable HTTP
- **Purpose**: Manage Supabase cloud projects, execute database migrations, query schemas, and configure Auth/RLS.
- **When to use**: Backend setups, PostgreSQL schema designs, authentication rules, and Supabase Edge functions.

### 7. `postgres` MCP (`@modelcontextprotocol/server-postgres`)
- **Transport**: Stdio (`npx`)
- **Purpose**: Direct read-only and write SQL queries against any local or remote PostgreSQL instance.
- **When to use**: Introspecting database schemas, verifying query plans, and running data sanity checks.

### 8. `github` MCP (`@modelcontextprotocol/server-github`)
- **Transport**: Stdio (`npx`)
- **Tools**: Repositories, commits, issues, pull requests, PR reviews, branches, GitHub Projects v2 boards.
- **Purpose**: Full GitHub interaction directly from the agent.
- **When to use**: Creating PRs, reviewing code diffs, tracking sprint tickets, and managing issue backlogs.

### 9. `sequential-thinking` MCP (`@modelcontextprotocol/server-sequential-thinking`)
- **Transport**: Stdio (`npx`)
- **Tools**: `sequentialthinking`.
- **Purpose**: Facilitates dynamic, reflective problem-solving loops for complex algorithms or deep refactorings.
- **When to use**: Complicated system design, difficult algorithmic debugging, and multi-file architectural refactors.

### 10. `filesystem` MCP (`@modelcontextprotocol/server-filesystem`)
- **Transport**: Stdio (`npx`)
- **Tools**: `read_file`, `write_file`, `edit_file`, `list_directory`, `directory_tree`, `search_files`.
- **Purpose**: High-speed sandboxed access across multi-directory project trees.
- **When to use**: Cross-project directory searches and bulk file structure inspections.
