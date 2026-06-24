import type { ReactElement } from "react";
import Reveal from "./Reveal";
import { PhoneButton, QuoteButton } from "./Cta";
import { HeartPulseIcon, PiggyBankIcon, ShieldPlusIcon, SparkleIcon } from "./icons";

const BENEFITS: { icon: ReactElement; title: string; body: string }[] = [
  {
    icon: <PiggyBankIcon className="h-6 w-6" />,
    title: "Lower premiums when you're healthy",
    body:
      "These plans are health-based, so taking care of yourself pays off. Healthy applicants are rewarded with lower monthly premiums instead of being lumped in with everyone else.",
  },
  {
    icon: <ShieldPlusIcon className="h-6 w-6" />,
    title: "Little-to-no deductible",
    body:
      "Skip the big upfront bill before your coverage helps. Many of our plans come with little-to-no deductible, so your benefits start working for you sooner.",
  },
  {
    icon: <HeartPulseIcon className="h-6 w-6" />,
    title: "Built around you, not a group",
    body:
      "Without an employer plan, you shouldn't have to overpay. Your coverage is priced for your situation — real protection that finally makes sense for the way you work.",
  },
];

export default function WhyThisCoverage(): ReactElement {
  return (
    <section id="why-this-coverage" className="scroll-mt-24 bg-mist py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Why this coverage</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-[40px] sm:leading-tight">
            Good health should cost you less — not more
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-body">
            Most coverage charges everyone the same and buries the real cost in a sky-high
            deductible. We do it differently.
          </p>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-accent/25 bg-accent/8 p-5">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <SparkleIcon className="h-5 w-5" />
            </span>
            <p className="text-[15px] leading-relaxed text-navy">
              <span className="font-bold">The hook:</span> staying healthy unlocks lower premiums
              and little-to-no deductible. Your good habits finally count for something.
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <QuoteButton />
            <PhoneButton variant="outline" />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <div className="flex flex-col gap-5">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 100}>
                <article className="group flex items-start gap-5 rounded-2xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg sm:p-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary transition group-hover:bg-primary group-hover:text-white">
                    {b.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{b.title}</h3>
                    <p className="mt-2 leading-relaxed text-body">{b.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
