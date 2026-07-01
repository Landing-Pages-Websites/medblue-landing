import type { ReactElement, ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  /** "dark" tunes the label for navy sections; "light" for cream sections. */
  tone?: "light" | "dark";
  className?: string;
}

/* The uppercase kicker that sits above every section heading — a teal-gradient
   dot + tracked label. One consistent treatment ties the page to the brand. */
export default function Eyebrow({
  children,
  tone = "light",
  className = "",
}: EyebrowProps): ReactElement {
  const label = tone === "dark" ? "text-teal-light" : "text-teal";
  return (
    <p className={`eyebrow inline-flex items-center gap-2.5 ${label} ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-teal-gradient" aria-hidden="true" />
      {children}
    </p>
  );
}
