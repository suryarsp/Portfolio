---
name: portfolio-content
description: Use this skill when working on content, pages, navigation, or deployment for Surya's Next.js portfolio. Triggers on tasks like adding a blog post, portfolio item, or service; creating a new route or page; editing navigation links; or deploying to Vercel. Also use when the user asks "how do I add X to my portfolio" or "how do I publish/deploy".
---

## Content Management (`src/data/Data.ts`)

This is the single source of truth for all site content — no CMS, no database. Every blog post, portfolio item, and service is a TypeScript object in a typed array here.

**Types are defined in `src/models/index.ts`.** Always check the type before adding an entry — the `slug` field is mandatory and directly becomes the URL.

### Adding a Service
Array: `serviceData` — Type: `ServiceDetail`

```ts
{
  id: 2,                          // next sequential id
  title: "My Service",
  slug: "my-service",             // → /service/my-service
  category: "Category Label",
  imgSrc: "/assets/img/portfolio-1.jpg",
  description: ["Paragraph one.", "Paragraph two."],
  bestPractices: [
    {
      title: "Practice Group Title",
      content: ["Point one.", "Point two."]
    }
  ]
}
```

### Adding a Portfolio Item
Array: `portfolioData` — check `models/index.ts` for the exact type shape. `slug` → `/portfolio/<slug>`.

### Adding a Blog Post
Array: `blogData` — `slug` → `/blog/<slug>`. Include `category`, `tags`, `date`, and content fields per the type definition.

### Image paths
All images are served from `public/assets/img/`. Reference them as `/assets/img/filename.jpg` (no `public/` prefix).

---

## Adding a New Page / Route

Next.js App Router: a folder = a route, `page.tsx` inside = its content.

**Steps:**
1. Create `src/app/<route-name>/page.tsx`
2. Create `src/app/<route-name>/loading.tsx` (copy any existing one as a template)
3. Export a `metadata` object from `page.tsx` for SEO:
   ```ts
   export const metadata: Metadata = {
     title: 'Page Title | Surya Portfolio',
     description: '...',
   }
   ```
4. Import and compose section components from `src/component/`
5. Add the route to navigation (see below)

**Dynamic routes** (e.g., `/blog/[slug]`): create `src/app/<route>/[slug]/page.tsx`. Read `params.slug`, find the matching entry in `Data.ts`, and render the detail component.

---

## Navigation (`src/data/Links.ts`)

Add new top-level or nested nav entries here. The `NavigationMenu` component reads this file — no other changes needed to make a link appear in the header.

---

## Dark Mode Note for New Pages

New pages automatically inherit the global dark mode toggle (Redux `isThemeDark`). If a new section needs specific dark styles, add them to `public/assets/css/dark.css` — see the `portfolio-build` skill for the full pattern.

---

## Deployment to Vercel

**Pre-deploy checklist:**
1. Update all content in `src/data/Data.ts`
2. Verify locally: `npm run build` — fix any TypeScript or build errors
3. Run `npm run dev` and check all routes visually

**Deploy:**
1. Push to GitHub (`main` branch)
2. Vercel auto-deploys on every push if the repo is linked
3. First-time setup: import the GitHub repo at vercel.com → select the repo → click Deploy
4. The project root is `F:\Portfolio\Source` — set this as the root directory in Vercel if the repo contains multiple folders

Continuous deployment is active once linked: push to GitHub → Vercel rebuilds automatically.
