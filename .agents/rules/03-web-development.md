# Web Development Standards & Workflows

This rule establishes coding, architectural, and design standards for modern Web Applications created by Nitin Bharwad (Next.js, React, TypeScript, Tailwind CSS).

---

## 1. Tech Stack & Architecture

- **Framework**: Next.js 14/15+ with App Router (`src/app/`).
- **Language**: TypeScript with strict mode enabled (`"strict": true`, `"noImplicitAny": true`).
- **Styling**: Tailwind CSS with consistent utility classes, CSS variables, and modern dark/light mode theming.
- **Components**: `shadcn/ui` primitives (Radix UI base) paired with `lucide-react` icons.
- **State Management**: React Context & Hooks for local UI state; Zustand or TanStack Query for server/global state.

---

## 2. Server vs. Client Components Protocol

1. **Server Components (`RSC`) by Default**:
   - Every component is a Server Component unless interactive browser APIs are strictly needed.
   - Fetch data directly in Server Components; stream with `Suspense` and skeleton fallbacks.
2. **Client Components (`'use client'`) Strictly Scoped**:
   - Only add `'use client'` when using: `useState`, `useEffect`, event listeners (`onClick`, `onChange`), or browser APIs (`window`, `localStorage`).
   - Push client components to the leaves of the component tree to keep parent trees server-rendered.

---

## 3. UI/UX & Responsive Guidelines

- **Mobile-First Layouts**: Ensure layouts render smoothly from 375px mobile screens up to 4K displays (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`).
- **Modern Web Guidance**: Apply Google Chrome modern web recommendations:
  - Use CSS Subgrid for aligned grid items.
  - Implement container queries for truly modular components.
  - Optimize Core Web Vitals (LCP, FID/INP, CLS).
  - Use `next/image` with explicit aspect ratios, and `next/font` for zero layout shift.

---

## 4. Verification Loop

Before concluding any web task:
1. Verify TypeScript compiles cleanly: `npx tsc --noEmit`.
2. Verify Next.js dev or production build succeeds without errors.
3. Use the `puppeteer` MCP server to navigate to the rendered page and take visual screenshots when verifying interactive components.
