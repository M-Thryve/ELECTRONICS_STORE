/**
 * Site-wide content — brand identity, navigation, footer, and metadata.
 * Data-driven from sitemap.yaml `global_layout` and template.manifest.yaml.
 */
import { assetImage } from "./assets";
import type { ImageAsset } from "./assets";

export interface SiteIdentity {
  name: string;
  tagline: string;
  logoMark: string;
  /** Header nav items — matches sitemap.yaml core_pages */
  nav: { label: string; href: string; id: string }[];
  footer: {
    columns: { title: string; links: { label: string; href: string }[] }[];
    legal: { label: string; href: string }[];
    copyright: string;
  };
  metadata: {
    titleTemplate: string;
    description: string;
    image: ImageAsset;
  };
  support: {
    email: string;
    phone: string;
    hours: string;
  };
}

export const site: SiteIdentity = {
  name: "E2",
  tagline: "Premium Electronics & Accessories",
  logoMark: "E2",
  nav: [
    { label: "Home", href: "/", id: "home" },
    { label: "Shop", href: "/shop", id: "shop" },
    { label: "Electronics", href: "/shop/electronics", id: "category" },
    { label: "Products", href: "/product", id: "product" },
    { label: "Compare", href: "/compare", id: "comparison" },
    { label: "Collections", href: "/collections", id: "collections" },
    { label: "Deals", href: "/deals", id: "deals" },
    { label: "Accessories", href: "/accessories", id: "accessories" },
  ],
  footer: {
    columns: [
      {
        title: "Shop and Learn",
        links: [
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: "Collections", href: "/collections" },
          { label: "Accessories", href: "/accessories" },
          { label: "Deals", href: "/deals" },
        ],
      },
      {
        title: "Account",
        links: [
          { label: "Your Account", href: "/account" },
          { label: "Order Tracking", href: "/order-tracking" },
          { label: "Wishlist", href: "/wishlist" },
          { label: "Store Locator", href: "/store-locator" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Support", href: "/support" },
          { label: "FAQ", href: "/faq" },
          { label: "Returns & Refunds", href: "/returns" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/" },
          { label: "Careers", href: "/" },
          { label: "Newsroom", href: "/" },
          { label: "Investors", href: "/" },
        ],
      },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Sales and Refunds", href: "/returns" },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} E2 Inc. All rights reserved.`,
  },
  metadata: {
    titleTemplate: "%s | E2",
    description:
      "Premium electronics and accessories storefront template — Build It Factory",
    image: assetImage(
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
      "E2 — Premium Electronics & Accessories",
      1200
    ),
  },
  support: {
    email: "support@e2.com",
    phone: "1-800-E2-SUPPORT",
    hours: "Mon-Fri: 9am-6pm EST",
  },
};