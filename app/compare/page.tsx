import { SectionTitle } from "@/components/typography";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { comparison } from "@/content/product";

/* 
  Comparison Page — content-driven from Comparison.<Section>.<field> destinations.
  Side-by-side product comparison with spec table and feature checklist.
*/
export default function Comparison() {
  const { ProductSelection, ProductImages, KeySpecs, Features, PurchaseCta } = comparison;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>Compare Products</SectionTitle>
          <p className="text-[#6E6E73] text-base mb-8">
            Select up to 3 products to compare specifications and pricing.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {ProductSelection.names.map((name, index) => (
              <div key={name} className="bg-[#F5F5F7] rounded-2xl p-6 text-center">
                <img
                  src={ProductSelection.images[index]?.src}
                  alt={name}
                  className="w-32 h-32 object-contain mx-auto mb-4 mix-blend-multiply"
                />
                <h4 className="font-medium">{name}</h4>
              </div>
            ))}
          </div>
          <div className="flex space-x-4">
            <Button variant="primary">{PurchaseCta.label}</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>Comparison Table</SectionTitle>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E5E5EA]">
                  <th className="text-left py-3 pr-4">Specification</th>
                  {ProductSelection.names.map((name) => (
                    <th key={name} className="text-left py-3 pr-4">{name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {KeySpecs.table.map((row) => (
                  <tr key={row.spec} className="border-b border-[#E5E5EA]">
                    <td className="py-3 pr-4 font-medium">{row.spec}</td>
                    {row.values.map((value, i) => (
                      <td key={i} className="py-3 pr-4 text-[#6E6E73]">{value}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="py-3 pr-4 font-medium">Features</td>
                  <td colSpan={ProductSelection.names.length}>
                    <span className="text-[#6E6E73]">{Features.checklist.join(", ")}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </main>
  );
}