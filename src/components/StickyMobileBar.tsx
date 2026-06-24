"use client";

import { useEffect, useState, type ReactElement } from "react";

const SHOW_AFTER_PX = 640;

export default function StickyMobileBar(): ReactElement {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [getStartedInView, setGetStartedInView] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setScrolledPastHero(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const getStarted = document.getElementById("get-started");
    if (!getStarted) return;
    const observer = new IntersectionObserver(
      ([entry]) => setGetStartedInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(getStarted);
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPastHero && !getStartedInView;

  return (
    <>
      {/* Mobile sticky bar — below lg only */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-cream/95 backdrop-blur-md transition-transform duration-300 lg:hidden ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-md items-center gap-3 px-3 pt-2.5">
          <div className="leading-tight">
            <p className="text-[17px] font-semibold text-navy">$40<span className="text-sm text-body">/mo</span></p>
            <p className="text-[11px] text-sage">National Plan</p>
          </div>
          <a
            href="#hero"
            className="flex flex-1 items-center justify-center rounded-full bg-navy px-4 py-3 text-sm font-semibold text-cream shadow-md shadow-navy/20 transition active:scale-[0.98]"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Desktop floating pill — lg and up only */}
      <div
        className={`fixed bottom-6 right-6 z-50 hidden transition-opacity duration-300 lg:block ${
          visible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <a
          href="#get-started"
          className="flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[15px] font-semibold text-cream shadow-lg shadow-navy/25 transition hover:bg-navy/90"
        >
          Get Started
        </a>
      </div>
    </>
  );
}
