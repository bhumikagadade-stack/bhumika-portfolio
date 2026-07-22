# Bhumika Gadade — AI/ML Portfolio

A single-page, dark-themed portfolio built with React 19 + Vite, showcasing AI, Machine
Learning and Data Science work. Includes a hero with a typing animation and an
animated neural-constellation background, glassmorphism cards throughout, a
filterable project grid, animated counters, and a fully responsive layout.

## Design direction

- **Palette** — near-black slate background (`#0a0e17`) with a cyan → violet
  "signal" gradient (`#2dd4e8` → `#a78bfa`) as the primary accent, and a warm
  amber (`#f5a623`) used sparingly for highlights.
- **Type** — Space Grotesk for display/headings, Inter for body copy,
  JetBrains Mono for tags, stats and eyebrow labels — evoking a
  research/notebook feel appropriate for an ML portfolio.
- **Signature element** — a mouse-reactive neural constellation rendered on
  `<canvas>` in the hero (`src/components/NeuralField.jsx`). It's built with
  plain Canvas2D rather than Three.js/React Three Fiber so the project has no
  heavy 3D dependency, stays fast on low-end devices, and needs no WebGL
  fallback handling — while still delivering the "AI-inspired visualization"
  the brief called for.

## Tech stack

- React 19 + Vite
- Framer Motion (page/section/scroll animations)
- React Icons
- Plain CSS with CSS custom properties (no Tailwind/Bootstrap)

## Getting started

```bash
npm install
npm run dev       # start local dev server at http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

## Before you deploy

1. **Resume** — drop your PDF at `public/resume.pdf`. The "Download Resume"
   button in the hero links to `/resume.pdf`.
2. **Content** — all copy (skills, projects, experience, education,
   certificates, research interests, social links) lives in one place:
   `src/data/portfolioData.js`. Edit that file to update the site.
3. **Socials** — update `profile.socials` in the same file with your real
   GitHub/LinkedIn URLs.
4. **Project links** — each entry in the `projects` array has `github` and
   `demo` fields — point them at your real repos/demos.
5. **Contact form** — the form currently opens the visitor's email client
   pre-filled with their message (no backend required). Swap the `handleSubmit`
   function in `src/sections/Contact.jsx` for a real endpoint (e.g. Formspree,
   EmailJS, or your own API) if you'd like it to submit silently.

## Project structure

```
src/
  assets/            static images (add your own project screenshots here)
  components/        Navbar, Footer, NeuralField, Reveal, loading screen, etc.
  data/              portfolioData.js — single source of truth for all content
  hooks/             useInView.js — scroll-reveal intersection observer hook
  sections/          Hero, About, Skills, Experience, Projects, Achievements,
                      Education, Certificates, ResearchInterests, Contact
  App.jsx
  main.jsx
  index.css          design tokens + global styles
```

## Deployment

**Vercel**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm run build
# drag-and-drop the /dist folder onto netlify.com, or:
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages**
```bash
npm run build
# push the contents of /dist to a `gh-pages` branch, or use the
# `gh-pages` npm package / GitHub Actions to automate it.
```

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`) and
  descriptive meta tags/OG tags are in `index.html`.
- All interactive elements are keyboard reachable with a visible focus ring.
- `prefers-reduced-motion` is respected globally (see `src/index.css`).
- The cursor glow effect is disabled on touch devices automatically.
