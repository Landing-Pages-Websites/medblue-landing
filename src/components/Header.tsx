"use client";

import { useEffect, useState, type ReactElement } from "react";
import Logo from "./Logo";
import { CtaButton } from "./Cta";

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
        scrolled ? "border-b border-line bg-cream/90 shadow-[0_1px_20px_-12px_rgba(8,42,60,0.4)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3.5 sm:px-8">
        <a
          href="#hero"
          aria-label="MedBlue — home"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal/25"
        >
          <Logo />
        </a>
        <CtaButton href="#hero" label="Get Started" className="px-5 py-2.5 text-sm" />
      </div>
    </header>
  );
}
