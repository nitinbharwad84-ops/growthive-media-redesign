# Tool & MCP Routing Matrix

This rule governs how prompts automatically route to the best available MCP servers and skills. Whenever a user prompt matches an intent, immediately invoke the corresponding toolchain.

---

## 1. Intent-to-Tool Dispatch Table

| User Prompt Intent / Keywords | Primary Tool / MCP | Secondary Tool / Skill | Standard Operating Procedure |
|---|---|---|---|
| **UI Design, Component Search, Tailwind, Buttons, Modals** | `shadcn` MCP (`search_components`, `get_component_details`) | `21st` MCP (`search`, `get_component`, `search_logo`) | 1. Query `shadcn` for standard UI primitives.<br>2. Query `21st` for creative variants or brand assets.<br>3. Generate clean TypeScript + Tailwind code. |
| **Browser Testing, Screenshots, E2E Verification, Visual Checks** | `puppeteer` MCP (`puppeteer_navigate`, `puppeteer_screenshot`, `puppeteer_click`) | Chrome DevTools Plugin | 1. Navigate to target URL.<br>2. Run actions/interactions.<br>3. Capture screenshot or inspect DOM output. |
| **Deployments, Vercel Hosting, Runtime Logs, Domains** | `vercel` MCP (`get_deployment`, `get_runtime_errors`, `get_runtime_logs`) | Modern Web Guidance Plugin | 1. Query deployment status.<br>2. Inspect logs if build failed.<br>3. Apply targeted fix and verify. |
| **Android Development, Kotlin, Emulator, Compose** | `android-cli` (`android run`, `android emulator`) | `compose-preview` & `android-device-hub` sidecars | 1. Manage emulator via Device Hub.<br>2. Render Compose functions with `compose-preview`.<br>3. Inspect UI hierarchy with `android layout`. |
| **API Integration, Documentation Lookup** | Context7 MCP / Web Search | `credentials` skill | 1. Fetch official, up-to-date API syntax.<br>2. Ensure secrets are loaded safely via `.env`. |
| **Database, Schema, Migrations, Postgres** | `supabase` MCP / `@modelcontextprotocol/server-postgres` | Prisma / Drizzle ORM | 1. Design normalized relational tables.<br>2. Ensure RLS policies are attached.<br>3. Export TypeScript schemas. |
| **Teamwork, Hackathons, PR Reviews, Sprints** | `team-collaborator` skill | Git CLI / GitHub MCP | 1. Break requirements into prioritized issues.<br>2. Build MVP milestones.<br>3. Conduct self-contained PR review. |
| **Scheduled Tasks, Daily Reports, Background Automation** | `automation` skill | In-turn `schedule` tool | 1. Determine cron schedule.<br>2. Write sidecar automation config.<br>3. Test prompt execution. |

---

## 2. Progressive Disclosure & Context Protection

1. **Avoid Overloading Context**: Call MCP tools selectively. Do not pull hundreds of schemas or logs when a single focused query satisfies the requirement.
2. **Reuse Project Identifiers**: When interacting with external platforms (Vercel, Supabase), cache and reuse Project IDs and Team IDs across invocations.
3. **Prefer Sandboxed Local Operations First**: Run builds, tests, and static checks locally in the workspace before triggering remote builds or cloud deployments.
