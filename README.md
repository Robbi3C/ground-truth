# Ground Truth

Independent advisory website for Robert Cowell. Built with React, TypeScript and Vite.

## Local development

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`.

## Build

```sh
npm run build
npm run preview
```

The static build is generated in `dist/`. Dependencies and build outputs are excluded from Git.

## Vercel

Import this repository with the Vite framework preset. Build command: `npm run build`. Output directory: `dist`. The repository root is the project root. No backend or environment variables are required.

The intended primary domain is `www.groundtruthconsulting.co`, with DNS managed in Cloudflare. Connect the domain separately after reviewing the deployment.

## Current site

The homepage includes the hero, proof ribbon, focused services selector, three compact case studies, testimonial placeholder, profile and contact section. Case studies expand using native details controls. Navigation uses homepage anchors.

## Publication notes

The preview retains `noindex, nofollow`. Confirm career figures and case outcomes, replace the testimonial placeholder with an approved quote, and review the case-study reference images before public launch. The email link currently uses `rob@groundtruthconsuting.co` as originally supplied; confirm this spelling before launch.

Fonts are local. Plus Jakarta Sans licensing is included under `public/fonts/`. Switzer was sourced from Fontshare: https://www.fontshare.com/licenses.

PRODUCT.md and DESIGN.md record design context; the other review documents describe earlier stages of development.
