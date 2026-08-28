# [IX Lara Handmade](https://larise.art/ru/)

A multilingual (English / Português / Українська / Русский) static showcase and catalog for handmade products, built with SvelteKit + Svelte 5, Tailwind CSS, and Paraglide JS. It is **not** an online shop — there is no cart, checkout, or payment. Every enquiry is routed to WhatsApp, Telegram, or email, with the product's SKU carried along automatically.

> The catalog now has 9 real handmade products with real photos. The **"About" page copy is still `TODO`** placeholder text (no biography was provided) — see [Placeholder content](#placeholder-content) before going live. Product `status` (available/made to order/sold) was set to a reasonable default and should be double-checked against reality.

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

No component code needs to change to add a product.

1. **Add photos.** Drop the original photo(s) into a new folder under `images/` at the repo root (folder name can be descriptive, e.g. in Russian — that's just for your own organization). Add an entry mapping that folder name to your product's slug in `scripts/optimize-images.js` (`slugMap`), then run `bun run optimize:images`. It writes optimized WebP files (full-size + thumbnail) into `static/images/products/{slug}/` and prints a JSON report with the exact width/height to use in your product file.
2. **Copy the template.** Duplicate `src/lib/content/products/_template.example.js` to a new file, e.g. `src/lib/content/products/bag-003.js`.
3. **Fill in the required fields**: a unique `sku` (matching `^[A-Z][A-Z0-9]{1,9}-[0-9]{3,6}$`, e.g. `BAG-003`), a unique `slug`, `category`, `status`, English `title` and `description`, and at least one image (`src`, `thumb`, `width`, `height`, `alt`) using the paths/dimensions from step 1.
4. **Add translations** for `pt`/`uk`/`ru` where you have them. Missing translations automatically fall back to English — the site never breaks because of a missing translation.
5. **Register it** by importing the file and adding it to the `rawProducts` array in `src/lib/content/products/index.js`.
6. **Remove `isDemo: true`** once it's a real product (or leave it — it's just a marker, not enforced unless `PUBLIC_PRODUCTION=true`).
7. **Validate and test**: `bun run validate:content`, then `bun run test`.
8. **Build and deploy** the generated `build/` directory.

See `src/lib/content/products/bag-001.js` for a complete, real example.

### SKU rules

- Must be globally unique and must **never change** once a product has been shared publicly (it's how customers reference items in conversation).
- Case-insensitive at input, normalized to uppercase for display and comparison.
- Suggested prefixes: `BAG`, `BR` (bracelets), `JEW`, `BEAD`, `KNIT`, `ACC`, `OTH`.

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

## Placeholder content

Still needed before launch:

- "About" copy (`about_intro`, `about_story`, `about_process`, `about_materials` in `messages/*.json`) is marked `TODO` — replace with the real biography.
- The hero slider and About-page images (`static/images/hero/`, `static/images/about/`) are still neutral generated placeholders — swap in real photos.
- Every product currently defaults to `status: 'available'` and `price: { mode: 'on_request' }` since neither was supplied — check each product in `src/lib/content/products/` and correct the status (`available` / `made_to_order` / `sold`) and add a real price if you want one shown.

## Testing

- **Unit tests** (`tests/unit/`): SKU validation/normalization, locale mapping and fallback, catalog filtering/related-product resolution, enquiry message generation for all four locales, `mailto:` URL building (including Unicode), price formatting, schema validation edge cases.
- **Component tests** (`tests/component/`): product card content/CTA, copy-button success/error feedback.
- **End-to-end tests** (`tests/e2e/`, Playwright): catalog filtering, product → ordering handoff with SKU, valid/unknown SKU resolution, exact WhatsApp/Telegram URLs, QR code availability, language switching preserving the current product, all four locale home pages, 404 fallback.
