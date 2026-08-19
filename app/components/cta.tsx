"use client";

/**
 * CTA Section component — call-to-action banner with title, description, and primary/secondary buttons.
 * 
 * Data-driven from intake schema (banner_title, banner_image, banner_cta_text, etc.).
 * All styling from design-tokens.yaml. No client-specific content.
 */
import cn from "clsx";
import { Button } from "@/components/button";
export interface CTAProps {
  /** CTA title from intake */
  title: string;
  /** Optional CTA subtitle */
  subtitle?: string;
  /** Optional CTA image URL */
  image?: string;
  /** Primary CTA text */
  ctaPrimary: string;
  /** Primary CTA URL */
  ctaPrimaryUrl: string;
  /** Optional secondary CTA text */
  ctaSecondary?: string;
  /** Optional secondary CTA URL */
  ctaSecondaryUrl?: string;
  /** Dark mode flag */
  dark?: boolean;
  /** Additional className */
  className?: string;
  /** Children */
  children?: React.ReactNode;
}
export function CTA({ title, subtitle, image, ctaPrimary, ctaPrimaryUrl, ctaSecondary, ctaSecondaryUrl, dark = true, className, children }: CTAProps) {
  const bgClass = dark ? "bg-[#111111] text-white" : "bg-[#F5F5F7] text-[#111111]";

  return (
    <section className={cn(
      "relative w-full py-24 md:py-32 lg:py-40 overflow-hidden",
      bgClass,
      className
    )}>
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-[#6E6E73] mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {image && (
          <img
            src={image}
            alt={title}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[60%] md:h-[70%] opacity-80 mix-blend-multiply dark:mix-blend-normal"
          />
        )}
        <div className="flex items-center justify-center space-x-6 pt-8">
          <Button variant="primary" onClick={() => window.location.href = ctaPrimaryUrl}>
            {ctaPrimary}
          </Button>
          {ctaSecondary && (
            <Button variant="secondary" onClick={() => ctaSecondaryUrl && (window.location.href = ctaSecondaryUrl)}>
              {ctaSecondary}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}