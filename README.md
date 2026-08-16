# Ahmed Massoud — Portfolio Site

Personal portfolio for **Ahmed Reda Sayed Massoud** — Email Operations Manager & AI Automation Builder. Live at **[ahmedmassoud.co](https://ahmedmassoud.co)**.

## Concept

The site is built around an **"operations log"** idea: Ahmed's identity as an operator/systems-builder is expressed literally through the design — a hero styled as a live system log (timestamped status lines), and a numbered section index (`01 — About`, `02 — Stack`, ...) that doubles as page navigation.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for scroll reveals
- Fonts: **IBM Plex Sans**, **IBM Plex Sans Condensed**, **IBM Plex Mono**
- Deployed on **Vercel**

## Design system

| Token | Value | Use |
|---|---|---|
| Console | `#171A18` | Dark base background |
| Report | `#EFEAE0` | Warm paper inset panels |
| Ink | `#1F1D1A` | Text on paper panels |
| Paper | `#EDEBE6` | Text on dark background |
| Signal | `#C9A227` | Gold accent |
| Wire | `#5C7B75` | Muted sage-teal secondary accent |

No border-radius anywhere in the content (sharp, technical register) — the favicon/logo mark (`>_`, a terminal prompt + cursor) follows the same flat, sharp-cornered language.

## Project structure

```
src/
  app/
    layout.tsx          # Root layout, metadata, JSON-LD, fonts
    page.tsx             # Assembles all sections
    icon.svg              # Favicon (terminal ">_" mark)
    opengraph-image.png   # Social share image
    robots.ts / sitemap.ts
    log/
      page.tsx             # Log index (list of posts)
      [slug]/page.tsx        # Individual post, renders Markdown
    gallery/
      page.tsx               # Gallery grid + lightbox
  components/
    Header.tsx           # Fixed nav + mobile menu
    Hero.tsx              # Log-line intro + name/title
    About.tsx
    Skills.tsx            # "Stack" section
    SelectedWork.tsx       # Flagship (MailPilot AI) + secondary projects
    Experience.tsx
    Services.tsx
    Contact.tsx
    Footer.tsx
    SectionIndex.tsx        # Scroll-spy side rail (desktop)
    Reveal.tsx                # Framer Motion scroll-in wrapper
    ScreenshotPlaceholder.tsx # Figure frame for project screenshots
    GalleryLightbox.tsx       # Gallery grid + click-to-expand lightbox
  lib/
    content.ts             # All copy/content lives here (single source of truth)
    log.ts                 # Markdown loader for the Log
    gallery.ts               # Markdown loader for the Gallery
public/
  screenshots/              # Anonymized MailPilot AI product screenshots
content/
  log/                       # Log posts (Markdown + frontmatter)
  gallery/                    # Gallery items (Markdown + frontmatter)
```

## Content

All site copy — identity, hero text, about, skills, work history, services, contact — lives in a single typed file: [`src/lib/content.ts`](src/lib/content.ts). Edit that file to change any text on the site without touching component code.

### Writing a Log post

Add a new `.md` file to `content/log/`, named after the URL slug (e.g. `my-post.md` → `/log/my-post`), with frontmatter:

```md
---
title: "Post title"
date: "2026-08-16"
category: "Technical" # Technical | Field Notes | Ideas
excerpt: "One or two sentences shown in the list and used as the meta description."
tags: ["tag-one", "tag-two"]
---

Post body in Markdown.
```

### Adding a Gallery item

Add a new `.md` file to `content/gallery/`, with the image already placed under `public/`:

```md
---
title: "Screenshot title"
image: "/screenshots/your-image.png"
project: "Project name"
order: 4
---

Description shown in the lightbox when the image is clicked. Markdown supported.
```

`order` controls where it sits in the grid (lower first).

No build step or registration needed — new posts show up on `/log` and get their own static page automatically.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Pushes to `main` deploy automatically via Vercel. The production domain (`ahmedmassoud.co`) is registered separately and pointed at Vercel via DNS (`A` record → `76.76.21.21`, `CNAME www` → `cname.vercel-dns.com`).

## SEO

- Global (non-geo-restricted) metadata: Open Graph, Twitter card, `Person` JSON-LD
- `robots.ts` / `sitemap.ts` (Next.js file-convention routes)
- Verified with Google Search Console
