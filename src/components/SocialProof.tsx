import type { ReactElement } from "react";
import Reveal from "./Reveal";
import { PhoneButton, QuoteButton } from "./Cta";
import { CheckIcon, ClockIcon, HeadsetIcon, LockIcon, MapPinIcon } from "./icons";

const PILLARS: { icon: ReactElement; stat: string; label: string }[] = [
  { icon: <HeadsetIcon className="h-6 w-6" />, stat: "Licensed agents", label: "Guidance from real, licensed insurance professionals" },
  { icon: <MapPinIcon className="h-6 w-6" />, stat: "29 states", label: "Plans available across the country and growing" },
  { icon: <LockIcon className="h-6 w-6" />, stat: "No obligation", label: "A free quote with zero pressure to enroll" },
  { icon: <ClockIcon className="h-6 w-6" />, stat: "24/7 coverage", label: "Protection that never clocks out, on the job or off" },
];

const PROMISES: string[] = [
  "We'll never pressure you — you decide if and when a plan is right.",
  "A licensed agent explains your options in plain language, not insurance-speak.",
  "Your information stays secure and is only used to prepare your quote.",
];

export default function SocialProof(): ReactElement {
  return (
    <section id="social-proof" className="scroll-mt-24 bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Why people choose us</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-[40px] sm:leading-tight">
            Coverage you can trust — from people who pick up the phone
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            When you work for yourself, the last thing you need is a runaround. We keep it honest,
            human, and built around how you actually work.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.stat} delay={i * 90}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center sm:p-6">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  {p.icon}
                </span>
                <p className="mt-4 font-display text-lg font-bold text-white">{p.stat}</p>
                <p className="mt-1.5 text-[13px] leading-snug text-white/65">{p.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 sm:p-9">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">Our promise to you</h3>
                <ul className="mt-5 space-y-3.5">
                  {PROMISES.map((promise) => (
                    <li key={promise} className="flex items-start gap-3 text-white/85">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <span className="leading-relaxed">{promise}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                <QuoteButton className="w-full" />
                <PhoneButton variant="solid" className="w-full" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
