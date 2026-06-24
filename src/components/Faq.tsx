"use client";

import { useState, type ReactElement } from "react";
import Reveal from "./Reveal";
import { CtaButton } from "./Cta";
import { ChevronDownIcon } from "./icons";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Is this insurance?",
    a: "No. MedBlue is a healthcare membership, not health insurance, and it's not a substitute for major medical insurance. It's a simple membership that makes everyday care — like talking to a doctor, filling a prescription, or getting lab work — affordable and easy to use.",
  },
  {
    q: "What does it cost?",
    a: "The National Plan is $40 per month, or $336 per year if you'd rather pay annually. That's one flat price for the whole membership — no per-visit fees for your telehealth and virtual primary care.",
  },
  {
    q: "When do my benefits start?",
    a: "Your member benefits activate three days after you enroll. As soon as they're live, we'll send you everything you need to start using your telehealth, savings networks, and care navigator.",
  },
  {
    q: "Where does it work?",
    a: "Your virtual care and savings networks work in all 50 states and Puerto Rico. Talk to a doctor 24/7 from anywhere, and tap discounted dental, lab, imaging, and pharmacy partners across the country.",
  },
  {
    q: "Who is it for?",
    a: "MedBlue is built for self-employed and underinsured people in Houston — gig workers, freelancers, independent contractors, tradespeople, restaurant owners, realtors, and the families who count on them. If you don't have a group plan waiting for you, this is for you.",
  },
  {
    q: "How do I talk to a doctor?",
    a: "Through your membership's $0 24/7 telehealth, you can connect with a licensed provider any time of day or night — in English or Spanish — for free, with no per-visit fee. For ongoing needs, your dedicated virtual primary care provider is there too.",
  },
];

export default function Faq(): ReactElement {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">Questions, answered</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
            The honest answers
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 50}>
                <div
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen ? "border-teal/30 bg-white shadow-sm" : "border-line bg-white/60"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal/20 sm:px-6 sm:py-5"
                  >
                    <span className="text-[17px] font-semibold text-navy">{faq.q}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-teal transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 leading-relaxed text-body sm:px-6">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <CtaButton label="Get Started" href="#get-started" withArrow />
        </Reveal>
      </div>
    </section>
  );
}
