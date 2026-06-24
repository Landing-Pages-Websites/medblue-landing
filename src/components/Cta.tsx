import type { ReactElement } from "react";
import { PhoneIcon } from "./icons";

export const PHONE_DISPLAY = "1-888-569-7765";
export const PHONE_HREF = "tel:+18885697765";

interface QuoteButtonProps {
  className?: string;
  label?: string;
}

export function QuoteButton({ className = "", label = "Get My Free Quote" }: QuoteButtonProps): ReactElement {
  return (
    <a
      href="#hero"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 ${className}`}
    >
      {label}
    </a>
  );
}

interface PhoneButtonProps {
  className?: string;
  variant?: "solid" | "outline" | "ghost";
}

export function PhoneButton({ className = "", variant = "outline" }: PhoneButtonProps): ReactElement {
  const styles: Record<string, string> = {
    solid:
      "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-hover focus-visible:ring-accent/30",
    outline:
      "border-2 border-navy/15 bg-white text-navy hover:border-primary hover:text-primary focus-visible:ring-primary/25",
    ghost:
      "border-2 border-white/25 text-white hover:bg-white/10 focus-visible:ring-white/40",
  };
  return (
    <a
      href={PHONE_HREF}
      aria-label={`Call a licensed agent at ${PHONE_DISPLAY}`}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold transition focus-visible:outline-none focus-visible:ring-4 ${styles[variant]} ${className}`}
    >
      <PhoneIcon className="h-[18px] w-[18px]" />
      Call {PHONE_DISPLAY}
    </a>
  );
}

interface DualCtaProps {
  className?: string;
  phoneVariant?: "solid" | "outline" | "ghost";
}

export function DualCta({ className = "", phoneVariant = "outline" }: DualCtaProps): ReactElement {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 sm:flex-row ${className}`}>
      <QuoteButton className="w-full sm:w-auto" />
      <PhoneButton className="w-full sm:w-auto" variant={phoneVariant} />
    </div>
  );
}
