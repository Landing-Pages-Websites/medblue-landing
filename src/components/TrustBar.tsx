import type { ReactElement } from "react";
import { ClockIcon, GlobeIcon, HeadsetIcon, PiggyBankIcon } from "./icons";

const ITEMS: { icon: ReactElement; stat: string; label: string }[] = [
  { icon: <PiggyBankIcon className="h-6 w-6" />, stat: "From $189/mo", label: "Real coverage that fits a self-employed budget" },
  { icon: <GlobeIcon className="h-6 w-6" />, stat: "Nationwide", label: "Coverage that travels with you across the country" },
  { icon: <ClockIcon className="h-6 w-6" />, stat: "24/7", label: "Protected on the job and off — day or night" },
  { icon: <HeadsetIcon className="h-6 w-6" />, stat: "Licensed agents", label: "Real people to guide you — never a sales bot" },
];

export default function TrustBar(): ReactElement {
  return (
    <section id="trust-bar" className="scroll-mt-24 border-y border-line bg-navy">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-px overflow-hidden px-4 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <div key={item.stat} className="flex items-start gap-3.5 py-6 sm:px-5 lg:px-6">
            <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
              {item.icon}
            </span>
            <div>
              <p className="font-display text-lg font-bold text-white">{item.stat}</p>
              <p className="mt-0.5 text-[13px] leading-snug text-white/70">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
