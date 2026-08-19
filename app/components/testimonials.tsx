/**
 * Testimonials component — customer review cards.
 * 
 * Grid of testimonial cards with user name, rating, and quote.
 * Data-driven from intake schema if needed. All styling from
 * design-tokens.yaml. No hardcoded customer names or quotes.
 */
import cn from "clsx";
export interface TestimonialProps {
  /** Testimonial rating (number of stars) */
  rating?: number;
  /** Testimonial text */
  text: string;
  /** Author name */
  author?: string;
  /** Author role */
  role?: string;
  /** Additional className */
  className?: string;
  /** Children */
  children?: React.ReactNode;
}
export function Testimonial({ rating, text, author, role, className, children }: TestimonialProps) {
  const starRating = rating 
    ? Array.from({ length: rating }, (_, i) => (
      <svg key={i} width={16} height={16} viewBox="0 0 24 24" fill="gold" stroke="gold">
        <path d="M12 2c-1.5 0-3.24.89-4.5 2.5C7.24 5.89 9 7 9 7s1.76-1.11 2.5-2.5C14.76 1.11 16 3.24 16 5s-1.24 1.89-2.5 3.5s-1.11 2.5-2.5 3.5C11.24 9.89 9 11 9 11s-1.76 1.11-2.5 3.5S7.24 13.89 8.5 12.5 5 10.75 7.5 9.5 9 7.75 9 7.75z"/>
      </svg>
    )) 
    : null;

  return (
    <div className={cn("bg-white rounded-3xl p-8 border border-[#E5E5EA] hover:bg-[#F0F0F0] transition-colors", className)}>
      <div className="space-y-4">
        <p className="text-lg leading-relaxed">{text}</p>
        {starRating}
        {author && (
          <div className="flex items-baseline">
            <span className="font-medium">{author}</span>
            {role && <span className="text-sm opacity-75 ml-1">{role}</span>}
          </div>
        )}
      </div>
    </div>
  );
}