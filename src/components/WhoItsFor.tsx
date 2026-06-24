import Image from "next/image";
import type { ReactElement } from "react";
import Reveal from "./Reveal";
import { DualCta } from "./Cta";
import { HardHatIcon, HomeIcon, BriefcaseIcon, StoreIcon } from "./icons";

const AUDIENCES: {
  image: string;
  alt: string;
  icon: ReactElement;
  role: string;
  line: string;
}[] = [
  {
    image: "/images/contractor.jpg",
    alt: "An independent contractor on a job site",
    icon: <HardHatIcon className="h-5 w-5" />,
    role: "Independent contractors",
    line: "On the tools all day with no employer plan to fall back on.",
  },
  {
    image: "/images/realtor.jpg",
    alt: "A real estate agent",
    icon: <HomeIcon className="h-5 w-5" />,
    role: "Realtors",
    line: "Commission income, your own schedule — and your own benefits.",
  },
  {
    image: "/images/salesrep.jpg",
    alt: "A commission sales professional on a phone call",
    icon: <BriefcaseIcon className="h-5 w-5" />,
    role: "Sales professionals",
    line: "Always on the move and paying for coverage out of your own pocket.",
  },
  {
    image: "/images/owner.jpg",
    alt: "A small business owner in her shop",
    icon: <StoreIcon className="h-5 w-5" />,
    role: "Small business owners",
    line: "Running the show means the coverage is on you, too.",
  },
];

export default function WhoItsFor(): ReactElement {
  return (
    <section id="who-its-for" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Who it&apos;s for</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-[40px] sm:leading-tight">
            If you pay for everything yourself, you&apos;re in the right place
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-body">
            No HR department. No group plan waiting for you. When you work for yourself, health
            coverage is one more thing on your plate — so we made it simple and affordable.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.role} delay={i * 90}>
              <article className="group h-full overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/5 to-transparent" />
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 text-primary shadow-sm">
                    {a.icon}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-navy">{a.role}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{a.line}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <DualCta />
        </Reveal>
      </div>
    </section>
  );
}
