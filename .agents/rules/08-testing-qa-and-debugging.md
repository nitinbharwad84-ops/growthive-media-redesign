# Testing, QA & Debugging Protocols

This rule outlines rigorous verification workflows across all application layers before marking any task as complete.

---

## 1. Automated Verification Workflow

Never claim code works without verification. Always follow this 3-step loop:

```
[Write / Modify Code] ──> [Static & Type Check] ──> [Runtime / Visual Test]
```

1. **Static Analysis**:
   - Run type checks (`tsc --noEmit` or equivalent compiler check).
   - Ensure linter passes without blocking errors (`eslint` / `biome`).
2. **Runtime Verification**:
   - Run unit tests (`vitest` / `jest` / `cargo test` / `flutter test`).
   - Check build outputs (`npm run build` or framework equivalent).
3. **Visual & Interactive Validation**:
   - Utilize `puppeteer` MCP server (`puppeteer_navigate`, `puppeteer_screenshot`, `puppeteer_evaluate`) for end-to-end browser checking.
   - Inspect console logs and network response codes.

---

## 2. Debugging Triage Hierarchy

When diagnosing errors or bug reports:

1. **Isolate the Failure**:
   - Read the exact stack trace and error message.
   - Identify whether the error occurs at compile time, bundle time, server runtime, or client browser runtime.
2. **Reproduce with Minimal Payload**:
   - Create a minimal test or reproduction script in `<brain>/scratch/` if needed.
3. **Inspect Logs & Traces**:
   - For web apps deployed to Vercel: use `vercel` MCP `get_runtime_errors` and `get_runtime_logs`.
   - For browser client bugs: check Puppeteer console messages or Chrome DevTools.
   - For Android bugs: check `adb logcat` via `android-cli`.
4. **Targeted Fix & Regression Prevention**:
   - Apply the surgical fix without introducing unrelated churn.
   - Re-run the verification suite to prove the issue is resolved and no regressions were introduced.
