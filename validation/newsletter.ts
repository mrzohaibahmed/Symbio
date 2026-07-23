import { z } from "zod";

export const newsletterFormSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address"),
  website: z.string().max(0, "Spam detected").optional(),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
