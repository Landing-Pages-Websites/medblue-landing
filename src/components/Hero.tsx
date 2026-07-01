import Image from "next/image";
import type { ReactElement } from "react";
import LeadForm from "./LeadForm";
import Eyebrow from "./Eyebrow";
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

      <div className="mx-auto grid max-w-[1200px] gap-x-14 gap-y-8 px-4 pb-16 pt-5 sm:px-8 sm:pt-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-y-12 lg:pb-24 lg:pt-14">
        {/* A — headline block */}
        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
          <Eyebrow>Houston&apos;s National Plan membership</Eyebrow>
          {/* MANDATORY legal disclaimer — above the fold, legible */}
          <p className="mt-4 flex items-center gap-2.5 rounded-xl bg-navy px-4 py-2.5 text-[13px] font-semibold leading-snug text-cream sm:text-sm">
            <span className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-teal-light sm:block" aria-hidden="true" />
            NOT INSURANCE — This is a healthcare membership, not health insurance.
          </p>

          <h1 className="text-display mt-5 text-navy">
            Healthcare For People Building Their Future
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">
            The MedBlue National Plan is a healthcare membership for the people who bet on
            themselves — just{" "}
            <span className="font-semibold text-navy">$40/month</span> or{" "}
            <span className="font-semibold text-navy">$336/year</span>. Free 24/7 virtual care,
            a primary care provider, and real savings on the everyday stuff.
          </p>
          {/* Full hooks belong on desktop; on mobile they'd push the form below the fold
              (the trust bar restates them just below). */}
          <ul className="mt-8 hidden flex-wrap gap-x-6 gap-y-3 lg:flex">
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
          <div className="rounded-3xl border border-line bg-white p-5 shadow-[0_40px_80px_-32px_rgba(8,42,60,0.4)] sm:p-7">
            <div className="mb-5">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-[2.75rem] leading-none text-navy">$40</span>
                <span className="text-sm font-medium text-body">/month · or $336/year</span>
              </div>
              <h2 className="mt-3 text-2xl text-navy">See your National Plan</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-body">
                Start your membership in minutes. A MedBlue specialist will walk you through it.
              </p>
            </div>
            <LeadForm id="hero-form" cta="See My Plan" />
          </div>
        </div>

        {/* C — hero photograph + floating price badge */}
        <div className="mt-1 lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:mt-0 lg:self-end">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[0_40px_80px_-34px_rgba(8,42,60,0.55)] ring-1 ring-navy/5">
              <Image
                src="/images/hero-houston.jpg"
                alt="A self-employed Houston contractor by his pickup at golden hour"
                width={1600}
                height={914}
                priority
                sizes="(max-width: 1024px) 100vw, 640px"
                className="h-full w-full object-cover"
              />
            </div>
            {/* floating price badge */}
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-line bg-cream px-4 py-3 shadow-[0_20px_40px_-18px_rgba(8,42,60,0.45)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-gradient text-white">
                <CheckIcon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-serif text-[26px] leading-none text-navy">$40<span className="font-body text-sm font-semibold text-body">/mo</span></p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-body/70">Or $336 a year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
