# IX Lara Handmade — agent guide

Multilingual (en/pt/uk/ru) SvelteKit 2 + Svelte 5 (runes, forced) + Tailwind 4
static catalog for a single artisan's handmade beadwork/jewellery/knits.
No cart: ordering flows through a prepared WhatsApp/Telegram/email message
(`?sku=…` deep links). Deploys as a fully prerendered static site
(adapter-static, fallback `404.html`).

## Commands

```sh
bun run dev               # vite dev on :5173 (HMR)
bun run validate:content  # product schema/SKU/slug rules — run after any content edit
bun run check             # svelte-check; must stay 0 errors / 0 warnings
bun run test              # vitest unit+component (60 tests) — must stay green
bun run build             # validate → QR → prerender → sitemap (168 URLs)
bun run lint              # prettier + eslint (4 pre-existing failures in non-app files: .claude/, .omp/, HOSTING-FREE.md, scripts/optimize-images.js)
```

## Design system — "Ateliê: the jeweller's tray"

Tokens and signature utilities live in `src/app.css` (single source; do not
scatter inline styles).

- **Palette**: `ink #16211a` (evergreen velvet — dark display zones),
  `background #f4f2ec` (linen), `surface #fff`, accent gold family
  (`accent #7e5e19` on light, `accent-bright #cfaf6f` on dark,
  `accent-fill #c9a96a` for filled controls). Status colors: available/made-to-order/sold.
  Every text pair was contrast-engineered (≥4.5:1, most ≥6:1) — don't add pairs.
- **Type**: `font-display` = Prata (400 only — never bold it, it has no other
  weights and synthesizes badly), `font-sans` = Golos Text 400/500/600.
  Both self-hosted via `@fontsource` in `src/routes/+layout.svelte`
  (incl. Cyrillic subsets for uk/ru).
- **Signature (use with restraint — ≤2–3 bead elements per viewport)**:
  `.bead-rule` (offset bead-dot stitch strip, colored via `text-accent`/`text-accent-bright`),
  `.bead-field` (faint bead texture for large dark zones), `.frame-arch`
  (Portuguese doorway image frame), `.eyebrow` (tracked uppercase label).
- **Radii are binary**: `rounded-card` (14px) for cards, `rounded-control`
  (999px pill) for controls. Shadows `shadow-card`/`shadow-lift` — warm-tinted only.
- **Motion**: `.rise-in` + `.rise-delay-1..4` page-load stagger;
  `prefers-reduced-motion` is killed globally — keep new animations subtle.

## Hard conventions

- **Svelte 5 runes only** (`$props/$state/$derived/$effect`, `onclick={…}`);
  `page` from `$app/state`.
- **i18n**: all UI strings via paraglide `m.*` / `t()` with explicit
  `{ locale }`. New UI keys require all four `messages/{en,pt,uk,ru}.json`.
  Product content lives in `src/lib/content/products/*.js` — every localized
  field needs all four locales (English fallback in product data is now a bug).
  Pluralized counts: `pluralCountKey(locale, n)` in `src/lib/utils/messages.js`.
- **A11y contract** (critic-verified; regressions are release blockers):
  44px minimum targets, gold focus rings (the `:focus-visible` rules at the
  bottom of `app.css` are **unlayered on purpose** — they must beat the
  `@tailwindcss/forms` currentColor outline; `.focus-dark` on dark surfaces),
  one `h1` per page, no heading skips, `aria-current="page"` on active nav,
  `<html lang>` synced by `[locale]/+layout.svelte`, images carry true
  intrinsic `width`/`height`.
- **Never** `transition-all` on focusable elements (it animates the focus
  ring) — use explicit property lists.
- Keyboard widgets follow ARIA patterns: gallery = tabs with roving tabindex,
  lightbox/mobile nav = focus-trapped dialogs with Escape + focus restore +
  body scroll lock.

## Map

- Routes under `src/routes/[locale]/` (home, products, products/[slug],
  how-to-order, about, contacts, privacy, 404). Root `+error.svelte` recovers
  the locale from the URL's first segment for unmatched paths.
- Content: `src/lib/content/` (products, categories, hero) — plain JS data,
  validated by `scripts/validate-content.js`.
- Components mirror their domain (`components/products`, `layout`, `contacts`,
  `navigation`, `gallery`, `ui`).
- `SeoHead`/`JsonLd` handle meta per page — pass real titles (SeoHead appends
  ` — ${siteName}` itself).

## Adding a product

Follow `docs/ADD-PRODUCT.md` (glossary + checklist).
`bun scripts/new-product.js <category> <slug>` scaffolds + registers the file
(`status: 'hidden'` until finished). Photos: `images/<folder>/` → map in
`scripts/optimize-images.js` → `bun run optimize:images`.

## State after the 2026-08 redesign (last session)

- Full atelier redesign shipped + triple critic-loop verified (contrast,
  overflow at 5 viewports × 4 locales, focus, ARIA, reduced motion).
- All 36 products translated to pt+uk (descriptions, 65 alts, materials,
  colours, customisation) with a consistent glossary.
- Accepted deviations (deliberate, don't "fix" silently): catalog pages use
  `py-20/24` vs product-detail `py-10/14` sub-page rhythm; hero slides mix
  natural orientations in one 4:5 arch frame (fixed photo set);
  `jwl-004` keeps the owner's `miçangas` pt vocabulary from its original title.
- Pre-existing (not introduced, out of scope): 4 prettier failures in
  non-app files; ru source of `knit-003` has a gender typo («Сиреневый
  кофточка») — fix content-side if touching that file anyway.
