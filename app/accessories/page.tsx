import Link from "next/link";
import { SectionTitle } from "@/components/typography";
import { ProductGrid } from "@/components/gallery";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { accessories } from "@/content/collections";

/* 
  Accessories Page — content-driven from Accessories.<Section>.<field> destinations.
*/
export default function Accessories() {
  const { Hero, Grid, CompatibilityNotes } = accessories;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>{Hero.title}</SectionTitle>
          {Grid.caption && (
            <p className="text-[#6E6E73] text-base mb-6">{Grid.caption}</p>
          )}
          <ProductGrid
            images={Grid.items.map((item) => item.image.src)}
            captions={Grid.items.map((item) => item.title)}
          />
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>Compatibility</SectionTitle>
          <p className="text-center text-[#6E6E73] text-base mb-6">
            {CompatibilityNotes.text}
          </p>
          <div className="text-center">
            <Link href="/shop">
              <Button variant="primary">View All Accessories</Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}