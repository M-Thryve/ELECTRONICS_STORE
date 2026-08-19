# Build It Factory — AI Agent Instructions
# Template: ELEC-PREIMIUM-ELECTRONICS-B5 | E2 – Premium Electronics & Accessories
# Phase 7 — Agent execution contract for the template implementation reference.

## Purpose

This document assigns execution responsibilities across six AI agents that
implement and operate the ELEC-PREIMIUM-ELECTRONICS-B5 template. Every section
below describes the **actual architecture** of this repository — the Next.js
16.3.1 App Router app rooted at `app/`, the content layer at `app/content/`,
the extension layer at `app/extensions/`, and the template package at
`template/`. Instructions are not generic; each agent's authority is bounded by
the files and contracts listed here.

## Repository Layout (Ground Truth)

```
app/
  layout.tsx                 # Root layout — metadata, <head>/<body> slots, Footer
  globals.css                # Design tokens as CSS custom properties (Tailwind v4)
  page.tsx                   # Home — content-driven from home content object
  <page>/page.tsx            # 24 remaining route pages (shop, product, cart, …)
  content/                   # Content objects (data layer) — assets, site, home,
                             #   shop, product, collections, cart, support, account, misc
  components/                # UI primitives — button, container, cta, footer,
                             #   gallery, hero, navbar, product-info, service-section,
                             #   testimonials, typography
  extensions/                # Extension integration layer — types, registry,
                             #   config, slots, _prepare (Phase 5)
scripts/
  validate-content.mjs       # Validates all 127 mapped destinations resolve
template/
  template.manifest.yaml     # Package metadata (source of truth for identity)
  sitemap.yaml               # Page architecture (route → sections)
  template.intake.schema.yaml# 450+ intake fields (destination format <Page>.<Section>.<field>)
  template.content.mapping.json  # 133 field mappings (source → destination → component)
  template.extensions.yaml   # 6 extension points (content, design, analytics,
                             #   cart_checkout, account, support)
  template.agent.instructions.md  # THIS FILE
  design/design-tokens.yaml  # Colors, typography, spacing, radius, shadows, motion
next.config.ts               # remotePatterns for images.unsplash.com
package.json                 # next 16.3.1, react 19.2.8, clsx, tsx (dev), tailwindcss ^4
```

**Shared conventions for ALL agents**

- The `@/*` import alias resolves to `./app/*` (e.g. `@/content/home`,
  `@/components/button`, `@/extensions`).
- Every route page renders content from `app/content/*` content objects. No page
  hardcodes client-specific copy; hardcoded copy is limited to functional UI
  strings (form labels, aria labels) and prototype markers.
- Every asset URL and alt text flows through `assetImage()` from
  `app/content/assets.ts` (routes via `ASSET_HOSTS`, supports
  `images.unsplash.com`).
- All dynamic content destinations must resolve — run
  `node scripts/validate-content.mjs` and `npx next build` before handoff.
- Next.js 16.3.1 has breaking changes vs. prior versions. Read
  `node_modules/next/dist/docs/` before writing any Next.js API.
- Extension hooks/slots are placeholder-only. Never implement an extension;
  only provide the integration point.
- Payment, inventory sync, order persistence, and account backend wiring are
  **deferred** (Phase 0 assumptions #10/#11). Cart, checkout, order history, and
  profile are front-end prototype state at most.

---

## ORCHESTRATOR AGENT

**Responsible For**

- Driving the phase lifecycle: intake → mapping → content objects → page
  wiring → extension preparation → QA verification.
- Maintaining cross-artifact consistency across `template/` and `app/`:
  sitemap page_ids, intake destinations, content mapping entries, content
  object shapes, and page routes must never diverge.
- Owning `scripts/validate-content.mjs` and enforcing its pass as the gate
  before any build or handoff.
- Sequencing work between UI, Database, Backend, Services, and QA agents and
  approving each agent's output against `template.agent.instructions.md`.
- Keeping `template/content.mapping.json` and `template/intake.schema.yaml`
  in sync when intake or destinations change.

**Allowed Changes**

- `scripts/validate-content.mjs` (resolution logic, root aliasing, output).
- Phase artifacts in `template/` that are version/consistency metadata
  (e.g. `template.manifest.yaml` version bumps, this file).
- Routing additions/renames **only** when a sitemap.yaml page_id changes, and
  only in coordination with the UI agent (the page file lives under `app/`).
- Importing `@/extensions/_prepare` in `app/layout.tsx` and approving slot
  placements across pages.

**Forbidden Changes**

- Content copy, product data, or assets inside `app/content/*` (Database agent
  owns the data; content objects must stay schema-shaped).
- UI component implementations under `app/components/` (UI agent).
- Page section composition under `app/*/page.tsx` (UI agent).
- Extension registration or config values in `app/extensions/*` (Services agent).
- Any change that reduces the number of destinations resolving in
  `scripts/validate-content.mjs`.

**Expected Output**

- A validated pipeline where 127/127 mapped intake destinations resolve.
- A clean `npx next build` (25 routes) and `node scripts/validate-content.mjs`
  exit 0 at every phase boundary.
- An explicit, per-agent handoff record stating files touched, dependencies
  satisfied, and the next agent to act.

**Dependencies**

- `template/sitemap.yaml`, `template/template.intake.schema.yaml`,
  `template/template.content.mapping.json`, `template/template.extensions.yaml`,
  `template/design/design-tokens.yaml`, `template/template.agent.instructions.md`.

---

## UI AGENT

**Responsible For**

- All user-facing rendering: every route page under `app/*/page.tsx`, the root
  `app/layout.tsx`, and the shared component inventory in `app/components/`
  (button, container, cta, footer, gallery, hero, navbar, product-info,
  service-section, testimonials, typography).
- Composing page sections so each intake destination (`<Page>.<Section>.<field>`)
  renders at its declared `page_location` per `template/content.mapping.json`.
- Rendering content objects via existing primitives (e.g.
  `ProductTitle`/`ProductPrice`/`ProductDescription` from `product-info.tsx`,
  `SectionTitle` from `typography.tsx`, `ProductGrid` from `gallery.tsx`,
  `Hero` from `hero.tsx`, `Button` from `button.tsx`).
- Using design tokens from `template/design/design-tokens.yaml` —
  implemented as CSS custom properties in `app/globals.css` and applied with
  Tailwind v4 utilities.
- Adding `"use client"` to the minimum set of components that require event
  handlers (navbar, button, cta) and keeping everything else a Server Component.

**Allowed Changes**

- New/edited `.tsx` files under `app/components/` and `app/*/page.tsx`.
- `app/layout.tsx` metadata and slot placement (in coordination with
  Orchestrator/Backend).
- Tailwind v4 class strings, layout structure, responsive behavior
  (5 breakpoints: sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536), focus rings,
  and aria attributes on interactive elements.
- JSX fixes that keep the build green (import paths `@/...`, `cn` from
  `clsx`, correct component names, typed `params` for dynamic routes).
- Adding a `react_component` to the mapping **only** when a matching `.tsx`
  component is created in the same change (no orphan references).

**Forbidden Changes**

- Editing content values, product data, or images in `app/content/*`
  (Database agent).
- Modifying `template/*.yaml`, `template/*.json` schemas/mappings.
- Implementing payment, inventory, or account backend logic (deferred).
- Registering/implementing extensions in `app/extensions/`.
- Global CSS custom property values (design tokens live in `globals.css` but
  are governed by the design extension — Services agent).

**Expected Output**

- All 25 routes render server-rendered content from content objects with no
  hardcoded client copy.
- Every `react_component` named in `template/content.mapping.json` exists as a
  typed `.tsx` file in `app/components/`.
- `npx next build` compiles cleanly (TypeScript passes, 25 routes emitted).
- All interactive elements have focus rings (`--color-ring`), images carry
  `alt` text, and sections reflow at the 5 token breakpoints.

**Dependencies**

- `template/content.mapping.json` (destination → component contract),
  `template/design/design-tokens.yaml`, `app/content/*` content objects
  (read-only), `app/components/*` primitives.

---

## DATABASE AGENT

**Responsible For**

- The data layer shape: content object type contracts and structures in
  `app/content/*.ts`, mirroring `template/template.intake.schema.yaml`
  destinations exactly (PascalCase page/section keys, camelCase fields).
- Authoring and validating the static content catalogs — products, categories,
  collections, deals, accessories, FAQ, reviews, blog, legal text — used by the
  UI agent. Every entry must be schema-shaped and asset-aware.
- The `assetImage()` / `unsplash()` / `formatPrice()` / `ctaHref()` helpers in
  `app/content/assets.ts` (asset URL + alt handling).
- Client-side prototype state contracts for cart, checkout, order history, and
  profile (localStorage keys such as `e2.cart`, `e2.orders`, `e2.profile`) —
  as *type contracts only*, not implementations.
- Declaring the empty/template state for cart/checkout/account pages that
  prototype UI consumes (e.g. zero items, placeholder order history).

**Allowed Changes**

- `app/content/*.ts` — new content objects, field additions, structure
  refinements, asset helper changes, type definitions.
- Adding a new content root **if and only if** it maps to a destination in
  `template/content.mapping.json` (validated by `scripts/validate-content.mjs`).
- Adjusting `scripts/validate-content.mjs` root aliasing in coordination with
  the Orchestrator agent (e.g. adding camelCase → PascalCase aliases).
- Structuring content so extension config (`app/extensions/config.ts`) can
  later override values without reshaping the content tree.

**Forbidden Changes**

- Page layout, section composition, or component code (UI agent).
- Rendering logic, event handlers, `"use client"` boundaries (UI agent).
- Extension registration or config defaults (Services agent).
- Adding content that has no mapped destination (creates orphan data that
  `scripts/validate-content.mjs` cannot validate).

**Expected Output**

- Content objects where every mapped destination resolves — validated by
  `node scripts/validate-content.mjs` (127/127).
- No undefined `intake.*` references; every content field consumed by a page is
  declared in the content object.
- Asset URLs and alt text swappable per client via intake (nothing brand-locked
  beyond the E2 default).

**Dependencies**

- `template/template.intake.schema.yaml` (destination authority),
  `template/template.content.mapping.json`, `app/content/assets.ts`,
  `app/extensions/config.ts` (read-only — override targets).

---

## BACKEND AGENT

**Responsible For**

- The server-side surface of the App Router app: `next.config.ts`,
  `app/layout.tsx` metadata, and any future Route Handlers / Server Actions.
- Keeping the backend minimal and deferred-safe: no payment, inventory,
  order-persistence, or account API exists yet; the agent guards this boundary
  so EKOMS modules can bind later without rework.
- Remote-image policy: `next.config.ts` `images.remotePatterns` allowing
  `images.unsplash.com` (extend only when a client asset host is required).
- Root metadata derivation from `site.metadata` in `app/content/site.ts`
  (title template `%s | E2`, description, OpenGraph image) in
  `app/layout.tsx`.
- Readiness for the `cart_checkout` and `account` extensions: confirming the
  front-end prototype hooks (localStorage state, review/placement UI) remain
  client-side and that no server-side assumptions are baked into them.

**Allowed Changes**

- `next.config.ts`, `app/layout.tsx` metadata/Head-slot wiring (with
  Orchestrator), `tsconfig.json` path/alias adjustments.
- Adding empty Route Handlers (`route.ts`) or Server Actions **only** as named
  placeholders that no client calls yet, and only with an Orchestrator-approved
  EKOMS contract.
- Security posture: ensuring no secrets/logs are introduced; content objects
  stay inert.

**Forbidden Changes**

- Implementing live payment processing, order creation, or inventory sync
  (deferred — prototype UI only).
- Server-rendering or persisting cart/checkout/account state (client-side
  prototype).
- Importing `@/extensions` registrations that execute at request time in a
  Server Component (extensions register at module load via
  `@/extensions/_prepare`, imported from the root layout only).
- Adding API routes that duplicate functionality an extension hook already
  covers (`cart-summary`, `checkout-flow` slots).

**Expected Output**

- A buildable, deployable server surface with correct metadata and image policy.
- Zero server-side routes for payment/order/inventory.
- Confirmed boundaries so EKOMS `cart_checkout`, `account`, and `analytics`
  modules attach to existing slots (`CartSummarySlot`, `CheckoutFlowSlot`,
  `HeadSlot`, `BodyEndSlot`) without breaking Server/Client boundaries.

**Dependencies**

- `app/content/site.ts` (metadata source), `app/extensions/config.ts` and
  `app/extensions/_prepare.ts` (integration contract), `template.extensions.yaml`.

---

## SERVICES AGENT

**Responsible For**

- The `app/extensions/` integration layer: `types.ts` (ExtensionName,
  ExtensionHook, SlotName), `registry.ts` (`registerSlot`, `registerExtension`,
  `registerExtensionModule`), `config.ts` (`extensionConfig` with inert
  defaults per hook), `slots.tsx` (`ExtensionSlot` + 15 named slot wrappers),
  `_prepare.ts` (the designated EKOMS mount point).
- Ensuring every slot placed in layout/pages renders `null` when no extension is
  registered (this template ships with zero extensions).
- Deriving config placeholders from `template/template.extensions.yaml`
  (content, design, analytics, cart_checkout, account, support) so each hook
  has a typed, empty-by-default configuration point.
- Owning the 15 named slot contracts and their wiring into
  layout/navbar/footer/pages (HeadSlot, BodyStartSlot, BrandLogoSlot,
  NavbarActionsSlot, HeroCampaignSlot, HomeServicesSlot, FooterDataSlot,
  CategoryFiltersSlot, ProductInfoSlot, CartSummarySlot, CheckoutFlowSlot,
  AccountNavSlot, OrderHistorySlot, ProfileEditSlot).
- Extending the extension layer when new hooks are added to
  `template/template.extensions.yaml`.

**Allowed Changes**

- `app/extensions/*` — new hook/slot names, config sections, registry
  functions, slot components, and the `_prepare.ts` mount contract.
- Re-export updates in `app/extensions/index.ts`.
- Adding a slot to a page/component **only when** a matching hook exists in
  `template/template.extensions.yaml` (e.g. `hero_campaign` →
  `HeroCampaignSlot` on the home page).
- Documentation comments in extension files describing EKOMS binding.

**Forbidden Changes**

- Implementing any extension behavior (analytics scripts, consent UI, cart
  provider, payment SDK, account API) — this is the "prepare, don't implement"
  rule.
- Populating non-default values into `extensionConfig` (EKOMS fills these per
  client build).
- Changing content object shapes or page copy (Database/UI agents).
- Registering renderers that execute without a corresponding hook in
  `template/template.extensions.yaml`.

**Expected Output**

- `app/extensions/` compiles and every slot renders `null` on all 25 routes.
- A registry + config + slot surface that exactly mirrors
  `template/template.extensions.yaml` (22 hooks, 6 extensions, 15 slots).
- Documented mount contract in `_prepare.ts` for future EKOMS modules.
- `npx next build` passes with the extension layer imported from
  `app/layout.tsx`.

**Dependencies**

- `template/template.extensions.yaml` (hook authority), `app/layout.tsx` and
  page/component files where slots are mounted (read-only except slot tags),
  `app/content/*` (read-only — config override targets).

---

## QA AGENT

**Responsible For**

- Executing and recording the verification gates: `node scripts/validate-content.mjs`
  (127 destinations resolve), `npx next build` (25 routes, TypeScript passes),
  and runtime route checks (`next start` + HTTP 200 on all routes).
- Owning `template/template.qa.checklist.yaml` and
  `template/template.sop.md` — keeping them aligned with the implemented
  architecture (actual routes, actual component names, actual token values).
- Verifying navigation integrity (all 15 core page routes reachable from the
  navbar; footer columns resolve), responsiveness at 5 breakpoints, WCAG AA
  contrast for tokens, focus rings, and image alt text.
- Verifying extension pre-readiness: all 15 slots present, no extension
  behavior executed, `_prepare.ts` inert.
- Reporting failures with exact file:line references and a re-test command.

**Allowed Changes**

- `template/template.qa.checklist.yaml` check records (`verified`,
  `passed`/`failed`, notes) reflecting actual results.
- `template/template.sop.md` procedure wording to match the implemented app
  (e.g. correcting `app/category/[slug]` → `app/shop/[category]`).
- Adding ad-hoc verification scripts under `scripts/` (e.g. route-sweep) that
  are read-only against `app/`.

**Forbidden Changes**

- Fixing bugs directly in `app/*` — report to the owning agent (UI/Database/
  Backend/Services) with a precise finding instead.
- Changing content, components, configs, or extension code to make a check pass.
- Relaxing a failing check to "accepted" without Orchestrator approval.
- Editing `template/*.yaml`/`*.json` schema or mapping structure.

**Expected Output**

- A completed `template/template.qa.checklist.yaml` with per-route and per-field
  results (15 core routes + 10 additional routes; required intake fields;
  mapping validity; token consistency; component inventory).
- A recorded evidence trail: build log status, validate script exit code,
  HTTP status per route, screenshot/breakpoint notes, contrast ratios.
- A final verdict (all checks passed / list of blockers routed to owners).

**Dependencies**

- All `app/` artifacts, `scripts/validate-content.mjs`,
  `template/template.qa.checklist.yaml`, `template/template.sop.md`,
  `template/design/design-tokens.yaml`.

---

## Agent Handoff Protocol

1. Each agent works only within its "Allowed Changes" boundary and never
   touches another agent's files.
2. On completion, the agent reports: what changed (file paths), verification
   performed, and the exact command the next agent should run to confirm.
3. Standard verification sequence before any handoff:
   `node scripts/validate-content.mjs` → `npx next build` → `npx next start`
   + HTTP 200 route sweep.
4. QA is the terminal agent. QA's verdict closes the phase; any failing check
   is routed back to the owning agent via Orchestrator.

## Version Consistency

- `template.manifest.yaml` version: `1.0.0`
- `template.intake.schema.yaml` schema_version: `1.0.0`
- `template.content.mapping.json` version: `1.0.0`
- `package.json` version: `0.1.0` (implementation reference)
- Do not bump versions across artifacts independently; Orchestrator owns
  version coordination.

## Document Revision

**Document Revision**: 1.0.0
**Last Updated**: During Phase 7 — Agent Instructions
**Applies To**: Template package `ELEC-PREIMIUM-ELECTRONICS-B5`, E2 – Premium
Electronics & Accessories, and its Next.js 16.3.1 implementation reference.