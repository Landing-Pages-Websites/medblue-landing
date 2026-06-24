"use client";

import { useState, type ReactElement } from "react";
import Reveal from "./Reveal";
import { DualCta } from "./Cta";
import { ChevronDownIcon } from "./icons";

const FAQS: { q: string; a: string }[] = [
  {
    q: "How can coverage start at $189 a month?",
    a: "These are health-based plans, which means healthy applicants are rewarded with lower premiums. Because pricing reflects your health rather than a one-size-fits-all group rate, many self-employed people qualify for plans starting around $189 per month. Your exact price depends on your situation — a licensed agent will give you a free, personalized quote.",
  },
  {
    q: "What does \"health-based\" actually mean for me?",
    a: "It means your good health works in your favor. Instead of charging everyone the same, these plans factor in your health status — so staying healthy can unlock lower premiums and little-to-no deductible. During your free quote, a licensed agent reviews a couple of simple questions to find the plans you may qualify for.",
  },
  {
    q: "Is this coverage really nationwide?",
    a: "Yes. Your coverage travels with you across the country, so you're protected whether you're working close to home or on a job in another state. Plans are currently available in 29 states and growing.",
  },
  {
    q: "Am I covered on and off the job?",
    a: "You're protected 24/7 — on the job site and off the clock. For self-employed people without an employer plan or workplace coverage, that around-the-clock protection is one of the biggest reasons this coverage makes sense.",
  },
  {
    q: "What's included in the coverage?",
    a: "Plans are built to cover the everyday care that keeps you working — doctor visits, prescriptions, and preventive care like routine checkups and screenings — plus protection if something unexpected happens. A licensed agent will walk you through exactly what each plan you qualify for includes.",
  },
  {
    q: "Is the quote really free with no obligation?",
    a: "Completely. Your quote is free, and there's never any pressure to enroll. A licensed agent simply explains your options in plain language so you can decide what's right for you — on your own terms. Consent to be contacted is not a condition of purchase.",
  },
];

export default function Faq(): ReactElement {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Questions, answered</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-[40px] sm:leading-tight">
            What the self-employed ask us most
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 50}>
                <div
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen ? "border-primary/30 bg-mist/50 shadow-sm" : "border-line bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-mist/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 sm:px-6 sm:py-5"
                  >
                    <span className="text-[15px] font-bold text-navy sm:text-base">{faq.q}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
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

        <Reveal className="mt-12">
          <DualCta />
        </Reveal>
      </div>
    </section>
  );
}
