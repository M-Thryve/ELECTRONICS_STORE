/**
 * Collections, Deals, Accessories page content — data-driven from
 * template.content.mapping.json destinations (`Collections.*`, `Deals.*`, `Accessories.*`).
 */
import { assetImage } from "./assets";
import type { ImageAsset } from "./assets";

export interface CollectionsContent {
  Hero: {
    title: string;
    image: ImageAsset;
  };
  Grid: {
    caption?: string;
    items: { title: string; description: string; image: ImageAsset; href: string }[];
  };
  FeaturedCollection: {
    title: string;
    image?: ImageAsset;
  };
}

export const collections: CollectionsContent = {
  Hero: {
    title: "Curated Collections",
    image: assetImage(
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "Curated collections",
      1200
    ),
  },
  Grid: {
    caption: "Discover collections by theme, style, or use case.",
    items: [
      {
        title: "Home Office",
        description: "Modern setup for working from home",
        image: assetImage(
          "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
          "Home Office collection",
          400
        ),
        href: "/shop/office",
      },
      {
        title: "Gaming",
        description: "High-performance gaming setup",
        image: assetImage(
          "https://images.unsplash.com/photo-1606220838315-056192d5e927",
          "Gaming collection",
          400
        ),
        href: "/shop/gaming",
      },
      {
        title: "Creator Studio",
        description: "Tools for creators and streamers",
        image: assetImage(
          "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
          "Creator Studio collection",
          400
        ),
        href: "/shop/creator",
      },
    ],
  },
  FeaturedCollection: {
    title: "Featured: Smart Home",
    image: assetImage(
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
      "Featured smart home collection",
      1200
    ),
  },
};

export interface DealsContent {
  Hero: {
    title: string;
    image?: ImageAsset;
  };
  Grid: {
    caption?: string;
    items: { title: string; discount: string; image: ImageAsset; price: number; compareAtPrice?: number; href: string }[];
  };
  PromotionBanner: {
    title: string;
  };
}

export const deals: DealsContent = {
  Hero: {
    title: "Special Deals",
    image: assetImage(
      "https://images.unsplash.com/photo-1606220838315-056192d5e927",
      "Special deals",
      1200
    ),
  },
  Grid: {
    caption: "Time-limited offers on selected products.",
    items: [
      {
        title: "Wireless Headphones",
        discount: "25% off",
        image: assetImage(
          "https://images.unsplash.com/photo-1606220838315-056192d5e927",
          "Wireless Headphones deal",
          400
        ),
        price: 149,
        compareAtPrice: 199,
        href: "/product/headphones",
      },
      {
        title: "Smart Watch",
        discount: "15% off",
        image: assetImage(
          "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
          "Smart Watch deal",
          400
        ),
        price: 297,
        compareAtPrice: 349,
        href: "/product/smart-watch",
      },
    ],
  },
  PromotionBanner: {
    title: "Free shipping on all orders over $99 this weekend only!",
  },
};

export interface AccessoriesContent {
  Hero: {
    title: string;
    image?: ImageAsset;
  };
  Grid: {
    caption?: string;
    items: { title: string; image: ImageAsset; price: number; href: string }[];
  };
  CompatibilityNotes: {
    text: string;
  };
}

export const accessories: AccessoriesContent = {
  Hero: {
    title: "Accessories",
    image: assetImage(
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
      "Accessories",
      1200
    ),
  },
  Grid: {
    caption: "Complete your setup with premium accessories.",
    items: [
      {
        title: "USB-C Charger",
        image: assetImage(
          "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6",
          "USB-C Charger",
          400
        ),
        price: 39,
        href: "/product/usb-c-charger",
      },
      {
        title: "Protective Case",
        image: assetImage(
          "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6",
          "Protective Case",
          400
        ),
        price: 29,
        href: "/product/protective-case",
      },
      {
        title: "Wireless Mouse",
        image: assetImage(
          "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6",
          "Wireless Mouse",
          400
        ),
        price: 49,
        href: "/product/wireless-mouse",
      },
    ],
  },
  CompatibilityNotes: {
    text: "All accessories compatible with Pro Laptop and Smart Phone product lines.",
  },
};