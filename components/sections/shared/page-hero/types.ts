import type { ReactNode } from "react";
import type { BreadcrumbItem } from "../breadcrumb/types";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  breadcrumb?: BreadcrumbItem[];
  className?: string;
  priorityImage?: boolean;
  children?: ReactNode;
}
