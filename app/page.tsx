import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/gallery";
import { SectionTitle } from "@/components/typography";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { home } from "@/content/home";
import { HeroCampaignSlot, HomeServicesSlot } from "@/extensions";

/* 
  Home Page — content-driven from home content object.
  All copy and assets resolve from Home.<Section>.<field> destinations.
*/
export default function Home() {
  const { Hero: hero, FeaturedProducts, CustomerBenefits, SupportSection, Newsletter, NewArrivals } = home;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="pt-16">
        <Container>
          <Hero
            title={hero.heading}
            subtitle={hero.subheading}
            image={hero.image.src}
            ctaPrimary={hero.cta_primary}
            ctaPrimaryUrl={hero.cta_url}
            ctaSecondary={hero.cta_secondary}
            ctaSecondaryUrl={hero.cta_secondary_url}
          />
          {/* Extension point: hero campaign banner (hero_campaign) */}
          <HeroCampaignSlot />
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionTitle>{FeaturedProducts.highlight_title}</SectionTitle>
          <ProductGrid
            images={FeaturedProducts.items.map((item) => item.image.src)}
            captions={FeaturedProducts.items.map((item) => item.title)}
          />
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>{CustomerBenefits.title}</SectionTitle>
          <div className="max-w-2xl mx-auto space-y-4">
            {CustomerBenefits.points.map((point) => (
              <p key={point} className="text-[#6E6E73] text-lg md:text-base">
                {point}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionTitle>{NewArrivals.title}</SectionTitle>
          <ProductGrid
            images={NewArrivals.items.map((item) => item.image.src)}
            captions={NewArrivals.items.map((item) => item.title)}
            desktopColumns={3}
          />
          <div className="text-center mt-8">
            <Link href="/shop" className="text-[#0071E3] hover:underline">
              {NewArrivals.cta}
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>{SupportSection.title}</SectionTitle>
          {/* Extension point: dynamic service data (services_data) */}
          <HomeServicesSlot />
          <div className="max-w-2xl mx-auto space-y-4">
            {SupportSection.points.map((point) => (
              <p key={point} className="text-[#6E6E73] text-lg md:text-base">
                {point}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionTitle>{Newsletter.title}</SectionTitle>
          <div className="max-w-md mx-auto text-center">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={Newsletter.placeholder}
                className="flex-1 px-4 py-2 border border-[#E5E5EA] rounded-md focus:outline-none focus:border-[#0071E3]"
                aria-label={Newsletter.placeholder}
              />
              <button type="submit" className="bg-[#0071E3] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors">
                {Newsletter.cta}
              </button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}