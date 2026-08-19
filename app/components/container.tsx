/**
 * Global Container component — centered max-width container.
 * 
 * Responsiveness driven by design-tokens.yaml breakpoints:
 * sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px.
 * No client-specific content.
 */
import cn from "clsx";
export interface ContainerProps {
  /** Max-width size: fluid, sm, md, lg, xl */
  fluid?: boolean;
  /** Additional className overrides */
  className?: string;
  /** Children */
  children: React.ReactNode;
}
export function Container({ fluid, className, children }: ContainerProps) {
  if (fluid) {
    return (
      <div className={cn("max-w-full", className)}>{children}</div>
    );
  }

  return (
    <div className={cn(
      "max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12",
      className
    )}>{children}</div>
  );
}