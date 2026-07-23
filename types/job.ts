export type EmploymentType = "full-time" | "part-time" | "contract" | "internship";

export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  employmentType: EmploymentType;
  experience: string;
  location: string;
  shortDescription: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  workingHours: string;
  salaryRange?: string;
  href: string;
  relatedJobIds: string[];
  postedAt: string;
  isOpen: boolean;
}
