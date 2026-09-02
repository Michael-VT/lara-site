# Adding a new handmade piece

Time budget: ~10 minutes for the data + a photo pass. Everything below assumes
the repo root. Run `bun run dev` (http://localhost:5173) while you work.

## 1. Scaffold the product file

```sh
bun scripts/new-product.js bags "red-beaded-evening-bag" --title "Red beaded evening bag"
```

- Creates `src/lib/content/products/bag-008.js` (next free number for the
  category prefix), pre-wired with four-locale skeletons and
  `status: 'hidden'` (invisible until you finish).
- Registers the import + array entry in `src/lib/content/products/index.js`.

Categories and SKU prefixes (defined in `src/lib/content/categories.js`):

| category    | SKU prefix   | locale label key       |
| ----------- | ------------ | ---------------------- |
| bags        | `BAG`        | `category_bags`        |
| bracelets   | `BR`         | `category_bracelets`   |
| jewellery   | `JEW`/`JWL`* | `category_jewellery`   |
| beadwork    | `BEAD`       | `category_beadwork`    |
| knitted     | `KNIT`       | `category_knitted`     |
| accessories | `ACC`        | `category_accessories` |
| other       | `OTH`        | `category_other`       |

\* historical files use `JWL-…`; the config prefix is `JEW` — new jewellery
items get `JEW-005` onward. Both validate (`^[A-Z][A-Z0-9]{1,9}-[0-9]{3,6}$`).

## 2. Photos

1. Drop the original JPGs into a new folder under `images/` at the repo root
   (e.g. `images/2026-09 red bag/`).
2. Add one entry to `productGroups` in `scripts/optimize-images.js`:
   `{ folder: '<category folder>', product: '<product folder>', slug: '<slug>' }`.
3. Run `bun run optimize:images`. It writes to `static/images/products/<slug>/`:
   `N.webp` (full, width 1600, q82) and `N-thumb.webp` (480, q78), and prints
   a JSON report with the **real pixel dimensions** of every output file.
4. Use those numbers for `width`/`height` of each image entry — they must match
   the intrinsic file size exactly (the build and a11y audits check this).

Photos of a single piece differ per shot (close-up, side, in hand) — write each
`alt` for its specific photo, all four locales.

## 3. Fill the data file

Every localized field — `title`, `description`, each `images[].alt`,
`materials`/`colours`/`customisation` (and `dimensions`/`care`/`productionTime`
if you use them) — carries **all four locales** in key order `en → pt → uk → ru`.
Missing locales previously fell back to English; that fallback is now treated
as a content bug. Do not invent new i18n message keys — product text lives in
the data file, not in `messages/*.json`.

Craft glossary (keep translations consistent with it and with each product's
canonical title):

| English           | pt-PT                      | Українська                | Русский                    |
| ----------------- | -------------------------- | ------------------------- | -------------------------- |
| seed beads        | contas                     | бісер                     | бисер                      |
| larger beads      | contas                     | намистини                 | бусины                     |
| hand-woven        | tecido/tecida à mão        | сплетений/сплетена вручну | сплетён/сплетена вручную   |
| knitted (crochet) | trabalhado/tricotado à mão | пов'язана гачком          | вязаный крючком            |
| bracelet          | pulseira                   | браслет                   | браслет                    |
| bag / evening bag | bolsa / bolsa de noite     | сумочка / вечірня сумочка | сумочка / вечерняя сумочка |
| coin purse        | bolsa moedeiro             | сумочка-гаманець          | сумочка-монетница          |
| keychain          | porta-chaves               | брелок                    | брелок                     |
| necklace          | colar                      | намисто                   | ожерелье/колье             |
| cotton yarn       | fio de algodão             | бавовняна пряжа           | хлопковая пряжа            |
| clasp             | fecho                      | замочок                   | замочек                    |
| faux pearls       | pérolas artificiais        | штучні перлини            | искусственный жемчуг       |
| gold-plated       | banhado a ouro             | позолочений               | позолоченный               |
| shown in … colour | Mostrado/Mostrada em …     | Показано … колір          | Показан/Показана … цвет    |

Rules of thumb:

- SKU and slug are **permanent** after publishing (QR codes, sitemap, external
  links) — never change them.
- `price`: omit, or `{ mode: 'fixed' | 'from' | 'on_request', amount?, typicalMax?, currency: 'EUR' }`.
  `from` + `typicalMax` renders "from €X" on cards plus a "typically €X–€Y"
  note on the product page. `on_request` is the exception, not the default —
  see `PRICELIST.md` for category starting prices.
- `status`: `available` | `made_to_order` | `sold` | `hidden`.
- `featured: true` + `featuredOrder` → homepage "Featured pieces" strip.
- `relatedSkus: ['BEAD-001', …]` → "You may also like" on the product page.
- Ukrainian apostrophes: ASCII `'` inside **double-quoted** JS strings
  (`"Об'ємний"`), matching the rest of the corpus.

## 4. Publish & verify

```sh
bun run validate:content   # schema + SKU/slug rules
bun run check              # svelte-check, 0/0 required
bun run test               # vitest, all green required
bun run build              # prerender + QR + sitemap
```

Then flip `status: 'hidden'` → `'available'`, reload `/en/products/`, the
category filter, and the product page in all four locales, and commit.

## Quick checklist

- [ ] Scaffolded via `scripts/new-product.js`, registered in `index.js`
- [ ] Photos optimized, `slugMap`/`productGroups` entry added
- [ ] `width`/`height` = real intrinsic sizes from the optimizer report
- [ ] All localized fields have en + pt + uk + ru
- [ ] `status` flipped to `available`
- [ ] `validate:content` + `check` + `test` + `build` all pass
- [ ] Spot-checked `/en/`, `/pt/`, `/uk/`, `/ru/` product pages
