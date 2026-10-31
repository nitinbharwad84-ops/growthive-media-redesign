# Database & Backend Standards

This rule governs relational database design, API route implementation, security policies, and ORM usage across Nitin Bharwad's projects.

---

## 1. Database Architecture & Tools

- **Primary Databases**: PostgreSQL / Supabase.
- **ORM / Query Builders**: Prisma ORM or Drizzle ORM for type-safe database queries.
- **MCP Integration**:
  - Use `supabase` MCP (`https://mcp.supabase.com/mcp`) for Supabase cloud project operations, migrations, and Auth configuration.
  - Use `postgres` MCP (`@modelcontextprotocol/server-postgres`) for running direct SQL queries and schema introspection against local or remote PostgreSQL instances.

---

## 2. Security & Row-Level Security (RLS)

1. **Mandatory RLS**:
   - Every single table in PostgreSQL/Supabase MUST have Row Level Security enabled (`ALTER TABLE <name> ENABLE ROW LEVEL SECURITY;`).
   - Define explicit policies for `SELECT`, `INSERT`, `UPDATE`, and `DELETE`.
2. **Zero Leaks & Credentials**:
   - Never store service role keys or database connection strings in Git.
   - Use `.env.local` for local secrets and follow the `credentials` skill protocol.
3. **Input Validation**:
   - All API endpoints and Server Actions MUST validate request payloads using `zod` schemas before touching the database.

---

## 3. Migration & Schema Workflow

- Always write additive, backward-compatible migrations.
- Test migrations on a development branch before promoting to staging or production.
- Auto-generate TypeScript definitions from the database schema (`supabase gen types typescript` or `npx prisma generate`).
