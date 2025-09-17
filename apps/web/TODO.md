# Web

Current: Vite + React + TypeScript

## Next Steps

1. **Add TanStack Router**
   ```bash
   bun add @tanstack/react-router @tanstack/router-vite-plugin
   ```
   - Setup file-based routing
   - Replace basic routing with type-safe routing

2. **Add React components from packages/ui**
   ```typescript
   import { Button, Card } from '@meyson/uikit'
   ```
   - Replace custom components with UI kit
   - Use consistent design system

3. **Setup Elysia Eden for API calls**
   ```bash
   bun add @meyson/backend/eden
   ```
   - Generate type-safe API client
   - Replace fetch calls with typed requests

4. **Add TanStack Query**
   ```bash
   bun add @tanstack/react-query
   ```
   - Setup data fetching and caching
   - Use with Elysia Eden

5. **Add authentication**
   ```bash
   bun add @better-auth/react
   ```
   - Setup auth client
   - Add login/logout functionality
