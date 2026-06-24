import type { ReactElement } from "react";
import { VideoIcon, PillIcon, GlobeIcon, SparkleIcon } from "./icons";

const ITEMS: { icon: ReactElement; stat: string; label: string }[] = [
  { icon: <SparkleIcon className="h-6 w-6" />, stat: "$40/mo", label: "One simple membership — or $336 a year" },
  { icon: <VideoIcon className="h-6 w-6" />, stat: "$0", label: "24/7 telehealth & virtual primary care" },
  { icon: <PillIcon className="h-6 w-6" />, stat: "Up to 80% off", label: "Brand-name & generic meds, 70,000+ pharmacies" },
  { icon: <GlobeIcon className="h-6 w-6" />, stat: "50 states + PR", label: "Virtual care & savings networks nationwide" },
];

export default function TrustBar(): ReactElement {
  return (
    <section id="trust-bar" className="scroll-mt-24 bg-navy">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-px px-4 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <div key={item.stat} className="flex items-start gap-3.5 py-7 sm:px-5 lg:px-6">
            <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream/[0.07] text-teal-light">
              {item.icon}
            </span>
            <div>
              <p className="font-serif text-2xl text-cream">{item.stat}</p>
              <p className="mt-1 text-[13px] leading-snug text-cream/65">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
