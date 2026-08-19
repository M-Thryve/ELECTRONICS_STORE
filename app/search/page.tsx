import Link from "next/link";
import { SectionTitle } from "@/components/typography";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { search } from "@/content/support";

/* 
  Search Results Page — content-driven from Search.<Section>.<field> destinations.
*/
export default function Search() {
  const { SearchBar, Results, NoResults } = search;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>Search Results</SectionTitle>
          <input
            type="search"
            readOnly
            className="w-full px-4 py-2 border border-[#E5E5EA] rounded-md text-sm text-[#6E6E73] mb-4 focus:outline-none focus:border-[#0071E3]"
            placeholder={SearchBar.placeholder}
            value="Electronics"
          />
          <p className="mt-4 text-[#6E6E73] text-sm">
            Showing results for: &quot;Electronics&quot;
          </p>
          {Results.items.length > 0 ? (
            <ul className="mt-6 space-y-2">
              {Results.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#0071E3] hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-[#6E6E73] text-base">{NoResults.message}</p>
          )}
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>No Results Message</SectionTitle>
          <p className="text-center text-[#6E6E73] text-base">{Results.no_matches_message}</p>
        </Container>
      </section>
    </main>
  );
}