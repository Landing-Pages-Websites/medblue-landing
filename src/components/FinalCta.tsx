import type { ReactElement } from "react";
import LeadForm from "./LeadForm";
import { PhoneButton } from "./Cta";
import { CheckIcon } from "./icons";

const ASSURANCES: string[] = [
  "Plans starting at $189/month",
  "Nationwide, 24/7 — on & off the job",
  "Lower premiums for healthy applicants",
  "Free, no-obligation quote from a licensed agent",
];

export default function FinalCta(): ReactElement {
  return (
    <section id="final-cta" className="relative scroll-mt-24 overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Get started today</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-[42px]">
            Get covered on your own terms
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/75">
            You handle everything else yourself — coverage shouldn&apos;t be the hard part. Get your
            free quote in minutes, or talk to a licensed agent right now.
          </p>
          <ul className="mt-7 space-y-3">
            {ASSURANCES.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/90">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <CheckIcon className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-sm text-white/60">Rather talk it through? Call a licensed agent:</p>
            <PhoneButton variant="solid" className="mt-3" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white p-5 shadow-2xl sm:p-7">
          <div className="mb-4">
            <h3 className="text-[22px] font-bold text-navy">Get my free quote</h3>
            <p className="mt-1 text-sm text-body">Two minutes, no obligation, no spam.</p>
          </div>
          <LeadForm id="final-form" />
        </div>
      </div>
    </section>
  );
}
