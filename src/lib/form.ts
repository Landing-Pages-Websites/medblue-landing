/* ─── Lead-form constants + validation (PPO Exchange) ─── */

export const STATES: string[] = [
  "Alabama", "Arkansas", "Delaware", "Florida", "Georgia", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maryland", "Michigan", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "North Carolina", "Ohio",
  "Oklahoma", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
  "Virginia", "West Virginia", "Wisconsin", "Wyoming",
];

export interface SelectOption {
  value: string;
  label: string;
}

/* Income options — under-threshold values are disqualifying. */
export const INCOME_OPTIONS: SelectOption[] = [
  { value: "Less than $40,000 (Individual)", label: "Less than $40,000 (Individual)" },
  { value: "$40,000 or more (Individual)", label: "$40,000 or more (Individual)" },
  { value: "Less than $75,000 (Household)", label: "Less than $75,000 (Household)" },
  { value: "$75,000 or more (Household)", label: "$75,000 or more (Household)" },
];

export const QUALIFYING_INCOME: ReadonlySet<string> = new Set([
  "$40,000 or more (Individual)",
  "$75,000 or more (Household)",
]);

export const CONDITION_OPTIONS: SelectOption[] = [
  { value: "No", label: "No" },
  { value: "Yes", label: "Yes" },
];

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  income: string;
  majorMedicalConditions: string;
}

export const EMPTY_FORM: LeadFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  state: "",
  income: "",
  majorMedicalConditions: "",
};

/* A lead is qualified when income meets the threshold AND there are no major
   medical conditions. Both qualified and disqualified leads still submit. */
export function isQualified(data: LeadFormData): boolean {
  return QUALIFYING_INCOME.has(data.income) && data.majorMedicalConditions === "No";
}

export function disqualificationReason(data: LeadFormData): string {
  const reasons: string[] = [];
  if (data.income && !QUALIFYING_INCOME.has(data.income)) reasons.push("income_below_threshold");
  if (data.majorMedicalConditions === "Yes") reasons.push("major_medical_conditions");
  return reasons.join(",");
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
