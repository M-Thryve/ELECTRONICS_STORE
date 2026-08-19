import Link from "next/link";
import { SectionTitle } from "@/components/typography";
import { ProductGrid } from "@/components/gallery";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { category } from "@/content/shop";
import { CategoryFiltersSlot } from "@/extensions";

/* 
  Category Page — dynamic route /shop/[category].
  Content-driven from Category.<Section>.<field> destinations.
*/
export default function CategoryPage({ params }: { params: { category?: string } }) {
  const { category: slug } = params;
  const { Hero, ProductGrid: grid, Pagination } = category;

  const title = slug
    ? `${Hero.title}: ${slug.replace(/-/g, " ").toUpperCase()}`
    : Hero.title;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>{title}</SectionTitle>
          {Hero.description && (
            <p className="text-[#6E6E73] text-base mb-8">{Hero.description}</p>
          )}
          {/* Extension point: dynamic category data (category_data) */}
          <CategoryFiltersSlot />
          <ProductGrid
            images={grid.products.map((item) => item.image.src)}
            captions={grid.products.map((item) => item.title)}
          />
          <p className="mt-6 text-[#6E6E73] text-sm" role="navigation" aria-label={Pagination.label}>
            Filter: {slug || "All Products"}
            <span className="font-medium ml-2">•</span>
            <Link href="/shop" className="text-[#0071E3] hover:underline">
              Refine filters
            </Link>
          </p>
        </Container>
      </section>
    </main>
  );
}