export type VisualType =
  | "architectural-grid"
  | "workflow-network"
  | "security-mesh"
  | "regulatory-lines"
  | "strategic-roadmap"
  | "financial-matrix";

export interface ChallengeItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  impacts: string[];
  services: string[];
  industries: string[];
  href: string;
  visualType: VisualType;
}

export interface WhyChooseUsSectionProps {
  className?: string;
}
