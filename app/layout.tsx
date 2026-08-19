import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { site } from "@/content/site";
import { HeadSlot, BodyStartSlot, BodyEndSlot } from "@/extensions";
import "@/extensions/_prepare";

export const metadata: Metadata = {
  title: {
    default: `${site.name} – ${site.tagline}`,
    template: site.metadata.titleTemplate,
  },
  description: site.metadata.description,
  openGraph: {
    title: `${site.name} – ${site.tagline}`,
    description: site.metadata.description,
    images: [site.metadata.image.src],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        {/* Extension point: analytics / consent / font injection */}
        <HeadSlot />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#111111]">
        {/* Extension point: consent banner (CMP), announcement bar */}
        <BodyStartSlot />
        {children}
        <Footer />
        {/* Extension point: deferred scripts (chat, analytics) */}
        <BodyEndSlot />
      </body>
    </html>
  );
}