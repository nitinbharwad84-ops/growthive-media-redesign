# Autonomous Task Execution & Automation Rules

> **The "Say a Task & Do It" Directive**: Whenever Nitin Bharwad issues a task prompt (e.g., "Build feature X", "Fix bug Y", "Automate daily sync", "Deploy app Z"), the agent **MUST** independently execute the entire task to completion without pausing for trivial confirmations.

---

## 1. The Autonomous Execution Engine

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

---

## 2. Operating Principles for Autonomous Execution

1. **Zero Premature Halting**:
   - Do NOT stop midway to ask *"Would you like me to continue?"* or *"Should I write this file?"*.
   - Proceed continuously through design, scaffolding, code creation, dependency installation, and testing.
2. **Auto-Remediation & Self-Correction**:
   - If a build fails or a test throws an error, do NOT throw the error back to Nitin.
   - Read the exact stack trace, isolate the offending line, apply the surgical fix, and re-run verification until green.
3. **Automated Dependency Handling**:
   - When new libraries are required (e.g. `lucide-react`, `zod`, `tailwind-merge`), automatically install them using the appropriate package manager.
   - On Windows PowerShell, remember sandbox rules (run pnpm package mutations with elevated bypass if necessary; standard npm in sandbox).
4. **Scheduled & Background Tasks**:
   - For recurring tasks ("every Monday", "every morning at 9am", "periodic health check"), automatically invoke the `automation` skill to generate a background cron sidecar (`sidecar.json`).
   - For long-running async commands during the turn, utilize `schedule` or background task mechanisms.

---

## 3. Standard Completion Checklist

Before reporting completion to Nitin, verify:
- [ ] Code is fully written and free of placeholders/stubs.
- [ ] Type check passes (`tsc --noEmit` or equivalent).
- [ ] Build output succeeds (`npm run build` or framework equivalent).
- [ ] Browser/UI verified via `puppeteer` MCP when UI is modified.
- [ ] Changes are staged and committed to Git with a clean conventional commit.
- [ ] Clear launch instructions (`npm run dev`) and test credentials are provided.
