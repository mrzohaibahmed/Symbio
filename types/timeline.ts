export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface CompanyStory {
  introduction: string;
  mission: string;
  vision: string;
  values: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}
