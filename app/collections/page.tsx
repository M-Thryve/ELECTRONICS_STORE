import Link from "next/link";
import { SectionTitle } from "@/components/typography";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { collections } from "@/content/collections";

/* 
  Collections Page — content-driven from Collections.<Section>.<field> destinations.
*/
export default function Collections() {
  const { Hero, Grid, FeaturedCollection } = collections;

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
                className="group cursor-pointer bg-[#F5F5F7] rounded-xl p-6 hover:transform hover:translate-y-2 hover:transition-transform duration-300"
              >
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="w-full h-40 object-cover rounded-md mb-3 group-hover:opacity-80 transition-opacity"
                />
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-xs text-[#6E6E73]">{item.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>{FeaturedCollection.title}</SectionTitle>
          <p className="text-[#6E6E73] text-base mb-6">
            Explore editorially curated collections.
          </p>
          {FeaturedCollection.image && (
            <img
              src={FeaturedCollection.image.src}
              alt={FeaturedCollection.image.alt}
              className="rounded-2xl w-full max-h-72 object-cover"
            />
          )}
        </Container>
      </section>
    </main>
  );
}