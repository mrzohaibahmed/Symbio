import { z } from "zod";

function optionalUrlField(message: string) {
  return z
    .string()
    .trim()
    .refine(
      (value) => value === "" || /^https?:\/\/.+/i.test(value),
      message,
    );
}

export const careerApplicationSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .regex(/^[+]?[\d\s()-]{7,20}$/, "Please enter a valid phone number"),
  linkedin: optionalUrlField("Please enter a valid LinkedIn URL"),
  portfolio: optionalUrlField("Please enter a valid portfolio URL"),
  experience: z.string().min(1, "Please select your experience level"),
  coverLetter: z
    .string()
    .trim()
    .min(50, "Cover letter must be at least 50 characters"),
  expectedSalary: z.string().trim().optional(),
  availability: z.string().min(1, "Please select your availability"),
  jobSlug: z.string().min(1),
  jobTitle: z.string().min(1),
});

export type CareerApplicationValues = z.infer<typeof careerApplicationSchema>;

export const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024;
