/**
 * Search + Support + Contact page content — data-driven from
 * template.content.mapping.json destinations (`Search.*`, `Support.*`, `Contact.*`).
 */
import { assetImage } from "./assets";
import type { ImageAsset } from "./assets";

export interface SearchContent {
  SearchBar: {
    placeholder: string;
    button_text?: string;
  };
  Results: {
    no_matches_message: string;
    items: { title: string; href: string }[];
  };
  NoResults: {
    message: string;
  };
}

export const search: SearchContent = {
  SearchBar: {
    placeholder: "Search for products, brands, categories...",
    button_text: "Search",
  },
  Results: {
    no_matches_message: "No products matched your search.",
    items: [
      { title: "Pro Laptop", href: "/product/laptop" },
      { title: "Smart Phone", href: "/product/smart-phone" },
    ],
  },
  NoResults: {
    message:
      "No products matched your search. Try different keywords or browse by category.",
  },
};

export interface SupportContent {
  Hero: {
    title: string;
    image?: ImageAsset;
  };
  ContactMethods: {
    email: string;
    phone: string;
    callback: string;
  };
  Articles: {
    title: string;
    faq_link: string;
  };
  ServiceOverview: {
    title: string;
  };
  ServiceList: {
    title: string;
  };
}

export const support: SupportContent = {
  Hero: {
    title: "Support",
    image: assetImage(
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "Support",
      1200
    ),
  },
  ContactMethods: {
    email: "support@e2.com",
    phone: "1-800-E2-SUPPORT",
    callback: "Request a callback",
  },
  Articles: {
    title: "Help Center",
    faq_link: "/faq",
  },
  ServiceOverview: {
    title: "Service Offerings",
  },
  ServiceList: {
    title: "Services",
  },
};

export interface ContactContent {
  Hero: {
    title: string;
    image?: ImageAsset;
  };
  Form: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  StoreLocator: {
    search_query: string;
    map_zoom?: number;
  };
  SocialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

export const contact: ContactContent = {
  Hero: {
    title: "Contact Us",
    image: assetImage(
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "Contact",
      1200
    ),
  },
  Form: {
    name: "Full name",
    email: "Email address",
    subject: "Subject",
    message: "Your message",
  },
  StoreLocator: {
    search_query: "Enter city or zip code",
    map_zoom: 12,
  },
  SocialLinks: {
    facebook: "https://facebook.com/e2",
    twitter: "https://twitter.com/e2",
    instagram: "https://instagram.com/e2",
  },
};

export interface NotFoundContent {
  Message: string;
  NavigationCta: {
    text: string;
  };
}

export const notFound: NotFoundContent = {
  Message: "This page could not be found.",
  NavigationCta: {
    text: "Go Home",
  },
};