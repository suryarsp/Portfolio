---
name: surya-portfolio
description: Development guide for Surya's Next.js 14 portfolio site (F:\Portfolio\Source). Use this skill whenever working on this portfolio — adding content, creating components, modifying routes, working with Redux theme/blog state, or touching animations. Trigger on any task involving this codebase: new blog posts, portfolio items, services, component changes, dark mode, GSAP animations, or routing questions.
---

## Project Overview

Next.js 14 App Router portfolio site written in TypeScript. The working directory is `F:\Portfolio\Source`.

**Dev server:** `npm run dev` (port 3000)  
**Build:** `npm run build`  
**Lint:** `npm run lint`

## Content is Data-Driven

All site content lives in `src/data/Data.ts` as typed arrays. This is the single source of truth — there is no CMS or database. To add or edit content:

1. Open `src/data/Data.ts`
2. Add/edit entries in the relevant array (`serviceData`, `portfolioData`, `blogData`, etc.)
3. Types are in `src/models/index.ts` — always match the type shape
4. The `slug` field on each entry directly controls the URL (`/portfolio/my-slug`, `/blog/my-slug`)

Navigation links live separately in `src/data/Links.ts`.

## Routing Pattern

Dynamic pages follow this pattern — the page reads the slug from params and finds the matching entry in `Data.ts`:

```
src/app/
├── page.tsx                  ← Home (assembles section components)
├── about/page.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/page.tsx       ← reads slug, looks up in blogData
├── portfolio/[slug]/page.tsx
├── service/[slug]/page.tsx
└── contact/page.tsx
```

Each route directory also has a `loading.tsx` for the Next.js loading UI.

## Component Organization

Components live in `src/component/<section>/`. Each section has its own directory (e.g., `blog/`, `portfolio/`, `service/`). Shared utilities are in `src/component/utils/`:

- `CustomCursor.tsx` — custom mouse cursor
- `ThemeToggler.tsx` — dark/light mode toggle button
- `CustomGsapDescAnimate.tsx` / `CustomGsapHeaderAnimate.tsx` — reusable GSAP scroll animations
- `NavLink.tsx` — active-aware navigation link wrapper

The home page (`src/app/page.tsx`) composes section components directly. Many section components accept props like `style`, `showHeader`, `listStyle`, `innerPage` to reuse them on both the home page and inner pages. Some home-page sections are currently commented out (Portfolio, Testimonial, Pricing, Blog).

## Redux State

Redux Toolkit store at `src/redux/`. Two slices:

- `themeToggleSlice` — `isThemeDark: boolean`, action `toggleTheme()`. Dark styles are in `public/assets/css/dark.css` and applied based on this state.
- `blogSlice` — manages blog filtering/category state

`src/redux/provider.tsx` wraps the app in `<Providers>`. Use `src/redux/hooks.ts` for typed `useAppSelector` / `useAppDispatch`.

## Dark Mode

Dark mode CSS lives in `public/assets/css/dark.css`. Base styles are in `public/assets/css/style.css`. When adding new components that need dark mode variants, add selectors to `dark.css` rather than using inline conditional classes.

## Animations

- **GSAP** — used for scroll-triggered text/header animations via the utility components in `component/utils/`. Wrap content in `<CustomGsapDescAnimate>` or `<CustomGsapHeaderAnimate>` for consistent entrance effects.
- **Framer Motion** — available for component-level motion
- **React Slick / Swiper** — used for carousels/sliders

## Fonts & Styling

Two Google Fonts loaded via `next/font` in `src/app/layout.tsx`:
- `--caveat` (handwritten accent font)
- `--kanit` (primary sans-serif)

Bootstrap 5 is included globally. Component-level styles go in `public/assets/css/style.css`.

## Global Layout

`src/app/layout.tsx` wraps every page with:
- Redux `<Providers>`
- `<CustomCursor />`
- `<HeaderSection />` and `<FooterSection />`
- `<ToastContainer />` (react-toastify, top-right)

## Adding a New Content Type (Quick Reference)

1. Add a type to `src/models/index.ts`
2. Add a typed array to `src/data/Data.ts`
3. Create list page: `src/app/<type>/page.tsx`
4. Create detail page: `src/app/<type>/[slug]/page.tsx`
5. Create components in `src/component/<type>/`
6. Add `loading.tsx` alongside each page