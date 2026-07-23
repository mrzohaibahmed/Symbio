export type FeatureIconName =
  | "users"
  | "award"
  | "heart-handshake"
  | "cpu"
  | "headset"
  | "layers";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: FeatureIconName;
}

export type IndustryIconName =
  | "heart-pulse"
  | "shopping-bag"
  | "factory"
  | "graduation-cap"
  | "hard-hat"
  | "home"
  | "utensils"
  | "hand-heart"
  | "monitor";

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: IndustryIconName;
  image: string;
  imageAlt: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  company: string;
  position: string;
  review: string;
  rating: number;
  photo: string;
  photoAlt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  href: string;
  image: string;
  imageAlt: string;
  readTime: string;
  date: string;
  dateLabel: string;
}

export interface TrustedCompany {
  id: string;
  name: string;
  logo: string;
  logoAlt?: string;
}

export interface FloatingCard {
  id: string;
  title: string;
  subtitle: string;
}

/**
 * Lightweight service shape used by the homepage services grid.
 * Full catalog lives in types/service.ts as Service.
 */
export type { ServiceIconName } from "./service";

export interface HomeService {
  id: string;
  title: string;
  slug: string;
  description: string;
  href: string;
  icon: import("./service").ServiceIconName;
}
