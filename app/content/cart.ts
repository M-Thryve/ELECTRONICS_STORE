/**
 * Cart + Checkout + Confirmation page content — data-driven from
 * template.content.mapping.json destinations (`Cart.*`, `Checkout.*`, `Confirmation.*`).
 */
import { assetImage } from "./assets";
import type { ImageAsset } from "./assets";

export interface CartContent {
  CartItems: {
    subtitle: string;
    summary_subtitle: string;
    items: { title: string; image: ImageAsset; price: number; quantity: number; href: string }[];
  };
  CartSummary: {
    subtotal: number;
    shipping: number;
    total: number;
  };
  CheckoutCta: {
    text: string;
  };
}

export const cart: CartContent = {
  CartItems: {
    subtitle: "Items in your cart",
    summary_subtitle: "Order Summary",
    items: [
      {
        title: "Pro Laptop",
        image: assetImage(
          "https://images.unsplash.com/photo-1606220838315-056192d5e927",
          "Pro Laptop in cart",
          200
        ),
        price: 999,
        quantity: 1,
        href: "/product/laptop",
      },
    ],
  },
  CartSummary: {
    subtotal: 999,
    shipping: 0,
    total: 999,
  },
  CheckoutCta: {
    text: "Proceed to Checkout",
  },
};

export interface CheckoutContent {
  CustomerInfo: {
    title: string;
    name_field_label: string;
    email_field_label: string;
  };
  Shipping: {
    title: string;
    address_lines: { label: string; type: string }[];
  };
  Payment: {
    title: string;
    method_label: string;
  };
  OrderReview: {
    title: string;
    subtitle: string;
  };
  Confirmation: {
    title: string;
    subtitle: string;
  };
}

export const checkout: CheckoutContent = {
  CustomerInfo: {
    title: "Customer Information",
    name_field_label: "Full name",
    email_field_label: "Email address",
  },
  Shipping: {
    title: "Shipping Address",
    address_lines: [
      { label: "Street address", type: "text" },
      { label: "Apartment, suite, etc.", type: "text" },
      { label: "City", type: "text" },
      { label: "State / Province", type: "text" },
      { label: "ZIP / Postal code", type: "text" },
    ],
  },
  Payment: {
    title: "Payment",
    method_label: "Pay with a card, PayPal, or Apple Pay",
  },
  OrderReview: {
    title: "Order Review",
    subtitle: "Please review your order before placing it.",
  },
  Confirmation: {
    title: "Order Confirmation",
    subtitle: "Thank you for your order!",
  },
};

export interface ConfirmationContent {
  Confirmation: {
    title: string;
    subtitle: string;
  };
  OrderNumber: string;
  ContinueShopping: {
    cta: string;
  };
}

export const confirmation: ConfirmationContent = {
  Confirmation: {
    title: "Order Confirmation",
    subtitle: "Thank you for your order!",
  },
  OrderNumber: "1001",
  ContinueShopping: {
    cta: "Continue Shopping",
  },
};