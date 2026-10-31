---
name: fullstack-scaffolder
description: Rapid scaffolding and bootstrapping for modern Web apps (Next.js/React), Mobile apps (React Native/Expo/Android), and Windows Desktop apps (Tauri/Electron). Use when starting a new project, setting up directory architecture, or initializing multi-platform boilerplate.
---

# Fullstack Scaffolder Skill

This skill provides step-by-step instructions and command sequences to scaffold clean, production-ready projects across Web, Mobile, and Windows Desktop platforms.

---

## 1. Web Application Scaffolding (Next.js + Tailwind + shadcn/ui)

When scaffolding a modern web project:

```powershell
# 1. Initialize Next.js with TypeScript and Tailwind
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm

# 2. Initialize shadcn/ui
npx shadcn@latest init -d

# 3. Add essential UI primitives
npx shadcn@latest add button card dialog dropdown-menu input label sheet toast avatar badge
```

Directory Structure:
```
src/
├── app/                  # Next.js App Router pages and routes
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/           # UI and Feature Components
│   ├── ui/               # shadcn/ui primitives
│   └── features/         # Domain-specific components
├── lib/                  # Utilities, database clients, helpers
│   └── utils.ts
└── types/                # Shared TypeScript declarations
```

---

## 2. Mobile Application Scaffolding (React Native / Expo)

When scaffolding a mobile project:

```powershell
# 1. Initialize Expo with TypeScript
npx create-expo-app@latest my-mobile-app --template blank-typescript

# 2. Install essential mobile navigation & safe area libraries
cd my-mobile-app
npx expo install expo-router react-native-safe-area-context react-native-screens react-native-svg
```

---

## 3. Windows Desktop Application Scaffolding (Tauri v2 + Vite + React)

When scaffolding a Windows desktop project:

```powershell
# 1. Initialize Tauri v2 with Vite and React/TypeScript
npm create tauri-app@latest . -- --template react-ts

# 2. Install Tailwind CSS and Lucide Icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react clsx tailwind-merge
```

---

## 4. Verification Check
After scaffolding any project:
1. Verify `package.json` scripts (`dev`, `build`, `lint`).
2. Run build check to confirm dependencies resolve cleanly.
3. Commit initial boilerplate with a clean git commit: `chore: initial project scaffolding`.
