# Team Collaboration, Hackathons & Client Deliverables

This rule governs teamwork dynamics, version control etiquette, hackathon sprint velocity, and client-ready communication.

---

## 1. Operating Modes

### A. Hackathon Velocity Mode (Fast Scoping & High Output)
- **Goal**: Ship a functional, delightful end-to-end prototype within tight deadlines.
- **Workflow**:
  1. **Phase 1: Architecture & Scope Lock (First 10%)**: Define the core user journey, primary happy path, and MVP feature boundaries. Cut non-essential features ruthlessly.
  2. **Phase 2: Rapid Assembly (Next 70%)**: Use pre-built components (`shadcn/ui`, `21st.dev`), mock backends, and sample datasets to achieve working functionality quickly.
  3. **Phase 3: Polish & Demo Prep (Final 20%)**: Test the presentation flow, ensure zero-crash critical paths, add smooth micro-interactions, and prepare demo screenshots and pitch notes.

### B. Client & Production Mode (Quality, Security & Maintainability)
- **Goal**: Deliver maintainable, enterprise-grade code that integrates cleanly into existing team codebases.
- **Workflow**:
  1. **Non-Destructive Changes**: Always inspect existing architecture before making alterations. Never overwrite or delete client business logic without explicit confirmation.
  2. **Zero-Leak Security**: Ensure all sensitive variables (API keys, connection strings, auth secrets) are stored in `.env.local` or environment secrets. Follow the `credentials` skill protocol.
  3. **Self-Documenting Code**: Document public APIs, configuration parameters, and installation steps in a clean `README.md`.

---

## 2. Teamwork & Git Version Control Protocol

1. **Atomic Branching**:
   - Feature branches: `feat/<feature-name>`
   - Bug fixes: `fix/<issue-name>`
   - Hackathon experiments: `spike/<idea-name>`
2. **Conventional Commits**:
   - Format: `feat(scope): concise description` / `fix(scope): concise description`
   - Examples:
     - `feat(auth): integrate Supabase social login`
     - `fix(checkout): resolve price calculation discrepancy on mobile`
3. **Pull Request (PR) Preparation**:
   - Provide a clear PR summary with:
     - **What Changed**: Bullet points of architectural changes.
     - **Why**: Context or link to issue/ticket.
     - **How to Test**: Step-by-step instructions for the reviewer.
     - **Screenshots / GIFs**: Visual before-and-after proof.

---

## 3. Communication Standards

- **Clarity over Jargon**: Explain technical tradeoffs clearly so both developers and stakeholders can make informed decisions.
- **Blameless Problem Solving**: When encountering existing errors in a shared codebase, diagnose root causes constructively and offer remediation options.
