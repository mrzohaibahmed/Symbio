import type { ContactFormData } from "@/types";

export interface ContactRepository {
  create(data: ContactFormData): Promise<{ id: string }>;
}

/**
 * In-memory placeholder repository.
 * Replace with MongoDB implementation in a later phase.
 */
export class InMemoryContactRepository implements ContactRepository {
  private readonly records: Array<ContactFormData & { id: string; createdAt: string }> = [];

  async create(data: ContactFormData): Promise<{ id: string }> {
    const id = `contact_${Date.now()}`;
    this.records.push({
      ...data,
      id,
      createdAt: new Date().toISOString(),
    });
    return { id };
  }
}

export const contactRepository: ContactRepository = new InMemoryContactRepository();
