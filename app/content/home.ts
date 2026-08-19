/**
 * Home page content — data-driven from template.content.mapping.json
 * destinations (`Home.<Section>.<field>`). Every field below maps to an
 * intake source via the content mapping.
 */
import { assetImage } from "./assets";
import type { ImageAsset } from "./assets";

export interface HeroContent {
  heading: string;
  subheading?: string;
  image: ImageAsset;
  cta_primary: string;
  cta_url: string;
  cta_secondary?: string;
  cta_secondary_url?: string;
}

export interface SectionTitleContent {
  title: string;
  subtitle?: string;
}

export interface EditorialBannerContent {
  title: string;
  image: ImageAsset;
  cta: string;
  cta_url: string;
}

export interface NewsletterContent {
  title: string;
  cta: string;
  placeholder?: string;
}

export interface FeaturedProduct {
  title: string;
  image: ImageAsset;
  price: number;
  compareAtPrice?: number;
  href: string;
}

export interface HomeContent {
  Hero: HeroContent;
  ShopByCategory: SectionTitleContent;
  EditorialBanner: EditorialBannerContent;
  FeaturedProducts: {
    highlight_title: string;
    highlight_cta: string;
    items: FeaturedProduct[];
  };
  ProductCategories: SectionTitleContent;
  NewArrivals: {
    title: string;
    cta: string;
    items: FeaturedProduct[];
  };
  LifestyleEditorial: {
    title: string;
    image: ImageAsset;
  };
  CustomerBenefits: {
    title: string;
    points: string[];
  };
  SupportSection: {
    title: string;
    points: string[];
  };
  Newsletter: NewsletterContent;
  FooterNav: {
    home: string;
    terms: string;
    privacy: string;
  };
}

export const home: HomeContent = {
  Hero: {
    heading: "Welcome to Premium Electronics",
    subheading: "Discover innovative technology and premium accessories",
    image: assetImage(
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
      "Premium Electronics hero",
      2000
    ),
    cta_primary: "Shop Phones",
    cta_url: "/shop",
    cta_secondary: "Shop Accessories",
    cta_secondary_url: "/accessories",
  },
  ShopByCategory: {
    title: "Shop by Category",
    subtitle: "Find exactly what you need by browsing our curated categories.",
  },
  EditorialBanner: {
    title: "The Future of Sound",
    image: assetImage(
      "https://images.unsplash.com/photo-1606220838315-056192d5e927",
      "Editorial banner",
      1200
    ),
    cta: "Explore Audio",
    cta_url: "/accessories",
  },
  FeaturedProducts: {
    highlight_title: "Featured Products",
    highlight_cta: "Shop All",
    items: [
      {
        title: "Pro Laptop",
        image: assetImage(
          "https://images.unsplash.com/photo-1606220838315-056192d5e927",
          "Pro Laptop",
          600
        ),
        price: 999,
        compareAtPrice: 1199,
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
        href: "/product/smart-phone",
      },
      {
        title: "Wireless Headphones",
        image: assetImage(
          "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
          "Wireless Headphones",
          600
        ),
        price: 199,
        compareAtPrice: 249,
        href: "/product/headphones",
      },
      {
        title: "Smart Watch",
        image: assetImage(
          "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
          "Smart Watch",
          600
        ),
        price: 349,
        href: "/product/smart-watch",
      },
    ],
  },
  ProductCategories: {
    title: "Browse by Category",
    subtitle: "Electronics, accessories, and more — all in one place.",
  },
  NewArrivals: {
    title: "New Arrivals",
    cta: "Shop New Arrivals",
    items: [
      {
        title: "Tablet",
        image: assetImage(
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
          "Tablet",
          600
        ),
        price: 499,
        href: "/product/tablet",
      },
      {
        title: "Camera",
        image: assetImage(
          "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
          "Camera",
          600
        ),
        price: 899,
        href: "/product/camera",
      },
      {
        title: "Speakers",
        image: assetImage(
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
          "Speakers",
          600
        ),
        price: 299,
        href: "/product/speakers",
      },
    ],
  },
  LifestyleEditorial: {
    title: "Elevate Every Moment",
    image: assetImage(
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "Lifestyle editorial",
      1200
    ),
  },
  CustomerBenefits: {
    title: "Customer Benefits",
    points: [
      "Premium support, extended warranties, and free shipping on orders over $99.",
      "Hassle-free 30-day returns on eligible items.",
      "Trade-in credit toward your next purchase.",
    ],
  },
  SupportSection: {
    title: "Support",
    points: [
      "Live chat and email support, Mon-Fri 9am-6pm EST.",
      "Comprehensive FAQ and order tracking resources.",
    ],
  },
  Newsletter: {
    title: "Stay in the Loop",
    cta: "Subscribe",
    placeholder: "Enter your email",
  },
  FooterNav: {
    home: "Home",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
  },
};