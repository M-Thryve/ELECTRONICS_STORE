import Link from "next/link";
import { SectionTitle } from "@/components/typography";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blog } from "@/content/misc";

/* 
  Blog Page — content-driven from Blog.<Section>.<field> destinations.
*/
export default function Blog() {
  const { Hero, ArticleList } = blog;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>{Hero.title}</SectionTitle>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {ArticleList.items.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group cursor-pointer bg-[#F5F5F7] rounded-xl p-4 hover:transform hover:translate-y-2 hover:transition-transform duration-300"
              >
                <img
                  src={article.image.src}
                  alt={article.image.alt}
                  className="w-full h-40 object-cover rounded-md mb-3 group-hover:opacity-80 transition-opacity"
                />
                <h4 className="font-medium">{article.title}</h4>
                <p className="text-xs text-[#6E6E73]">Published: {article.published}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>Load More</SectionTitle>
          <p className="text-center text-[#6E6E73] text-base">
            Load more articles
          </p>
        </Container>
      </section>
    </main>
  );
}