# Build It Factory — Standard Operating Procedures
# Template: ELEC-PREIMIUM-ELECTRONICS-B5 | E2 – Premium Electronics & Accessories
# Phase 9 — SOP for building and operating the template implementation reference.

---

## 1. Template Overview

### 1.1 Identity

| Attribute | Value |
|-----------|-------|
| Template ID | `ELEC-PREIMIUM-ELECTRONICS-B5` |
| Template name | E2 – Premium Electronics & Accessories |
| Version | `1.0.0` |
| Category | e-commerce |
| Industry | consumer_electronics_retail |
| Objective | Reusable, componentized e-commerce storefront for consumer electronics and accessories retailers, fully configurable through an intake schema with no client-specific content baked in. Primary goal: product discovery + online purchase conversion. |
| Repository | `https://github.com/M-Thryve/ELECTRONICS_STORE.git` (branch `production`) |

### 1.2 Technology Stack

- **Framework**: Next.js `16.3.1` (App Router, Turbopack)
- **UI library**: React `19.2.8`
- **Language**: TypeScript `^5`
- **Styling**: Tailwind CSS `^4` (design tokens as CSS custom properties in `app/globals.css`)
- **Utilities**: `clsx` (class merging), `tsx` (dev-only, runs the validation script)
- **Path alias**: `@/*` → `./app/*`

### 1.3 Architecture Summary

The implementation reference is a **static, server-rendered Next.js App Router app** with no database and no backend services. All content is data-driven from TypeScript content objects in `app/content/` that mirror the intake schema destinations. The app is composed of:

- **Content layer** (`app/content/*.ts`) — 27 exported content objects (home, shop, category, product, comparison, collections, deals, accessories, cart, checkout, confirmation, search, support, contact, notFound, wishlist, account, orderTracking, storeLocator, faq, reviews, blog, privacy, terms, returns, legal, site) plus the asset helpers in `assets.ts` (`assetImage`, `unsplash`, `firstItem`, `formatPrice`, `ctaHref`).
- **Component layer** (`app/components/`) — typed primitives: `button`, `container`, `cta`, `footer`, `gallery` (ProductGrid), `hero`, `navbar`, `product-info` (ProductTitle, ProductPrice, ProductDescription, ProductSKU, FeatureBullets), `service-section`, `testimonials`, `typography` (SectionTitle).
- **Page layer** (`app/*/page.tsx`) — 25 route pages, each rendering content objects through components. Dynamic routes: `/product/[id]` and `/shop/[category]`.
- **Extension layer** (`app/extensions/`) — Phase 5 integration points: `types.ts`, `registry.ts`, `config.ts`, `slots.tsx` (15 named slots), `_prepare.ts` (EKOMS mount point). Ships inert — all slots render `null`.

### 1.4 Page Inventory (25 Routes)

**Core pages (15):** `/` (home), `/shop`, `/shop/[category]`, `/product/[id]`, `/compare`, `/collections`, `/deals`, `/accessories`, `/cart`, `/checkout`, `/confirmation`, `/search`, `/support`, `/not-found`, plus the framework `/_not-found`.

**Additional pages (10):** `/wishlist`, `/account`, `/order-tracking`, `/store-locator`, `/faq`, `/reviews`, `/blog`, `/privacy`, `/terms`, `/returns`.

> Note: sitemap.yaml lists `/checkout/confirmation` and `/contact`; the implemented routes are `/confirmation` and no contact page (contact destinations are excluded per Phase 1 scoping — the manifest's `additional` list is authoritative for the implemented app). `scripts/validate-content.mjs` and the QA checklist resolve against the **implemented** route set.

### 1.5 Extension Points (Phase 5 — preparation only)

Five approved extensions from `template.extensions.yaml`: `content` (required), `design` (required), `cart_checkout` (recommended), `account` (recommended), `analytics` (optional). The `support` extension is **not approved** and is excluded. No extension is implemented; the extension layer provides the slots and configuration points EKOMS modules will attach to.

---

## 2. Required Inputs / Page Requirements

### 2.1 Template Artifacts (all required)

| Artifact | Path | Purpose |
|----------|------|---------|
| Brief | `template/template.brief.md` | Objective, assumptions, capabilities |
| Architecture | `template/sitemap.yaml` | Page routes, sections, global layout |
| Manifest | `template/template.manifest.yaml` | Package identity, stack, approved extensions |
| Intake schema | `template/template.intake.schema.yaml` | 450+ intake fields, destinations |
| Content mapping | `template/template.content.mapping.json` | 133 mappings: source → destination → component |
| Design tokens | `template/design/design-tokens.yaml` | Colors, typography, spacing, radius, shadows, motion |
| Extensions | `template/template.extensions.yaml` | Approved extension classification |
| Agent instructions | `template/template.agent.instructions.md` | Agent authority boundaries |
| QA checklist | `template/template.qa.checklist.yaml` | Verification gates |
| SOP | `template/template.sop.md` | THIS FILE |

### 2.2 Page Content Requirements

Every page must render **exclusively** from its content object; no client-specific copy is hardcoded in pages. The required content source per page:

- **Home** (`/`) — `home` content object: Hero (heading, subheading, image, primary/secondary CTAs), FeaturedProducts, ProductCategories, NewArrivals, EditorialBanner, ShopByCategory, LifestyleEditorial, CustomerBenefits, SupportSection, Newsletter, FooterNav.
- **Shop** (`/shop`) — `shop`: PageHeader, CatalogFilters, ProductGrid, Pagination.
- **Category** (`/shop/[category]`) — `category`: Hero, ProductGrid, Pagination (title derives from the URL slug).
- **Product** (`/product/[id]`) — `product`: Gallery, Info (title, price, compare-at, SKU, description, variants), Features, Related.
- **Compare** (`/compare`) — `comparison`: ProductSelection, ProductImages, KeySpecs, Features, PurchaseCta.
- **Collections** (`/collections`) — `collections`: Hero, Grid, FeaturedCollection.
- **Deals** (`/deals`) — `deals`: Hero, Grid, PromotionBanner.
- **Accessories** (`/accessories`) — `accessories`: Hero, Grid, CompatibilityNotes.
- **Cart** (`/cart`) — `cart`: CartItems, CartSummary, CheckoutCta.
- **Checkout** (`/checkout`) — `checkout`: CustomerInfo, Shipping, Payment, OrderReview.
- **Confirmation** (`/confirmation`) — `confirmation`: Confirmation, OrderNumber, ContinueShopping.
- **Search** (`/search`) — `search`: SearchBar, Results, NoResults.
- **Support** (`/support`) — `support`: Hero, ContactMethods, Articles, ServiceOverview.
- **Not found** (`/not-found`) — `notFound`: Message, NavigationCta.
- **Wishlist** (`/wishlist`) — `wishlist`: Hero, Grid.
- **Account** (`/account`) — `account`: AccountNav, Orders, Profile, Addresses.
- **Order tracking** (`/order-tracking`) — `orderTracking`: Hero, OrderNumber, Email, History.
- **Store locator** (`/store-locator`) — `storeLocator`: Hero, Grid (stores).
- **FAQ** (`/faq`) — `faq`: Hero, Grid (items).
- **Reviews** (`/reviews`) — `reviews`: Hero, List (items).
- **Blog** (`/blog`) — `blog`: Hero, ArticleList.
- **Privacy** (`/privacy`), **Terms** (`/terms`), **Returns** (`/returns`) — `privacy`/`terms`/`returns`: Header, Body.
- **Legal root** — `legal`: shared Header, Body (validation root for `Legal.*` destinations).

### 2.3 Global Layout Requirements

- `app/layout.tsx` renders `<Footer />` on every page; metadata derives from `site.metadata` (title template `%s | E2`, description, OpenGraph image).
- Extension slots mounted in layout: `HeadSlot` (in `<head>`), `BodyStartSlot` / `BodyEndSlot` (in `<body>`); `@/extensions/_prepare` is imported once.
- Navbar (`app/components/navbar.tsx`) renders `site.nav` items with `BrandLogoSlot` and `NavbarActionsSlot`; footer renders `site.footer` columns/legal links with `FooterDataSlot`.

### 2.4 Asset Requirements

All image URLs and alt text flow through `assetImage()` from `app/content/assets.ts`; `next.config.ts` `images.remotePatterns` allows `images.unsplash.com` (extend only for additional client asset hosts).

---

## 3. General Build Instructions

### 3.1 Prerequisites

- Node.js 20+ (project tested with Node 24)
- npm

### 3.2 Install

```bash
npm install
```

### 3.3 Validate Content Mapping (gate — must pass first)

```bash
node scripts/validate-content.mjs
# Expect: "✓ All 127 mapped intake fields have a content destination." (exit 0)
```

The script reads `template/template.content.mapping.json`, collects all `destination` values, and resolves each against the exported content objects in `app/content/`. A failing resolution is a blocker — do not build until it passes.

### 3.4 Build

```bash
npx next build
# Expect: Compiled successfully, TypeScript passes, 25 routes emitted
# (23 static + 2 dynamic: /product/[id], /shop/[category])
```

### 3.5 Run / Verify Routes

```bash
npx next start -p 3000
# Sweep all routes; each must return HTTP 200:
# / /shop /shop/smartphones /product/iphone-15-pro /compare /collections /deals
# /accessories /cart /checkout /confirmation /search /support /faq /reviews
# /blog /privacy /terms /returns /wishlist /account /order-tracking
# /store-locator /not-found
```

### 3.6 Development

```bash
npx next dev
```

### 3.7 Lint

```bash
npm run lint
```

---

## 4. Dependencies

### 4.1 Artifact Dependency Chain (build order)

```
template.brief.md (Phase 0)
  ↓
sitemap.yaml (Phase 1) — page routes/sections
  ↓
template.manifest.yaml (Phase 2) — identity, stack, approved extensions
  ↓
template.intake.schema.yaml (Phase 3) — 450+ fields with destinations
  ↓
template.content.mapping.json (Phase 4) — 133 mappings
  ↓
design/design-tokens.yaml + figma-link.md (Phase 5) — token system
  ↓
template.extensions.yaml (Phase 6/8) — approved extension classification
  ↓
template.agent.instructions.md (Phase 7) — agent authority boundaries
  ↓
template.sop.md (Phase 9, THIS FILE) + template.qa.checklist.yaml (Phase 8)
  ↓
Implementation reference (app/ routes + components + content + extensions)
```

### 4.2 Implementation Dependencies

- **Content objects depend on** the intake schema destinations (`<Page>.<Section>.<field>`); every destination must resolve (127/127).
- **Pages depend on** content objects and component primitives; `react_component` values in the content mapping must exist in `app/components/` (58 distinct components referenced across 63 page locations).
- **Components depend on** design tokens (`template/design/design-tokens.yaml` → `app/globals.css` custom properties) and `clsx` (`cn` helper).
- **Extensions depend on** `template/template.extensions.yaml`; slots are wired into layout/pages but remain inert (render `null`) until EKOMS modules register renderers via `app/extensions/_prepare.ts`.
- **Deferred dependencies (explicitly NOT implemented)**: payment processing, inventory sync, order persistence, account backend wiring, live search backend, headless CMS connectivity, multi-currency/locale. These bind through extension hooks in later phases.

---

## 5. Agent Responsibilities

Execution follows `template/template.agent.instructions.md`. Summary:

| Agent | Owns | Forbidden |
|-------|------|-----------|
| **Orchestrator** | `scripts/validate-content.mjs`, cross-artifact consistency, phase gates, handoff sequencing, version coordination | Editing content objects, components, page composition, extension registration |
| **UI** | `app/*/page.tsx`, `app/components/`, `app/layout.tsx`, Tailwind v4 styling, `"use client"` boundaries | Editing content values, schema/mapping files, implementing extensions, backend logic |
| **Database** | `app/content/*.ts` (data shapes + values), `assets.ts` helpers, prototype state contracts | Page layout/rendering, extension registration, orphan content without mapped destinations |
| **Backend** | `next.config.ts`, layout metadata, server surface boundary; keeps payment/order/inventory server-side wiring absent | Implementing live payment/order/inventory, server-rendering cart state, runtime extension registration |
| **Services** | `app/extensions/*` (types, registry, config, slots, `_prepare`); mirrors `template.extensions.yaml` | Implementing extension behavior, populating config values, changing content/page copy |
| **QA** | `template/template.qa.checklist.yaml`, `template/template.sop.md`, verification gates (validate → build → route sweep) | Fixing app bugs directly (reports to owner), relaxing failing checks without approval |

**Handoff protocol**: each agent reports changed file paths + verification performed; the standard sequence `validate-content.mjs` → `next build` → HTTP 200 sweep runs before every handoff; QA is the terminal agent.

---

## 6. Completion Criteria

The template implementation is **complete** when ALL of the following hold:

1. **Content validation**: `node scripts/validate-content.mjs` exits 0 — all 127 mapped intake destinations resolve against `app/content/` objects.
2. **Build**: `npx next build` completes with zero TypeScript errors and emits all 25 routes (23 static + 2 dynamic).
3. **Runtime**: `npx next start` serves HTTP 200 on all 24 checked routes (including dynamic samples `/shop/smartphones`, `/product/iphone-15-pro`).
4. **Lint**: `npm run lint` passes with zero errors.
5. **Data-driven pages**: No client-specific content hardcoded in pages/components; all copy and assets flow through content objects and `assetImage()`.
6. **Component inventory**: Every `react_component` referenced in `template/template.content.mapping.json` exists as a typed `.tsx` file in `app/components/`.
7. **Extension pre-readiness**: `app/extensions/` compiles, all 15 slots render `null` on every route, `_prepare.ts` is inert, and the extension layer mirrors `template/template.extensions.yaml` (5 approved extensions).
8. **QA checklist**: `template/template.qa.checklist.yaml` records all checks passed (routes, intake coverage, mapping validity, token consistency, navigation integrity, responsiveness at 5 breakpoints, WCAG AA contrast, focus rings, alt text).
9. **Version consistency**: `1.0.0` across manifest, intake schema, and content mapping; implementation `package.json` at `0.1.0`.
10. **No prohibited scope creep**: No payment, inventory, order-persistence, or account backend code; no implemented extensions.

Upon meeting all criteria, the package is ready for Factory Console registration and Build Card generation (see SOP-10/SOP-11 of the prior revision).

---

**Document Revision**: 1.0.0
**Last Updated**: During Phase 9 — SOP generation
**Applies To**: Template package `ELEC-PREIMIUM-ELECTRONICS-B5`, E2 – Premium Electronics & Accessories, and its Next.js 16.3.1 implementation reference.