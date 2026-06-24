import Image from "next/image";
import type { ReactElement } from "react";
import Reveal from "./Reveal";
import {
  VideoIcon, HeartPulseIcon, ToothIcon, FlaskIcon,
  ScanIcon, PillIcon, ReceiptIcon, CompassIcon, CheckIcon,
} from "./icons";

const BENEFITS: { icon: ReactElement; name: string; figure: string; desc: string }[] = [
  {
    icon: <VideoIcon className="h-6 w-6" />, name: "24/7 Telehealth", figure: "$0",
    desc: "Free, unlimited virtual urgent care — English & Spanish, anywhere in the U.S. & Puerto Rico.",
  },
  {
    icon: <HeartPulseIcon className="h-6 w-6" />, name: "Virtual Primary Care", figure: "$0",
    desc: "A dedicated provider for preventive care, chronic conditions, prescriptions and referrals — no per-visit fee.",
  },
  {
    icon: <ToothIcon className="h-6 w-6" />, name: "Dental Savings", figure: "Cleanings from $47",
    desc: "Nationwide Careington network — discounted exams, X-rays, fillings, crowns and root canals.",
  },
  {
    icon: <FlaskIcon className="h-6 w-6" />, name: "Lab Services", figure: "Up to 60% off",
    desc: "Hundreds of lab tests at reduced member pricing through a nationwide certified lab network.",
  },
  {
    icon: <ScanIcon className="h-6 w-6" />, name: "Diagnostic Imaging", figure: "Up to 60% off",
    desc: "Savings on MRIs, CT scans, X-rays, EKGs and ultrasounds at accredited imaging centers.",
  },
  {
    icon: <PillIcon className="h-6 w-6" />, name: "Pharmacy Savings", figure: "Up to 80% off",
    desc: "Save on brand-name & generic medications at 70,000+ pharmacies nationwide.",
  },
  {
    icon: <ReceiptIcon className="h-6 w-6" />, name: "Hospital Bill Advocacy", figure: "Bills over $300",
    desc: "We negotiate eligible medical bills on your behalf — hospital stays, ER visits and surgeries.",
  },
  {
    icon: <CompassIcon className="h-6 w-6" />, name: "Care Navigators", figure: "A real person",
    desc: "Help finding providers, understanding your membership and booking visits — by phone, text or email.",
  },
];

export default function WhatsIncluded(): ReactElement {
  return (
    <section id="whats-included" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">What&apos;s included</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
              Everything you need for the everyday
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">
              Your National Plan membership puts real care and real savings within reach — the
              doctor visits, prescriptions, and follow-ups that keep your life moving. No surprises,
              no fine print games.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl shadow-[0_24px_50px_-30px_rgba(8,42,60,0.5)]">
              <Image
                src="/images/contractor-jobsite.jpg"
                alt="An electrician leaving a job site at golden hour"
                width={1600}
                height={914}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.name} delay={(i % 4) * 70}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(8,42,60,0.5)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-gradient text-white">
                  {b.icon}
                </span>
                <h3 className="mt-5 text-xl text-navy">{b.name}</h3>
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                  <CheckIcon className="h-4 w-4" /> {b.figure}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-body">{b.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="text-center text-sm text-sage">
            Member benefits activate 3 days after enrollment.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-4">
          <a href="#get-started" className="rounded-full bg-navy px-7 py-3.5 text-[15px] font-semibold text-cream transition hover:bg-navy/90">
            Get Started
          </a>
          <a href="#get-started" className="text-[15px] font-semibold text-navy underline underline-offset-4 hover:text-teal">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
