/**
 * FAQ, Reviews, Blog page content — data-driven from template.content.mapping.json
 * destinations (`FAQ.*`, `Reviews.*`, `Blog.*`).
 */
import { assetImage } from "./assets";
import type { ImageAsset } from "./assets";

export interface FaqContent {
  Hero: {
    title: string;
    image?: ImageAsset;
  };
  Grid: {
    caption?: string;
    items: { question: string; answer: string }[];
  };
}

export const faq: FaqContent = {
  Hero: {
    title: "FAQ",
    image: assetImage(
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "FAQ",
      1200
    ),
  },
  Grid: {
    caption: "Answers to common questions.",
    items: [
      {
        question: "What is the return policy?",
        answer:
          "You can return unused items within 30 days of purchase with a receipt.",
      },
      {
        question: "How do I track my order?",
        answer:
          "Enter your order number on the Order Tracking page.",
      },
      {
        question: "Do you offer price matching?",
        answer: "Price matching is available on identical in-stock items.",
      },
    ],
  },
};

export interface ReviewsContent {
  Hero: {
    title: string;
    image?: ImageAsset;
  };
  List: {
    caption?: string;
    items: { quote: string; rating: number; author: string; badge: string }[];
  };
}

export const reviews: ReviewsContent = {
  Hero: {
    title: "Reviews",
    image: assetImage(
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "Reviews",
      1200
    ),
  },
  List: {
    caption: "Verified customer reviews and ratings.",
    items: [
      {
        quote: "Excellent quality and fast shipping!",
        rating: 5,
        author: "John D.",
        badge: "Verified buyer",
      },
      {
        quote: "Great product, worth the price.",
        rating: 4,
        author: "Michael T.",
        badge: "Verified buyer",
      },
    ],
  },
};

export interface BlogContent {
  Hero: {
    title: string;
    image: ImageAsset;
  };
  ArticleList: {
    caption?: string;
    items: { title: string; published: string; image: ImageAsset; href: string }[];
  };
}

export const blog: BlogContent = {
  Hero: {
    title: "Blog",
    image: assetImage(
      "https://images.unsplash.com/photo-1469474960297-21232e7e201b",
      "Blog",
      1200
    ),
  },
  ArticleList: {
    caption: "Latest articles and insights.",
    items: [
      {
        title: "Latest Tech Trends 2024",
        published: "2 days ago",
        image: assetImage(
          "https://images.unsplash.com/photo-1469474960297-21232e7e201b",
          "Latest Tech Trends",
          400
        ),
        href: "/blog/latest-tech-trends",
      },
      {
        title: "Sustainable Tech",
        published: "5 days ago",
        image: assetImage(
          "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
          "Sustainable Tech",
          400
        ),
        href: "/blog/sustainable-tech",
      },
    ],
  },
};

export interface LegalContent {
  Header: {
    title: string;
    subtitle?: string;
  };
  Body: {
    content: string[];
  };
}

export const privacy: LegalContent = {
  Header: {
    title: "Privacy Policy",
    subtitle: "Effective date: January 1, 2024",
  },
  Body: {
    content: [
      "This privacy policy explains how we collect, use, and disclose your information when you visit our website.",
      "Information we collect. We collect information you provide directly, such as your name and email address.",
      "How we use your information. We use your information to process orders, provide support, and improve our services.",
      "Your choices. You may access, correct, or delete your personal information at any time.",
      "Data security. We take reasonable measures to protect your information from unauthorized access.",
      "Changes to this policy. We may update this policy from time to time and will post any changes here.",
    ],
  },
};

export const terms: LegalContent = {
  Header: {
    title: "Terms of Service",
    subtitle: "Effective date: January 1, 2024",
  },
  Body: {
    content: [
      "These terms govern your use of our website and any services we provide.",
      "Acceptance of terms. By using our site you agree to these terms.",
      "Account responsibilities. You are responsible for maintaining the confidentiality of your account.",
      "Order policies. All orders are subject to availability and our returns policy.",
      "Intellectual property. All content on this site is owned by E2 and may not be reproduced.",
      "Limitation of liability. E2 is not liable for indirect or consequential damages.",
    ],
  },
};

export const returns: LegalContent = {
  Header: {
    title: "Returns & Refunds",
    subtitle: "Effective date: January 1, 2024",
  },
  Body: {
    content: [
      "We want you to be completely satisfied with your purchase.",
      "30-day return window. Eligible items may be returned within 30 days of delivery.",
      "Condition of returned items. Items must be unused and in original packaging.",
      "Refund processing time. Refunds are processed within 5-7 business days of receipt.",
      "Exceptions. Final-sale and personalized items cannot be returned.",
    ],
  },
};

export const legal: LegalContent = {
  Header: {
    title: "Legal Information",
    subtitle: "Effective date: January 1, 2024",
  },
  Body: {
    content: [
      "Please review our Privacy Policy, Terms of Service, and Returns & Refunds pages for the policies that govern your use of our website and purchases.",
      "Privacy Policy explains how we collect, use, and disclose your information.",
      "Terms of Service govern your use of our website and any services we provide.",
      "Returns & Refunds describes our return window, conditions, and refund processing.",
      "For legal inquiries, contact our legal team at legal@e2.com.",
    ],
  },
};