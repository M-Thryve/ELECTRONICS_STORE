import Link from "next/link";
import { SectionTitle } from "@/components/typography";
import { Container } from "@/components/container";
import { notFound } from "@/content/support";

/* 
  Not Found Page — content-driven from NotFound destinations.
  Graceful recovery from broken links.
*/
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Container>
        <SectionTitle>404</SectionTitle>
        <p className="text-6xl font-bold text-[#111111] mb-4">404</p>
        <p className="text-[#6E6E73] text-base mb-8">
          {notFound.Message}
        </p>
        <Link href="/" className="inline-block bg-[#0071E3] text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors">
          {notFound.NavigationCta.text}
        </Link>
      </Container>
    </main>
  );
}