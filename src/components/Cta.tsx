import type { ReactElement } from "react";
import { ArrowRightIcon } from "./icons";

interface CtaButtonProps {
  className?: string;
  label?: string;
  href?: string;
  variant?: "solid" | "light";
  withArrow?: boolean;
}

/* The single primary action across the page: a navy pill that scrolls to a lead form.
   No phone CTA anywhere — MedBlue takes form leads only. */
export function CtaButton({
  className = "",
  label = "Get Started",
  href = "#get-started",
  variant = "solid",
  withArrow = false,
}: CtaButtonProps): ReactElement {
  const styles: Record<string, string> = {
    solid:
      "bg-navy text-cream shadow-lg shadow-navy/20 hover:bg-navy-hover focus-visible:ring-teal/40",
    light:
      "bg-cream text-navy shadow-lg shadow-black/10 hover:bg-white focus-visible:ring-cream/50",
  };
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition focus-visible:outline-none focus-visible:ring-4 ${styles[variant]} ${className}`}
    >
      {label}
      {withArrow && (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </a>
  );
}
