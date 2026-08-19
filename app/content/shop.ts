/**
 * Shop + Category page content — data-driven from template.content.mapping.json
 * destinations (`Shop.*`, `Category.*`).
 */
import { assetImage } from "./assets";
import type { ImageAsset } from "./assets";

export interface ProductGridItem {
  title: string;
  image: ImageAsset;
  price: number;
  compareAtPrice?: number;
  category: string;
  href: string;
}

export interface CatalogFilters {
  title: string;
  price_min?: number;
  price_max?: number;
  options: { label: string; value: string }[];
}

export interface ShopContent {
  PageHeader: {
    title: string;
    subtitle?: string;
  };
  CatalogFilters: CatalogFilters;
  ProductGrid: {
    caption?: string;
    products: ProductGridItem[];
  };
  Pagination: {
    label: string;
    pageSize: number;
  };
}

export const shop: ShopContent = {
  PageHeader: {
    title: "Shop Catalog",
    subtitle: "Browse our full catalog of premium electronics and accessories.",
  },
  CatalogFilters: {
    title: "Filter Products",
    price_min: 0,
    price_max: 2000,
    options: [
      { label: "All Categories", value: "all" },
      { label: "Phones", value: "phones" },
      { label: "Computers", value: "computers" },
      { label: "Audio", value: "audio" },
      { label: "Wearables", value: "wearables" },
    ],
  },
  ProductGrid: {
    caption: "Featured products",
    products: [
      {
        title: "Pro Laptop",
        image: assetImage(
          "https://images.unsplash.com/photo-1606220838315-056192d5e927",
          "Pro Laptop",
          600
        ),
        price: 999,
        compareAtPrice: 1199,
        category: "Computers",
        href: "/product/laptop",
      },
      {
        title: "Smart Phone",
        image: assetImage(
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
          "Smart Phone",
          600
        ),
        price: 799,
        category: "Phones",
        href: "/product/smart-phone",
      },
      {
        title: "Wireless Headphones",
        image: assetImage(
          "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
          "Wireless Headphones",
          600
        ),
        price: 199,
        compareAtPrice: 249,
        category: "Audio",
        href: "/product/headphones",
      },
      {
        title: "Smart Watch",
        image: assetImage(
          "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
          "Smart Watch",
          600
        ),
        price: 349,
        category: "Wearables",
        href: "/product/smart-watch",
      },
    ],
  },
  Pagination: {
    label: "Product catalog pagination",
    pageSize: 8,
  },
};

export interface CategoryContent {
  Hero: {
    title: string;
    description?: string;
    image?: ImageAsset;
  };
  CatalogFilters: CatalogFilters;
  ProductGrid: {
    caption?: string;
    products: ProductGridItem[];
  };
  Pagination: {
    label: string;
    pageSize: number;
  };
}

export const category: CategoryContent = {
  Hero: {
    title: "Electronics",
    description:
      "Explore the latest electronics, from phones and laptops to smart home devices.",
    image: assetImage(
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "Electronics category",
      1200
    ),
  },
  CatalogFilters: {
    title: "Filter",
    price_min: 0,
    price_max: 2000,
    options: [
      { label: "All", value: "all" },
      { label: "Phones", value: "phones" },
      { label: "Computers", value: "computers" },
    ],
  },
  ProductGrid: {
    caption: "Products in this category",
    products: shop.ProductGrid.products,
  },
  Pagination: {
    label: "Category pagination",
    pageSize: 8,
  },
};