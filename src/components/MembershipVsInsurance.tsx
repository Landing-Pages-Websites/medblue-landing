import type { ReactElement } from "react";
import Reveal from "./Reveal";
import { CheckIcon } from "./icons";

const MEDBLUE_POINTS: string[] = [
  "$0 24/7 telehealth & virtual primary care",
  "Real savings on dental, labs, imaging & pharmacy",
  "A dedicated care navigator in your corner",
  "One simple price — no paperwork maze",
];

const TRADITIONAL_POINTS: string[] = [
  "Built for major and catastrophic events",
  "High monthly premiums, often unsubsidized",
  "Tangled paperwork and surprise costs",
  "Not designed for everyday care",
];

export default function MembershipVsInsurance(): ReactElement {
  return (
    <section id="membership-vs-insurance" className="scroll-mt-24 bg-navy py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-light">
            The honest comparison
          </p>
          <h2 className="mt-4 text-4xl text-cream sm:text-5xl">
            Healthcare without the complexity
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/70">
            MedBlue isn&apos;t insurance, and it isn&apos;t trying to be. It&apos;s a simple
            membership that makes everyday healthcare affordable — so the cost of staying well
            stops being a guessing game.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-2">
          {/* Traditional insurance — muted */}
          <Reveal className="flex flex-col rounded-3xl border border-cream/12 bg-cream/[0.04] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cream/55">
              Traditional insurance
            </p>
            <p className="mt-4 font-serif text-4xl text-cream sm:text-5xl">
              $4,200–$12,000<span className="text-lg text-cream/55"> / year</span>
            </p>
            <p className="mt-1.5 text-sm text-cream/55">Typical unsubsidized premiums</p>
            <ul className="mt-7 space-y-3.5">
              {TRADITIONAL_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-cream/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cream/30" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* MedBlue — highlighted */}
          <Reveal delay={120} className="relative flex flex-col overflow-hidden rounded-3xl border border-teal/40 bg-cream p-7 text-navy shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] sm:p-9">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-light/20 blur-2xl" />
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
              MedBlue National Plan
            </p>
            <p className="mt-4 font-serif text-4xl text-navy sm:text-5xl">
              $336<span className="text-lg text-sage"> / year</span>
            </p>
            <p className="mt-1.5 text-sm text-sage">That&apos;s just $40 a month — a membership, not insurance</p>
            <ul className="mt-7 space-y-3.5">
              {MEDBLUE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-body">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-gradient text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-cream/55">
            MedBlue is a healthcare membership for everyday care, not health insurance and not a
            substitute for major medical insurance. For catastrophic events, insurance still has its
            place — MedBlue sits alongside your life, making the routine care you actually use simple
            and affordable.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-4">
          <a href="#get-started" className="rounded-full bg-cream px-7 py-3.5 text-[15px] font-semibold text-navy transition hover:bg-white">
            Get Started
          </a>
          <a href="#get-started" className="text-[15px] font-semibold text-cream underline underline-offset-4 hover:text-teal-light">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
