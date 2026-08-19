/**
 * Account, Wishlist, Order Tracking, Store Locator page content — data-driven
 * from template.content.mapping.json destinations (`Account.*`, `Wishlist.*`,
 * `OrderTracking.*`, `StoreLocator.*`).
 */
import { assetImage } from "./assets";
import type { ImageAsset } from "./assets";

export interface AccountContent {
  AccountNav: {
    title: string;
  };
  Orders: {
    title: string;
    subtitle?: string;
    items: { number: string; status: string; date: string }[];
  };
  Profile: {
    title: string;
    subtitle?: string;
  };
  Addresses: {
    title: string;
    subtitle?: string;
  };
}

export const account: AccountContent = {
  AccountNav: {
    title: "Account",
  },
  Orders: {
    title: "Orders",
    subtitle: "Your recent order history.",
    items: [
      { number: "1001", status: "Processing", date: "Aug 10, 2026" },
      { number: "1002", status: "Shipped", date: "Aug 2, 2026" },
    ],
  },
  Profile: {
    title: "Profile",
    subtitle: "Manage your personal information.",
  },
  Addresses: {
    title: "Addresses",
    subtitle: "Manage your saved shipping addresses.",
  },
};

export interface WishlistContent {
  Hero: {
    title: string;
    image?: ImageAsset;
  };
  Grid: {
    caption?: string;
    items: { title: string; image: ImageAsset; price: number; href: string }[];
  };
}

export const wishlist: WishlistContent = {
  Hero: {
    title: "Wishlist",
    image: assetImage(
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "Wishlist",
      1200
    ),
  },
  Grid: {
    caption: "Products you have saved for later.",
    items: [
      {
        title: "Pro Laptop",
        image: assetImage(
          "https://images.unsplash.com/photo-1606220838315-056192d5e927",
          "Pro Laptop wishlist",
          400
        ),
        price: 999,
        href: "/product/laptop",
      },
      {
        title: "Smart Phone",
        image: assetImage(
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
          "Smart Phone wishlist",
          400
        ),
        price: 799,
        href: "/product/smart-phone",
      },
    ],
  },
};

export interface OrderTrackingContent {
  Hero: {
    title: string;
    subtitle?: string;
  };
  OrderNumber: string;
  Email: string;
  History: { number: string; status: string }[];
}

export const orderTracking: OrderTrackingContent = {
  Hero: {
    title: "Order Tracking",
    subtitle: "Enter your order number or email to track your shipment.",
  },
  OrderNumber: "Order number",
  Email: "Email address",
  History: [
    { number: "1001", status: "Processing" },
    { number: "1002", status: "Shipped" },
  ],
};

export interface StoreLocatorContent {
  Hero: {
    title: string;
    subtitle?: string;
  };
  Grid: {
    caption?: string;
    no_results: string;
    stores: { name: string; address: string; hours: string }[];
  };
}

export const storeLocator: StoreLocatorContent = {
  Hero: {
    title: "Store Locator",
    subtitle: "Find a store near you.",
  },
  Grid: {
    caption: "Store locations and hours.",
    no_results: "No stores found. Check your search or try another location.",
    stores: [
      { name: "Downtown Store", address: "123 Main Street, City Center", hours: "10am - 9pm" },
      { name: "Mall Store", address: "456 Oak Avenue, Shopping District", hours: "10am - 9pm" },
    ],
  },
};