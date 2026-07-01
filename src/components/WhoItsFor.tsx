import Image from "next/image";
import type { ReactElement } from "react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { UtensilsIcon, CoffeeIcon, ArrowRightIcon } from "./icons";

const IDENTITIES: string[] = [
  "Tradespeople & contractors",
  "Freelancers & creatives",
  "Gig & delivery drivers",
  "Realtors",
  "Restaurant owners",
  "Small business owners",
  "Working families",
];

const NEIGHBORHOODS = "The Woodlands · Katy · Sugar Land · Pearland · Cypress";

export default function WhoItsFor(): ReactElement {
  return (
    <section id="who-its-for" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <h2 className="text-h2 mt-4 text-navy">
              For the people who bet on themselves
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              No HR department. No group plan waiting for you. You built your work from scratch in
              Houston — and your healthcare should fit the way you actually live. MedBlue is for the
              builders, the makers, and the doers across {NEIGHBORHOODS}.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {IDENTITIES.map((id) => (
                <li
                  key={id}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-navy"
                >
                  {id}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-lg font-medium text-navy">
              If that sounds like you, you&apos;re exactly who we built this for.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href="#get-started" className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-[15px] font-semibold text-cream shadow-lg shadow-navy/20 transition hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal/40">
                Get Started
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a href="#get-started" className="rounded text-[15px] font-semibold text-navy underline underline-offset-4 transition hover:text-teal focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal/25">
                Learn more
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-4 sm:gap-5">
            <figure className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_24px_50px_-30px_rgba(8,42,60,0.5)]">
              <Image
                src="/images/restaurant-owner.jpg"
                alt="A taqueria owner standing in front of his restaurant"
                fill
                sizes="(max-width: 1024px) 50vw, 280px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/5 to-transparent" />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-2 text-sm font-semibold text-cream">
                <UtensilsIcon className="h-4 w-4 text-teal-light" /> Restaurant owners
              </figcaption>
            </figure>
            <figure className="group relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_24px_50px_-30px_rgba(8,42,60,0.5)]">
              <Image
                src="/images/entrepreneur-coffee.jpg"
                alt="A coffee-shop owner in the doorway of her cafe"
                fill
                sizes="(max-width: 1024px) 50vw, 280px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/5 to-transparent" />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-2 text-sm font-semibold text-cream">
                <CoffeeIcon className="h-4 w-4 text-teal-light" /> Small business owners
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
