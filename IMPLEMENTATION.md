# IMPLEMENTATION.md — Technical Design Reference

> A deep-dive technical document for developers building features on the DE-INES Physiotherapy website.
> Covers routing design, data architecture, animation strategy, deployment pipeline, and asset conventions.

---

## Table of Contents

1. [Routing Design](#1-routing-design)
2. [Services Data Layer](#2-services-data-layer)
3. [Contact and Booking Constants](#3-contact-and-booking-constants)
4. [Layout Shell](#4-layout-shell)
5. [Navbar Architecture](#5-navbar-architecture)
6. [Animation Strategy](#6-animation-strategy)
7. [Styling System](#7-styling-system)
8. [Asset Conventions](#8-asset-conventions)
9. [Deployment Pipeline](#9-deployment-pipeline)
10. [Build Configuration](#10-build-configuration)

---

## 1. Routing Design

**File:** `src/routes/AppRoutes.tsx`

The router uses **React Router v7 nested routes**. All user-facing pages are children of a single layout route that renders `<MainLayout />` (which contains the Navbar and Footer):

```tsx
<BrowserRouter>
  <ScrollToTop />
  <Routes>
    <Route element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="services/:slug" element={<ServicesDetailsRoute />} />
      <Route
        path="services/functional-rehabilitation"
        element={
          <Navigate to="/services/functional-specialist-rehabilitation" replace />
        }
      />
      <Route path="training" element={<TrainingPage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="what-we-treat" element={<WhatWeTreatPage />} />
      <Route path="patient-info" element={<PatientInfo />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
</BrowserRouter>
```

### Dynamic Service Routes

`/services/:slug` is handled by `ServicesDetailsRoute` (defined inline in `AppRoutes.tsx`):

```tsx
const ServicesDetailsRoute = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <NotFound title="Service not found" message="..." />;
  }

  return <ServicesDetails service={service} />;
};
```

The `service` object is **passed as a prop** to `ServicesDetails`. The detail page does not fetch data — it renders whatever `Service` object it receives. All data lives statically in `servicesData.ts`.

### Slug Redirect

The slug `functional-rehabilitation` was renamed to `functional-specialist-rehabilitation`. A `<Navigate replace>` handles backwards compatibility:

```tsx
<Route
  path="services/functional-rehabilitation"
  element={
    <Navigate to="/services/functional-specialist-rehabilitation" replace />
  }
/>
```

> **Note:** The Navbar currently lists the old slug. The redirect makes this transparent to users, but updating the Navbar entry to the canonical slug would avoid confusion in browser history.

### ScrollToTop Component

`<ScrollToTop />` is rendered inside `<BrowserRouter>` above `<Routes>`. It uses a `useEffect` on `location.pathname` to call `window.scrollTo(0, 0)` on every route change — ensuring pages always start at the top.

---

## 2. Services Data Layer

**File:** `src/sections/Services/servicesData.ts`

This is the **only** place service data is defined. It is a plain TypeScript module — no React, no JSX.

### Service Type

```ts
export type Service = {
  number: string;              // "01" to "07" — used as a display badge
  title: string;               // Full service name displayed to users
  slug: string;                // URL-safe identifier used in /services/:slug
  shortDescription: string;    // Brief description for listing cards
  heroDescription: string;     // Longer description for the detail page hero
  overview: string;            // Full paragraph overview of the service
  whoWeHelp: string[];         // List of patient types served
  conditions: string[];        // List of conditions and areas treated
  treatmentApproach: string[]; // List of treatment methods used
  benefits: string[];          // List of patient outcomes and benefits
};
```

### services Array

The `services` array is exported and consumed in three places:

| Consumer | Use |
|---|---|
| `AppRoutes.tsx` | Slug lookup for `/services/:slug` |
| `sections/Services/ServicesPreview.tsx` | Lists all services on the `/services` page |
| `sections/FeaturedServicesDetail.tsx` | `services.slice(0, 4)` on the home page |

### Adding a Service

1. Append a new `Service` object to the `services` array in `servicesData.ts`.
2. Add a corresponding entry to `physiotherapyServices` in `Navbar.tsx`.
3. No route changes needed — the dynamic route handles all slugs automatically.

---

## 3. Contact and Booking Constants

**File:** `src/lib/whatsapp.ts`

All contact details and WhatsApp booking URLs are centralised here. No component should hardcode phone numbers, addresses, or WhatsApp links.

```ts
// Phone
export const PHONE_NUMBER  = "+2349160803314";  // href="tel:..." format
export const PHONE_DISPLAY = "0916 080 3314";   // Human-readable

// WhatsApp
export const WHATSAPP_NUMBER  = "2348036125717"; // No "+" — wa.me format
export const WHATSAPP_DISPLAY = "0803 612 5717";

// Email
export const EMAIL = "consultdeinesphysiotherapy@gmail.com";

// Addresses
export const HEAD_OFFICE   = "41, Oko Central Road, Off Airport Road, Benin City, Edo State, Nigeria";
export const BRANCH_OFFICE = "35 Egun Street, Off Orubor Road, Agbor, Delta State, Nigeria";

// Pre-filled WhatsApp deep links
export const WHATSAPP_BOOK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello, I would like to book an appointment at DE-INES Physiotherapy."
)}`;

export const WHATSAPP_TRAINING = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello, I am interested in the Home Care Assistant training program at DE-INES."
)}`;
```

The Contact section (`src/sections/Contact.tsx`) also dynamically builds a WhatsApp link from user form input at submit time, using the same `WHATSAPP_NUMBER` constant.

---

## 4. Layout Shell

**File:** `src/layout/MainLayout.tsx`

```tsx
const MainLayout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />  {/* matched child route renders here */}
    </main>
    <Footer />
  </>
);
```

`<Outlet />` is the React Router v7 slot where the matched child route's component renders. Every page is wrapped in this shell automatically via the nested route structure.

> **Known issue:** `About.tsx` and `ServicesDetails.tsx` render their own `<main>` element, which produces nested `<main>` tags when combined with `MainLayout`. This is a minor semantic HTML issue and does not affect visual rendering.

---

## 5. Navbar Architecture

**File:** `src/layout/Navbar.tsx`

The Navbar has three layers:

### Layer 1 — Top Bar (desktop only, `md:block`)

- Benin City location label
- Quick links: Patient Information, FAQ, Contact
- Phone number with `tel:` link

### Layer 2 — Main Navigation Bar

- Logo (`NavLink` to `/`)
- Desktop nav links (hidden on mobile, `lg:flex`)
  - Simple links: Home, About, Training
  - Dropdown menus: Physiotherapy, What We Treat (CSS hover-based via `group-hover:`)
- Desktop "Book Appointment" CTA (`lg:inline-flex`)
- Mobile hamburger toggle (`lg:hidden`)

### Layer 3 — Mobile Drawer (`lg:hidden`)

- Rendered conditionally when `menuOpen` is `true`
- Full-height right-side slide-in drawer with a backdrop overlay
- Accordion menus for Physiotherapy and What We Treat, controlled by `mobilePhysioOpen` and `mobileTreatOpen` state
- Body scroll is locked via `document.body.style.overflow = "hidden"` when the drawer is open

### State

```ts
const [menuOpen, setMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [mobilePhysioOpen, setMobilePhysioOpen] = useState(false);
const [mobileTreatOpen, setMobileTreatOpen] = useState(false);
```

A scroll event listener sets `scrolled` to `true` when `window.scrollY > 10`, which adds a shadow and backdrop blur to the navbar background.

---

## 6. Animation Strategy

Framer Motion is used for all animations. The pattern depends on whether content is above or below the fold.

### Above the Fold — Hero Section

Use `initial` + `animate`. These fire immediately on mount, not on scroll:

```tsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.1 }}
>
```

### Below the Fold — All Other Sections

Use `whileInView` + `viewport={{ once: true }}`. This triggers once when the element scrolls into view:

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

### Staggered Lists

Use `index * 0.1` as the `delay` to stagger items rendered inside a `.map()`:

```tsx
{items.map((item, index) => (
  <motion.div
    key={item.title}
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {/* ... */}
  </motion.div>
))}
```

---

## 7. Styling System

Tailwind CSS v4 is used via the Vite plugin (`@tailwindcss/vite`). There is no `tailwind.config.js` — all configuration is handled through the plugin.

### Colour Conventions

| Role | Tailwind class |
|---|---|
| Primary CTA background | `bg-blue-700 hover:bg-blue-800` |
| Primary text accent | `text-blue-700` |
| Dark section background | `bg-slate-950` |
| Light section background | `bg-slate-50` |
| Body text — muted | `text-slate-600` |
| Body text — strong | `text-slate-900` |
| Borders and dividers | `border-slate-100` or `border-slate-200` |
| Urgent CTA (e.g. What We Treat hero) | `bg-red-500 hover:bg-red-600` |

### Spacing Conventions

| Element | Padding |
|---|---|
| Standard page sections | `py-20 md:py-28` |
| Large page sections | `py-24 md:py-32` |
| Standard cards | `p-6` or `p-8` |
| Featured/hero cards | `p-8 md:p-12` |

### Container Component

`src/components/Container.tsx` is a max-width and horizontal padding wrapper. Always use it inside sections:

```tsx
<section className="bg-slate-50 py-24">
  <Container>
    {/* content */}
  </Container>
</section>
```

Do not apply `max-w-*` or `px-*` directly on section elements — use `<Container>` instead.

---

## 8. Asset Conventions

### Images

All image assets live in `public/images/`. Reference them with root-relative paths:

```tsx
<img src="/images/physio-1.jpg" alt="Physiotherapy session" />
```

- Use lowercase, hyphenated filenames: `knee-treatment.jpg`, not `KneeTreatment.jpg`
- Optimise images before committing — aim for under 300 KB per photo
- Add `loading="lazy"` on all images below the fold

### Videos

Video files live in `public/gallery/`:

| File | Used in |
|---|---|
| `clinic-video.mp4` | `Hero.tsx` — autoplay background video |
| `outreach.mp4` | `About.tsx` — community outreach player |
| `director-video-web.mp4` | `About.tsx` — director feature player |

### Video Autoplay Pattern

The Hero background video uses a `useRef` and `useEffect` pattern for reliable mobile autoplay:

```tsx
const videoRef = useRef<HTMLVideoElement>(null);

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;
  video.muted = true;
  const play = () => video.play().catch(() => {});
  if (video.readyState >= 3) {
    play();
  } else {
    video.addEventListener("canplay", play);
  }
  return () => video.removeEventListener("canplay", play);
}, []);
```

Mobile browsers block autoplay unless the video is muted and play is triggered after the `canplay` event fires.

---

## 9. Deployment Pipeline

The site is deployed on **Vercel**. Deployment is fully automatic:

1. Code is pushed to the `main` branch on GitHub.
2. Vercel detects the push and runs `pnpm build` (Vite + TypeScript).
3. The `dist/` output is deployed to Vercel's CDN edge network.

### SPA Routing Fix

Because this is a client-side SPA, any URL navigated to directly (e.g. `/services/musculoskeletal`) would return a 404 from the CDN without a rewrite rule. `vercel.json` fixes this:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

All requests are sent to `index.html` and React Router handles routing on the client.

---

## 10. Build Configuration

**File:** `vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

- `@vitejs/plugin-react` — enables the React JSX transform and Fast Refresh in development
- `@tailwindcss/vite` — integrates Tailwind CSS v4 directly into the Vite pipeline (no PostCSS config required)

### TypeScript Configuration

Three tsconfig files are present:

| File | Purpose |
|---|---|
| `tsconfig.json` | Root — references both below |
| `tsconfig.app.json` | App source (`src/`) — strict mode enabled |
| `tsconfig.node.json` | Vite config file — Node.js environment types |

The build command runs TypeScript compilation before bundling:

```bash
pnpm build   # runs: tsc -b && vite build
```
