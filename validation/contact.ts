import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  company: z.string().trim().optional(),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => !value || /^[+]?[\d\s()-]{7,20}$/.test(value),
      "Please enter a valid phone number",
    ),
  serviceInterest: z.string().min(1, "Please select a service"),
  subject: z.string().trim().min(3, "Please enter a subject"),
  message: z.string().trim().min(20, "Message must be at least 20 characters"),
  website: z.string().max(0, "Spam detected").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
