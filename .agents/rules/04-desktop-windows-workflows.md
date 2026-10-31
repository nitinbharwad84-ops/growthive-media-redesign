# Windows & Desktop Development Workflows

This rule establishes standards for desktop applications on **Windows** using **Tauri v2 (Rust + Web Frontend)** or **Electron**.

---

## 1. Desktop Framework Selection

- **Tauri v2 (Recommended for Lightweight Apps)**:
  - High performance, minimal binary size (~15MB), secure by default.
  - Rust backend for native OS APIs (file system, tray icon, notifications, shortcuts).
  - Web frontend (Next.js / Vite / React + Tailwind) communicates via Tauri IPC (`invoke`).
- **Electron (Recommended for Node.js Native Ecosystem Apps)**:
  - Context isolation enabled (`contextIsolation: true`).
  - No direct Node.js integration in the renderer (`nodeIntegration: false`).
  - Strict IPC via `preload.js` and `ipcRenderer.invoke`.

---

## 2. Windows Environment & Sandbox Conventions

1. **Shell & Scripting**:
   - The default shell on this host is **PowerShell**.
   - Use PowerShell syntax for commands (e.g. `Get-ChildItem`, `Test-Path`, semicolons `;` or sequential execution instead of bash-specific idioms).
   - Use backslashes `\` or forward slashes `/` appropriately for paths.
2. **Local Servers & Sandboxing**:
   - Servers started in the standard sandbox are only reachable from the command session that started them.
   - For interactive user browser inspection or native window rendering, notify the user if elevated bypass permissions are needed.
3. **Packaging & Windows Assets**:
   - Support standard Windows `.ico` icon formats with multiple resolutions (16x16, 32x32, 48x48, 256x256).
   - Support MSIX, NSIS, or WiX installer configurations for Windows distribution.

---

## 3. Security & Native Integration

- Sanitize all file paths when reading or writing to the user's filesystem.
- Guard against OS command injection when invoking child processes.
- Handle Windows-specific window controls (minimize, maximize, custom frameless titlebars) with proper DPI scaling.
