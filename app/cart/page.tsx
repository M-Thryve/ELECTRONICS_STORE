import Link from "next/link";
import { SectionTitle } from "@/components/typography";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cart } from "@/content/cart";
import { formatPrice } from "@/content/assets";
import { CartSummarySlot } from "@/extensions";

/* 
  Cart Page — content-driven from Cart.<Section>.<field> destinations.
*/
export default function Cart() {
  const { CartItems, CartSummary, CheckoutCta } = cart;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>{CartItems.subtitle}</SectionTitle>
          {CartItems.items.length === 0 ? (
            <div className="empty-state">
              <p>Your cart is empty</p>
              <Link href="/shop" className="text-[#0071E3] hover:underline">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {CartItems.items.map((item) => (
                <li key={item.title} className="flex items-center gap-4 bg-[#F5F5F7] rounded-xl p-4">
                  <img src={item.image.src} alt={item.image.alt} className="w-20 h-20 object-contain mix-blend-multiply" />
                  <div className="flex-1">
                    <Link href={item.href} className="font-medium hover:underline">{item.title}</Link>
                    <p className="text-sm text-[#6E6E73]">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>{CartItems.summary_subtitle}</SectionTitle>
          <ul className="list-disc list-inside space-y-2 text-sm text-[#6E6E73]">
            <li>Items: {CartItems.items.length}</li>
            <li>Subtotal: {formatPrice(CartSummary.subtotal)}</li>
            <li>Shipping: {CartSummary.shipping === 0 ? "Free over $99" : formatPrice(CartSummary.shipping)}</li>
            <li>Estimated total: {formatPrice(CartSummary.total)}</li>
          </ul>
          <div className="mt-8">
            <Link href="/checkout">
              <Button variant="primary">{CheckoutCta.text}</Button>
            </Link>
          </div>
          {/* Extension point: cart state adapter + inventory sync (cart_prototype, inventory_sync) */}
          <CartSummarySlot />
        </Container>
      </section>
    </main>
  );
}