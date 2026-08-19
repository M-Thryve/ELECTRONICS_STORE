/**
 * Global Typography component — heading and body text styles.
 * 
 * All font sizes, line heights, and weights are driven by
 * design-tokens.yaml typography and spacing scales.
 * No client-specific text content.
 */
import cn from "clsx";

export interface HeadingProps {
  /** Heading level: h1-h6 */
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Optional className override */
  className?: string;
  /** Children */
  children: React.ReactNode;
}

export function Heading({ level, className, children }: HeadingProps) {
  const sizeMap = {
    h1: "text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
    h2: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
    h3: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
    h4: "text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight",
    h5: "text-xl md:text-2xl font-medium tracking-tight",
    h6: "text-lg md:text-base font-semibold",
  };

  return (
    <h1 className={cn(sizeMap[level], className)}>
      {children}
    </h1>
  );
}

export interface BodyProps {
  /** Optional className override */
  className?: string;
  /** Children */
  children: React.ReactNode;
}

export function Body({ className, children }: BodyProps) {
  return (
    <p className={cn("text-[#6E6E73] text-sm md:text-base line-clamp-2", className)}>
      {children}
    </p>
  );
}

/**
 * Small body / subtitle variant
 */
export interface SubtitleProps {
  /** Optional className override */
  className?: string;
  /** Children */
  children: React.ReactNode;
}

export function Subtitle({ className, children }: SubtitleProps) {
  return (
    <p className={cn("text-[#6E6E73] text-sm md:text-base", className)}>
      {children}
    </p>
  );
}

/**
 * Muted / caption text
 */
export interface CaptionProps {
  /** Optional className override */
  className?: string;
  /** Children */
  children: React.ReactNode;
}

export function Caption({ className, children }: CaptionProps) {
  return (
    <p className={cn("text-xs text-[#6E6E73]", className)}>
      {children}
    </p>
  );
}

/**
 * Section Title — alias for Subtitle used on page sections
 */
export const SectionTitle = Subtitle;