import type { SVGProps, ReactElement } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({
  children,
  className,
  ...props
}: IconProps & { children: React.ReactNode }): ReactElement {
  // Default size keeps an unsized icon from blowing up to the 24×24 viewBox at full scale;
  // any incoming className wins so callers can override (e.g. "h-8 w-8").
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`w-5 h-5 ${className ?? ""}`}
      {...props}
    >
      {children}
    </svg>
  );
}

export function PhoneIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </Base>
  );
}

export function CheckIcon(props: IconProps): ReactElement {
  return (
    <Base strokeWidth={2.25} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </Base>
  );
}

export function ShieldCheckIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
      <path d="m9 12 2 2 4-4" />
    </Base>
  );
}

export function PiggyBankIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5Z" />
      <path d="M2 9v1c0 1.1.9 2 2 2h1" />
      <path d="M16 11h.01" />
    </Base>
  );
}

export function StethoscopeIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </Base>
  );
}

export function PillIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <path d="m10.5 20.5-7-7a4.95 4.95 0 1 1 7-7l7 7a4.95 4.95 0 1 1-7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </Base>
  );
}

export function GlobeIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </Base>
  );
}

export function ClockIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </Base>
  );
}

export function HeartPulseIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </Base>
  );
}

export function ShieldPlusIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </Base>
  );
}

export function HardHatIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Z" />
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <path d="M4 15v-3a6 6 0 0 1 6-6" />
      <path d="M14 6a6 6 0 0 1 6 6v3" />
    </Base>
  );
}

export function HomeIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
      <path d="M9 22V12h6v10" />
    </Base>
  );
}

export function BriefcaseIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <path d="M2 13h20" />
    </Base>
  );
}

export function StoreIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <path d="m2 7 1.5-3.5A1 1 0 0 1 4.4 3h15.2a1 1 0 0 1 .9.5L22 7" />
      <path d="M2 7v1a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0V7" />
      <path d="M4 11.5V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8.5" />
      <path d="M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5" />
    </Base>
  );
}

export function ClipboardIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <rect width="8" height="4" x="8" y="2" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </Base>
  );
}

export function HeadsetIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <path d="M3 14h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
      <path d="M18 14h3v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z" />
      <path d="M21 14v-2a9 9 0 0 0-18 0v2" />
      <path d="M21 19a4 4 0 0 1-4 3h-2" />
    </Base>
  );
}

export function SparkleIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m7 7 1.5 1.5M15.5 15.5 17 17M17 7l-1.5 1.5M8.5 15.5 7 17" />
    </Base>
  );
}

export function StarIcon(props: IconProps): ReactElement {
  return (
    <Base fill="currentColor" stroke="none" {...props}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01Z" />
    </Base>
  );
}

export function ChevronDownIcon(props: IconProps): ReactElement {
  return (
    <Base strokeWidth={2} {...props}>
      <path d="m6 9 6 6 6-6" />
    </Base>
  );
}

export function ArrowRightIcon(props: IconProps): ReactElement {
  return (
    <Base strokeWidth={2} {...props}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </Base>
  );
}

export function LockIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <rect width="18" height="11" x="3" y="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </Base>
  );
}

export function MapPinIcon(props: IconProps): ReactElement {
  return (
    <Base {...props}>
      <path d="M20 10c0 4.4-5.5 9.4-7.3 11a1 1 0 0 1-1.4 0C9.5 19.4 4 14.4 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Base>
  );
}
