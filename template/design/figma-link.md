# Figma Design Reference

This template was originally generated from a Figma design file. The Figma file contains the complete design system including components, typography, color palettes, and interactive states used across all 25 sitemap pages.

**Figma File Link:** `https://www.figma.com/file/placeholder-electronics-store-template`

**Figma Frame Structure:**
- `main_frame` — Full artboard containing header, hero, shop grid, footer, and all responsive breakpoints (375px, 768px, 1024px, 1440px)
- `hero_section` — Editorial hero with primary/secondary CTAs, background image, and overlay
- `product_card` — Interactive product card with image hover scale, title, price, and "Add to Cart" CTA
- `category_grid` — Grid of category images with labels and hover states
- `services_cards` — Three-column service layout (delivery, assembly, returns) with iconography
- `newsletter_form` — Input with email field and subscribe button
- `footer_grid` — Five-column footer layout with links, newsletter, and legal
- `mobile_nav` — Collapsed navigation drawer for breakpoints ≤ 768px
- `dark_mode_variants` — Dark mode color adjustments for all component states
- `comparison_layout` — Side-by-side product comparison view
- `collection_grid` — Grid of curated collection cards

**Design Tokens Exported from Figma:**
- Color palette: 10 color roles (background, foreground, primary, secondary, accent, card, muted, border, ring, success)
- Typography: Inter (sans) + Georgia (serif) with 10 typographic scales
- Spacing: 8-point scale adapted (4px, 8px, 12px, 16px, 20px, 24px, 32px)
- Border radius: 4px, 8px, 12px, 16px, 20px
- Shadow: 4 elevation levels
- Motion: 150ms/200ms transition curve (ease-out), scale/opacity hover states

**Anti-Patterns Avoided:**
- No emoji icons (use SVG/Lucide instead)
- Hover states that do not cause layout shift (scale transforms with `transform-box: fill-available`)
- Brand-specific colors hardcoded at the token level (all colors are role-based)
- Inconsistent icon sizes (all icons fixed at 24px viewBox, rendered at `w-6 h-6`)
- Arbitrary one-off styles (all styling driven by `design-tokens.yaml`)