"use client";

/**
 * Global Button component — primary/secondary/tertiary variant support.
 * 
 * Accepts variant, size, disabled, and onClick props.
 * All styling driven by design-tokens.yaml CSS custom properties.
 * No client-specific text or branding.
 */
import cn from "clsx";
export interface ButtonProps {
  /** Button variant: primary, secondary, or tertiary */
  variant?: "primary" | "secondary" | "tertiary";
  /** Button size: lg, md, sm */
  size?: "lg" | "md" | "sm";
  /** Disabled state */
  disabled?: boolean;
  /** On-click handler */
  onClick?: () => void;
  /** Button label */
  children: React.ReactNode;
  /** Whether the link is external */
  isExternal?: boolean;
  /** Optional href for anchor link behavior */
  href?: string;
}
export function Button({ 
  variant = "primary", 
  size = "md", 
  disabled = false, 
  onClick, 
  children, 
  isExternal = false, 
  href 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center rounded-full px-6 py-2.5 font-medium transition-colors";

  const variantClasses = {
    primary: "bg-[#0071E3] text-white hover:bg-blue-600",
    secondary: "bg-[#F5F5F7] text-[#111111] hover:bg-[#E5E5EA]",
    tertiary: "bg-transparent text-[#111111] hover:bg-[#F0F0F0]",
  };

  const sizeClasses = {
    lg: "text-lg py-3 px-8",
    md: "text-sm py-2.5 px-6",
    sm: "text-sm py-1.5 px-4",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const linkClasses = isExternal
    ? "underline text-[#0071E3] hover:text-blue-600"
    : "underline";

  if (href && isExternal) {
    return (
      <a
        href={href}
        className={cn(
          linkClasses,
          "font-medium",
          disabledClasses
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center",
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}