import type { ReactElement } from "react";
import Reveal from "./Reveal";
import { DualCta } from "./Cta";
import { ClipboardIcon, HeadsetIcon, ShieldCheckIcon } from "./icons";

const STEPS: { icon: ReactElement; title: string; body: string }[] = [
  {
    icon: <ClipboardIcon className="h-7 w-7" />,
    title: "Fill out the quick form",
    body: "Share a few basics — it takes about two minutes. No long applications and no commitment.",
  },
  {
    icon: <HeadsetIcon className="h-7 w-7" />,
    title: "Talk to a licensed agent",
    body: "A licensed agent reviews your needs and walks you through your best-fit options in plain English.",
  },
  {
    icon: <ShieldCheckIcon className="h-7 w-7" />,
    title: "Get covered",
    body: "Pick the plan that works for you and your budget, and get protected — nationwide, 24/7.",
  },
];

export default function HowItWorks(): ReactElement {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">How it works</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-[40px] sm:leading-tight">
            Covered in three simple steps
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-body">
            No jargon, no runaround. Here&apos;s exactly what happens after you reach out.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
          {/* connector line on desktop */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent md:block" />
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative flex flex-col items-center text-center">
              <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-white text-primary shadow-md ring-1 ring-line">
                {step.icon}
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-sm ring-2 ring-mist">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">{step.title}</h3>
              <p className="mt-2 max-w-xs leading-relaxed text-body">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14">
          <DualCta />
        </Reveal>
      </div>
    </section>
  );
}
