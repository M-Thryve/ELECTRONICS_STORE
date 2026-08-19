/**
 * Asset handling — resolves remote image URLs with sizing params and
 * provides consistent alt text fallbacks.
 *
 * Data-driven from intake schema `type: url` fields. All remote hosts
 * referenced here must appear in next.config.ts `images.remotePatterns`.
 */
export const ASSET_HOSTS = {
  unsplash: "images.unsplash.com",
} as const;

export interface ImageAsset {
  /** Resolved image URL */
  src: string;
  /** Alt text (derived from content, falls back to `alt` or "Product image") */
  alt: string;
  /** Optional explicit width param (remote sizing) */
  width?: number;
  /** Optional explicit quality param */
  quality?: number;
}

const UNSPLASH_SIZING = "auto=format&fit=crop&q=80";

/**
 * Builds a sized Unsplash image URL.
 * When no width is given the raw URL is returned untouched so the
 * consumer can pass it through Next.js Image with its own sizing.
 */
export function unsplash(src: string, width?: number): string {
  if (!src.includes(ASSET_HOSTS.unsplash)) return src;
  if (width) {
    return `${src}${src.includes("?") ? "&" : "?"}w=${width}&${UNSPLASH_SIZING}`;
  }
  return src;
}

/**
 * Resolves a content image reference into a renderable ImageAsset.
 * `src` may be a bare Unsplash path or a full URL.
 */
export function assetImage(src: string, alt = "", width?: number): ImageAsset {
  const resolved = src.includes("://") ? src : `https://${ASSET_HOSTS.unsplash}/${src}`;
  return {
    src: unsplash(resolved, width),
    alt: alt.trim() || "Product image",
    ...(width ? { width } : {}),
  };
}

/**
 * Picks the first element of an array field, matching the mapping's
 * `mainImage: "${intake.product_gallery_images[0]}"` pattern.
 */
export function firstItem<T>(items: T[] | undefined, fallback: T): T {
  return Array.isArray(items) && items.length > 0 ? items[0] : fallback;
}

/**
 * Formats a numeric price as a USD string, matching the mapping's
 * `currency: "USD"` convention.
 */
export function formatPrice(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Resolves a CTA reference (text + optional url) into a clickable link.
 */
export function ctaHref(url: string | undefined, fallback = "/"): string {
  return url && url.trim() !== "" ? url : fallback;
}