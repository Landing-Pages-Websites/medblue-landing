import Image from "next/image";
import type { ReactElement } from "react";
import LeadForm from "./LeadForm";
import { CheckIcon, GlobeIcon, VideoIcon, HeartPulseIcon } from "./icons";

const HERO_POINTS: { icon: ReactElement; text: string }[] = [
  { icon: <VideoIcon className="h-4 w-4" />, text: "$0 24/7 Telehealth" },
  { icon: <HeartPulseIcon className="h-4 w-4" />, text: "$0 Virtual Primary Care" },
  { icon: <GlobeIcon className="h-4 w-4" />, text: "All 50 states + Puerto Rico" },
];

export default function Hero(): ReactElement {
  return (
    <section id="hero" className="relative scroll-mt-24 overflow-hidden bg-cream">
      {/* soft warm wash behind the content for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-teal/5 blur-3xl" />
        <div className="absolute right-[-12%] top-1/4 h-[460px] w-[460px] rounded-full bg-teal-light/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-[1200px] gap-x-12 gap-y-10 px-4 pb-16 pt-8 sm:px-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:pb-24 lg:pt-12">
        {/* A — headline block */}
        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-semibold text-sage">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-gradient" />
              Houston&apos;s National Plan membership
            </span>
            {/* MANDATORY legal disclaimer — above the fold, legible */}
            <span className="inline-flex items-center gap-2 rounded-full bg-navy px-3.5 py-1.5 text-[13px] font-semibold text-cream">
              Not Insurance — a healthcare membership
            </span>
          </div>

          <h1 className="mt-6 text-[42px] leading-[1.02] text-navy sm:text-[58px] lg:text-[66px]">
            Healthcare For People Building Their Future
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
            The MedBlue National Plan is a healthcare membership for the people who bet on
            themselves — just{" "}
            <span className="font-semibold text-navy">$40/month</span> or{" "}
            <span className="font-semibold text-navy">$336/year</span>. Free 24/7 virtual care,
            a primary care provider, and real savings on the everyday stuff.
          </p>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {HERO_POINTS.map((p) => (
              <li key={p.text} className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-gradient text-white">
                  {p.icon}
                </span>
                {p.text}
              </li>
            ))}
          </ul>
        </div>

        {/* B — lead form (right rail on desktop; right under the headline on mobile) */}
        <div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-start">
          <div className="rounded-3xl border border-line bg-white/80 p-5 shadow-[0_30px_70px_-30px_rgba(8,42,60,0.35)] backdrop-blur-sm sm:p-7">
            <div className="mb-5">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl text-navy">$40</span>
                <span className="text-sm font-medium text-sage">/month · or $336/year</span>
              </div>
              <h2 className="mt-2 text-2xl text-navy">See your National Plan</h2>
              <p className="mt-1.5 text-sm text-body">
                Start your membership in minutes. A MedBlue specialist will walk you through it.
              </p>
            </div>
            <LeadForm id="hero-form" cta="See My Plan" />
          </div>
        </div>

        {/* C — hero photograph + floating price badge */}
        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:self-end">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[0_30px_70px_-32px_rgba(8,42,60,0.5)]">
              <Image
                src="/images/hero-houston.jpg"
                alt="A self-employed Houston contractor by his pickup at golden hour"
                width={1600}
                height={914}
                priority
                sizes="(max-width: 1024px) 100vw, 680px"
                className="h-full w-full object-cover"
              />
            </div>
            {/* floating price badge */}
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-line bg-cream px-4 py-3 shadow-xl">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-gradient text-white">
                <CheckIcon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-[22px] font-bold text-navy">$40<span className="text-sm font-semibold text-body">/mo</span></p>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-sage">Or $336 a year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
