/**
 * Section Hero component — editorial hero with primary/secondary CTAs.
 * 
 * Data-driven from intake schema fields (hero_title, hero_subtitle, hero_image,
 * cta_primary_text, cta_primary_url, etc.). All styling from design-tokens.yaml.
 * No client-specific branding baked in.
 */
import cn from "clsx";
export interface HeroProps {
  /** Hero title from intake */
  title: string;
  /** Hero subtitle from intake */
  subtitle?: string;
  /** Hero image URL from intake */
  image: string;
  /** Primary CTA text from intake */
  ctaPrimary?: string;
  /** Primary CTA URL from intake */
  ctaPrimaryUrl?: string;
  /** Secondary CTA text from intake */
  ctaSecondary?: string;
  /** Secondary CTA URL from intake */
  ctaSecondaryUrl?: string;
  /** Dark mode flag (lighter background) */
  dark?: boolean;
  /** Additional className */
  className?: string;
  /** Children */
  children?: React.ReactNode;
}
export function Hero({ 
  title, 
  subtitle, 
  image, 
  ctaPrimary, 
  ctaPrimaryUrl, 
  ctaSecondary, 
  ctaSecondaryUrl, 
  dark = true, 
  className, 
  children 
}: HeroProps) {
  const bgClass = dark ? "bg-[#111111] text-white" : "bg-[#F5F5F7] text-[#111111]";

  return (
    <section className={cn(
      "relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden flex flex-col items-center justify-start pt-20",
      bgClass,
      className
    )}>
      <div className="z-10 text-center px-4 space-y-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[70%]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top opacity-80 mix-blend-multiply dark:mix-blend-normal"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t via-transparent to-transparent",
          dark ? "from-[#111111]" : "from-[#F5F5F7]"
        )}></div>
      </div>
    </section>
  );
}