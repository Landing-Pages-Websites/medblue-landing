"use client";

import { useCallback, useRef, useState, type ReactElement } from "react";
import useMegaLeadForm from "@/hooks/useMegaLeadForm";
import {
  CONDITION_OPTIONS,
  EMPTY_FORM,
  INCOME_OPTIONS,
  STATES,
  disqualificationReason,
  formatPhone,
  isQualified,
  isValidEmail,
  isValidPhone,
  type LeadFormData,
} from "@/lib/form";
import { CheckIcon, LockIcon, ShieldCheckIcon } from "./icons";

interface LeadFormProps {
  id: string;
}

const INPUT_CLASS =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-navy placeholder:text-muted/70 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15";

type Errors = Partial<Record<"phone" | "email", string>>;

function fireTrackingEvents(data: LeadFormData, qualified: boolean): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
    MegaTag?: { trackEvent?: (name: string, payload: Record<string, unknown>) => void };
  };
  w.dataLayer = w.dataLayer || [];
  // Hard-floor event + campaign event — fires on every successful submission.
  w.dataLayer.push({ event: "form_submission", lead_qualified: qualified, state: data.state });
  w.dataLayer.push({ event: "form_submit", lead_qualified: qualified });
  w.MegaTag?.trackEvent?.("form_submit", { ...data, qualified });
  // Meta optimization event only for qualified leads.
  if (qualified && typeof w.fbq === "function") w.fbq("track", "Lead");
}

export default function LeadForm({ id }: LeadFormProps): ReactElement {
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
        state: data.state,
        income: data.income,
        majorMedicalConditions: data.majorMedicalConditions,
        qualified,
        disqualification_reason: qualified ? "" : disqualificationReason(data),
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
      // Native `required`/`pattern` validity already blocked empty submits before this fires.
      // Run the custom phone/email format checks; bail (no submit, no tracking) if any fail.
      const nextErrors: Errors = {};
      const phoneResult = isValidPhone(data.phone);
      if (!phoneResult.valid) nextErrors.phone = phoneResult.error;
      if (!isValidEmail(data.email)) nextErrors.email = "Please enter a valid email address";
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) return;
      void runSubmit();
    },
    [data.phone, data.email, submitting, submitted, runSubmit]
  );

  if (submitted) return <SuccessPanel qualified={isQualified(data)} />;

  return (
    <form ref={formRef} id={id} className="space-y-3.5" onSubmit={handleSubmit}>
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
        <p className="mt-2 text-[11px] leading-relaxed text-muted">
          By providing your phone number and clicking submit, you agree to be contacted by a
          licensed insurance agent by phone call, text message, and email at the number provided,
          including via automated technology, for up to 90 days, even if your number is on a Do Not
          Call list. Consent is not a condition of purchase. Message and data rates may apply.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <SelectField
          name="state" label="Select your state" value={data.state}
          onChange={(v) => update("state", v)} options={STATES.map((s) => ({ value: s, label: s }))}
        />
        <SelectField
          name="income" label="Estimated annual income" value={data.income}
          onChange={(v) => update("income", v)} options={INCOME_OPTIONS}
        />
      </div>
      <SelectField
        name="majorMedicalConditions" label="Any major medical conditions?"
        value={data.majorMedicalConditions} onChange={(v) => update("majorMedicalConditions", v)}
        options={CONDITION_OPTIONS}
      />
      <button
        type="submit" disabled={submitting}
        className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Get My Free Quote"}
      </button>
      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted">
        <LockIcon className="h-3.5 w-3.5" /> Secure &amp; confidential — no obligation, ever.
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
        className={`${INPUT_CLASS} appearance-none pr-10 ${value ? "text-navy" : "text-muted/70"}`}
      >
        <option value="" disabled>{label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-navy">{opt.label}</option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}

function SuccessPanel({ qualified }: { qualified: boolean }): ReactElement {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/12 text-accent">
        <ShieldCheckIcon className="h-8 w-8" />
      </span>
      <h3 className="text-xl font-bold text-navy">You&apos;re all set</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-body">
        Thanks — a licensed agent will reach out shortly with your free, no-obligation quote.
        {qualified ? " Based on your answers, you may qualify for our lowest-premium plans." : ""}{" "}
        Want to talk now? Call{" "}
        <a href="tel:+18885697765" className="font-semibold text-primary hover:underline">
          1-888-569-7765
        </a>
        .
      </p>
      <ul className="mt-5 space-y-2 text-left text-sm text-body">
        {["No obligation and no pressure", "Coverage 24/7, on and off the job", "Plans starting at $189/month"].map(
          (item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-accent" /> {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
