import Link from "next/link";
import { SectionTitle } from "@/components/typography";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { deals } from "@/content/collections";

/* 
  Deals Page — content-driven from Deals.<Section>.<field> destinations.
*/
export default function Deals() {
  const { Hero, Grid, PromotionBanner } = deals;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>{Hero.title}</SectionTitle>
          {Grid.caption && (
            <p className="text-[#6E6E73] text-base mb-6">{Grid.caption}</p>
          )}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {Grid.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group cursor-pointer bg-[#F5F5F7] rounded-xl p-4 hover:transform hover:scale-[1.02] transition-transform"
              >
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="w-full h-40 object-cover rounded-md mb-3 group-hover:opacity-80 transition-opacity"
                />
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-xs text-[#FF6B35]">{item.discount}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>Promotion</SectionTitle>
          <p className="text-center text-[#6E6E73] text-base mb-6">
            {PromotionBanner.title}
          </p>
          <div className="text-center">
            <Link href="/shop">
              <Button variant="primary">Shop Deals</Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}