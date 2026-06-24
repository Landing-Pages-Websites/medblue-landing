"use client";

import { useEffect, useState, type ReactElement } from "react";

const SHOW_AFTER_PX = 640;

export default function StickyMobileBar(): ReactElement {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [finalCtaInView, setFinalCtaInView] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setScrolledPastHero(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const finalCta = document.getElementById("final-cta");
    if (!finalCta) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFinalCtaInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(finalCta);
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPastHero && !finalCtaInView;

  return (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 backdrop-blur-md transition-transform duration-300 lg:hidden ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-md items-center px-3 pt-2.5">
          <a
            href="#hero"
            className="flex flex-1 items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white shadow-md shadow-primary/25 transition active:scale-[0.98]"
          >
            Get My Free Quote
          </a>
        </div>
      </div>

      <a
        href="#hero"
        className={`fixed bottom-6 right-6 z-50 hidden items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl lg:inline-flex ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        Get My Free Quote
      </a>
    </>
  );
}
