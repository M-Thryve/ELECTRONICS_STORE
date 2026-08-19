/**
 * Extension configuration points — derived from template.extensions.yaml.
 *
 * Phase 5: PREPARATION ONLY. Each extension exposes typed config placeholders
 * that EKOMS / Factory Console will populate per client build. Defaults are
 * empty/inert so the template builds and runs with no extensions attached.
 *
 * To prepare a client build, populate these values (or import an EKOMS-provided
 * config module) and call the matching `registerExtension` in `_prepare.tsx`.
 */

/** content — intake-driven content injection hooks */
export interface ContentExtensionConfig {
  brand_identity: {
    /** Inject brand logo, brand name, color-palette overrides at token level */
    logoUrl?: string;
    brandName?: string;
    colorOverrides?: Record<string, string>;
  };
  category_data: {
    /** Dynamic category data beyond base schema (parents/children, descriptions) */
    enabled: boolean;
    overrides?: Record<string, unknown>;
  };
  product_data: {
    /** Dynamic product data beyond base schema (stock, variants, pricing rules) */
    enabled: boolean;
    overrides?: Record<string, unknown>;
  };
  hero_campaign: {
    /** Hero section campaign data (banner text, CTA variations, dates) */
    enabled: boolean;
    campaign?: { text?: string; cta?: string; ctaUrl?: string; start?: string; end?: string };
  };
  services_data: {
    /** Dynamic service data (offerings, hours, contact methods) */
    enabled: boolean;
    overrides?: Record<string, unknown>;
  };
  footer_data: {
    /** Dynamic footer data (newsletter email, social links, legal refs) */
    newsletterEmail?: string;
    socialLinks?: { label: string; href: string }[];
    legalRefs?: { label: string; href: string }[];
  };
}

/** design — design-token-driven theming hooks */
export interface DesignExtensionConfig {
  color_palette: {
    /** Override default palette while preserving 10-color role structure */
    enabled: boolean;
    overrides?: Record<string, string>;
  };
  typography_scale: {
    /** Replace default font stack / typographic scales */
    enabled: boolean;
    fontFamily?: { sans?: string; serif?: string };
    scales?: Record<string, string>;
  };
  spacing_scale: {
    /** Adjust spacing scale (8-point vs 4-point) + client values */
    enabled: boolean;
    baseUnit?: number;
    overrides?: Record<string, string>;
  };
  motion_customization: {
    /** Motion tokens (durations, easing, hover states) per client */
    enabled: boolean;
    durations?: Record<string, string>;
    easings?: Record<string, string>;
    hoverStates?: Record<string, string>;
  };
}

/** analytics — page-view + event tracking injection */
export interface AnalyticsExtensionConfig {
  ga_integration: {
    /** Google Analytics 4 config (measurement ID, enhanced measurement, consent mode) */
    measurementId?: string;
    enhancedMeasurement?: boolean;
    consentMode?: boolean;
  };
  consent_management: {
    /** Consent management platform (CMP) config + opt-in/out controls */
    cmpId?: string;
    bannerEnabled?: boolean;
  };
  ekomis_analytics: {
    /** EKOMS event tracking (product views, cart adds, checkout steps, purchase) */
    enabled: boolean;
    events?: Record<string, boolean>;
  };
}

/** cart_checkout — cart & checkout flow adapters */
export interface CartCheckoutExtensionConfig {
  cart_prototype: {
    /** Client-side cart state adapter (localStorage, no backend) */
    storageKey?: string;
    enabled: boolean;
  };
  checkout_prototype: {
    /** Client-side checkout flow adapter (no live payment processing) */
    enabled: boolean;
  };
  inventory_sync: {
    /** Hook for inventory sync between storefront and back-end (deferred) */
    endpoint?: string;
    enabled: boolean;
  };
  payment_integration: {
    /** Placeholder for payment provider integration (Stripe, PayPal) */
    provider?: string;
    endpoint?: string;
    enabled: boolean;
  };
}

/** account — authenticated account area hooks (front-end state only) */
export interface AccountExtensionConfig {
  account_navigation: { enabled: boolean };
  order_history: { storageKey?: string; enabled: boolean };
  profile_management: { storageKey?: string; enabled: boolean };
  addresses_sync: { endpoint?: string; enabled: boolean };
}

/** support — deferred to Phase 7+ prompts */
export interface SupportExtensionConfig {
  note: string;
  hooks: unknown[];
}

export interface ExtensionConfig {
  content: ContentExtensionConfig;
  design: DesignExtensionConfig;
  analytics: AnalyticsExtensionConfig;
  cart_checkout: CartCheckoutExtensionConfig;
  account: AccountExtensionConfig;
  support: SupportExtensionConfig;
}

/** Default (inert) configuration — every extension disabled/empty. */
export const extensionConfig: ExtensionConfig = {
  content: {
    brand_identity: {},
    category_data: { enabled: false },
    product_data: { enabled: false },
    hero_campaign: { enabled: false },
    services_data: { enabled: false },
    footer_data: {},
  },
  design: {
    color_palette: { enabled: false },
    typography_scale: { enabled: false },
    spacing_scale: { enabled: false },
    motion_customization: { enabled: false },
  },
  analytics: {
    ga_integration: {},
    consent_management: {},
    ekomis_analytics: { enabled: false },
  },
  cart_checkout: {
    cart_prototype: { enabled: false, storageKey: "e2.cart" },
    checkout_prototype: { enabled: false },
    inventory_sync: { enabled: false },
    payment_integration: { enabled: false },
  },
  account: {
    account_navigation: { enabled: false },
    order_history: { enabled: false, storageKey: "e2.orders" },
    profile_management: { enabled: false, storageKey: "e2.profile" },
    addresses_sync: { enabled: false },
  },
  support: {
    note: "Support extension points defined in Phase 7+ prompts.",
    hooks: [],
  },
};