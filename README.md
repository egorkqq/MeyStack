# MeySon Boilerplate

[![Bun](https://img.shields.io/badge/Bun-1.2.22-000000.svg)](https://bun.sh)
[![Turbo](https://img.shields.io/badge/Turbo-2.5.6-000000.svg)](https://turbo.build)
[![Biome](https://img.shields.io/badge/Biome-2.2.4-000000.svg)](https://biomejs.dev)
[![React](https://img.shields.io/badge/React-19.1.1-61dafb.svg)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-7.1.5-646cff.svg)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178c6.svg)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive, opinionated company monorepo boilerplate built with modern tools.

## 📦 Tech Stack

- **Runtime:** Bun v1.2.22
- **Build System:** Turbo v2.5.6
- **Code Quality:** Biome v2.2.4
- **Frontend:** React v19.1.1 + Vite v7.1.5 + TypeScript v5.9.2

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Run all apps simultaneously
bun run dev

# Run individual apps
bun run dev:backend     # Backend + Shared (port 3005)
bun run dev:web         # Web app (port 3000)
bun run dev:marketing   # Marketing site (port 3000)
```

## 📁 Apps

### Backend (`apps/backend/`)
- **Tech:** Bun HTTP server
- **Port:** 3005
- **API:** `GET /` → `{"message": "Hello from Meyson Backend!"}`

### Web (`apps/web/`)
- **Tech:** Vite + React + TypeScript
- **Port:** 3000
- **Features:** Basic React app with routing setup

### Marketing (`apps/marketing/`)
- **Tech:** Static HTML/CSS/JS
- **Port:** 3000
- **Features:** Responsive landing page

## 🛠️ Development

```bash
# Build all apps
bun run build

# Build individual apps
bun run build:backend
bun run build:web
bun run build:marketing

# Code quality
bun run format-and-lint       # Check code quality
bun run format-and-lint:fix   # Auto-fix issues
bun run typecheck             # TypeScript type checking
```

## 📦 Dependency Management

### Checking for Updates
```bash
bun run update-deps:check
```
This command checks for outdated dependencies across all workspaces using `npm-check-updates`.

### Upgrading Dependencies
```bash
bun run update-deps:upgrade
```
Interactive upgrade of dependencies across all workspaces. This will:
1. Show you outdated packages
2. Allow you to select which ones to update
3. Update `package.json` files in all workspaces
4. Run `bun install` to install new versions

### Quick Check Alias
```bash
bun run update-deps  # Same as update-deps:check
```

## 📄 License

MIT
