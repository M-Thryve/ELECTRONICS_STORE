import Link from "next/link";
import { SectionTitle } from "@/components/typography";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { wishlist } from "@/content/account";
import { formatPrice } from "@/content/assets";

/* 
  Wishlist Page — content-driven from Wishlist.<Section>.<field> destinations.
*/
export default function Wishlist() {
  const { Hero, Grid } = wishlist;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>{Hero.title}</SectionTitle>
          {Grid.caption && (
            <p className="text-[#6E6E73] text-base mb-6">{Grid.caption}</p>
          )}
          {Grid.items.length === 0 ? (
            <div>
              <p className="text-[#6E6E73] text-base mb-6">
                Your wishlist is currently empty.
              </p>
              <Link href="/shop" className="text-[#0071E3] hover:underline">
                Add products from the shop
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {Grid.items.map((item) => (
                <Link key={item.title} href={item.href} className="group bg-[#F5F5F7] rounded-xl p-4 hover:transform hover:translate-y-1 hover:transition-transform duration-300">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="w-full h-40 object-cover rounded-md mb-3 group-hover:opacity-80 transition-opacity"
                  />
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-[#6E6E73]">{formatPrice(item.price)}</p>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}