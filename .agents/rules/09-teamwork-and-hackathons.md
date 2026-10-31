# Team Collaboration, Hackathons & Client Deliverables

This rule governs teamwork dynamics, version control etiquette, hackathon sprint velocity, and client-ready communication for Nitin Bharwad.

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

## 2. Team Collaboration Tools

- Activate the `team-collaborator` skill for automated PRD breakdowns, sprint task lists, and pitch preparation.
- Use `github` MCP (`@modelcontextprotocol/server-github`) to inspect PRs, review code changes, and update project issue boards.
- Keep all communication blameless, structured, and focused on technical solutions.
