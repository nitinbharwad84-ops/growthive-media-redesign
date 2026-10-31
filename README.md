# Growthive Media

Next-generation digital growth platform and media architecture engineered by **Nitin Bharwad**.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React Server Components)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with CSS variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Component Primitives**: [shadcn/ui](https://ui.shadcn.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Database & Auth**: [Supabase](https://supabase.com/) / PostgreSQL with Row Level Security (RLS)
- **Hosting & Observability**: [Vercel](https://vercel.com/)

---

## 🛠️ Project Structure

```
growthive-media/
├── .agents/              # Antigravity rules, skills & MCP config
│   ├── rules/            # Modular developer directives (00-11)
│   └── skills/           # Custom agent skills (team-collaborator, fullstack-scaffolder)
├── src/
│   ├── app/              # App Router pages, layout, and global styling
│   │   ├── globals.css   # Theme tokens & CSS variables
│   │   ├── layout.tsx    # Root metadata & html/body wrapper
│   │   └── page.tsx      # Main landing experience
│   ├── components/       # UI primitives and feature modules
│   ├── lib/              # Shared utility functions (cn helper)
│   └── types/            # Shared TypeScript interfaces
├── AGENTS.md             # Master agent directives
├── WORKFLOW_REFERENCE.md # Ecosystem cheatsheet (Skills, MCPs, Workflows)
├── package.json          # Dependency manifest
├── tsconfig.json         # Strict TypeScript configuration
└── tailwind.config.ts    # Design tokens & color system
```

---

## 🏁 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 👤 Author & Maintainer

**Nitin Bharwad**  
- Workspace: `growthive-media`  
- Git Attribution: `Nitin Bharwad <nitinbharwad84@gmail.com>`
