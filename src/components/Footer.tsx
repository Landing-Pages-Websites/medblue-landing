import type { ReactElement } from "react";
import Logo from "./Logo";

export default function Footer(): ReactElement {
  const year = 2026;
  return (
    <footer className="bg-navy py-14 text-cream/70">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-cream/55">
              MedBlue is a healthcare membership built for the people of Houston who work for
              themselves — simple, affordable everyday care for builders, makers, and doers.
            </p>
          </div>
          <div className="rounded-2xl border border-cream/15 bg-cream/[0.04] px-5 py-4 md:max-w-xs">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-light">
              Not Insurance
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              NOT INSURANCE — This is a healthcare membership, not health insurance.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-xs leading-relaxed text-cream/45">
          <p>
            &copy; {year} MedBlue. All rights reserved. MedBlue National Plan is a healthcare
            membership, not health insurance, and is not a substitute for major medical insurance.
            Membership is $40/month or $336/year. Member benefits activate three days after
            enrollment. Savings figures reflect typical member pricing through MedBlue&apos;s partner
            networks and may vary by provider and location.
          </p>
          <p className="mt-4">
            <a
              href="https://www.medblue.com/national/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-cream"
            >
              Privacy Policy
            </a>
            <span className="mx-1.5 text-cream/40">·</span>
            <a
              href="https://www.medblue.com/national/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-cream"
            >
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
