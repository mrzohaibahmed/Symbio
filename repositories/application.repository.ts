import type { CareerApplicationData } from "@/types";

export interface ApplicationRepository {
  create(data: CareerApplicationData): Promise<{ id: string }>;
}

export class InMemoryApplicationRepository implements ApplicationRepository {
  private readonly records: Array<
    CareerApplicationData & { id: string; createdAt: string }
  > = [];

  async create(data: CareerApplicationData): Promise<{ id: string }> {
    const id = `application_${Date.now()}`;
    this.records.push({
      ...data,
      id,
      createdAt: new Date().toISOString(),
    });
    return { id };
  }
}

export const applicationRepository: ApplicationRepository =
  new InMemoryApplicationRepository();
