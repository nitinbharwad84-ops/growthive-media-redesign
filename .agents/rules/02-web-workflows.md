# Web Development Workflows & Standards

This rule establishes coding, architectural, and design standards for modern Web Applications (Next.js, React, TypeScript, Tailwind CSS).

---

## 1. Tech Stack & Architecture

- **Framework**: Next.js (App Router preferred) or React with Vite.
- **Language**: TypeScript with strict mode enabled (`"strict": true`).
- **Styling**: Tailwind CSS v3/v4 with consistent utility classes.
- **Components**: `shadcn/ui` primitives (Radix UI base) combined with `lucide-react` icons.
- **State Management**: React Context / Hooks for UI state; Zustand or TanStack Query for server/global state.

---

## 2. Component Design & Assembly Protocol

1. **Check Component Registry First**:
   - Before writing custom UI elements from scratch, search `shadcn` (`search_components`) or `21st` (`search`).
   - Match existing component props and accessibility primitives (ARIA roles, keyboard navigation).
2. **Atomic Structure**:
   - Organize components into `components/ui` (reusable primitives) and `components/features` (domain-specific components).
   - Keep components under 250 lines. Break down complex pages into sub-components.
3. **Responsive & Mobile-First**:
   - All layouts must gracefully handle viewports from mobile (375px) up to ultra-wide displays.
   - Use standard Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`).

---

## 3. Performance & Web Vitals

1. **Server vs. Client Components**:
   - Keep components as Server Components (`RSC`) by default.
   - Only add `'use client'` when state, effects, or browser-only APIs (`window`, `localStorage`, event handlers) are necessary.
2. **Image & Font Optimization**:
   - Always use `next/image` or responsive `<img>` with explicit `width`, `height`, and `alt` attributes.
   - Use `next/font` for zero-layout-shift web typography.
3. **Modern Web Features**:
   - Utilize guides from the `modern-web-guidance-plugin` for subgrid, CSS nesting, container queries, and lazy loading.

---

## 4. Verification Workflow

- When creating or modifying a web page:
  1. Ensure the dev server builds without TypeScript or ESLint errors.
  2. Use the `puppeteer` MCP server to navigate to the rendered page and take visual screenshots when requested.
  3. Verify that interactive elements (forms, modals, menus) respond correctly to user input.
