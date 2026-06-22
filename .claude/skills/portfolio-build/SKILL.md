---
name: portfolio-build
description: Use this skill when extending or modifying the UI, components, animations, state, or forms in Surya's Next.js portfolio. Triggers on tasks like creating a new section component, adding dark mode styles, working with GSAP or Framer Motion animations, adding Redux state, or building/modifying forms with React Hook Form. Also use when the user asks about component structure, how to wire up state, or how animations work in this project.
---

## Creating a New Section Component

Components live in `src/component/<section>/`. Create a new folder per section (e.g., `src/component/testimonial/`).

**Standard prop pattern** — many section components accept these to reuse across home and inner pages:

```tsx
type Props = {
  style: string;       // extra CSS class on the wrapper
  showHeader: boolean; // whether to show the section heading
  innerPage?: boolean; // adjusts layout when used on a dedicated page
}
```

**Mounting on a page:** Import the component into `src/app/<page>/page.tsx` and pass the appropriate props. On the home page (`src/app/page.tsx`), `style=''` and `showHeader={true}` is the standard combination.

**Bootstrap grid:** Use Bootstrap 5 classes (`container`, `row`, `col-lg-*`, etc.) for layout. React Bootstrap components are also available for more complex UI patterns.

---

## Dark Mode

Dark styles live in `public/assets/css/dark.css`. Base styles are in `public/assets/css/style.css`.

**How it works:** The Redux `isThemeDark` state (from `themeToggleSlice`) controls a class on the root or parent element. Dark mode CSS uses that class as a prefix selector.

**Adding dark styles for a new component:**
```css
/* style.css — base */
.my-section { background: #fff; color: #111; }

/* dark.css — dark override */
.dark-mode .my-section { background: #1a1a2e; color: #eee; }
```

Never use inline conditional classes for dark mode — always use the CSS file pair pattern above.

**Reading theme state in a component:**
```tsx
import { useAppSelector } from '@/redux/hooks';

const isDark = useAppSelector(state => state.themeToggle.isThemeDark);
```

---

## Animations

### GSAP (scroll-triggered entrance animations)

Two reusable wrappers in `src/component/utils/`:

- **`CustomGsapHeaderAnimate`** — for section headings/titles
- **`CustomGsapDescAnimate`** — for body text and descriptive content

Wrap the element you want to animate:
```tsx
import CustomGsapHeaderAnimate from '@/component/utils/CustomGsapHeaderAnimate';

<CustomGsapHeaderAnimate>
  <h2>Section Title</h2>
</CustomGsapHeaderAnimate>
```

Use GSAP wrappers for scroll-triggered entrance effects. Don't write raw GSAP inside components — use the wrappers for consistency.

### Framer Motion (component-level motion)

Use Framer Motion for hover effects, exit animations, or anything that isn't a simple scroll-triggered entrance:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  ...
</motion.div>
```

### Split-type (text reveal)

`split-type` is available for character/word-level text animations. Use with GSAP for staggered letter entrances on hero headings.

---

## Redux — Adding New State

The store is at `src/redux/store.ts`. Slices live in `src/redux/features/`.

**Steps to add a new slice:**

1. Create `src/redux/features/myFeatureSlice.tsx`:
```tsx
'use client'
import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'myFeature',
  initialState: { value: false },
  reducers: {
    myAction: (state) => { state.value = !state.value; }
  }
});

export const { myAction } = mySlice.actions;
export default mySlice.reducer;
```

2. Register in `src/redux/rootReducer.tsx`:
```tsx
import myFeatureReducer from './features/myFeatureSlice';

const rootReducer = combineReducers({
  themeToggle: themeToggleReducer,
  blog: blogReducer,
  myFeature: myFeatureReducer,   // add here
});
```

3. Use in any component with typed hooks from `src/redux/hooks.ts`:
```tsx
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { myAction } from '@/redux/features/myFeatureSlice';

const value = useAppSelector(state => state.myFeature.value);
const dispatch = useAppDispatch();
dispatch(myAction());
```

---

## Forms (React Hook Form + React Toastify)

Follow the pattern in `src/component/form/ContactForm.tsx` and `SubscribeForm.tsx`.

**Basic setup:**
```tsx
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

type FormData = { name: string; email: string; message: string; };

const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

const onSubmit = (data: FormData) => {
  // handle submission
  toast.success('Message sent!');
  reset();
};
```

**Validation:**
```tsx
<input {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email' } })} />
{errors.email && <span>{errors.email.message}</span>}
```

**Toastify** is pre-configured in the global layout (`src/app/layout.tsx`) — just call `toast.success()`, `toast.error()`, or `toast.info()` directly. No additional setup needed per component.

---

## Carousels & Sliders

- **React Slick** — used for testimonial/blog carousels. CSS imported globally in `layout.tsx`.
- **Swiper** — used for portfolio/image sliders. CSS also globally imported.

Import and configure per component. Check existing slider components (e.g., `src/component/testimonial/TestimonialSection.tsx`) for the settings pattern used in this project.

---

## Counter Animations

`react-countup` is used for animated stat counters. See `src/component/counter/` for usage patterns. Wrap with an intersection observer or use `enableScrollSpy` prop to trigger on scroll.
