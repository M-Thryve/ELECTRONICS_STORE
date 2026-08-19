"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { BrandLogoSlot, NavbarActionsSlot } from "@/extensions";

export interface NavBarProps {
  /** Active tab for highlight styling */
  activeTab?: string;
  /** OnTabChange callback */
  onTabChange?: (tab: string) => void;
}

/**
 * Global Navbar component — header with primary navigation.
 * Navigation items are data-driven from site content (sitemap.yaml core_pages).
 */
export function NavBar({ activeTab, onTabChange }: NavBarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E5EA]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center"
            onClick={() => onTabChange?.("home")}
          >
            <div className="w-8 h-8 bg-[#111111] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-tighter">
                {site.logoMark}
              </span>
            </div>
            {/* Extension point: brand logo override (brand_identity) */}
            <BrandLogoSlot />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {site.nav.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => onTabChange?.(item.id)}
                  className={activeTab === item.id
                    ? "text-[#0071E3] font-semibold"
                    : "text-[#111111] hover:text-[#0071E3]"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile CTA (hamburger hidden on md+) */}
          <div className="hidden md:hidden flex items-center space-x-4">
            <button className="text-[#111111] hover:text-[#0071E3] transition-colors" aria-label="Menu">
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1={3} y1={6} x2={21} y2={6} />
                <line x1={3} y1={12} x2={21} y2={12} />
                <line x1={3} y1={18} x2={21} y2={18} />
              </svg>
            </button>
          </div>

          {/* Extension point: navbar right actions (account_navigation, cart) */}
          <NavbarActionsSlot />
        </div>
      </div>
    </nav>
  );
}