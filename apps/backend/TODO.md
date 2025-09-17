# Backend

Current: Bun.serve + TypeScript API

## Next Steps

1. **Replace Bun.serve with Elysia.js**
   ```bash
   bun add elysia
   ```
   - Migrate `src/index.ts` to use Elysia instead of Bun.serve

2. **Add Better Auth**
   ```bash
   bun add better-auth
   ```
   - Setup authentication routes
   - Configure auth providers (Google, GitHub, Email)

3. **Add database**
   ```bash
   bun add better-sqlite3 @types/better-sqlite3
   ```
   - Setup SQLite for development

4. **Structure API routes**
   - Move API logic to separate route files
   - Add auth middleware

5. **Add environment variables**
   - Create `.env` file for secrets
