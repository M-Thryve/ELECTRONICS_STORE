import Link from "next/link";
import { SectionTitle } from "@/components/typography";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { support } from "@/content/support";

/* 
  Support Page — content-driven from Support.<Section>.<field> destinations.
*/
export default function Support() {
  const { Hero, ContactMethods, Articles, ServiceOverview, ServiceList } = support;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>{Hero.title}</SectionTitle>
          <p className="text-[#6E6E73] text-base mb-6">
            Get help with your order, returns, or product questions.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div>
              <h4 className="font-medium">Contact Us</h4>
              <p className="text-sm text-[#6E6E73] mt-2">{ContactMethods.email}</p>
              <p className="text-sm text-[#6E6E73] mt-1">{ContactMethods.phone}</p>
              <p className="text-sm text-[#6E6E73] mt-1">{ContactMethods.callback}</p>
            </div>
            <div>
              <h4 className="font-medium">{Articles.title}</h4>
              <p className="text-sm text-[#6E6E73] mt-2">
                <Link href={Articles.faq_link} className="text-[#0071E3] hover:underline">
                  FAQ
                </Link>
              </p>
              <p className="text-sm text-[#6E6E73] mt-1">
                <Link href="/returns" className="text-[#0071E3] hover:underline">
                  Returns & Refunds
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>{ServiceOverview.title}</SectionTitle>
          <p className="text-center text-[#6E6E73] text-base mb-6">
            We offer repairs, replacements, and product advice.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            {["Repairs", "Replacements", "Product Advice"].map((service) => (
              <div key={service} className="bg-white rounded-xl py-6 font-medium">
                {service}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}