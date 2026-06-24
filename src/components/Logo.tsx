import Image from "next/image";
import type { ReactElement } from "react";

interface LogoProps {
  /** "dark" = dark wordmark for light/cream backgrounds; "light" = white wordmark for navy panels. */
  tone?: "dark" | "light";
  className?: string;
}

/* Real MedBlue wordmark (900×250 source, 3.6:1). Kept modest so it validates, never dominates. */
export default function Logo({ tone = "dark", className = "" }: LogoProps): ReactElement {
  const src = tone === "dark" ? "/logo-navy.png" : "/logo-white.png";
  return (
    <Image
      src={src}
      alt="MedBlue"
      width={900}
      height={250}
      priority
      className={`h-9 w-auto ${className}`}
    />
  );
}
