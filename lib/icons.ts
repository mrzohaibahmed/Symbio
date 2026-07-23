import {
  Award,
  Briefcase,
  Building2,
  Calculator,
  ClipboardCheck,
  Cpu,
  Database,
  Factory,
  FileText,
  GraduationCap,
  HandHeart,
  HardHat,
  Headphones,
  HeartHandshake,
  HeartPulse,
  Home,
  Layers,
  LineChart,
  Monitor,
  Receipt,
  ShieldCheck,
  ShoppingBag,
  Store,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import type {
  FeatureIconName,
  IndustryIconName,
  ServiceIconName,
} from "@/types";

export const serviceIconMap: Record<ServiceIconName, LucideIcon> = {
  calculator: Calculator,
  receipt: Receipt,
  briefcase: Briefcase,
  building: Building2,
  database: Database,
  "file-invoice": FileText,
  pos: Store,
  chart: LineChart,
  "clipboard-check": ClipboardCheck,
  shield: ShieldCheck,
};

export const featureIconMap: Record<FeatureIconName, LucideIcon> = {
  users: Users,
  award: Award,
  "heart-handshake": HeartHandshake,
  cpu: Cpu,
  headset: Headphones,
  layers: Layers,
};

export const industryIconMap: Record<IndustryIconName, LucideIcon> = {
  "heart-pulse": HeartPulse,
  "shopping-bag": ShoppingBag,
  factory: Factory,
  "graduation-cap": GraduationCap,
  "hard-hat": HardHat,
  home: Home,
  utensils: UtensilsCrossed,
  "hand-heart": HandHeart,
  monitor: Monitor,
};
