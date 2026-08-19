import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Austin: 16.3.1 App Router config
  reactStrictMode: true,
  // Image domains for product imagery (Unsplash-style remote images)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Compiler options for React 19 / TypeScript 5
  compiler: {
    // React 19 strict mode effects are opt-in; no version override needed
  },
  // Prefetching behavior
  compress: true,
};

export default nextConfig;