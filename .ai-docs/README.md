# Meyson Boilerplate - AI Context

This directory provides context for AI coding assistants.

## 📚 Current Documentation

- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Current monorepo structure

## 🛠️ Tech Stack

- **Runtime:** Bun v1.2.9
- **Build System:** Turbo v2.5.6
- **Code Quality:** Biome (configured in root)
- **Workspaces:** `["apps/*", "packages/*"]`

## 🔧 Development Tools

- **Biome:** All-in-one tool for linting, formatting, and import sorting
  - Run `bun run format-and-lint` to check code quality
  - Run `bun run format-and-lint:fix` to auto-fix issues
  - Configured in root `biome.json` for the entire monorepo
  - Tuned for Bun: allows regular Node.js imports (not `node:` protocol)

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Run all apps simultaneously
bun run dev

# Run individual apps
bun run dev:backend     # Backend + Shared
bun run dev:web         # Web app
bun run dev:marketing   # Marketing site

# Build all apps
bun run build

# Build individual apps
bun run build:backend
bun run build:web
bun run build:marketing

# Check code quality
bun run format-and-lint
```

## ⚠️ Important Notes

- **Backend port:** 3005 (избегает конфликта с портом 3001)
- **Web/Marketing ports:** 3000 (стандартный для dev серверов)
- **Biome rules:** Отключен `useNodejsImportProtocol` для Bun совместимости
- **Turbo filtering:** Используй `@meyson/*` названия пакетов
- **Dependencies:** Убедись что `packageManager` поле есть в корне

## 📁 Current Structure

```
📁 apps/          # Applications
│   ├── 📁 backend/     # ✅ Bun HTTP server (port 3005)
│   │   ├── src/index.ts    # Bun.serve API
│   │   ├── package.json    # Scripts & deps
│   │   └── tsconfig.json   # TypeScript config
│   ├── 📁 marketing/   # ✅ Static HTML/CSS/JS (port 3000)
│   │   ├── index.html      # Main page
│   │   ├── styles.css      # Responsive styles
│   │   ├── script.js       # Interactive JS
│   │   └── package.json    # Serve config
│   └── 📁 web/         # ✅ Vite + React + TypeScript (port 3000)
│       ├── src/            # React components
│       ├── index.html      # Vite entry point
│       ├── vite.config.ts  # Vite config
│       └── package.json    # React deps
📁 packages/      # Shared packages
│   └── 📁 shared/      # ✅ Common utilities and types
│       ├── src/index.ts    # Exports
│       ├── tsconfig.json   # TypeScript
│       └── package.json    # Library config
📁 tooling/       # Development tools (empty)
│   └── 📁 playwright-web/  # ⏳ E2E testing (placeholder)
📁 .ai-docs/      # AI context (this directory)
```
