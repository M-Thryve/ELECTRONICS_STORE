/**
 * Extension integration types — mirror template.extensions.yaml.
 *
 * Phase 5: integration-point PREPARATION only. No extensions are implemented.
 * These types define the contract EKOMS extension modules will satisfy when
 * pulled in separately.
 */

/** All extension names defined in template.extensions.yaml */
export type ExtensionName =
  | "content"
  | "design"
  | "analytics"
  | "cart_checkout"
  | "account"
  | "support";

/** All hooks (integration points) defined in template.extensions.yaml */
export type ExtensionHook =
  // content
  | "brand_identity"
  | "category_data"
  | "product_data"
  | "hero_campaign"
  | "services_data"
  | "footer_data"
  // design
  | "color_palette"
  | "typography_scale"
  | "spacing_scale"
  | "motion_customization"
  // analytics
  | "ga_integration"
  | "consent_management"
  | "ekomis_analytics"
  // cart_checkout
  | "cart_prototype"
  | "checkout_prototype"
  | "inventory_sync"
  | "payment_integration"
  // account
  | "account_navigation"
  | "order_history"
  | "profile_management"
  | "addresses_sync";

/** Slot names rendered in the layout/pages — map 1:1 to a hook */
export type SlotName =
  | "head" // top of <head> — analytics/consent scripts
  | "body-start" // top of <body> — consent banner, CMP
  | "body-end" // end of <body> — deferred scripts
  | "brand-logo" // navbar logo area — brand_identity
  | "navbar-actions" // navbar right actions — account_navigation, cart
  | "hero-campaign" // home hero — hero_campaign
  | "home-services" // home support section — services_data
  | "footer-data" // footer — footer_data
  | "category-filters" // shop/category — category_data
  | "product-info" // product page — product_data
  | "cart-summary" // cart page — cart_prototype, inventory_sync
  | "checkout-flow" // checkout page — checkout_prototype, payment_integration
  | "account-nav" // account page — account_navigation
  | "order-history" // account page — order_history
  | "profile-edit" // account page — profile_management, addresses_sync;

/** Contract an EKOMS extension module must satisfy */
export interface ExtensionModule {
  name: ExtensionName;
  hooks: ExtensionHook[];
  /** Registry functions called at module load */
  register: () => void;
}

/** A registered slot renderer — RSC-safe; may render null */
export type SlotRenderer = (() => React.ReactNode) | null;