"use client";

import { useCallback, useRef, useState, type ReactElement } from "react";
import useMegaLeadForm from "@/hooks/useMegaLeadForm";
import {
  CONFIRM_OPTIONS,
  EMPTY_FORM,
  disqualificationReason,
  formatPhone,
  isQualified,
  isValidEmail,
  isValidPhone,
  type LeadFormData,
} from "@/lib/form";
import { CheckIcon, LockIcon, SparkleIcon } from "./icons";

interface LeadFormProps {
  id: string;
  cta?: string;
}

const INPUT_CLASS =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-navy placeholder:text-sage/70 outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/15";

type Errors = Partial<Record<"phone" | "email", string>>;

interface TrackingWindow {
  dataLayer?: Record<string, unknown>[];
  fbq?: (...args: unknown[]) => void;
  MegaTag?: { trackEvent?: (name: string, payload: Record<string, unknown>) => void };
}

function fireTrackingEvents(data: LeadFormData, qualified: boolean): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as TrackingWindow;
  w.dataLayer = w.dataLayer || [];
  // Hard-floor + campaign events — fire for EVERY submission (qualified or not).
  w.dataLayer.push({ event: "form_submission", lead_qualified: qualified });
  w.dataLayer.push({ event: "form_submit", lead_qualified: qualified });
  w.MegaTag?.trackEvent?.("form_submit", {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    qualified,
  });
  // Meta optimization events ONLY for qualified leads.
  if (qualified) {
    w.dataLayer.push({ event: "qualified_lead", lead_qualified: true });
    if (typeof w.fbq === "function") w.fbq("track", "Lead");
  }
}

export default function LeadForm({ id, cta = "Get Started" }: LeadFormProps): ReactElement {
  const { submit } = useMegaLeadForm();
  const [data, setData] = useState<LeadFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const lockRef = useRef(false);

  const update = useCallback((field: keyof LeadFormData, value: string) => {
    const next = field === "phone" ? formatPhone(value) : value;
    setData((prev) => ({ ...prev, [field]: next }));
    if (field === "phone" || field === "email") setErrors((e) => ({ ...e, [field]: undefined }));
  }, []);

  const runSubmit = useCallback(async () => {
    if (lockRef.current) return;
    lockRef.current = true;
    setSubmitting(true);
    const qualified = isQualified(data);
    try {
      // EVERY submission is a lead — qualified or not — and must POST.
      await submit({
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        email: data.email.trim(),
        phone: data.phone.replace(/\D/g, ""),
        membershipUnderstanding: data.membershipUnderstanding,
        qualified,
        disqualification_reason: disqualificationReason(data),
      });
      fireTrackingEvents(data, qualified);
    } catch {
      // The lead attempt was made; still confirm to the visitor.
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  }, [data, submit]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (submitting || submitted) return;
      void runSubmit();
    },
    [submitting, submitted, runSubmit]
  );

  // Validate-first, then requestSubmit() — never a raw type="submit".
  const handleClick = useCallback(() => {
    if (submitting || submitted) return;
    const form = formRef.current;
    if (!form) return;
    // Native required/pattern constraints first — surfaces the browser UI and blocks empties.
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Custom phone/email format checks; bail (no submit, no tracking) if any fail.
    const nextErrors: Errors = {};
    const phoneResult = isValidPhone(data.phone);
    if (!phoneResult.valid) nextErrors.phone = phoneResult.error;
    if (!isValidEmail(data.email)) nextErrors.email = "Please enter a valid email address";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    form.requestSubmit();
  }, [data.phone, data.email, submitting, submitted]);

  if (submitted) return <SuccessPanel />;

  return (
    <form ref={formRef} id={id} className="space-y-3.5" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-2 gap-3">
        <input
          name="firstName" type="text" required autoComplete="given-name" placeholder="First name"
          aria-label="First name" value={data.firstName}
          onChange={(e) => update("firstName", e.target.value)} className={INPUT_CLASS}
        />
        <input
          name="lastName" type="text" required autoComplete="family-name" placeholder="Last name"
          aria-label="Last name" value={data.lastName}
          onChange={(e) => update("lastName", e.target.value)} className={INPUT_CLASS}
        />
      </div>
      <input
        name="email" type="email" required autoComplete="email" placeholder="Email address"
        aria-label="Email address" value={data.email}
        pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
        onChange={(e) => update("email", e.target.value)}
        className={`${INPUT_CLASS} ${errors.email ? "border-error focus:border-error focus:ring-error/15" : ""}`}
      />
      {errors.email && <p className="-mt-1.5 text-xs text-error">{errors.email}</p>}
      <div>
        <input
          name="phone" type="tel" required inputMode="numeric" autoComplete="tel"
          pattern="\(\d{3}\) \d{3}-\d{4}" placeholder="Phone number" aria-label="Phone number"
          value={data.phone} onChange={(e) => update("phone", e.target.value)}
          className={`${INPUT_CLASS} ${errors.phone ? "border-error focus:border-error focus:ring-error/15" : ""}`}
        />
        {errors.phone && <p className="mt-1.5 text-xs text-error">{errors.phone}</p>}
      </div>
      <SelectField
        name="membershipUnderstanding"
        label="Please confirm you understand that MedBlue is a healthcare membership, not health insurance."
        value={data.membershipUnderstanding}
        onChange={(v) => update("membershipUnderstanding", v)}
        options={CONFIRM_OPTIONS}
      />
      <p className="text-[11px] leading-relaxed text-sage">
        By providing your phone number and clicking submit, you agree to be contacted by MedBlue by
        phone call, text message, and email at the number provided — including via automated
        technology and AI-assisted calls — for membership information, even if your number is on a
        Do Not Call list. Consent is not a condition of purchase. Message and data rates may apply.
      </p>
      <button
        type="button" onClick={handleClick} disabled={submitting}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 text-base font-semibold text-cream shadow-lg shadow-navy/20 transition hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal/40 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending…" : cta}
      </button>
      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-sage">
        <LockIcon className="h-3.5 w-3.5" /> Your information stays private. No spam, ever.
      </p>
    </form>
  );
}

interface SelectFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

function SelectField({ name, label, value, onChange, options }: SelectFieldProps): ReactElement {
  return (
    <div className="relative">
      <select
        name={name} required aria-label={label} value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${INPUT_CLASS} appearance-none pr-10 ${value ? "text-navy" : "text-sage/70"}`}
      >
        <option value="" disabled>I understand MedBlue is a membership, not insurance…</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-navy">{opt.label}</option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-sage"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}

function SuccessPanel(): ReactElement {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-gradient text-white">
        <SparkleIcon className="h-8 w-8" />
      </span>
      <h3 className="text-3xl text-navy">You&apos;re in.</h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-body">
        A MedBlue specialist will reach out shortly to walk you through your National Plan
        membership and answer anything you&apos;re wondering about.
      </p>
      <ul className="mt-6 space-y-2.5 text-left text-sm text-body">
        {[
          "Your membership is just $40/month",
          "$0 24/7 telehealth, English & Spanish",
          "Benefits activate 3 days after enrollment",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-gradient text-white">
              <CheckIcon className="h-3 w-3" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
