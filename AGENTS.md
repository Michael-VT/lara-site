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

- **Working/plan docs stay local**: `PLAN.md`, `PRICELIST*.md`, `SEO.md`,
  `QUESTIONS*.md` at the repo root are the owner's working documents —
  they are gitignored and must never be committed or pushed.
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

## State after the 2026-09-02 session (latest)

- **Pricing live per `PRICELIST.md`**: schema `price.mode:'from'` gained
  optional `typicalMax` (product page renders "Typically €X–€Y…" note).
  All 44 products priced except `OTH-001` (blanks, deliberately on_request):
  bracelets €8 (8–15), keychains/beads/coasters/earring-balls €5, mini bags €10,
  large/knitted bags €35 (35–50), panama €10, knit tops/set €50 (50–90),
  necklace `JWL-004` €20 (owner's decision, as are the knit-top prices).
  Whole-euro amounts format without decimals (`formatAmount` in
  `src/lib/utils/price.js`). Card shows "from €X"; product page adds the
  typical range, "shipping calculated separately" note, and a
  made-to-order variations note. `status_available` label is now
  "Ready to ship / Готов к отправке" in all 4 locales.
- **SEO pass per `SEO.md`** (see file at repo root): robots.txt now points at
  larise.art sitemap (was `ixlara.example`; also regenerated by
  `generate-sitemap.js` to stay in sync); SeoHead drops the brand suffix when
  the title would exceed 60 chars; homepage has keyword titles/descriptions
  (`home_seoTitle`/`home_seoDescription`); root language-picker canonicals to
  `/en/` + hreflang; product JSON-LD gained `brand` + `BreadcrumbList` and
  meta descriptions gained a factual suffix (`product_metaDescriptionSuffix`).
  Remaining content-level items: 3 over-long RU/PT product titles, RU product
  meta descriptions >160 chars (SERP truncation only).
- **New main photos** (owner, 2026-09-02): `BAG-001` + `JWL-004`. New-photo-
  as-main convention: prefix the source file with `0-` (cyrillic names sort
  after `photo_*`), then reprocess just that folder (params = optimizer).
  `BAG-001` now has 8 gallery images (old 1–7 shifted to 2–8).
- 44 products live: bags 8 (incl. `BAG-008` Irish-motif bag, moved to
  `knitted`/made_to_order — SKU prefix `BAG` kept deliberately: SKUs never
  change after publication), bracelets 14 (3 sold: `BR-013..015` — first
  sold items, badge + «order similar» flow verified), jewellery 4, beadwork 9,
  knitted 6 (all made_to_order), accessories 1, other 3 (blanks MTO + 2 balls
  available). Sitemap 200 URLs.
- Homepage sections are **status-driven, no duplicates** (owner's decision):
  available ≈ 34 / made_to_order 7, auto-counted by the `+page.js` loader.
  Owner confirmed 2026-08-30: nothing else moves to made_to_order.
- `KNIT-005` retitled «Кофта, юбка и сумочка…» in all locales; slug unchanged.
  Previews use `object-contain` + linen mat (cards, gallery, order summary).
  Slogan: «Ручная работа от всего Сердца, с Любовью!» in all 4 locales.
- Optimizer conventions: photo folders mapped **as-is** (owner's typos are
  load-bearing keys: nested `золоых`, `португальских  ниток` double space;
  the top-level `Разое` typo folder was renamed to `Разное` by the owner on
  2026-09-02 — mapping updated to match); optimizer is non-recursive —
  nested product subfolders are mapped
  via `parent/child` path keys. macOS NFD traps: verify disk name is
  NFC-identical before adding a mapping key. To make a new photo the product's
  main image: rename it inside its source folder with a `0-` prefix
  (cyrillic sorts after `photo_*`), reprocess only that folder with the
  optimizer's exact parameters, then update the product's `images[]` order.
- Deferred by owner (leave as-is): 5 unmapped photo folders — Сумочки/«Мини
  сумочки монетницы в разных цветах» (1), Сумочки/«Мини сумочки монетницы из
  серебристого и белого бисера» (2), Браслеты/«Браслет из белого бисера␠»
  (trailing space, 2), Браслеты/«Мои браслеты» (2), Украшения/«Брелок
  подвеска на сумочку и другие изделия» (2). Also Сумочки/«Сумка связанная по
  ирландским мотивам» (superseded by the «крючком» copy in Вязаные изделия).
- Deploy: push to `origin/main` → Cloudflare auto-build → live on
  larise.art in ~2 min (siteUrl). Verify with curl on product pages.
  Gotcha (2026-09-02): rapid successive pushes can silently SKIP a build
  (the version list in the CF dashboard jumps over a commit) — after
  pushing, verify a changed asset actually went live (compare byte size
  via curl vs `stat`), and if stale, nudge with an empty commit:
  `git commit --allow-empty -m "Trigger redeploy" && git push`.
- Images: webp encoded at quality 92 full / 85 thumb with 4:4:4 chroma —
  4:2:0 left coloured fringes on white beads (owner-visible artifacts);
  don't lower without a visual check.
- Redesign-era notes still valid: catalog `py-20/24` vs product `py-10/14`
  rhythm; hero 4:5 arch frame with mixed orientations; `jwl-004` keeps the
  owner's `miçangas` pt vocabulary. Pre-existing: 4 prettier failures in
  non-app files; ru source of `knit-003` gender typo («Сиреневый кофточка») —
  fix content-side if touching that file anyway.
