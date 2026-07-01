import Image from "next/image";
import type { ReactElement } from "react";
import Reveal from "./Reveal";
import LeadForm from "./LeadForm";
import Eyebrow from "./Eyebrow";
import { CheckIcon } from "./icons";

const ASSURANCES: string[] = [
  "$40/month — or $336/year",
  "$0 24/7 telehealth, English & Spanish",
  "Benefits activate 3 days after enrollment",
  "A membership, not insurance — no surprises",
];

export default function GetStarted(): ReactElement {
  return (
    <section id="get-started" className="scroll-mt-24 bg-cream-deep py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left — closing image + copy */}
          <Reveal className="flex flex-col">
            <div className="relative flex-1 overflow-hidden rounded-3xl shadow-[0_30px_70px_-32px_rgba(8,42,60,0.55)]">
              <Image
                src="/images/family-game.jpg"
                alt="A family together at a youth soccer game in a Houston park"
                width={1200}
                height={875}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <Eyebrow tone="dark">Get started today</Eyebrow>
                <h2 className="text-h2 mt-3 text-cream">
                  Healthcare that works as hard as you do
                </h2>
              </div>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {ASSURANCES.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-navy">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-gradient text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right — second lead form */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-line bg-white p-5 shadow-[0_30px_70px_-30px_rgba(8,42,60,0.35)] sm:p-8">
              <div className="mb-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-[2.75rem] leading-none text-navy">$40</span>
                  <span className="text-sm font-medium text-body">/month · or $336/year</span>
                </div>
                <h3 className="mt-3 text-2xl text-navy">Start your membership</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">
                  It takes a couple of minutes. A MedBlue specialist will reach out to walk you
                  through your National Plan.
                </p>
              </div>
              <LeadForm id="get-started-form" cta="Get Started" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
