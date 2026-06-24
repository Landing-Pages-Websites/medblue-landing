"use client";

import { useEffect, useState, type ReactElement } from "react";
import Logo from "./Logo";
import { PhoneButton, QuoteButton } from "./Cta";

export default function Header(): ReactElement {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-white/90 shadow-sm backdrop-blur-md" : "bg-white/0"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-8">
        <a href="#hero" aria-label="The Exchange — home" className="rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25">
          <Logo />
        </a>
        <div className="flex items-center gap-3">
          <PhoneButton variant="outline" className="hidden px-5 py-2.5 text-sm sm:inline-flex" />
          <QuoteButton className="px-5 py-2.5 text-sm" label="Get My Free Quote" />
        </div>
      </div>
    </header>
  );
}
