# Architecture

## Current State

Empty monorepo structure with Bun workspaces:

```
📁 apps/          # Future applications
│   ├── 📁 backend/
│   ├── 📁 marketing/
│   └── 📁 web/
📁 packages/      # Future shared packages
│   ├── 📁 shared/
│   ├── 📁 uikit/
│   └── 📁 locales/
📁 tooling/       # Development tools
│   └── 📁 playwright-web/
```

## Tech Stack

- **Runtime:** Bun
- **Build System:** Turbo
- **Code Quality:** Biome (root configuration)
- **Workspaces:** `["apps/*", "packages/*"]`

## Apps

- **Backend** (`apps/backend/`): Node.js HTTP server with TypeScript
- **Marketing** (`apps/marketing/`): Static HTML/CSS/JS site (will be replaced with Astro)
- **Web** (`apps/web/`): Vite + React + TypeScript app (will use TanStack Router)

## Packages

- **Shared** (`packages/shared/`): Common utilities and types
- **UI Kit** (`packages/uikit/`): Reusable UI components
- **Locales** (`packages/locales/`): Internationalization files

## Tooling

- **Playwright Web** (`tooling/playwright-web/`): E2E testing setup

## Development

- **Biome**: Root-configured linter, formatter, and import sorter
- **Turbo**: Build system and task runner
- **Bun**: Runtime and package manager
