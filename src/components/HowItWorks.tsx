import type { ReactElement } from "react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { SparkleIcon, ClockIcon, HeartPulseIcon, ArrowRightIcon } from "./icons";

const STEPS: { icon: ReactElement; title: string; body: string }[] = [
  {
    icon: <SparkleIcon className="h-7 w-7" />,
    title: "Join in minutes",
    body: "Pick the National Plan, share a few basics, and you're a member. No long applications, no medical exam, no waiting on hold.",
  },
  {
    icon: <ClockIcon className="h-7 w-7" />,
    title: "Activate",
    body: "Your member benefits switch on just three days after you enroll. We'll send everything you need to start using them.",
  },
  {
    icon: <HeartPulseIcon className="h-7 w-7" />,
    title: "Use your membership",
    body: "Talk to a doctor 24/7, tap your savings networks, and lean on a real care navigator whenever you have a question.",
  },
];

export default function HowItWorks(): ReactElement {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-navy py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Eyebrow tone="dark">How it works</Eyebrow>
          <h2 className="text-h2 mt-4 text-cream">
            Built for real life
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/80">
            No jargon, no runaround. Getting started is genuinely simple — here&apos;s all there is
            to it.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent md:block" />
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative flex flex-col items-center text-center">
              <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-cream/10 text-teal-light shadow-[0_16px_30px_-18px_rgba(0,0,0,0.6)] ring-1 ring-cream/15">
                {step.icon}
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-cream text-sm font-semibold text-navy shadow-sm ring-2 ring-navy">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-2xl text-cream">{step.title}</h3>
              <p className="mt-2.5 max-w-xs leading-relaxed text-cream/80">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a href="#get-started" className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-[15px] font-semibold text-navy shadow-lg shadow-black/20 transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cream/50">
            Get Started
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a href="#get-started" className="rounded text-[15px] font-semibold text-cream underline underline-offset-4 transition hover:text-teal-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cream/30">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
