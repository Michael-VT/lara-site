# PRD — IX Lara Handmade

**Document:** Product Requirements Document  
**Project type:** Multilingual static portfolio/catalog website for handmade products  
**Status:** Final MVP specification for implementation by an AI coding agent  
**Date:** 2026-07-30  
**Working project name:** `IX Lara Handmade`  
**Primary market:** Portugal, with international visitors supported through English, Portuguese, Ukrainian, and Russian

---

## 1. Purpose of this document

This file is the source of truth for implementing the MVP.

The coding agent must:

1. Follow the scope and acceptance criteria in this document.
2. Avoid adding backend services, order storage, checkout, authentication, or payment functionality.
3. Use test-driven development for utilities and business rules.
4. Keep all editable business data centralized and easy to change.
5. Produce a fully working, responsive, accessible, statically generated website.
6. Prefer simple, maintainable solutions over unnecessary abstractions.
7. Never invent personal biography, product details, prices, delivery terms, or payment terms that were not provided. Use explicit placeholders or TODO markers where content is missing.

---

## 2. Product summary

IX Lara Handmade is a multilingual showcase and catalog for handmade products created in Portugal.

Possible product types include:

- handmade bags;
- bracelets;
- jewellery;
- beadwork;
- knitted items;
- accessories;
- custom-made items;
- other handmade products.

Visitors can:

- discover the maker and the work;
- browse products by category;
- view product photos and details;
- see whether an item is available, made to order, or previously sold;
- identify each item by its SKU/article number;
- open a single “How to order” page;
- contact the maker through WhatsApp, Telegram, or email;
- scan QR codes to open the corresponding contact channel on a phone.

The website is **not an online shop**. It does not create orders, reserve products, collect payments, or guarantee availability.

---

## 3. Confirmed contact details

All contact details must be defined once in a central configuration file and reused everywhere.

```ts
export const siteContacts = {
	email: 'ix.lara@gmail.com',

	telegram: {
		username: '@ix_lara',
		url: 'https://t.me/ix_lara'
	},

	whatsapp: {
		url: 'https://wa.me/qr/SCHEPP5QIVBQL1'
	}
} as const;
```

### Required behavior

- The Telegram label must display `@ix_lara`.
- The Telegram button and QR code must use `https://t.me/ix_lara`.
- The WhatsApp button and QR code must use the exact provided URL:
  `https://wa.me/qr/SCHEPP5QIVBQL1`
- The email contact must display `ix.lara@gmail.com`.
- The email button must use a `mailto:` link.
- The email QR code must encode a `mailto:` link.
- Contact details must not be duplicated as hard-coded strings across components.

---

## 4. Product vision

The website should feel like a personal handmade studio and visual gallery rather than a generic ecommerce template.

The primary experience is:

1. See attractive product photography.
2. Understand that products are handmade and may be unique.
3. Open a product.
4. note or automatically carry its SKU to the ordering instructions;
5. contact the maker directly.

The site must build trust through:

- clear product photography;
- visible SKU/article numbers;
- honest availability statuses;
- a simple explanation of how ordering works;
- direct contact options;
- an “About the maker” section;
- transparent indication that details, availability, delivery, and payment are agreed personally.

---

## 5. MVP goals

### 5.1 Business goals

- Provide one link that can be shared with potential customers.
- Present ready-made and custom-made handmade work professionally.
- Make it easy for visitors to contact the maker.
- Support local Portuguese visitors and an international audience.
- Reduce repeated explanations by providing one clear “How to order” page.
- Make each product easy to identify in a conversation using an SKU.

### 5.2 User goals

A visitor must be able to:

- understand what is offered within a few seconds;
- browse products on desktop or mobile;
- filter products by category and availability;
- open a product gallery;
- identify a product by SKU;
- switch language without losing the current page;
- find ordering instructions;
- open or scan a preferred contact method;
- copy a prepared enquiry message containing the product name and SKU.

### 5.3 Technical goals

- Static output with no application server.
- Fast loading on mobile connections.
- SEO-friendly language-prefixed URLs.
- Product data stored in the repository.
- Build-time validation of all catalog data.
- Build-time generation of QR codes.
- Automated tests for core behavior.
- Straightforward static deployment.

---

## 6. Explicitly out of scope for MVP

Do not implement any of the following:

- shopping cart;
- checkout;
- product reservation;
- order submission form;
- Telegram bot;
- WhatsApp API integration;
- Gmail API integration;
- backend API;
- database;
- user accounts;
- administrator authentication;
- CMS;
- online payment;
- automated invoices;
- delivery price calculation;
- stock synchronization;
- customer reviews submitted through the site;
- live chat widget;
- newsletter;
- discount codes;
- wish list;
- automatic Instagram feed;
- AI-generated product descriptions;
- automatic translation at runtime;
- analytics or advertising trackers by default.

Icons that visually suggest ordering are allowed only when their accessible label and visible text clearly say **“Order”** or the locale equivalent. They must navigate to the “How to order” page and must not behave like a cart.

---

## 7. Target audience

### Primary audience

- People in Portugal interested in handmade accessories and gifts.
- Visitors arriving from social media, recommendations, QR codes, or direct links.
- Buyers seeking an available one-off item.
- Buyers interested in a similar item made to order.

### Secondary audience

- English-speaking visitors elsewhere in the EU.
- Ukrainian-speaking and Russian-speaking visitors.
- People looking for personalised handmade gifts.

### Typical devices

- Mobile phones are the primary target.
- Desktop and tablet layouts must also be polished.
- QR codes are mainly useful when the website is viewed on another device or when a contact card is shared/printed.

---

## 8. Languages and localization

### 8.1 Supported locales

| URL locale | Locale meaning      | Display name |
| ---------- | ------------------- | ------------ |
| `en`       | English             | English      |
| `pt`       | European Portuguese | Português    |
| `uk`       | Ukrainian           | Українська   |
| `ru`       | Russian             | Русский      |

English is the fallback and default language.

Portuguese copy must use European Portuguese conventions, not Brazilian Portuguese.

### 8.2 URL structure

All indexable content pages must use a language prefix:

```text
/en/
/pt/
/uk/
/ru/
```

Examples:

```text
/en/products/
/pt/products/
/uk/products/ocean-beaded-bag/
/ru/how-to-order/
```

### 8.3 Root locale detection

The root route `/` must be a lightweight static locale gateway.

Resolution order:

1. Previously selected locale stored in `localStorage`.
2. Browser language from `navigator.languages` or `navigator.language`.
3. English fallback.

Mapping rules:

- `pt`, `pt-PT`, and other `pt-*` values → `pt`
- `uk` and `uk-*` → `uk`
- `ru` and `ru-*` → `ru`
- all other values → `en`

After resolving, redirect to `/{locale}/`.

The page must still contain an accessible fallback with visible language links in case JavaScript is disabled or redirection fails.

### 8.4 Language switcher

The language switcher must:

- display native language names;
- be keyboard accessible;
- indicate the active language;
- preserve the current route;
- preserve the product slug where the equivalent localized route exists;
- preserve a valid `sku` query parameter on the “How to order” page;
- store the explicit choice in `localStorage`;
- update the document language;
- never force the visitor back to the home page merely because a language changed.

Example:

```text
/en/products/ocean-beaded-bag/
→
/pt/products/ocean-beaded-bag/
```

### 8.5 Translation fallback

Interface translations are required for all four locales.

Product title and description fallback:

1. requested locale;
2. English;
3. build validation error if English is also missing.

A missing non-English translation must not break the site.

### 8.6 International SEO

Every indexable localized page must include:

- localized `<title>`;
- localized meta description;
- canonical URL;
- `hreflang` alternates for `en`, `pt`, `uk`, and `ru`;
- `x-default` pointing to the English version;
- correct `<html lang="">`;
- Open Graph title, description, image, and URL;
- crawlable internal links.

---

## 9. Technology constraints

Use the following stack:

- Bun as package manager and script runner;
- SvelteKit;
- Svelte 5;
- TypeScript;
- Svelte 5 runes mode for new components where local state is needed;
- Tailwind CSS using the official Vite integration;
- Paraglide JS for compile-time internationalization;
- `@sveltejs/adapter-static`;
- Vitest for unit/component tests;
- Testing Library for Svelte component tests where useful;
- Playwright for end-to-end tests;
- a build-time schema validator, preferably Zod;
- a build-time QR generation package that can output SVG;
- Prettier and ESLint;
- no runtime backend.

### 9.1 Dependency policy

- Use latest stable compatible versions at implementation time.
- Pin resolved dependency versions in `bun.lock`.
- Avoid beta, nightly, deprecated, or abandoned dependencies.
- Keep the dependency list minimal.
- Do not introduce a UI framework such as Bootstrap, Material UI, DaisyUI, Flowbite, or another component system unless explicitly approved.
- Small, well-maintained accessibility helpers are acceptable only when they provide clear value.

### 9.2 Static generation

Use `@sveltejs/adapter-static`.

All products, categories, and localized routes must be prerendered.

The generated artifact must be a static `build/` directory suitable for:

- Nginx;
- Cloudflare Pages;
- Netlify;
- Vercel static hosting;
- GitHub Pages, if base-path support is configured later.

Prefer directory-style output with trailing slashes for broad compatibility with static web servers.

---

## 10. Information architecture

### 10.1 Required routes

```text
/
├── /en/
├── /pt/
├── /uk/
├── /ru/
│
├── /{locale}/products/
├── /{locale}/products/{slug}/
├── /{locale}/how-to-order/
├── /{locale}/about/
├── /{locale}/contacts/
├── /{locale}/privacy/
└── /{locale}/404/
```

A separate categories route is optional. Category filters may live on the main catalog page.

### 10.2 Navigation

Desktop header:

- brand/logo;
- Home;
- Products;
- How to order;
- About;
- Contacts;
- language switcher;
- prominent “Order” CTA.

Mobile header:

- brand/logo;
- menu button;
- language switcher;
- accessible slide-over or dropdown navigation;
- clearly visible “Order” action within the menu.

The “Order” CTA in the site header goes to the generic “How to order” page without an SKU.

---

## 11. Page requirements

## 11.1 Home page

Route:

```text
/{locale}/
```

Required sections, in this order:

1. Header.
2. Hero slider.
3. Category cards.
4. Featured products.
5. Available now.
6. Made to order.
7. How ordering works.
8. About the maker preview.
9. Contact CTA.
10. Footer.

### Hero slider

The hero slider must support approximately three slides:

1. Unique handmade products.
2. Ready-made products currently available.
3. Custom-made work.

Requirements:

- manual navigation buttons;
- touch/swipe support;
- keyboard support;
- visible slide indicators;
- semantic accessible labels;
- no mandatory autoplay;
- if autoplay is added, it must be disabled by default, pause on interaction, and respect `prefers-reduced-motion`;
- text must remain readable over images;
- first hero image should be high priority and not lazy loaded;
- no layout shift when slides initialize.

The slider content must come from localized content/configuration rather than being embedded across multiple components.

### Featured products

- Configurable list based on a `featured` property and optional sort order.
- Show a small, curated selection.
- Each card includes image, title, SKU, status, optional price, and “Order”.
- “Order” links to the ordering page with the product SKU.

### “How ordering works” preview

Show three concise steps:

1. Choose an item or example.
2. Contact the maker.
3. Agree availability, details, delivery, and payment.

Include a link to the full “How to order” page.

---

## 11.2 Catalog page

Route:

```text
/{locale}/products/
```

Required behavior:

- display all public products;
- responsive product grid;
- category filter;
- availability/status filter;
- empty-state message;
- filters represented in URL search parameters when practical;
- filters must work without a backend;
- clear-all-filters action;
- product count;
- meaningful page heading and introduction;
- no infinite scroll.

Suggested status filters:

- All;
- Available;
- Made to order;
- Sold / portfolio.

Suggested category filters:

- Bags;
- Bracelets;
- Jewellery;
- Beadwork;
- Knitted items;
- Accessories;
- Other.

Categories must be data-driven and configurable.

### Product card

Each product card must show:

- primary image;
- localized title;
- SKU;
- localized category label;
- status badge;
- optional price presentation;
- link to product details;
- visible “Order” button.

The entire card may link to details, but the “Order” button must remain a distinct accessible action.

Do not use a cart count or cart state.

---

## 11.3 Product details page

Route:

```text
/{locale}/products/{slug}/
```

Required content:

- breadcrumb navigation;
- image gallery;
- localized product title;
- SKU/article number;
- status;
- category;
- optional price;
- materials, if provided;
- dimensions, if provided;
- colour information, if provided;
- estimated production time, if provided;
- localized description;
- care instructions, if provided;
- customisation note, if provided;
- prominent “Order” button;
- related products;
- contact reassurance text.

### Gallery behavior

- responsive image sizes;
- thumbnail navigation when multiple images exist;
- keyboard accessible;
- touch friendly;
- enlarged/lightbox view is optional but recommended;
- alternative text required for every image;
- lazy load non-primary images;
- avoid downloading every full-resolution image immediately;
- preserve image aspect ratio to avoid layout shifts.

### Order CTA

The primary CTA must use the localized equivalent of “Order”.

It must link to:

```text
/{locale}/how-to-order/?sku={ENCODED_SKU}
```

Example:

```text
/en/how-to-order/?sku=BAG-001
```

A sticky mobile CTA is allowed on product pages, provided it does not cover important content and remains accessible.

### Sold products

Sold items may remain visible as portfolio examples.

For a sold product:

- show a “Sold” status;
- do not imply the exact item is still available;
- CTA text may become “Order a similar item”;
- the order page should clearly identify it as an enquiry about a similar product.

---

## 11.4 How to order page

Route:

```text
/{locale}/how-to-order/
```

This page is the conversion endpoint for the MVP.

### Generic state

Without an SKU, show:

- explanation of how ordering works;
- order steps;
- WhatsApp contact card;
- Telegram contact card;
- Email contact card;
- QR codes;
- notes that availability, customisation, price, delivery, and payment are confirmed personally.

### Product-aware state

When a valid `sku` query parameter is present:

- find the product by exact normalized SKU;
- show its primary image;
- show localized title;
- show SKU;
- show status;
- show a prepared localized enquiry message;
- provide a “Copy message” button;
- use the SKU in the email subject and body;
- keep all three contact channels visible.

Example presentation:

```text
You are asking about:

Ocean beaded bag
SKU: BAG-001
```

### Invalid or unknown SKU

If the SKU is unknown, malformed, or not public:

- do not crash;
- do not expose internal data;
- show the generic ordering page;
- optionally display a small localized notice that the product could not be found;
- allow the visitor to contact the maker normally.

### Prepared message

Generate a localized message similar to:

```text
Hello! I am interested in “Ocean”, SKU BAG-001.
Could you please tell me whether it is available and how I can order it?
```

For a sold item, use wording equivalent to:

```text
Hello! I am interested in an item similar to “Ocean”, SKU BAG-001.
Could you please tell me whether a similar item can be made?
```

Requirements:

- message generated from structured data;
- no HTML injection;
- copy action with success feedback;
- copy must work on supported browsers;
- graceful fallback if Clipboard API is unavailable.

### WhatsApp contact card

Must include:

- WhatsApp icon;
- label;
- button opening `https://wa.me/qr/SCHEPP5QIVBQL1`;
- generated QR code encoding the same exact URL;
- short explanation;
- “Copy message” action remains separate because the provided WhatsApp link may not support a prefilled product message.

### Telegram contact card

Must include:

- Telegram icon;
- `@ix_lara`;
- button opening `https://t.me/ix_lara`;
- QR code encoding the same URL;
- prepared message copy action.

Do not rely on unsupported or inconsistent Telegram prefill behavior. Opening the contact and copying the message are separate reliable actions.

### Email contact card

Must include:

- email icon;
- `ix.lara@gmail.com`;
- button using a localized `mailto:` URL;
- QR code encoding that `mailto:` URL;
- localized subject;
- localized body including title and SKU when available.

Suggested subject:

```text
Order enquiry: BAG-001
```

Without a selected product:

```text
Handmade product enquiry
```

### QR code behavior

QR codes must:

- be generated at build time as SVG;
- contain sufficient quiet zone;
- remain scannable at common mobile sizes;
- have a text link adjacent to them;
- never be the only way to access a contact;
- include accessible alternative text or an accessible label;
- not require client-side JavaScript to render.

---

## 11.5 About page

Route:

```text
/{locale}/about/
```

Required structure:

- maker portrait placeholder or real image;
- localized heading;
- personal introduction;
- story or motivation;
- handmade process;
- materials/approach;
- location: Portugal;
- workspace/process gallery, if available;
- CTA to products;
- CTA to ordering instructions.

Do not invent the maker’s biography. Create content placeholders and clearly mark missing copy.

---

## 11.6 Contacts page

Route:

```text
/{locale}/contacts/
```

Include:

- WhatsApp;
- Telegram;
- email;
- QR codes;
- button links;
- short response expectation placeholder only if the owner later provides it;
- location shown only as “Portugal” unless more precise public information is explicitly approved;
- link to “How to order”.

The contacts page and ordering page may share reusable contact-card components.

---

## 11.7 Privacy page

Route:

```text
/{locale}/privacy/
```

For MVP, explain accurately:

- the website itself does not submit or store orders;
- the website does not create user accounts;
- the website does not intentionally store personal contact data;
- external contact services have their own privacy policies;
- no analytics or advertising cookies are used by default;
- the browser may store the selected language locally.

Do not provide fabricated legal claims. Mark the text for owner/legal review.

A cookie banner is not required for MVP while no non-essential tracking or marketing cookies are used.

---

## 12. Visual design direction

### 12.1 Overall style

Use a light, warm, modern handmade-gallery aesthetic:

- off-white or warm neutral background;
- restrained accent colours;
- generous whitespace;
- large product photography;
- elegant but readable typography;
- subtle rounded corners;
- soft shadows used sparingly;
- no visual resemblance to a generic marketplace dashboard.

Product colours must remain the strongest visual element.

### 12.2 Design tokens

Define reusable CSS variables or Tailwind theme tokens for:

- background;
- surface;
- foreground;
- muted foreground;
- border;
- primary accent;
- primary accent contrast;
- success/status;
- warning/status;
- sold/muted status;
- focus ring;
- spacing;
- border radius;
- container width.

Do not scatter arbitrary colours throughout components.

### 12.3 Typography

- Use a highly readable sans-serif for body copy.
- A tasteful display font may be used for headings only if it does not hurt performance or multilingual glyph support.
- Prefer self-hosted fonts or system fonts.
- Verify Ukrainian and Russian Cyrillic coverage.
- Avoid loading multiple heavy font families.

### 12.4 Responsive breakpoints

The experience must be intentionally designed for:

- small mobile;
- large mobile;
- tablet;
- desktop;
- wide desktop.

Minimum tap target: approximately 44×44 CSS pixels.

---

## 13. Product taxonomy and SKU conventions

### 13.1 Initial categories

Use stable machine keys and localized labels.

```ts
type CategoryId =
	'bags' | 'bracelets' | 'jewellery' | 'beadwork' | 'knitted' | 'accessories' | 'other';
```

### 13.2 SKU conventions

Recommended prefixes:

| Category      | Prefix | Example    |
| ------------- | ------ | ---------- |
| Bags          | `BAG`  | `BAG-001`  |
| Bracelets     | `BR`   | `BR-001`   |
| Jewellery     | `JEW`  | `JEW-001`  |
| Beadwork      | `BEAD` | `BEAD-001` |
| Knitted items | `KNIT` | `KNIT-001` |
| Accessories   | `ACC`  | `ACC-001`  |
| Other         | `OTH`  | `OTH-001`  |

Validation pattern:

```regex
^[A-Z][A-Z0-9]{1,9}-[0-9]{3,6}$
```

Requirements:

- SKU is required.
- SKU is globally unique.
- SKU comparisons are case-insensitive at input boundaries but normalized to uppercase.
- SKU must not change after a product has been publicly shared.
- SKU appears on cards, product pages, ordering page, and prepared messages.

---

## 14. Product data model

Store product data in repository-managed TypeScript or JSON files.

Preferred directory:

```text
src/lib/content/products/
```

Use one product file per product or a small collection split by category.

### 14.1 Product schema

```ts
type Locale = 'en' | 'pt' | 'uk' | 'ru';

type LocalizedText = {
	en: string;
	pt?: string;
	uk?: string;
	ru?: string;
};

type ProductStatus = 'available' | 'made_to_order' | 'sold' | 'hidden';

type Price =
	| {
			mode: 'fixed';
			amount: number;
			currency: 'EUR';
	  }
	| {
			mode: 'from';
			amount: number;
			currency: 'EUR';
	  }
	| {
			mode: 'on_request';
	  };

type ProductImage = {
	src: string;
	width: number;
	height: number;
	alt: LocalizedText;
};

type Product = {
	sku: string;
	slug: string;
	category: CategoryId;
	status: ProductStatus;

	title: LocalizedText;
	shortDescription?: LocalizedText;
	description: LocalizedText;

	price?: Price;

	images: ProductImage[];

	materials?: LocalizedText;
	dimensions?: LocalizedText;
	colours?: LocalizedText;
	care?: LocalizedText;
	customisation?: LocalizedText;
	productionTime?: LocalizedText;

	featured?: boolean;
	featuredOrder?: number;
	relatedSkus?: string[];

	createdAt?: string;
	updatedAt?: string;
};
```

### 14.2 Data validation

Run schema validation during:

- development startup where practical;
- tests;
- production build.

Build must fail for:

- duplicate SKU;
- duplicate slug;
- invalid SKU;
- missing English title;
- missing English description;
- no images;
- invalid image dimensions;
- image path that does not exist;
- unsupported category;
- unsupported status;
- invalid fixed/from price;
- a related SKU that does not exist;
- unsafe or malformed public URL in site configuration.

Hidden products must not be included in generated public routes, sitemap, catalog, or search data.

---

## 15. Content structure

Suggested structure:

```text
src/
├── lib/
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── products/
│   │   ├── gallery/
│   │   ├── contacts/
│   │   ├── i18n/
│   │   └── ui/
│   ├── config/
│   │   ├── site.ts
│   │   ├── contacts.ts
│   │   └── navigation.ts
│   ├── content/
│   │   ├── products/
│   │   ├── categories.ts
│   │   ├── hero.ts
│   │   └── pages/
│   ├── schemas/
│   │   └── product.ts
│   ├── services/
│   │   ├── catalog.ts
│   │   ├── locale.ts
│   │   ├── order-message.ts
│   │   └── qr.ts
│   ├── utils/
│   └── paraglide/
│
├── routes/
│   ├── +page.svelte
│   ├── [locale]/
│   │   ├── +layout.ts
│   │   ├── +layout.svelte
│   │   ├── +page.ts
│   │   ├── +page.svelte
│   │   ├── products/
│   │   │   ├── +page.ts
│   │   │   ├── +page.svelte
│   │   │   └── [slug]/
│   │   │       ├── +page.ts
│   │   │       └── +page.svelte
│   │   ├── how-to-order/
│   │   ├── about/
│   │   ├── contacts/
│   │   └── privacy/
│   └── [...catchall]/
│
├── app.css
└── app.html

messages/
├── en.json
├── pt.json
├── uk.json
└── ru.json

static/
├── images/
│   ├── products/
│   ├── hero/
│   └── about/
├── qr/
├── icons/
├── favicon/
├── robots.txt
└── site.webmanifest

scripts/
├── generate-qr.ts
├── validate-content.ts
├── optimize-images.ts
└── generate-sitemap.ts

tests/
├── unit/
├── component/
└── e2e/
```

The exact structure may be adjusted when SvelteKit/Paraglide conventions require it, but separation of configuration, content, validation, and UI must remain clear.

---

## 16. Image pipeline

### 16.1 Source requirements

- Use real product photos when provided.
- Do not download random stock handmade products and present them as the maker’s work.
- During development, use clearly labelled neutral placeholders.
- Keep original high-resolution source images outside the public output when possible.

### 16.2 Generated formats

Generate responsive variants during development/build preparation:

- AVIF where supported by the chosen pipeline;
- WebP;
- JPEG fallback when needed;
- several widths appropriate for cards, product pages, and hero sections.

### 16.3 Performance behavior

- Use `srcset` and `sizes`.
- Provide width and height attributes.
- Lazy load below-the-fold images.
- Load the primary hero image eagerly.
- Avoid shipping originals several megabytes in size.
- Strip unnecessary metadata if safe.
- Preserve colour quality important for handmade products.
- Do not crop products in a misleading way.

### 16.4 Image alt text

Every image requires localized alt text.

Alt text should describe the visible product rather than repeat “image of”.

Example:

```text
Blue handmade beaded shoulder bag with a pearl handle
```

Decorative images must use empty alt text.

---

## 17. SEO requirements

### 17.1 Metadata

Every page must have:

- unique title;
- unique meta description;
- canonical;
- Open Graph metadata;
- social preview image where available;
- language alternates.

### 17.2 Structured data

Implement JSON-LD where accurate.

Recommended:

- `WebSite`;
- `Person` or suitable creator profile only with owner-approved details;
- `ItemList` on catalog pages;
- `Product` or `CreativeWork` on product pages.

Do not claim:

- verified ratings;
- exact inventory quantities;
- shipping prices;
- return policies;
- formal business identity;
- availability guarantees;

unless the relevant data is explicitly supplied.

For product pages, structured data availability must match the visible status.

### 17.3 Sitemap and robots

Generate:

- `sitemap.xml` including all public localized routes;
- alternate-language links where supported;
- `robots.txt` referencing the sitemap.

Exclude hidden products and non-public development pages.

### 17.4 Slugs

- lowercase ASCII;
- words separated by hyphens;
- stable after publication;
- not translated per locale for MVP;
- unique globally.

---

## 18. Accessibility requirements

Target WCAG 2.2 AA.

Required:

- semantic headings;
- one primary `h1` per page;
- skip-to-content link;
- keyboard-accessible navigation;
- visible focus indicators;
- accessible mobile menu;
- accessible slider controls;
- accessible gallery controls;
- text alternatives for images;
- status not communicated by colour alone;
- sufficient colour contrast;
- form-free contact actions with clear labels;
- external-link behavior communicated where appropriate;
- reduced-motion support;
- no hover-only essential content;
- no focus traps;
- no auto-moving content that cannot be paused;
- QR codes accompanied by ordinary links and text.

Test with keyboard and automated accessibility checks.

---

## 19. Performance requirements

Target values for production mobile Lighthouse runs under reasonable conditions:

- Performance: 90 or higher;
- Accessibility: 95 or higher;
- Best Practices: 95 or higher;
- SEO: 95 or higher.

Additional targets:

- no avoidable cumulative layout shift;
- primary content visible quickly on a mid-range mobile device;
- initial route JavaScript kept small;
- no heavy carousel or lightbox library unless justified;
- no third-party trackers;
- no externally hosted scripts required for core functionality;
- fonts and icons optimized;
- SVG icons preferred.

Lighthouse scores are quality targets, not a reason to remove required accessibility or functionality.

---

## 20. Security and privacy

Although the MVP has no backend, implement basic safe practices:

- no secrets in repository;
- no API keys;
- no contact-service tokens;
- validate external URLs in configuration;
- encode query parameters;
- never inject product strings with raw HTML;
- sanitize or reject unsafe content fields;
- use `rel="noopener noreferrer"` where appropriate;
- do not expose source image metadata unintentionally;
- provide recommended static-host security headers in deployment documentation;
- do not use third-party embeds for Telegram or WhatsApp;
- no tracking pixels;
- no hidden form submissions.

Suggested deployment headers:

- Content-Security-Policy appropriate for a static first-party site;
- X-Content-Type-Options: `nosniff`;
- Referrer-Policy;
- Permissions-Policy;
- frame restrictions;
- sensible caching for hashed assets.

---

## 21. Contact-link details

### 21.1 Email URL builder

Create a tested utility that builds:

```text
mailto:ix.lara@gmail.com?subject=...&body=...
```

Requirements:

- UTF-8-safe URL encoding;
- localized subject and body;
- selected product data included when available;
- no malformed double encoding;
- URL remains usable with Cyrillic and Portuguese characters.

### 21.2 Telegram

Use:

```text
https://t.me/ix_lara
```

The interface must provide a separate copy-message button.

### 21.3 WhatsApp

Use the exact configured URL:

```text
https://wa.me/qr/SCHEPP5QIVBQL1
```

Do not attempt to derive or guess a phone number.

Do not replace the provided link with a different `wa.me` URL.

### 21.4 External links

- Open contact apps in a user-friendly manner.
- Avoid forcing a new tab when it harms mobile app handoff.
- When using a new tab, include safe `rel` attributes.
- The visible contact value must remain copyable.

---

## 22. Component requirements

At minimum, implement reusable components for:

- `SiteHeader`;
- `MobileNavigation`;
- `LanguageSwitcher`;
- `HeroSlider`;
- `CategoryCard`;
- `ProductCard`;
- `ProductGrid`;
- `ProductStatusBadge`;
- `PriceDisplay`;
- `ProductGallery`;
- `Breadcrumbs`;
- `OrderButton`;
- `SelectedProductSummary`;
- `PreparedMessage`;
- `CopyButton`;
- `ContactCard`;
- `QrCode`;
- `HowToOrderSteps`;
- `AboutPreview`;
- `SiteFooter`;
- `EmptyState`;
- `SeoHead` or equivalent metadata helper.

Components must not fetch data from a backend.

---

## 23. State management

Do not add a global state library.

Permitted state:

- local component state;
- URL search parameters for catalog filters and selected SKU;
- `localStorage` for preferred locale;
- derived state from static catalog content.

Do not store:

- cart;
- order drafts;
- customer details;
- contact history;
- product reservations.

---

## 24. Testing strategy

Development must follow TDD for pure logic and content validation.

### 24.1 Unit tests

Cover at minimum:

1. Browser-locale mapping.
2. Locale fallback.
3. Route-preserving language switching.
4. SKU normalization.
5. SKU validation.
6. Duplicate SKU detection.
7. Duplicate slug detection.
8. Product schema validation.
9. Hidden-product exclusion.
10. Category filtering.
11. Status filtering.
12. Related-product resolution.
13. Localized product fallback.
14. Prepared enquiry message generation for all four locales.
15. Sold-product enquiry wording.
16. `mailto:` URL generation with Unicode.
17. Unknown SKU handling.
18. Contact URL validation.
19. QR payload values.
20. price formatting in EUR for all locales.

Include positive, negative, and edge-case tests.

### 24.2 Component tests

Test key components:

- product card shows title, SKU, status, and correct CTA;
- language switcher indicates active locale;
- contact card has visible link and QR label;
- copy button reports success/failure;
- gallery keyboard behavior;
- filter controls update visible products;
- sold item does not appear as available;
- missing optional product fields do not create broken empty sections.

### 24.3 End-to-end tests

Playwright scenarios:

1. `/` redirects according to browser locale.
2. Saved locale overrides browser locale.
3. Manual language switching preserves current product.
4. Catalog displays and filters products.
5. Product page displays the correct SKU.
6. “Order” opens the ordering page with `sku`.
7. Ordering page resolves a valid SKU.
8. Unknown SKU falls back safely.
9. Email link contains encoded localized subject/body.
10. Telegram link is correct.
11. WhatsApp link is exactly the configured URL.
12. QR SVGs exist and correspond to configured payloads.
13. Keyboard-only navigation works for header, slider, catalog, and gallery.
14. Main pages render without console errors.
15. All four locale variants are generated.
16. Hidden products are not accessible through public routes.
17. 404 behavior is localized or has a safe English fallback.

### 24.4 Build checks

CI must run:

```text
bun run lint
bun run check
bun run test
bun run test:e2e
bun run validate:content
bun run build
```

Add a broken-link check against generated static output if practical.

---

## 25. Required package scripts

The final `package.json` should provide clear scripts similar to:

```json
{
	"scripts": {
		"dev": "vite dev",
		"build": "bun run validate:content && bun run generate:qr && vite build",
		"preview": "vite preview",
		"check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
		"lint": "eslint . && prettier --check .",
		"format": "prettier --write .",
		"test": "vitest run",
		"test:watch": "vitest",
		"test:e2e": "playwright test",
		"validate:content": "bun scripts/validate-content.ts",
		"generate:qr": "bun scripts/generate-qr.ts",
		"optimize:images": "bun scripts/optimize-images.ts"
	}
}
```

Exact commands may be adapted to current package conventions, but equivalent functionality is required.

---

## 26. Development workflow

### Phase 1 — Foundation

- create SvelteKit project with Bun;
- configure TypeScript;
- configure Tailwind CSS;
- configure static adapter;
- configure Paraglide;
- configure linting, formatting, tests;
- define design tokens;
- define locale routing;
- implement root locale gateway.

### Phase 2 — Content model

- define schemas;
- create category configuration;
- create product repository;
- create validation;
- add development placeholder products;
- implement SKU and localization utilities;
- add tests first.

### Phase 3 — Shared layout

- header;
- navigation;
- mobile menu;
- language switcher;
- footer;
- base SEO;
- responsive container and typography.

### Phase 4 — Catalog experience

- home page;
- hero slider;
- category cards;
- product cards;
- catalog filters;
- product grid;
- product page;
- gallery;
- related products.

### Phase 5 — Ordering contacts

- central contact configuration;
- prepared messages;
- copy behavior;
- email link builder;
- QR generation;
- “How to order” page;
- contacts page;
- product-aware SKU flow.

### Phase 6 — Supporting content

- about page;
- privacy page;
- localized 404;
- sitemap;
- robots;
- structured data;
- social metadata.

### Phase 7 — Quality and release

- accessibility review;
- responsive review;
- image optimization;
- Playwright coverage;
- Lighthouse review;
- static deployment configuration;
- final content validation;
- README with content editing and deployment instructions.

---

## 27. Content editing workflow

The owner must be able to add a product without editing UI components.

Expected steps:

1. Add optimized product images under a product-specific directory.
2. Create a product data file.
3. Assign unique SKU and slug.
4. Add English title and description.
5. Add other translations when available.
6. Set category and status.
7. Optionally add price and details.
8. Run content validation.
9. Run tests/build.
10. Deploy generated static output.

Document this process in `README.md`.

Provide one complete example product file and one template file.

---

## 28. Placeholder-content policy

Until the owner provides final assets:

- brand name may remain the working name `IX Lara Handmade`;
- logo may be a typographic wordmark;
- use neutral locally generated placeholder images;
- mark biography copy with TODO;
- mark delivery/payment details with TODO;
- do not publish false prices;
- use `on_request` price mode for placeholders;
- clearly label demo products in source data;
- make it easy to remove all demo content before production.

The production build should optionally fail when `PUBLIC_PRODUCTION=true` and demo/TODO content remains.

---

## 29. Deployment requirements

### 29.1 Static output

The result must build into:

```text
build/
```

No Node or Bun process should be needed to serve the production site.

### 29.2 Nginx option

Provide an example Nginx configuration that:

- serves generated files;
- handles directory index files;
- provides a 404 fallback;
- sets cache headers for hashed assets;
- avoids long caching for HTML;
- sets recommended security headers;
- supports compression where available.

### 29.3 Docker option

Provide a minimal multi-stage Dockerfile:

1. Bun build stage.
2. Nginx runtime stage serving only `build/`.

The final runtime image must not contain source files, package manager caches, or development dependencies.

### 29.4 Environment configuration

The MVP should require no secret environment variables.

Public configuration may be stored in source-controlled config files.

---

## 30. Analytics policy

Do not add analytics in MVP.

The architecture should not block adding privacy-friendly analytics later, but no tracking code, consent manager, or cookie banner should be shipped now.

---

## 31. Acceptance criteria

The MVP is accepted only when all of the following are true.

### Functional

- [ ] Site builds successfully with Bun.
- [ ] Production output is fully static.
- [ ] Four locale prefixes work: `en`, `pt`, `uk`, `ru`.
- [ ] `/` selects a locale according to the defined rules.
- [ ] Language switch preserves the current route.
- [ ] Home page contains all required sections.
- [ ] Catalog supports category and status filtering.
- [ ] Every public product has a unique visible SKU.
- [ ] Every public product has a details page.
- [ ] Every product has a visible “Order” CTA.
- [ ] Product “Order” CTA opens the ordering page with SKU.
- [ ] Ordering page displays the selected product for valid SKU.
- [ ] Unknown SKU is handled safely.
- [ ] Prepared enquiry message can be copied.
- [ ] Telegram link is `https://t.me/ix_lara`.
- [ ] WhatsApp link is exactly `https://wa.me/qr/SCHEPP5QIVBQL1`.
- [ ] Email link targets `ix.lara@gmail.com`.
- [ ] QR codes are generated for WhatsApp, Telegram, and email.
- [ ] QR codes are accompanied by clickable links.
- [ ] No cart or checkout functionality exists.
- [ ] No order/customer data is stored or transmitted by the site.
- [ ] About, Contacts, How to order, Privacy, and 404 pages exist.
- [ ] Sitemap and robots files are generated.

### Content integrity

- [ ] Build fails on duplicate SKU.
- [ ] Build fails on duplicate slug.
- [ ] Build fails on missing mandatory English content.
- [ ] Build fails on missing product images.
- [ ] Hidden products are excluded from public output.
- [ ] No fabricated owner biography, product claims, or commercial terms are present.
- [ ] Demo content is clearly identifiable and removable.

### UX and accessibility

- [ ] Layout is polished on mobile, tablet, and desktop.
- [ ] Main navigation is keyboard accessible.
- [ ] Hero slider is keyboard and touch accessible.
- [ ] Product gallery is keyboard accessible.
- [ ] Focus states are visible.
- [ ] Status is not conveyed by colour alone.
- [ ] QR codes are not the only contact path.
- [ ] Reduced-motion preferences are respected.
- [ ] No serious automated accessibility violations remain.

### Quality

- [ ] Unit tests cover core utilities and edge cases.
- [ ] Component tests cover critical UI.
- [ ] Playwright tests cover core user journeys.
- [ ] Lint, type checks, tests, content validation, and build pass.
- [ ] No browser console errors on main routes.
- [ ] No broken internal links.
- [ ] Performance targets are reasonably met with production assets.

---

## 32. Definition of done

The project is done when:

1. All acceptance criteria pass.
2. A non-developer can follow `README.md` to add or edit a product.
3. All contact details come from one configuration source.
4. All four languages are operational.
5. The static build can be deployed to Nginx using the supplied instructions.
6. There is no backend or order-submission mechanism.
7. The website clearly directs visitors to WhatsApp, Telegram, or email.
8. Product enquiries reliably include or expose the relevant SKU.
9. The implementation is maintainable, tested, and free from placeholder claims presented as facts.

---

## 33. Future possibilities — not part of MVP

The following may be considered later but must not influence MVP complexity:

- simple admin panel;
- headless CMS;
- enquiry form;
- Telegram bot notifications;
- saved enquiries;
- product reservation;
- online payments;
- MB Way;
- delivery calculator;
- Instagram synchronization;
- customer testimonials;
- multilingual content editor;
- availability history;
- basic privacy-friendly analytics;
- custom order configurator.

---

## 34. Final implementation instruction to the AI agent

Implement the MVP exactly as a static multilingual handmade-product catalog.

Prioritize, in order:

1. Correct product data and SKU handling.
2. Clear mobile-first browsing.
3. Reliable language routing and switching.
4. Accessible product galleries.
5. A simple, trustworthy “How to order” flow.
6. Correct WhatsApp, Telegram, and email links and QR codes.
7. Fast static delivery.
8. Automated validation and tests.
9. Easy product-content editing.

Do not transform this project into an ecommerce platform. The website’s responsibility ends when it clearly presents the product, provides its SKU, explains how ordering works, and opens the visitor’s chosen contact channel.
