import { SectionTitle } from "@/components/typography";
import { ProductGrid } from "@/components/gallery";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductTitle, ProductPrice, ProductDescription, ProductSKU, FeatureBullets } from "@/components/product-info";
import { product } from "@/content/product";
import { ProductInfoSlot } from "@/extensions";

/* 
  Product Detail Page — dynamic route /product/[id].
  Content-driven from Product.<Section>.<field> destinations.
*/
export default function ProductPage({ params }: { params: { id?: string } }) {
  const { id } = params;
  const { Gallery, Info, Features, Related } = product;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10">
            <ProductGrid
              images={Gallery.images.map((img) => img.src)}
              captions={Gallery.images.map((img) => img.alt)}
              desktopColumns={2}
            />
            <div>
              <ProductTitle title={Info.title} />
              <div className="mt-3">
                <ProductPrice price={Info.price} compareAtPrice={Info.compare_at_price} />
              </div>
              {Info.sku && (
                <div className="mt-2">
                  <ProductSKU sku={Info.sku} />
                </div>
              )}
              <div className="mt-4">
                <ProductDescription description={Info.description} />
              </div>
              {Info.variant_label && (
                <div className="mt-6">
                  <p className="text-[#6E6E73] text-base mb-2">{Info.variant_label}</p>
                  <ul className="space-y-2">
                    {Info.variants.map((variant) => (
                      <li key={variant} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-[#0071E3] mr-2" />
                        <span className="text-sm">{variant}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="mt-6 text-xs text-[#6E6E73]">
                Product ID: {id || "laptop"}
              </p>
              {/* Extension point: dynamic product data (stock, variants, pricing) */}
              <ProductInfoSlot />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>{Features.title}</SectionTitle>
          <FeatureBullets bullets={Features.bullets} />
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionTitle>Related Products</SectionTitle>
          <ProductGrid
            images={Related.products.map((item) => item.image.src)}
            captions={Related.products.map((item) => item.title)}
          />
        </Container>
      </section>
    </main>
  );
}