# Architecture

## Current State

**WORKING monorepo** with implemented boilerplate components:

```
📁 apps/          # Applications (implemented)
│   ├── 📁 backend/     # ✅ Bun HTTP server (port 3005)
│   ├── 📁 marketing/   # ✅ Static HTML/CSS/JS site
│   └── 📁 web/         # ✅ Vite + React + TypeScript
📁 packages/      # Shared packages (partial)
│   └── 📁 shared/      # ✅ Common utilities and types
📁 tooling/       # Development tools (empty)
│   └── 📁 playwright-web/  # ⏳ E2E testing (placeholder)
```

## Tech Stack

- **Runtime:** Bun v1.2.9
- **Build System:** Turbo v2.5.6
- **Code Quality:** Biome (root configuration)
- **Workspaces:** `["apps/*", "packages/*"]`
- **Package Manager:** Specified in root `package.json`

## ✅ Implemented Apps

### Backend (`apps/backend/`)
- **Tech:** Bun.serve + TypeScript (no build needed)
- **Port:** 3005
- **API:** `GET /` → `{"message": "Hello from Meyson Backend!"}`
- **Run:** `bun run dev:backend` (includes shared package)
- **Deploy:** `bun run start` (runs TypeScript directly)

### Marketing (`apps/marketing/`)
- **Tech:** Static HTML/CSS/JS
- **Port:** 3000 (via `serve`)
- **Features:** Responsive landing page with smooth scrolling
- **Future:** Will be replaced with Astro
- **Run:** `cd apps/marketing && bun run dev`

### Web (`apps/web/`)
- **Tech:** Vite + React + TypeScript
- **Port:** 3000
- **Features:** Basic React app with routing setup
- **Future:** Will use TanStack Router
- **Run:** `cd apps/web && bun run dev`

## ✅ Implemented Packages

### Shared (`packages/shared/`)
- **Tech:** TypeScript library
- **Exports:** Basic utilities and types
- **Build:** `tsc` (no emit in dev mode)
- **Dev:** TypeScript watch mode

## ⏳ Planned Components

### UI Kit (`packages/uikit/`)
- Reusable UI components
- Will be used by web and marketing apps

### Locales (`packages/locales/`)
- Internationalization files
- Will support multiple languages

### Playwright Web (`tooling/playwright-web/`)
- E2E testing setup
- Will test all apps

## 🚀 Development Commands

```bash
# All apps simultaneously
bun run dev                    # Run all apps at once
bun run build                  # Build all apps

# Individual apps
bun run dev:backend           # Backend + Shared dev
bun run dev:web               # Web app only
bun run dev:marketing         # Marketing site only

bun run build:backend         # Build backend only
bun run build:web             # Build web app only
bun run build:marketing       # Build marketing site only

# Quality checks
bun run format-and-lint       # Check code quality
bun run format-and-lint:fix   # Auto-fix issues
bun run typecheck             # TypeScript type checking

# Dependency management
bun run update-deps:check     # Check for dependency updates across workspaces
bun run update-deps:upgrade   # Upgrade dependencies (interactive)
bun run update-deps           # Alias for check
```

## ⚙️ Configuration

- **Biome:** Root `biome.json` with Bun-tuned rules
- **TypeScript:** Individual `tsconfig.json` per package
- **Turbo:** `turbo.json` with task definitions
- **Dependabot:** `.github/dependabot.yml` for automated dependency updates
- **npm-check-updates:** Integrated with `bun run update-deps` scripts
