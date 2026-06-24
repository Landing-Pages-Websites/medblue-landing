import type { ReactElement } from "react";
import Logo from "./Logo";
import { PHONE_DISPLAY, PHONE_HREF } from "./Cta";
import { PhoneIcon } from "./icons";

export default function Footer(): ReactElement {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-navy py-12 text-white/70">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <Logo tone="light" />
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Affordable, nationwide health coverage built for people who work for themselves —
              with plans starting at $189/month and licensed agents ready to help.
            </p>
          </div>
          <div className="shrink-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Speak with a licensed agent
            </p>
            <a
              href={PHONE_HREF}
              className="mt-2 inline-flex items-center gap-2 text-2xl font-extrabold text-white transition hover:text-accent"
            >
              <PhoneIcon className="h-6 w-6 text-accent" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/45">
          <div className="mb-4 flex items-center gap-2 text-white/55">
            <a
              href="https://leadclique.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white/80"
            >
              Privacy Policy
            </a>
            <span aria-hidden="true" className="text-white/30">
              &middot;
            </span>
            <a
              href="https://leadclique.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white/80"
            >
              Terms of Service
            </a>
          </div>
          <p>
            &copy; {year} The Exchange. All rights reserved. This is a solicitation of insurance.
            Coverage, availability, and pricing vary by plan and by state, and are determined during
            your consultation with a licensed agent. Plans starting at $189/month are based on
            eligibility; your rate depends on your individual situation. Submitting the form does not
            guarantee coverage or a specific price.
          </p>
        </div>
      </div>
    </footer>
  );
}
