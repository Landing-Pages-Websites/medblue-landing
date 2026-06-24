import type { ReactElement } from "react";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

/* Brand lockup: shield-check mark (matches favicon) + wordmark. */
export default function Logo({ tone = "dark", className = "" }: LogoProps): ReactElement {
  const wordmark = tone === "dark" ? "text-navy" : "text-white";
  const tagline = tone === "dark" ? "text-body/80" : "text-white/70";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="shrink-0">
        <rect width="40" height="40" rx="9" fill="url(#lg)" />
        <path
          d="M20 7.5 12 11v8.2c0 5 3.4 8 8 9.8 4.6-1.8 8-4.8 8-9.8V11l-8-3.5Z"
          fill="#fff"
        />
        <path d="m16.3 19.4 2.6 2.6 5-5.2" stroke="#1FA463" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0075C1" />
            <stop offset="1" stopColor="#004780" />
          </linearGradient>
        </defs>
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[19px] font-extrabold tracking-tight ${wordmark}`}>
          The Exchange
        </span>
        <span className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${tagline}`}>
          Self-Employed Coverage
        </span>
      </span>
    </span>
  );
}
