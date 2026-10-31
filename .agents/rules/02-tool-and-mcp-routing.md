# Tool & MCP Routing Engine

This rule defines the exact prompt-to-tool dispatch matrix. When Nitin Bharwad inputs any prompt, the agent matches keywords and intent against this routing matrix and triggers the corresponding MCP tools and skills immediately.

---

## 1. Intent-to-Tool Matrix

| User Prompt Intent / Keywords | Primary MCP / Tool | Secondary Skill / MCP | Standard Operating Procedure |
|---|---|---|---|
| **UI Design, Components, Tailwind, Buttons, Modals, Cards, Navigation** | `shadcn` MCP (`search_components`, `get_component_details`) | `21st` MCP (`search`, `get_component`, `search_logo`) | 1. Query `shadcn` for baseline accessible primitives.<br>2. Query `21st` for creative styling & SVG logos.<br>3. Generate clean TypeScript + Tailwind code. |
| **Documentation, Library APIs, Next.js / Tailwind v4 Syntax** | `context7` MCP (`@upstash/context7-mcp`) | `modern-web-guidance-plugin` | 1. Fetch real-time, version-specific library docs.<br>2. Prevent deprecated or hallucinated APIs.<br>3. Apply latest framework patterns. |
| **Complex Architecture, Multi-step Refactoring, Difficult Algorithms** | `sequential-thinking` MCP | Built-in Subagents | 1. Activate multi-step sequential reasoning loop.<br>2. Formulate hypothesis, edge cases, and execution plan.<br>3. Execute and verify. |
| **Browser Testing, Screenshots, E2E Verification, Visual Checks** | `puppeteer` MCP (`puppeteer_navigate`, `puppeteer_screenshot`, `puppeteer_click`) | `chrome-devtools-plugin` | 1. Navigate to target URL.<br>2. Perform interactions & form inputs.<br>3. Capture screenshot & inspect DOM/console. |
| **Deployments, Vercel Hosting, Runtime Logs, Domains, Rollbacks** | `vercel` MCP (`get_deployment`, `get_runtime_errors`, `get_runtime_logs`) | Vercel CLI | 1. Check deployment status.<br>2. Read build or runtime logs if issues exist.<br>3. Fix code and re-trigger deployment. |
| **Database, SQL, Schemas, Migrations, Postgres** | `supabase` MCP (`https://mcp.supabase.com/mcp`) | `postgres` MCP (`@modelcontextprotocol/server-postgres`) | 1. Draft schema migrations with Row Level Security (RLS).<br>2. Execute/test queries safely.<br>3. Export strict TypeScript types. |
| **GitHub Issues, Pull Requests, Code Reviews, Actions, Team Boards** | `github` MCP (`@modelcontextprotocol/server-github`) | `team-collaborator` skill | 1. Inspect PR diffs & commits.<br>2. Manage issues, project boards, and workflows.<br>3. Generate team PR descriptions. |
| **Local File Operations, Large Directory Scans, Safe Access** | `filesystem` MCP | Standard File Tools | 1. Access multi-directory project trees safely.<br>2. Read and write across nested directories. |
| **Android Development, Kotlin, Emulator, Compose** | `android-cli` (`android run`, `android emulator`) | `compose-preview` & `android-device-hub` sidecars | 1. Launch/manage emulator via Device Hub.<br>2. Render Compose functions with `compose-preview`.<br>3. Inspect UI hierarchy with `android layout`. |
| **Recurring Tasks, Scheduled Jobs, Daily Sync, Periodic Automation** | `automation` skill | In-turn `schedule` tool | 1. Design cron cadence (Daily, Weekly, etc.).<br>2. Write `sidecar.json` with permissions.<br>3. Run test prompt and verify. |
| **Sensitive Credentials, API Keys, Database Tokens** | `credentials` skill | `.env.local` / `~/.env` | 1. Check presence via safe protocol.<br>2. Prompt user securely without leaking secrets.<br>3. Load via environment variables. |

---

## 2. Progressive Disclosure Rules

1. **Focused Tool Calling**: Only query specific MCP endpoints needed for the task to conserve context tokens.
2. **Reuse Platform Identifiers**: Cache and reuse Project IDs, Team IDs, and Schema names across turns.
3. **Local-First Rule**: Run tests and static checks locally before executing remote cloud or deployment actions.
