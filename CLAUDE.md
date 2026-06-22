# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js on port 3000)
npm run build    # Production build
npm run lint     # ESLint via Next.js
npm run start    # Start production server
```

No test suite is configured.

## Architecture

This is a **Next.js 14 App Router** portfolio site written in TypeScript.

**Directory layout under `src/`:**
- `app/` — App Router pages: `page.tsx`, `layout.tsx`, and route directories (`about/`, `blog/[slug]/`, `portfolio/[slug]/`, `service/[slug]/`, `contact/`)
- `component/` — UI components grouped by section (e.g. `banner/`, `blog/`, `portfolio/`). Utility components live in `component/utils/`
- `data/Data.ts` — Single source of truth for all site content (services, projects, blogs, etc.) as typed arrays
- `data/Links.ts` — Navigation link definitions
- `models/index.ts` — TypeScript type definitions shared across data and components
- `redux/` — Redux Toolkit store; `themeToggleSlice` (dark/light mode) and `blogSlice` are the main slices. `provider.tsx` wraps the app

**Key patterns:**
- All portfolio/blog/service detail pages use dynamic `[slug]` routes — slugs come from `data/Data.ts`
- Dark mode is managed via Redux (`themeToggleSlice`) and toggled by `ThemeToggler.tsx`; dark styles live in `public/assets/css/dark.css`
- Animations use GSAP (`CustomGsapDescAnimate`, `CustomGsapHeaderAnimate`) and Framer Motion
- Fonts are Next.js Google Fonts (`Caveat`, `Kanit`) injected as CSS variables `--caveat` and `--kanit`
- Global layout (`src/app/layout.tsx`) wraps all pages with Redux `<Providers>`, `HeaderSection`, `FooterSection`, `CustomCursor`, and `ToastContainer`
- Static assets (images, CSS) are in `public/assets/`

**To add new content** (blog post, portfolio item, service): add an entry to the relevant array in `src/data/Data.ts` using the types from `src/models/index.ts`. The slug field drives routing.
