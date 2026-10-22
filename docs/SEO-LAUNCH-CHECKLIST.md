# SEO/indexing checklist — bake in before launch, not after

Every item below comes from a real problem this project hit *after* launch —
query-string duplicates eating crawl budget, a client-side locale redirect
flagged by both Lighthouse and GSC, one product missing `offers` in its
JSON-LD, color tokens that never got checked against WCAG, oversized hero
images. All of it was fixable, but each one cost a GSC validation cycle
(days to weeks) to clear once Google had already crawled the broken version.
Doing these at build time is nearly free; doing them after launch means
waiting out Google's re-crawl/re-validate clock on top of the actual fix.

Treat this as a pre-launch gate, not a someday-nice-to-have.

## 1. URL architecture — prevent duplicate-content sprawl before it exists

The single biggest source of "pages Google won't index" on this project was
URLs that differ only by a query string (`?sku=`, `?status=`, `?category=`)
but serve near-identical content to a canonical page. Every one of those
is a separate URL Google has to crawl, judge as a duplicate, and discard —
multiplied by every product × every locale, that's hundreds of wasted
crawl-budget hits.

- [ ] **Any UI state that doesn't change the core content (filters, sort,
      a pre-filled form field) should live in client-side state, not a
      crawlable `<a href>`.** If it must be a link, add `rel="nofollow"` on
      it *and* `Disallow` the pattern in `robots.txt` from day one — don't
      wait for GSC to tell you it's a problem 100+ pages later.
- [ ] Every templated/paginated/filtered page has a **self-referencing
      `<link rel="canonical">`** pointing at the one true URL for that
      content.
- [ ] Decide the canonical trailing-slash convention (`/path/` vs `/path`)
      and enforce it everywhere — internal links, sitemap, canonical tags —
      so Google never has to guess which one is real.
- [ ] `http://` → `https://` and bare-domain → default-locale (or whatever
      your canonical form is) redirects exist from the first deploy, not
      added after GSC flags "Page with redirect."

## 2. Redirects: always do them at the edge/server, never client-side JS

A `window.location.replace()` gateway page is invisible to nothing — Google
follows it fine — but both Lighthouse ("client-side redirect" diagnostic)
and real users pay a round-trip of blank-page time for it, and it's strictly
worse than a server-side 30x with zero upside.

- [ ] Any "detect locale/preference and send the visitor elsewhere" logic
      happens as an HTTP redirect at the server/edge (a Cloudflare Worker, a
      platform redirect rule, an SSR `redirect()` call — whatever your host
      supports), not in page JavaScript.
- [ ] If the redirect destination depends on per-visitor state (cookie,
      `Accept-Language`, geo), mark the response `Cache-Control: private,
      no-store` (or equivalent) so a CDN never serves one visitor's redirect
      to another.
- [ ] Persist an explicit user choice (e.g. a manually picked language)
      somewhere the *server* can read on the next request — a cookie, not
      only `localStorage`, which is invisible to any edge logic.
- [ ] If your host serves static assets with an optional Worker/Function in
      front, confirm the Worker actually runs before the static file is
      served for the routes it needs to intercept (e.g. Cloudflare's
      `assets.run_worker_first` — without it, a matching static file wins
      and your redirect code never executes). Test this locally
      (`wrangler dev` + `curl`) before trusting a deploy.

## 3. robots.txt and sitemap — write them for the architecture you're about to build, not the one you have today

- [ ] Draft `robots.txt` *before* shipping any URL pattern that will
      duplicate content (query strings, print views, tracking-param
      variants) — don't wait for crawl-budget symptoms to show up in GSC
      weeks later.
- [ ] Sitemap contains only canonical URLs — no query strings, no
      `http://`, no non-canonical locale/variant forms. Regenerate it as
      part of the build, not by hand, so it can't drift from reality.
- [ ] Sitemap includes correct `hreflang` alternate-language links (per
      locale + `x-default`) for every localized page, if the site is
      multilingual.
- [ ] robots.txt and sitemap are generated from the *same source of truth*
      (one config/script), so a change to routing can't update one and
      silently forget the other.

## 4. Structured data (JSON-LD) — satisfy the minimum for every page type you use, and verify it empirically

- [ ] For `Product` markup: every product that's publicly reachable has at
      least one of `offers`, `review`, or `aggregateRating` populated —
      don't leave an "optional" price field that can silently produce
      `offers: undefined` for some future product someone adds without a
      price.
- [ ] Spot-check actual rendered HTML (`curl` the live URL, grep the
      `<script type="application/ld+json">` block) for a handful of
      real pages before trusting the template logic — a conditional that
      looks correct in source can still produce `undefined` for an edge
      case you didn't think to list a product under.
- [ ] Run new/changed structured-data templates through Google's Rich
      Results Test (or equivalent) before launch, not after GSC emails you
      about it.

## 5. Accessibility — check contrast and duplicate-link-text at build time, not via a Lighthouse email months later

- [ ] Every text/background color pairing actually used in the design
      system (not just the "primary" ones) is checked against WCAG AA
      (4.5:1 for normal text) — including filled-button text-on-background
      combos, which are easy to miss because they look fine by eye.
      Compute it (luminance formula) or run an automated contrast checker
      against the real rendered page, not just eyeballing hex values.
- [ ] Any place the same visible link text appears more than once pointing
      at *different* destinations (e.g. a repeated "View all" / "Learn
      more" across sections) gets a distinguishing `aria-label` so
      assistive tech can tell them apart.
- [ ] Run an automated accessibility audit (Lighthouse, axe) against the
      built site before launch, not just visually.

## 6. Images — responsive, modern formats, and right-sized, from the first commit

- [ ] Above-the-fold / LCP images get `fetchpriority="high"` and a
      responsive `srcset` (at least a mobile-sized variant) from day one —
      retrofitting this later means a whole PageSpeed cycle just to catch
      up to where it should have started.
- [ ] Serve modern formats (`AVIF` with a `WebP` fallback via `<picture>`,
      or `WebP` with a fallback if AVIF tooling isn't available) rather
      than PNG/JPEG for photographic content.
- [ ] Decorative/icon images reused inline (e.g. a logo mark in the header)
      get their own appropriately-compressed asset — don't reuse a
      favicon-grade PNG sized for a 48×48 browser tab everywhere it
      visually appears at a different size.
- [ ] Pick a compression quality by actually looking at the output at the
      size it will display, not by trusting a single pass — and re-check
      after any "please compress further" pass, since quality tools will
      keep asking for byte savings indefinitely; there's a real point of
      diminishing returns where further compression risks visible
      artifacts on detailed/textured photos.

## 7. Monitoring cadence after launch

- [ ] Check GSC Coverage/Indexing reports periodically, but read the
      **crawl date** on every flagged example before treating it as a live
      problem — GSC often shows weeks-old crawl snapshots, especially for
      a low-traffic/new domain Google revisits infrequently. A report
      dated before your last relevant deploy is not evidence the fix
      didn't work.
- [ ] After any fix meant to address a specific GSC-flagged issue, use
      "Validate Fix" (or request indexing on the specific affected URL) so
      Google re-crawls on a known timeline instead of waiting for its
      organic schedule.
- [ ] For a brand-new domain: expect near-zero search visibility for the
      first 3-6 months regardless of technical quality — Google extends
      trust to new domains slowly, and no amount of additional code
      polish changes that timeline. The actual lever at that stage is
      external signals (backlinks, social profiles linking in,
      marketplace listings), not more PageSpeed/indexing fixes. Don't
      mistake "young domain, no backlinks yet" for "something's broken."

## Why this list exists

Every single item above was something this project only fixed *after* GSC
or PageSpeed surfaced it as a live complaint — which meant paying both the
engineering cost of the fix *and* Google's re-validation latency (routinely
1-3 weeks per item) on top. None of these are expensive to get right from
the start; they're only expensive to retrofit. Treat this file as a
pre-launch checklist for the *next* site, not just a postmortem of this one.
