import { SectionTitle } from "@/components/typography";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { reviews } from "@/content/misc";

/* 
  Reviews Page — content-driven from Reviews.<Section>.<field> destinations.
*/
export default function Reviews() {
  const { Hero, List } = reviews;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>{Hero.title}</SectionTitle>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {List.items.map((item) => (
              <div key={item.author} className="bg-[#F5F5F7] rounded-xl p-4">
                <p className="font-medium">&quot;{item.quote}&quot;</p>
                <div className="mt-2">
                  <span className="text-[#FF6B35]">
                    {"★".repeat(item.rating)}
                    {"☆".repeat(Math.max(0, 5 - item.rating))}
                  </span>
                  <span className="text-sm text-[#6E6E73] ml-2">{item.badge}</span>
                </div>
                <p className="text-xs text-[#6E6E73] mt-1">{item.author}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>Write a Review</SectionTitle>
          <p className="text-center text-[#6E6E73] text-base mb-6">
            Help other customers make informed decisions.
          </p>
        </Container>
      </section>
    </main>
  );
}