/**
 * Product + Comparison page content — data-driven from template.content.mapping.json
 * destinations (`Product.*`, `Comparison.*`).
 */
import { assetImage } from "./assets";
import type { ImageAsset } from "./assets";

export interface ProductContent {
  Gallery: {
    images: ImageAsset[];
    alt_text?: string;
  };
  Info: {
    title: string;
    price: number;
    compare_at_price?: number;
    sku?: string;
    description: string;
    variant_label?: string;
    variants: string[];
  };
  Features: {
    title: string;
    bullets: string[];
  };
  Related: {
    count: number;
    products: { title: string; image: ImageAsset; price: number; href: string }[];
  };
}

const productImages = [
  "https://images.unsplash.com/photo-1606220838315-056192d5e927",
  "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
  "https://images.unsplash.com/photo-1606220838315-056192d5e927",
];

export const product: ProductContent = {
  Gallery: {
    images: productImages.map((src, i) =>
      assetImage(src, `Pro Laptop product image ${i + 1}`, 800)
    ),
    alt_text: "Pro Laptop",
  },
  Info: {
    title: "Pro Laptop",
    price: 999,
    compare_at_price: 1199,
    sku: "E2-PRO-LAP-16",
    description:
      "High-performance laptop with the latest processor, 16GB RAM, and 512GB SSD. Ideal for professionals and creators.",
    variant_label: "Available Configurations",
    variants: ["16GB RAM / 512GB SSD", "32GB RAM / 1TB SSD"],
  },
  Features: {
    title: "Product Features",
    bullets: [
      "16-core high-performance processor",
      "16GB unified memory, 512GB SSD",
      "14-inch Liquid Retina display",
      "18-hour battery life",
      "Wi-Fi 6E and Bluetooth 5.3",
    ],
  },
  Related: {
    count: 4,
    products: [
      {
        title: "Smart Phone",
        image: assetImage(
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
          "Smart Phone",
          400
        ),
        price: 799,
        href: "/product/smart-phone",
      },
      {
        title: "Wireless Headphones",
        image: assetImage(
          "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
          "Wireless Headphones",
          400
        ),
        price: 199,
        href: "/product/headphones",
      },
      {
        title: "Smart Watch",
        image: assetImage(
          "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
          "Smart Watch",
          400
        ),
        price: 349,
        href: "/product/smart-watch",
      },
      {
        title: "Tablet",
        image: assetImage(
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
          "Tablet",
          400
        ),
        price: 499,
        href: "/product/tablet",
      },
    ],
  },
};

export interface ComparisonContent {
  ProductSelection: {
    names: string[];
    images: ImageAsset[];
  };
  ProductImages: {
    detail: ImageAsset[];
  };
  KeySpecs: {
    table: { spec: string; values: string[] }[];
  };
  Features: {
    checklist: string[];
  };
  PurchaseCta: {
    label: string;
  };
}

export const comparison: ComparisonContent = {
  ProductSelection: {
    names: ["Pro Laptop", "Smart Phone"],
    images: product.Info.variants.map((_, i) => product.Gallery.images[i]),
  },
  ProductImages: {
    detail: product.Gallery.images,
  },
  KeySpecs: {
    table: [
      { spec: "Processor", values: ["16-core", "A18 Pro"] },
      { spec: "Memory", values: ["16GB", "12GB"] },
      { spec: "Storage", values: ["512GB", "256GB"] },
      { spec: "Battery", values: ["18 hrs", "22 hrs"] },
    ],
  },
  Features: {
    checklist: [
      "Performance",
      "Connectivity",
      "Compatibility",
      "Customer Ratings",
    ],
  },
  PurchaseCta: {
    label: "Add to Cart",
  },
};