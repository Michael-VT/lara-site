# [IX Lara Handmade](https://larise.art/ru/)

A multilingual (English / Português / Українська / Русский) static showcase and catalog for handmade products, built with SvelteKit + Svelte 5, Tailwind CSS, and Paraglide JS. It is **not** an online shop — there is no cart, checkout, or payment. Every enquiry is routed to WhatsApp, Telegram, or email, with the product's SKU carried along automatically.

> The catalog has 45 real handmade products with real photos, real "About" copy, and a Journal section with full articles (not just teasers). See [Known open items](#known-open-items) for what's still unfinished.

## Stack

- SvelteKit + Svelte 5 (runes), JavaScript with JSDoc types (checked via `svelte-check`)
- Tailwind CSS v4 (Vite plugin)
- Paraglide JS for compile-time i18n (`en`, `pt`, `uk`, `ru`)
- Zod for content schema validation
- `@sveltejs/adapter-static` — fully static output, no Node server needed in production
- Vitest + Testing Library for unit/component tests, Playwright for e2e
- `qrcode` for build-time SVG QR code generation

## Getting started

```sh
bun install
bun run dev
```

Open the printed local URL — you'll land on the locale gateway (`/`), which redirects to `/en/`, `/pt/`, `/uk/`, or `/ru/` based on your browser language (or a previously saved choice).

### Previewing it like a real visitor

Run `bash scripts/preview.sh` (or `bun run preview:site`). It installs dependencies if needed, builds the actual production site, and serves it at `http://localhost:4173/` — this is what a real visitor gets (no dev-mode overlays), including the optimized product photos, generated QR codes, and sitemap.

### Viewing it from another device on your home network (phone, tablet, ...)

`scripts/preview.sh` binds to your network by default, so once it's running you can open the printed `Network:` address (something like `http://192.168.1.X:4173/`) from any phone/tablet/laptop connected to the same Wi-Fi. If you'd rather test with live-reload while editing, use `bun run dev:lan` instead and open the printed network URL. Some routers/firewalls block device-to-device traffic ("client/AP isolation") — if the page won't load from your phone, that's usually the cause.

## Available scripts

| Command                    | What it does                                                                  |
| -------------------------- | ----------------------------------------------------------------------------- |
| `bun run dev`              | Start the Vite dev server                                                     |
| `bun run build`            | Validate content → generate QR codes → build → generate sitemap               |
| `bun run preview`          | Preview the production build locally                                          |
| `bun run check`            | Type-check with `svelte-check`                                                |
| `bun run lint`             | `prettier --check` + `eslint`                                                 |
| `bun run format`           | Auto-format with Prettier                                                     |
| `bun run test`             | Run unit + component tests (Vitest)                                           |
| `bun run test:watch`       | Vitest in watch mode                                                          |
| `bun run test:e2e`         | Run Playwright end-to-end tests (builds + previews first)                     |
| `bun run validate:content` | Validate all product data against the schema (also runs as part of `build`)   |
| `bun run generate:qr`      | Regenerate `static/qr/*.svg` from the contact configuration                   |
| `bun run generate:sitemap` | Regenerate `build/sitemap.xml` (run after `vite build`)                       |
| `bun run optimize:images`  | Convert photos in `images/` to optimized WebP under `static/images/products/` |
| `bun run preview:site`     | Build + preview the site the way a real visitor would see it (see below)      |

CI should run, in order: `lint`, `check`, `test`, `test:e2e`, `validate:content`, `build`.

## Adding or editing a product

No component code needs to change to add a product. **`docs/ADD-PRODUCT.md` is the authoritative, up-to-date step-by-step** (scaffolding command, photo pipeline, translation glossary, publish checklist) — read that file, not this section, when actually adding a piece. In short:

1. `bun scripts/new-product.js <category> <slug> --title "..."` scaffolds `src/lib/content/products/<slug>.js` with the next free SKU, a four-locale skeleton, and registers it in `index.js`.
2. Drop the original photos into a new folder under `images/` (any name, even in Russian — it's just for your own organization), map that folder to the product's slug in `scripts/optimize-images.js` (`productGroups`), then run `bun run optimize:images` (or `bun run optimize:images -- --only <slug>` to touch only that one product — see the note in [Available scripts](#available-scripts)).
3. Fill in `title`/`description`/`materials`/etc. for all four locales (`en → pt → uk → ru`), using the glossary in `docs/ADD-PRODUCT.md` for consistent terminology.
4. Flip `status` from `hidden` to `available` (or `made_to_order`/`sold`) when ready to publish.
5. `bun run validate:content && bun run check && bun run test && bun run build`, then spot-check all four locales.

See `src/lib/content/products/bag-001.js` for a complete, real example.

### SKU rules

- Format: `AAA` + 6 digits (`^[A-Z]{3}[0-9]{6}$`), e.g. `AAA000045` — one continuous sequence across the whole catalog, not per-category. `scripts/new-product.js` assigns the next free one automatically.
- Must be globally unique and must **never change** once a product has been shared publicly (it's how customers reference items in conversation, and it's embedded in generated QR codes).
- Case-insensitive at input, normalized to uppercase for display and comparison.
- Pre-2026-09 SKUs used a different format (`BAG-001`, `BR-010`, ...); those are invalid for new content but still resolve via `src/lib/content/sku-aliases.js` so old links/QR codes never break.

### Statuses

`available` · `made_to_order` · `sold` (kept visible as a portfolio example, CTA becomes "Order a similar item") · `hidden` (excluded from every public route, the catalog, and the sitemap).

### Contact details

WhatsApp, Telegram, and email live in one place: `src/lib/config/contacts.js`. Never hard-code them elsewhere — every component reads from this file.

## Content validation

`bun run validate:content` (part of `bun run build`) fails the build when:

- a SKU or slug is duplicated or malformed;
- a product is missing its English title/description or has no images;
- an image file referenced by a product doesn't exist under `static/`;
- a `relatedSkus` entry points at a SKU that doesn't exist;
- the WhatsApp/Telegram URLs or the contact email look malformed.

Schema-level checks (required fields, enums, price shape) run automatically whenever the catalog is imported (`src/lib/services/catalog.js`), including during tests.

## Localization

- Locales: `en` (default/fallback), `pt` (European Portuguese), `uk`, `ru`.
- UI strings live in `messages/{locale}.json` (Paraglide message format) — see `messages/en.json` for the full key list.
- Every route is prefixed with the locale (`/en/products/`, `/pt/how-to-order/`, ...). The root `/` is a lightweight client-side gateway that redirects based on a saved preference, then browser language, then English — with visible language links as a no-JS fallback.
- Product `title`/`description`/etc. fall back from the requested locale to English if a translation is missing.

## Deployment

The production build is a fully static `build/` directory — no Node/Bun process is required to serve it.

### Nginx

```nginx
server {
	listen 80;
	server_name example.com;
	root /var/www/ix-lara/build;
	index index.html;

	location / {
		try_files $uri $uri/ /404.html;
	}

	# Hashed, immutable build assets — cache aggressively.
	location /_app/immutable/ {
		add_header Cache-Control "public, max-age=31536000, immutable";
	}

	# HTML should always be revalidated.
	location ~* \.html$ {
		add_header Cache-Control "no-cache";
	}

	gzip on;
	gzip_types text/css application/javascript application/json image/svg+xml;

	add_header X-Content-Type-Options "nosniff" always;
	add_header Referrer-Policy "strict-origin-when-cross-origin" always;
	add_header Permissions-Policy "geolocation=(), camera=(), microphone=()" always;
	add_header X-Frame-Options "DENY" always;
}
```

### Docker

```dockerfile
# --- build stage ---
FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# --- runtime stage ---
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

The runtime image contains only Nginx and the built static files — no source, no `node_modules`, no package manager.

### Other static hosts

The `build/` output also works as-is on Cloudflare Pages, Netlify, and Vercel's static hosting. For GitHub Pages under a sub-path, configure `paths.base` in `vite.config.js`'s `sveltekit()` options.

## Known open items

- Two source-photo folders under `images/` have photos that were never wired into a product (`Изделия из бисера/Разноцветные шарики` and `Браслеты/Браслет из крупного и мелкого бисера` both have more originals on disk than any product currently references) — need a decision on whether they're new products, extra angles of existing ones, or leftovers.
- A PageSpeed/Lighthouse pass flagged mobile performance issues (LCP ~6.3s, target ~2.5s): the hero slider eager-loads all slides instead of just the visible one, render-blocking font imports, and an accent color that's slightly under WCAG AA contrast. Not yet fixed.

## How this site is maintained

This is a one-person project (the "owner" below) maintained largely through pair-programming sessions with an AI coding assistant (Claude Code) rather than by hand-editing every file. If you're picking this up — human or AI — here's the process that's actually been used session to session:

- **Content lives in data, not components.** Every product is a plain JS object in `src/lib/content/products/*.js`, validated by a Zod schema (`src/lib/schemas/product.js`) at import time. Journal articles are the same idea in `src/lib/content/journal.js`. Adding a piece or a story almost never requires touching a `.svelte` file — see [Adding or editing a product](#adding-or-editing-a-product).
- **`docs/ADD-PRODUCT.md` and `AGENTS.md` are the working memory for content changes.** `ADD-PRODUCT.md` is the step-by-step for new pieces (glossary, SKU rules, photo pipeline). `AGENTS.md` collects "known landmines" discovered the hard way — e.g. a `bun` + `sharp` bug that occasionally corrupts WebP output during the photo pipeline (fix: re-encode via plain `node` instead, then visually check the result) — so nobody has to rediscover them.
- **Photos are optimized, never committed raw into `static/`.** Originals go under `images/<descriptive folder>/` at the repo root (kept in git as the source of truth), get mapped to a product slug in `scripts/optimize-images.js`, and `bun run optimize:images` (optionally `-- --only <slug>` to touch a single product) converts them to sized WebP under `static/images/products/<slug>/`. Always spot-check the output visually before committing — see the landmine above.
- **Everything is drafted locally before it goes live.** Changes are made as local git commits first; `bun run dev:lan` (or `scripts/preview.sh` for a production-like build) serves the site on the local network so it can be reviewed from a phone or another computer before anything is pushed. Only after that review does a push to `origin/main` happen — and pushing to GitHub is a separate step from actually deploying to `larise.art`, which the owner does himself.
- **Cross-referenced content stays two-way.** For example, a product can carry an optional `journalSlug` pointing at the article about how it was made (renders a "want to know how this was made?" teaser on the product page); a journal article can link text or a specific photo back to the product it's about (the generic `link` block type and `img.linkPath` in `journal.js`). Reuse this pattern rather than inventing a one-off link every time a piece and its backstory need to reference each other.
- **Translations are written by the assistant, checked by the owner.** The owner (not a developer, writes Russian) supplies real copy in Russian; the assistant translates to `en`/`pt`/`uk` following the glossary in `docs/ADD-PRODUCT.md` to keep terminology (bead types, techniques, materials) consistent across the whole catalog, and the owner catches anything that reads wrong visually on the live pages.

## Testing

- **Unit tests** (`tests/unit/`): SKU validation/normalization, locale mapping and fallback, catalog filtering/related-product resolution, enquiry message generation for all four locales, `mailto:` URL building (including Unicode), price formatting, schema validation edge cases.
- **Component tests** (`tests/component/`): product card content/CTA, copy-button success/error feedback.
- **End-to-end tests** (`tests/e2e/`, Playwright): catalog filtering, product → ordering handoff with SKU, valid/unknown SKU resolution, exact WhatsApp/Telegram URLs, QR code availability, language switching preserving the current product, all four locale home pages, 404 fallback.
