import { SectionTitle } from "@/components/typography";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { account } from "@/content/account";
import { AccountNavSlot, OrderHistorySlot, ProfileEditSlot } from "@/extensions";

/* 
  Account Page — content-driven from Account.<Section>.<field> destinations.
*/
export default function Account() {
  const { AccountNav, Orders, Profile, Addresses } = account;

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="py-24">
        <Container>
          <SectionTitle>{AccountNav.title}</SectionTitle>
          {/* Extension point: authenticated account navigation (account_navigation) */}
          <AccountNavSlot />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <h4 className="font-medium">{Orders.title}</h4>
              {Orders.subtitle && <p className="text-xs text-[#6E6E73] mt-1">{Orders.subtitle}</p>}
              <ul className="space-y-2 text-sm text-[#6E6E73] mt-2">
                {Orders.items.map((order) => (
                  <li key={order.number}>
                    <a href="#" className="hover:underline">
                      Order #{order.number} - {order.status}
                    </a>
                  </li>
                ))}
              </ul>
              {/* Extension point: front-end order history state (order_history) */}
              <OrderHistorySlot />
            </div>
            <div>
              <h4 className="font-medium">{Profile.title}</h4>
              {Profile.subtitle && <p className="text-xs text-[#6E6E73] mt-1">{Profile.subtitle}</p>}
              <ul className="space-y-2 text-sm text-[#6E6E73] mt-2">
                <li><a href="#" className="hover:underline">Edit profile</a></li>
                <li><a href="#" className="hover:underline">Password</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">{Addresses.title}</h4>
              {Addresses.subtitle && <p className="text-xs text-[#6E6E73] mt-1">{Addresses.subtitle}</p>}
              <ul className="space-y-2 text-sm text-[#6E6E73] mt-2">
                <li><a href="#" className="hover:underline">Add address</a></li>
                <li><a href="#" className="hover:underline">Default address</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Payment Methods</h4>
              <ul className="space-y-2 text-sm text-[#6E6E73] mt-2">
                <li><a href="#" className="hover:underline">Add card</a></li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <SectionTitle>Account Settings</SectionTitle>
          {/* Extension point: profile + address management (profile_management, addresses_sync) */}
          <ProfileEditSlot />
          <p className="text-center text-[#6E6E73] text-base mb-6">
            Manage your preferences and account information.
          </p>
        </Container>
      </section>
    </main>
  );
}