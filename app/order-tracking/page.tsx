import { SectionTitle } from "@/components/typography";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { orderTracking } from "@/content/account";

/* 
  Order Tracking Page — content-driven from OrderTracking.<Section>.<field> destinations.
*/
export default function OrderTracking() {
  const { Hero, OrderNumber, Email, History } = orderTracking;

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
            <p>Prototype: Track by order number</p>
            <input
              className="w-full px-4 py-2 border border-[#E5E5EA] rounded-md focus:outline-none focus:border-[#0071E3]"
              type="text"
              placeholder={OrderNumber}
            />
            <input
              className="mt-3 w-full px-4 py-2 border border-[#E5E5EA] rounded-md focus:outline-none focus:border-[#0071E3]"
              type="email"
              placeholder={Email}
            />
            <p className="mt-2 text-sm text-[#6E6E73]">
              No orders found. Check your order confirmation email.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>Recent Orders</SectionTitle>
          <ul className="list-disc list-inside space-y-2 text-sm text-[#6E6E73]">
            {History.map((order) => (
              <li key={order.number}>
                Order #{order.number} - {order.status}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}