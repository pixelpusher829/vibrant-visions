# Vibrant Visions

Website for Vibrant Visions, a community art club. Built with [Astro](https://astro.build) as a fast, fully static site and deployed to GitHub Pages.

**Live site:** https://pixelpusher829.github.io/vibrant-visions/

## Features

- Home page with hero, about, gallery (with lightbox), upcoming events, tutorials, membership plans, testimonials, FAQ, newsletter sign-up and contact form
- Tutorial articles written in Markdown, each with its own page
- Events hide automatically once their end date has passed
- Responsive layout with an accessible mobile menu
- Optimised, responsive images (AVIF/WebP) via `astro:assets`
- SEO: page titles and descriptions, Open Graph/social share images, canonical URLs, sitemap, `robots.txt` and Organization structured data
- Accessibility: skip link, alt text, keyboard-navigable lightbox and menu, visible focus states, reduced-motion support
- Custom 404 page

## Getting started

Requires Node.js 18.20+ (22 recommended).

```sh
npm install
npm run dev       # http://localhost:4321/vibrant-visions/
npm run build     # production build to ./dist
npm run preview   # serve the production build locally
```

## Editing content

Most content lives in **[`src/data/site.ts`](src/data/site.ts)**: contact details, opening hours, social links, events, gallery, membership plans, testimonials and FAQs. Anything marked `TODO(client)` is placeholder copy to confirm before launch.

| To change…                   | Edit                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------- |
| Contact info, hours, socials | `site` in `src/data/site.ts`                                                    |
| Events                       | `events` in `src/data/site.ts` (images in `src/assets/images/`)                 |
| Gallery                      | `gallery` in `src/data/site.ts`; `layout: "wide" \| "tall"` sets the tile shape |
| Membership pricing           | `plans` in `src/data/site.ts`                                                   |
| Testimonials / FAQ           | `testimonials` / `faqs` in `src/data/site.ts`                                   |
| Tutorials                    | Add or edit Markdown files in `src/content/tutorials/`                          |
| Colours, fonts, spacing      | CSS variables at the top of `src/styles/global.css`                             |

### Adding a tutorial

Create `src/content/tutorials/my-tutorial.md`:

```md
---
title: My Tutorial
description: One-sentence summary shown on the card and in search results.
level: Beginner # Beginner | Intermediate | Advanced
duration: 30 min read
image: ../../assets/images/my-image.jpg
alt: Describe the image for screen readers
order: 4
materials:
  - Optional list of supplies
---

Tutorial content in Markdown…
```

It appears on the home page and at `/tutorials/my-tutorial/`.

## Forms

The newsletter and contact forms post to any form service that accepts a standard form POST, such as [Formspree](https://formspree.io) or [Basin](https://usebasin.com). Set the endpoint at build time:

```sh
# .env (local) or a repository variable / secret in GitHub Actions
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

If no endpoint is set, the forms still work: they open the visitor's email app with the message pre-filled, addressed to the email in `site.ts`. Both forms include a `_gotcha` honeypot field to filter spam.

## Deployment

Pushing to `main` builds and deploys the site to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). In the repository settings, set **Pages → Source** to **GitHub Actions**.

To enable form submissions in production, add `PUBLIC_FORM_ENDPOINT` under **Settings → Secrets and variables → Actions → Variables**. The workflow already passes it to the build.

### Using a custom domain

1. Update `site` in `astro.config.mjs` to the new domain and remove `base`.
2. Add a `public/CNAME` file containing the domain.
3. Configure the domain under **Settings → Pages**.

## Project structure

```text
src/
├── assets/images/      # Source images (optimised at build time)
├── components/         # Page sections and UI pieces
├── content/tutorials/  # Tutorial articles (Markdown)
├── data/site.ts        # Editable site content
├── layouts/Layout.astro
├── pages/              # Routes: home, tutorials, 404, robots.txt
├── scripts/forms.ts    # Form submission handling
└── styles/global.css
```
