# La Locura Bar

Astro static landing page for La Locura Bar in Villavicencio.

## Commands

```sh
pnpm install
pnpm astro check
pnpm build
pnpm preview
```

## SEO deployment configuration

The canonical production domain is configured as:

```sh
https://lalocurabar.com.co
```

Astro uses this URL for canonical tags, Open Graph URLs, robots.txt sitemap references, and the `@astrojs/sitemap` integration. If the domain changes, override it before building with either:

```sh
PUBLIC_SITE_URL=https://new-production-domain.example
# or
SITE_URL=https://new-production-domain.example
```

## Project structure

- `src/components/seo/SEOHead.astro` — SEO metadata and Schema.org BarOrPub structured data.
- `src/pages/robots.txt.ts` — robots.txt endpoint with sitemap and AI crawler signals.
- `src/pages/llms.txt.ts` — concise AI-readable business summary for answer engines.
- `src/pages/llms-full.txt.ts` — expanded AI-readable profile with menu, activities, FAQ, and citation guidance.
- `src/components/sections/FAQ.astro` — visible FAQ section for local SEO, AI answers, and FAQPage schema.
- `src/data/config.ts` — business/contact/location/SEO/GEO constants.
- `src/data/social-networks.ts` — social profiles exposed in footer and structured data.
