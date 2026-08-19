/**
 * Product info primitives — ProductTitle, ProductPrice, ProductDescription,
 * ProductSKU, FeatureBullets. Data-driven from Product.<Section>.<field>
 * destinations in template.content.mapping.json.
 */
import { formatPrice } from "@/content/assets";

export function ProductTitle({ title }: { title: string }) {
  return <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>;
}

export function ProductPrice({
  price,
  compareAtPrice,
}: {
  price: number;
  compareAtPrice?: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl font-semibold">{formatPrice(price)}</span>
      {compareAtPrice && (
        <span className="text-[#6E6E73] line-through">{formatPrice(compareAtPrice)}</span>
      )}
    </div>
  );
}

export function ProductDescription({ description }: { description: string }) {
  return <p className="text-[#6E6E73] text-sm leading-relaxed">{description}</p>;
}

export function ProductSKU({ sku }: { sku: string }) {
  return <p className="text-xs text-[#6E6E73]">SKU: {sku}</p>;
}

export function FeatureBullets({ bullets }: { bullets: string[] }) {
  return (
    <ul className="space-y-2">
      {bullets.map((bullet) => (
        <li key={bullet} className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] mt-1.5 shrink-0" />
          <span className="text-sm text-[#6E6E73]">{bullet}</span>
        </li>
      ))}
    </ul>
  );
}