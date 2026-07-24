export interface IndustrySnapshot {
  businessesServed: string;
  typicalCompanySize: string;
  coreServices: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  executiveSummary: string;
  challenges: string[];
  howSymbioHelps: string[];
  snapshot: IndustrySnapshot;
  ctaLink: string;
}

export interface IndustriesSectionProps {
  className?: string;
  showEngagements?: boolean;
}
