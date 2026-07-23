import { z } from "zod";

export const consultationFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  company: z.string().trim().min(2, "Please enter your company name"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .regex(/^[+]?[\d\s()-]{7,20}$/, "Please enter a valid phone number"),
  businessSize: z.string().min(1, "Please select business size"),
  industry: z.string().min(1, "Please select an industry"),
  interestedService: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  message: z.string().trim().min(20, "Message must be at least 20 characters"),
  website: z.string().max(0, "Spam detected").optional(),
});

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;
