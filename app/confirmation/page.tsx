import Link from "next/link";
import { SectionTitle } from "@/components/typography";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { confirmation } from "@/content/cart";

/* 
  Confirmation Page — content-driven from Confirmation.<Section>.<field> destinations.
*/
export default function ConfirmationPage({ params }: { params: { orderId?: string } }) {
  const { orderId } = params;
  const { Confirmation, OrderNumber, ContinueShopping } = confirmation;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>{Confirmation.title}</SectionTitle>
          <div className="max-w-md mx-auto text-center">
            <p className="text-6xl font-bold text-[#0071E3] mb-2">
              #{orderId || OrderNumber}
            </p>
            <p className="text-[#6E6E73] text-base mb-8">
              {Confirmation.subtitle}
            </p>
            <p className="text-lg font-medium">Your order will ship within 1-2 business days.</p>
            <div className="mt-8">
              <Link href="/">
                <Button variant="primary">{ContinueShopping.cta}</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}