export type ServiceIconName =
  | "calculator"
  | "receipt"
  | "briefcase"
  | "building"
  | "database"
  | "file-invoice"
  | "pos"
  | "chart"
  | "clipboard-check"
  | "shield";

export interface ServiceCategory {
  id: string;
  label: string;
  slug: string;
  description: string;
}

export interface ServiceProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface ServiceCaseStudyPreview {
  title: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  imageAlt: string;
  href: string;
}

/**
 * Full service catalog entry used by Services listing and detail pages.
 */
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  categoryId: string;
  icon: ServiceIconName;
  image: string;
  imageAlt: string;
  href: string;
  features: string[];
  benefits: string[];
  overview: string;
  process: ServiceProcessStep[];
  faqIds: string[];
  industries: string[];
  relatedServiceIds: string[];
  caseStudy: ServiceCaseStudyPreview;
  keywords: string[];
}
