/**
 * Global Footer component — multi-column footer grid.
 * Navigation and legal links are data-driven from site content.
 */
import { site } from "@/content/site";
import { FooterDataSlot } from "@/extensions";

export function Footer() {
  return (
    <footer className="bg-[#F5F5F7] border-t border-[#E5E5EA] pt-16 pb-8 text-[#6E6E73] text-xs mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 border-b border-[#E5E5EA] pb-12">
          {site.footer.columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h5 className="text-[#111111] font-semibold text-sm">{column.title}</h5>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:underline">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>{site.footer.copyright}</p>
          <div className="flex space-x-4">
            {site.footer.legal.map((link) => (
              <a key={link.href} href={link.href} className="hover:underline">
                {link.label}
              </a>
            ))}
            <span>United States</span>
          </div>
        </div>

        {/* Extension point: dynamic footer data (newsletter, social links, legal refs) */}
        <FooterDataSlot />
      </div>
    </footer>
  );
}