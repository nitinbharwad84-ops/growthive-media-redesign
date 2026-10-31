# UI/UX & Design System Standards

This rule governs design consistency, typography, color palettes, animations, and component styling across all projects created by Nitin Bharwad.

---

## 1. Visual Language & Theming

- **Modern Aesthetic**: Clean, modern, accessible interface design with generous whitespace, subtle borders (`border-border`), and balanced typography.
- **Color System**:
  - Use semantic CSS variables (`hsl(var(--background))`, `hsl(var(--foreground))`, `hsl(var(--primary))`, `hsl(var(--muted))`).
  - Never hardcode arbitrary hex colors directly in components; tie colors to Tailwind semantic theme tokens.
- **Dark/Light Mode**: Full automatic theme switching support via `next-themes` with zero flicker on initial mount.

---

## 2. Component Design Assembly Protocol

1. **Check Component Registry First**:
   - Query `shadcn` (`search_components`, `get_component_details`) for accessible primitives (dialogs, dropdowns, popovers, tabs).
   - Query `21st` (`search`, `get_component`, `search_logo`) for modern creative styling, brand SVG logos, and landing page hero layouts.
2. **Atomic Modularity**:
   - Keep components under 250 lines. Break complex screens into small, single-responsibility sub-components.
   - Separate reusable UI primitives (`components/ui/`) from feature-specific components (`components/features/`).
3. **Micro-Interactions & Animation**:
   - Use `framer-motion` or Tailwind `transition-all duration-200` for smooth state transitions.
   - Respect user accessibility preferences (`prefers-reduced-motion`).

---

## 3. Accessibility (a11y) Baseline

- All interactive controls must support full keyboard navigation (Tab, Enter, Space, Escape).
- Maintain WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text).
- Always include `aria-label` or visible labels for icon-only buttons.
