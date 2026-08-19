import { SectionTitle } from "@/components/typography";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { privacy } from "@/content/misc";

/* 
  Privacy Policy Page — content-driven from Legal destinations.
*/
export default function Privacy() {
  const { Header, Body } = privacy;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />
      <section className="py-24">
        <Container>
          <SectionTitle>{Header.title}</SectionTitle>
          {Header.subtitle && <p><strong>{Header.subtitle}</strong></p>}
          {Body.content.map((paragraph) => (
            <p key={paragraph} className="text-[#6E6E73] mt-4">
              {paragraph}
            </p>
          ))}
          <p className="text-[#6E6E73] mt-8">
            Contact us at privacy@e2.com for questions about this policy.
          </p>
        </Container>
      </section>
    </main>
  );
}