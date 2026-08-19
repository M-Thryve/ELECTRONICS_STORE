import Link from "next/link";
import { SectionTitle } from "@/components/typography";
import { ProductGrid } from "@/components/gallery";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { shop } from "@/content/shop";
import { CategoryFiltersSlot } from "@/extensions";

/* 
  Shop Page — content-driven from Shop.<Section>.<field> destinations.
  Catalog browse with filtering and pagination.
*/
export default function ShopPage() {
  const { PageHeader, CatalogFilters, ProductGrid: grid, Pagination } = shop;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>{PageHeader.title}</SectionTitle>
          {PageHeader.subtitle && (
            <p className="text-[#6E6E73] text-base mb-8">{PageHeader.subtitle}</p>
          )}
          {/* Extension point: dynamic category data (category_data) */}
          <CategoryFiltersSlot />
          <ProductGrid
            images={grid.products.map((item) => item.image.src)}
            captions={grid.products.map((item) => item.title)}
          />
          <div className="mt-12" role="navigation" aria-label={Pagination.label}>
            <p className="text-[#6E6E73] text-sm">
              Showing 1-{grid.products.length} of {grid.products.length} products
              <span className="font-medium ml-2">•</span>
              <Link href="/shop" className="text-[#0071E3] hover:underline">
                Load more
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}