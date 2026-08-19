import { SectionTitle } from "@/components/typography";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { storeLocator } from "@/content/account";

/* 
  Store Locator Page — content-driven from StoreLocator.<Section>.<field> destinations.
*/
export default function StoreLocator() {
  const { Hero, Grid } = storeLocator;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>{Hero.title}</SectionTitle>
          {Hero.subtitle && (
            <p className="text-[#6E6E73] text-base mb-6">{Hero.subtitle}</p>
          )}
          <div className="prototype-state">
            <p>Prototype: Store search interface</p>
            <div className="h-64 bg-[#F5F5F7] rounded-md mb-4">
              <p className="text-center text-[#6E6E73] leading-none pt-24">
                Map would load here
              </p>
            </div>
            <input
              className="w-full px-4 py-2 border border-[#E5E5EA] rounded-md"
              type="text"
              placeholder="Enter city or zip code"
            />
            <p className="mt-2 text-sm text-[#6E6E73]">
              Search for nearby stores
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>Store Hours & Details</SectionTitle>
          <div className="grid grid-cols-2 gap-4">
            {Grid.stores.map((store) => (
              <div key={store.name}>
                <h4 className="font-medium">{store.name}</h4>
                <p className="text-sm text-[#6E6E73]">
                  {store.hours} | {store.address}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}