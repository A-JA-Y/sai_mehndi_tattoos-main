# Sai Mehndi & Tattoo — Website

A modern, animated multi-page website for **Sai Mehndi & Tattoo** (Dev Kumar), built with:

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** — henna-inspired dark luxe design system
- **Framer Motion** — page transitions, scroll reveals, micro-interactions
- **Lenis** — buttery smooth scrolling

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero slider, services preview, stats, gallery preview, reviews, CTA |
| `/about` | Artist story, journey timeline, awards, classes callout |
| `/services` | All 6 services, booking process, FAQ |
| `/gallery` | Filterable gallery with lightbox |
| `/reviews` | Client testimonials |
| `/contact` | Booking form (sends via WhatsApp), info cards, map |

## Getting started

```bash
npm install
npm run dev      # develop at http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing content

Almost all text lives in **`lib/data.ts`** — phone numbers, address, services,
reviews, FAQs, stats, timeline and gallery items. Edit that one file to update
the site. (Note: stats and studio hours are editable placeholders — adjust them
to the real figures.)

Images live in **`public/images/`**. To add gallery photos, drop the file there
and add an entry to `galleryItems` in `lib/data.ts`.

Social links (Instagram/Facebook) are placeholders (`#`) in `lib/data.ts` —
replace them with the real profile URLs.

## Legacy site

The original static site (HTML/CSS/JS + original images) is preserved in
**`legacy-site/`** and can be deleted once you're happy with the new one.
