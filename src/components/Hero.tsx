import Image from "next/image";
import type { ReactElement } from "react";
import LeadForm from "./LeadForm";
import { PhoneButton } from "./Cta";
import { CheckIcon, ClockIcon, GlobeIcon, ShieldCheckIcon } from "./icons";

const HERO_POINTS: { icon: ReactElement; text: string }[] = [
  { icon: <GlobeIcon className="h-4 w-4" />, text: "Nationwide coverage" },
  { icon: <ClockIcon className="h-4 w-4" />, text: "24/7, on & off the job" },
  { icon: <ShieldCheckIcon className="h-4 w-4" />, text: "Little-to-no deductible" },
];

export default function Hero(): ReactElement {
  return (
    <section id="hero" className="relative scroll-mt-24 overflow-hidden bg-white">
      {/* atmospheric wash — not a substitute for the photo, just depth behind it */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 h-[460px] w-[460px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-12%] top-1/3 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-mist/60 via-white to-white" />
      </div>

      <div className="mx-auto grid max-w-[1200px] gap-x-10 gap-y-8 px-4 pb-16 pt-10 sm:px-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:pb-24 lg:pt-14">
        {/* A — headline block */}
        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-[13px] font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Built for people who work for themselves
          </span>
          <h1 className="mt-5 text-[34px] font-extrabold leading-[1.05] text-navy sm:text-5xl lg:text-[56px]">
            Real coverage for the self-employed —{" "}
            <span className="relative whitespace-nowrap text-primary">
              from $189/mo
              <svg className="absolute -bottom-1.5 left-0 h-2.5 w-full text-accent/60" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 6 Q100 0 198 6" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">
            No group plan? No problem. Get dependable, nationwide coverage that protects you 24/7 —
            on the job and off. Stay healthy and you could unlock lower premiums and little-to-no
            deductible.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
            {HERO_POINTS.map((p) => (
              <li key={p.text} className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy">
                <span className="text-accent">{p.icon}</span>
                {p.text}
              </li>
            ))}
          </ul>
        </div>

        {/* B — lead form (right rail on desktop; second on mobile, right under the headline) */}
        <div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-start">
          <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_24px_60px_-22px_rgba(11,37,69,0.30)] sm:p-7">
            <div className="mb-4">
              <h2 className="text-[22px] font-bold text-navy">See your price in minutes</h2>
              <p className="mt-1 text-sm text-body">
                Free, no-obligation quote from a licensed agent. No spam — just your options.
              </p>
            </div>
            <LeadForm id="hero-form" />
          </div>
        </div>

        {/* C — hero photograph + proof (left column, below the headline) */}
        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:self-end">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-26px_rgba(11,37,69,0.5)]">
              <Image
                src="/images/hero.jpg"
                alt="A confident self-employed tradesman on a job site"
                width={1280}
                height={720}
                priority
                sizes="(max-width: 1024px) 100vw, 640px"
                className="h-full w-full object-cover"
              />
            </div>
            {/* floating price badge */}
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/12 text-accent">
                <CheckIcon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-[22px] font-extrabold text-navy">$189<span className="text-sm font-bold text-body">/mo</span></p>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-body">Plans starting at</p>
              </div>
            </div>
            {/* floating coverage chip */}
            <div className="absolute -right-2 top-5 hidden items-center gap-2 rounded-full bg-navy px-3.5 py-2 text-[12px] font-semibold text-white shadow-lg sm:flex">
              <ClockIcon className="h-4 w-4 text-accent" />
              Covered 24/7 — on & off the job
            </div>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 pl-1">
            <PhoneButton variant="outline" />
            <p className="text-sm text-body">
              Prefer to talk it through? A licensed agent is ready to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
