# Marketing

Current: Static HTML + TypeScript

## Next Steps

1. **Replace HTML with Astro**
   ```bash
   bun add astro @astrojs/react @astrojs/tailwind
   ```
   - Convert `index.html` to Astro components
   - Setup Astro project structure

2. **Add React components from packages/ui**
   ```typescript
   import { Button } from '@meyson/uikit'
   ```
   - Replace custom HTML with UI components
   - Use consistent design system

3. **Setup content management**
   ```bash
   bun add @astrojs/mdx
   ```
   - Add MDX for blog posts
   - Create content collections

4. **Configure SEO**
   - Add meta tags and Open Graph
   - Setup sitemap and robots.txt

5. **Add analytics**
   - Integrate Google Analytics or Plausible
   - Setup tracking events
