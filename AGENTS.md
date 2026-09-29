# AGENTS.md — AI Agent Codebase Guide

> This file is written for AI coding agents (and human developers who want a fast orientation).
> It describes the architecture, conventions, data flow, routing map, and known gotchas for the
> DE-INES Physiotherapy website so that agents can make accurate, safe edits on the first attempt.

---

## Stack at a Glance

| Concern | Solution |
|---|---|
| UI | React 19 (JSX, function components, hooks only — no class components) |
| Language | TypeScript ~6 (strict mode) |
| Styling | Tailwind CSS v4 — **utility classes only, no CSS modules, no inline `style={}`** |
| Routing | React Router v7 (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`, `useParams`) |
| Animation | Framer Motion v12 (`motion.*`, `initial`, `animate`, `whileInView`, `viewport`) |
| Icons | Lucide React v1 — import named icons, e.g. `import { Phone } from "lucide-react"` |
| Build | Vite 8 + `@vitejs/plugin-react` + `@tailwindcss/vite` |
| Package mgr | pnpm |
| Deploy | Vercel (SPA rewrite rule in `vercel.json`) |

---

## Architecture Map

```
src/
│
├── App.tsx                      # Root — renders <AppRoutes /> only
│
├── routes/
│   └── AppRoutes.tsx            # ONLY file that defines routes.
│                                # BrowserRouter lives here.
│                                # All page-level <Route> entries live here.
│
├── layout/
│   ├── MainLayout.tsx           # Wraps all pages: <Navbar/> + <Outlet/> + <Footer/>
│   ├── Navbar.tsx               # Sticky header (top-bar + desktop nav + mobile drawer)
│   └── Footer.tsx               # Dark 4-column footer
│
├── pages/                       # Thin wrappers — import sections and compose them.
│   │                            # Keep pages SHORT. Business logic lives in sections.
│   ├── Home.tsx
│   ├── AboutPage.tsx
│   ├── Services.tsx
│   ├── TrainingPage.tsx
│   ├── WhatWeTreat.tsx
│   ├── PatientInfo.tsx
│   ├── Contact.tsx
│   ├── FAQ.tsx
│   └── NotFound.tsx
│
├── sections/                    # Feature sections — may be large (100–700 lines).
│   ├── Hero.tsx                 # Home hero with background video
│   ├── TrustBar.tsx             # 3-column trust signal strip
│   ├── CommonComplaints.tsx     # Common conditions on home page
│   ├── FeaturedServicesDetail.tsx # First 4 services showcased on home page
│   ├── Testimonial.tsx          # 6 patient testimonial cards
│   ├── About.tsx                # Full about page (story, values, team, videos, CTA)
│   ├── WhatWeTreat.tsx          # Condition cards page
│   ├── Contact.tsx              # Contact cards + WhatsApp form + Google Maps embed
│   ├── FAQSection.tsx
│   ├── PatientInformation.tsx
│   ├── Training.tsx
│   └── Services/
│       ├── servicesData.ts      # ← THE data layer. Service type + services[].
│       ├── ServicesDetails.tsx  # Individual service detail layout (receives Service prop)
│       ├── ServicesDetailPage.tsx
│       └── ServicesPreview.tsx  # Services overview/listing
│
├── components/                  # Primitives used across sections and layouts
│   ├── Container.tsx            # Max-width wrapper with horizontal padding
│   ├── Button.tsx
│   ├── Logo.tsx
│   └── ScrollToTop.tsx          # Scrolls window to top on route change
│
└── lib/
    └── whatsapp.ts              # ← SINGLE SOURCE OF TRUTH for all contact details.
                                 # Phone, WhatsApp, email, addresses, booking URLs.
```

---

## Routing Map

All routes are defined in [`src/routes/AppRoutes.tsx`](src/routes/AppRoutes.tsx).
All routes are nested inside `<Route element={<MainLayout />}>` — so Navbar and Footer render on every page.

| Path | Component | Notes |
|---|---|---|
| `/` | `Home` | |
| `/about` | `AboutPage` → `About` section | |
| `/services` | `ServicesPage` → `Services` section | Lists all 7 services |
| `/services/:slug` | `ServicesDetailsRoute` → `ServicesDetails` | Dynamic — looks up slug in `services[]` |
| `/services/functional-rehabilitation` | Redirect | `<Navigate to="/services/functional-specialist-rehabilitation" replace />` |
| `/training` | `TrainingPage` | |
| `/contact` | `Contact` page | |
| `/what-we-treat` | `WhatWeTreatPage` | |
| `/patient-info` | `PatientInfo` | |
| `/faq` | `FAQ` | |
| `*` | `NotFound` | Custom 404 |

---

## Data Layer — Services

**File:** [`src/sections/Services/servicesData.ts`](src/sections/Services/servicesData.ts)

```ts
export type Service = {
  number: string;           // Display number: "01", "02" … "07"
  title: string;            // Full service name
  slug: string;             // URL segment used in /services/:slug
  shortDescription: string; // Used in service cards/listings
  heroDescription: string;  // Used in detail page hero
  overview: string;         // Body paragraph — what the service covers
  whoWeHelp: string[];      // Bullet list
  conditions: string[];     // Bullet list — conditions/areas treated
  treatmentApproach: string[]; // Bullet list — what treatment involves
  benefits: string[];       // Bullet list — patient benefits
};

export const services: Service[] = [ /* 7 entries */ ];
```

### Current Services (slug → title)

| Slug | Title |
|---|---|
| `musculoskeletal` | Musculoskeletal Physiotherapy |
| `sports` | Sports Physiotherapy |
| `pelvic-health` | Women's & Men's Pelvic Health |
| `orthopaedic-rehabilitation` | Orthopaedic & Post-Surgical Rehabilitation |
| `neurological-rehabilitation` | Neurological Rehabilitation |
| `functional-specialist-rehabilitation` | Functional & Specialist Rehabilitation |
| `mobile-exercise-rehabilitation` | Mobile Exercise Rehabilitation |

---

## Contact Constants — Single Source of Truth

**File:** [`src/lib/whatsapp.ts`](src/lib/whatsapp.ts)

```ts
export const WHATSAPP_NUMBER   = "2348036125717";
export const WHATSAPP_DISPLAY  = "0803 612 5717";
export const PHONE_NUMBER      = "+2349160803314";
export const PHONE_DISPLAY     = "0916 080 3314";
export const EMAIL             = "consultdeinesphysiotherapy@gmail.com";
export const HEAD_OFFICE       = "41, Oko Central Road, Off Airport Road, Benin City, Edo State, Nigeria";
export const BRANCH_OFFICE     = "35 Egun Street, Off Orubor Road, Agbor, Delta State, Nigeria";
export const WHATSAPP_BOOK     = `https://wa.me/${WHATSAPP_NUMBER}?text=...`; // pre-filled booking
export const WHATSAPP_TRAINING = `https://wa.me/${WHATSAPP_NUMBER}?text=...`; // pre-filled training enquiry
```

**Rule:** Never hardcode phone numbers, addresses, or WhatsApp links in components. Always import from `lib/whatsapp.ts`.

---

## Styling Conventions

- **Tailwind utility classes only.** No CSS modules. No `style={{}}` attributes. No external CSS files beyond `index.css` (which just imports Tailwind).
- **Responsive:** Use `md:` and `lg:` breakpoints. Default styles are mobile-first.
- **Colour palette:** Primary = `blue-700` / `blue-800` for CTAs. Dark backgrounds = `slate-950`. Body text = `slate-600` / `slate-900`. Borders/dividers = `slate-100` / `slate-200`.
- **Spacing:** Sections use `py-20 md:py-28` or `py-24 md:py-32` for consistent vertical rhythm.
- **Rounded corners:** Cards use `rounded-2xl` or `rounded-3xl`. Buttons use `rounded-full` or `rounded-xl`.

---

## Animation Conventions

Framer Motion is used for all animations.

**Above-the-fold (Hero):** Use `initial` + `animate` (not `whileInView`):
```tsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.1 }}
>
```

**Below-the-fold (sections):** Use `whileInView` with `once: true`:
```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

---

## Link Conventions

| Use case | Component |
|---|---|
| Internal SPA navigation | `<Link to="/path">` or `<NavLink to="/path">` (React Router) |
| External URLs (Google Maps, Instagram, TikTok) | `<a href="..." target="_blank" rel="noopener noreferrer">` |
| WhatsApp booking | `<a href={WHATSAPP_BOOK} target="_blank" rel="noopener noreferrer">` |
| Phone | `<a href="tel:+2349160803314">` |
| Email | `<a href="mailto:...">` |

**Never use `<a href="/path">` for internal navigation** — it causes a full page reload and breaks the SPA.

---

## Known Gotchas

1. **Slug redirect** — The slug `functional-rehabilitation` was renamed to `functional-specialist-rehabilitation`. A `<Navigate>` redirect handles old URLs. The Navbar still links to the *old* slug (`/services/functional-rehabilitation`) — this works because of the redirect, but ideally should be updated to the canonical slug.

2. **Emoji placeholders in `FeaturedServicesDetail`** — The image panels for the 4 featured services on the home page currently show emoji (🦵 ⚽ 👶 🏥) and a gradient background instead of real photos. These should be replaced with actual service images when assets are available.

3. **Gallery page commented out** — `AboutPage.tsx` has `<Gallery/>` commented out. A `Gallery` section is planned but not yet implemented.

4. **Facebook link is a placeholder** — The Facebook icon in `Footer.tsx` links to `href="#"`. A real URL needs to be added.

5. **`src/sections/Services/servicesData.ts` is `.ts` not `.tsx`** — It contains no JSX, only data. Keep it as `.ts`.

6. **`MainLayout` wraps a `<main>` tag around `<Outlet/>`** — Individual page sections that use `<main>` (like `About.tsx`) end up with nested `<main>` elements. This is a minor semantic HTML issue but does not break anything visually.

---

## How to Add a New Service

1. Add a new entry to the `services` array in `src/sections/Services/servicesData.ts` — follow the `Service` type exactly.
2. Add the service to `physiotherapyServices` in `src/layout/Navbar.tsx` (both desktop dropdown and mobile accordion).
3. The dynamic route `/services/:slug` will automatically handle the new slug — no route changes needed.

## How to Add a New Page

1. Create a section in `src/sections/MyNewSection.tsx`.
2. Create a page wrapper in `src/pages/MyNewPage.tsx` that imports and renders the section.
3. Add a `<Route path="my-path" element={<MyNewPage />} />` inside the `<Route element={<MainLayout />}>` block in `src/routes/AppRoutes.tsx`.
4. Add a `<NavLink to="/my-path">` in the appropriate place in `src/layout/Navbar.tsx`.
