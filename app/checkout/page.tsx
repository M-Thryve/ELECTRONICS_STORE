import { SectionTitle } from "@/components/typography";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { checkout } from "@/content/cart";
import { CheckoutFlowSlot } from "@/extensions";

/* 
  Checkout Page — content-driven from Checkout.<Section>.<field> destinations.
  Prototype capture of fulfillment details; no live payment processing.
*/
export default function Checkout() {
  const { CustomerInfo, Shipping, Payment, OrderReview } = checkout;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>{CustomerInfo.title}</SectionTitle>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="block">
                  <span className="text-sm text-[#6E6E73]">{CustomerInfo.name_field_label}</span>
                  <input type="text" className="mt-1 w-full px-4 py-2 border border-[#E5E5EA] rounded-md focus:outline-none focus:border-[#0071E3]" />
                </label>
                <label className="block">
                  <span className="text-sm text-[#6E6E73]">{CustomerInfo.email_field_label}</span>
                  <input type="email" className="mt-1 w-full px-4 py-2 border border-[#E5E5EA] rounded-md focus:outline-none focus:border-[#0071E3]" />
                </label>
              </div>

              <div>
                <h3 className="font-medium mb-3">{Shipping.title}</h3>
                <div className="space-y-3">
                  {Shipping.address_lines.map((line) => (
                    <label key={line.label} className="block">
                      <span className="text-sm text-[#6E6E73]">{line.label}</span>
                      <input type={line.type} className="mt-1 w-full px-4 py-2 border border-[#E5E5EA] rounded-md focus:outline-none focus:border-[#0071E3]" />
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">{Payment.title}</h3>
                <p className="text-sm text-[#6E6E73]">{Payment.method_label}</p>
                <p className="mt-2 text-sm text-[#6E6E73]">
                  Prototype: No live payment processing enabled
                </p>
              </div>
            </div>

            <div className="bg-[#F5F5F7] rounded-2xl p-6 h-fit">
              <h3 className="font-medium mb-3">{OrderReview.title}</h3>
              {OrderReview.subtitle && (
                <p className="text-sm text-[#6E6E73] mb-4">{OrderReview.subtitle}</p>
              )}
              <ul className="list-disc list-inside space-y-2 text-sm text-[#6E6E73]">
                <li>Items: 0</li>
                <li>Subtotal: $0.00</li>
                <li>Shipping: Free over $99</li>
                <li>Estimated total: $0.00</li>
              </ul>
              {/* Extension point: checkout flow + payment provider (checkout_prototype, payment_integration) */}
              <CheckoutFlowSlot />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}