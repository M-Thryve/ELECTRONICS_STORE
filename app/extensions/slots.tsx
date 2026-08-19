/**
 * ExtensionSlot — render point for EKOMS extensions.
 *
 * Phase 5: PREPARATION ONLY. Renders the registered renderer for a given
 * slot/hook, or `null` when no extension is mounted (default for this
 * template). Pass `fallback` to render placeholder content until an
 * extension is registered.
 *
 * Usage:
 *   <ExtensionSlot slot="hero-campaign" />
 *   <ExtensionSlot hook="hero_campaign" fallback={<DefaultHero/>} />
 */
import { getSlotRenderer, getHookRenderer } from "./registry";
import type { ExtensionHook, SlotName } from "./types";

export interface ExtensionSlotProps {
  /** Named layout/page slot to render into */
  slot?: SlotName;
  /** Extension hook to render (alternative to `slot`) */
  hook?: ExtensionHook;
  /** Rendered when the slot has no registered extension */
  fallback?: React.ReactNode;
}

export function ExtensionSlot({ slot, hook, fallback }: ExtensionSlotProps) {
  const renderer = slot ? getSlotRenderer(slot) : hook ? getHookRenderer(hook) : null;
  const content = renderer ? renderer() : null;
  if (content === null) return fallback ?? null;
  return <>{content}</>;
}

/**
 * Convenience wrapper components for each named slot.
 * These are the explicit integration points referenced by layout/pages.
 */
export function HeadSlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="head" {...props} />;
}
export function BodyStartSlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="body-start" {...props} />;
}
export function BodyEndSlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="body-end" {...props} />;
}
export function BrandLogoSlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="brand-logo" {...props} />;
}
export function NavbarActionsSlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="navbar-actions" {...props} />;
}
export function HeroCampaignSlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="hero-campaign" {...props} />;
}
export function HomeServicesSlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="home-services" {...props} />;
}
export function FooterDataSlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="footer-data" {...props} />;
}
export function CategoryFiltersSlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="category-filters" {...props} />;
}
export function ProductInfoSlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="product-info" {...props} />;
}
export function CartSummarySlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="cart-summary" {...props} />;
}
export function CheckoutFlowSlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="checkout-flow" {...props} />;
}
export function AccountNavSlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="account-nav" {...props} />;
}
export function OrderHistorySlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="order-history" {...props} />;
}
export function ProfileEditSlot(props: Omit<ExtensionSlotProps, "slot">) {
  return <ExtensionSlot slot="profile-edit" {...props} />;
}