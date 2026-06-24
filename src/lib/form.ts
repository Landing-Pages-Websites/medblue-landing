/* ─── Lead-form constants + validation (MedBlue National Plan) ─── */

export interface SelectOption {
  value: string;
  label: string;
}

/* Qualifying confirmation — the visitor must confirm they understand MedBlue is a
   membership, not insurance. "Yes" qualifies the lead; "No" disqualifies it (but the
   lead still submits). */
export const CONFIRM_YES = "Yes, I understand";
export const CONFIRM_NO = "No, I do not understand";

export const CONFIRM_OPTIONS: SelectOption[] = [
  { value: CONFIRM_YES, label: CONFIRM_YES },
  { value: CONFIRM_NO, label: CONFIRM_NO },
];

export const DISQUALIFICATION_REASON = "did_not_confirm_membership_understanding";

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  membershipUnderstanding: string;
}

export const EMPTY_FORM: LeadFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  membershipUnderstanding: "",
};

/* A lead is qualified only when the visitor confirms they understand MedBlue is a
   membership. Both qualified and disqualified leads still POST. */
export function isQualified(data: LeadFormData): boolean {
  return data.membershipUnderstanding === CONFIRM_YES;
}

export function disqualificationReason(data: LeadFormData): string {
  return isQualified(data) ? "" : DISQUALIFICATION_REASON;
}

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

interface ValidationResult {
  valid: boolean;
  error: string;
}

export function isValidPhone(value: string): ValidationResult {
  const digits = value.replace(/\D/g, "");
  const normalized = digits.length === 11 && digits[0] === "1" ? digits.slice(1) : digits;
  if (normalized.length !== 10) return { valid: false, error: "Please enter a valid 10-digit phone number" };
  const area = normalized.slice(0, 3);
  const exchange = normalized.slice(3, 6);
  if (area[0] === "0" || area[0] === "1") return { valid: false, error: "Area code cannot start with 0 or 1" };
  if (exchange[0] === "0" || exchange[0] === "1") return { valid: false, error: "Invalid phone number format" };
  if (["211", "311", "411", "511", "611", "711", "811", "911"].includes(area)) {
    return { valid: false, error: "Service codes are not valid phone numbers" };
  }
  if (exchange === "555") return { valid: false, error: "555 numbers are reserved" };
  if (new Set(normalized).size === 1) return { valid: false, error: "Please enter a real phone number" };
  return { valid: true, error: "" };
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
