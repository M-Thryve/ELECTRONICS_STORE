import { SectionTitle } from "@/components/typography";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { faq } from "@/content/misc";

/* 
  FAQ Page — content-driven from FAQ.<Section>.<field> destinations.
*/
export default function Faq() {
  const { Hero, Grid } = faq;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>{Hero.title}</SectionTitle>
          <div className="space-y-4">
            {Grid.items.map((item) => (
              <details key={item.question} className="group">
                <summary className="cursor-pointer font-medium text-[#111111] hover:text-[#0071E3]">
                  {item.question}
                </summary>
                <p className="text-[#6E6E73] text-sm mt-2">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>Contact</SectionTitle>
          <p className="text-center text-[#6E6E73] text-base mb-6">
            support@e2.com | Mon-Fri: 9am-6pm EST
          </p>
        </Container>
      </section>
    </main>
  );
}