# Meyson Boilerplate - AI Context

This directory provides context for AI coding assistants.

## 📚 Current Documentation

- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Current monorepo structure

## 🛠️ Tech Stack

- **Runtime:** Bun
- **Build System:** Turbo
- **Code Quality:** Biome (configured in root)
- **Workspaces:** `["apps/*", "packages/*"]`

## 🔧 Development Tools

- **Biome:** All-in-one tool for linting, formatting, and import sorting
  - Run `bun run format-and-lint` to check code quality
  - Run `bun run format-and-lint:fix` to auto-fix issues
  - Configured in root `biome.json` for the entire monorepo

## 📁 Structure

```
📁 apps/          # Future applications (backend, marketing, web)
📁 packages/      # Future shared packages (shared, uikit, locales)
📁 tooling/       # Development tools (playwright-web)
📁 .ai-docs/      # AI context (this directory)
```
