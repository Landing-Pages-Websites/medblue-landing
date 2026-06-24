import type { ReactElement } from "react";
import Reveal from "./Reveal";
import { CtaButton } from "./Cta";
import { SparkleIcon, ClockIcon, HeartPulseIcon } from "./icons";

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
    <section id="how-it-works" className="scroll-mt-24 bg-cream-deep py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">How it works</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
            Built for real life
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">
            No jargon, no runaround. Getting started is genuinely simple — here&apos;s all there is
            to it.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent md:block" />
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative flex flex-col items-center text-center">
              <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-white text-teal shadow-[0_16px_30px_-18px_rgba(8,42,60,0.5)] ring-1 ring-line">
                {step.icon}
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-navy text-sm font-semibold text-cream shadow-sm ring-2 ring-cream-deep">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-2xl text-navy">{step.title}</h3>
              <p className="mt-2.5 max-w-xs leading-relaxed text-body">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 flex justify-center">
          <CtaButton label="Start my membership" href="#get-started" withArrow />
        </Reveal>
      </div>
    </section>
  );
}
