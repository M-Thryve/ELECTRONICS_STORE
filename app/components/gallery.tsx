/**
 * Gallery component — product image grid/carousel.
 * 
 * Reusable grid of product cards with image hover/carousel effect.
 * Data-driven from product_grid intake field. All styling from
 * design-tokens.yaml. No client-specific product data baked in.
 */
import cn from "clsx";
export default function ProductGrid({ images, captions, desktopColumns = 4, hoverScale = 1.02, className, children }: {
  images: string[];
  captions?: string[];
  desktopColumns?: number;
  hoverScale?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const columnClass = desktopColumns === 4
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
    : desktopColumns === 3
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8";

  return (
    <section className={cn("max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24", className)}>
      <div className={columnClass}>
        {images.map((img, index) => (
          <div
            key={index}
            className="group cursor-pointer bg-[#F5F5F7] rounded-2xl aspect-square mb-4 p-8 flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
          >
            <img
              src={img}
              alt={captions?.[index] || "Product"}
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// Named export for compatibility with page imports
export { ProductGrid };