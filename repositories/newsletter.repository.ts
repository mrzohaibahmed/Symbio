import type { NewsletterFormData } from "@/types";

export interface NewsletterRepository {
  subscribe(data: NewsletterFormData): Promise<{ id: string; alreadySubscribed: boolean }>;
}

export class InMemoryNewsletterRepository implements NewsletterRepository {
  private readonly emails = new Set<string>();

  async subscribe(
    data: NewsletterFormData,
  ): Promise<{ id: string; alreadySubscribed: boolean }> {
    const normalized = data.email.trim().toLowerCase();
    const alreadySubscribed = this.emails.has(normalized);
    this.emails.add(normalized);
    return {
      id: `newsletter_${normalized.replace(/[^a-z0-9]/gi, "_")}`,
      alreadySubscribed,
    };
  }
}

export const newsletterRepository: NewsletterRepository =
  new InMemoryNewsletterRepository();
