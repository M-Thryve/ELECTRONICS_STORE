/**
 * Service Section component — three-column service layout.
 * 
 * Reinforces trust (delivery, assembly, returns) as per sitemap.yaml
 * support_section and services_hero sections. All styling from
 * design-tokens.yaml. No client-specific data.
 */
import cn from "clsx";
export interface ServiceSectionProps {
  /** Hero title from intake */
  title: string;
  /** Optional hero image from intake */
  image?: string;
  /** Service item */
  serviceItem: {
    /** Service icon name (Lucide) */
    icon: React.ReactNode;
    /** Service title */
    title: string;
    /** Service description */
    description: string;
  }[];
  /** Additional className */
  className?: string;
  /** Children */
  children?: React.ReactNode;
}
export function ServiceSection({ title, image, serviceItem, className, children }: ServiceSectionProps) {
  return (
    <section className={cn(
      "max-w-[2560px] mx-auto px-4 md:px-6 py-6 space-y-6",
      className
    )}>
      {image && (
        <div className="mb-12">
          <img
            src={image}
            alt={title}
            className="rounded-3xl overflow-hidden aspect-[4/3] w-full md:h-[600px]"
          />
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-6 h-auto md:h-[600px]">
        {serviceItem.map((item, index) => (
          <div
            key={index}
            className="bg-[#F5F5F7] rounded-3xl p-10 flex flex-col items-center text-center relative overflow-hidden h-[500px] md:h-full"
          >
            <div className="z-10 space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                {item.title}
              </h2>
              <p className="text-[#6E6E73] text-lg md:text-xl">
                {item.description}
              </p>
            </div>
            <div className="absolute bottom-0 w-full h-1/2 md:h-[60%] flex items-center justify-center">
              {/* Placeholder icon */}
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}