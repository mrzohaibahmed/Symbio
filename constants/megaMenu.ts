import {
  Award,
  Briefcase,
  Building2,
  ClipboardCheck,
  HeartHandshake,
  Newspaper,
  Phone,
  type LucideIcon,
} from "lucide-react";
import {
  getOpenJobs,
  homeIndustries,
  serviceCategories,
  services as serviceCatalog,
} from "@/data";
import { industryIconMap, serviceIconMap } from "@/lib/icons";
import type { MegaMenuKey } from "@/types";

export interface MegaMenuLink {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

export interface MegaMenuColumn {
  heading: string;
  links: MegaMenuLink[];
}

export interface MegaMenuFeatured {
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  label: string;
}

export interface MegaMenuContent {
  columns: MegaMenuColumn[];
  featured?: MegaMenuFeatured;
  viewAll: { label: string; href: string };
}

function buildServicesMegaMenu(): MegaMenuContent {
  const columns: MegaMenuColumn[] = serviceCategories.map((category) => ({
    heading: category.label,
    links: serviceCatalog
      .filter((service) => service.categoryId === category.id)
      .map((service) => ({
        label: service.title,
        href: service.href,
        icon: serviceIconMap[service.icon],
      })),
  }));

  return {
    columns,
    featured: {
      eyebrow: "Free Consultation",
      title: "Not sure where to start?",
      description:
        "Book a free consultation and we'll help you find the right service for your business.",
      href: "/contact",
      label: "Book Consultation",
    },
    viewAll: { label: "View All Services", href: "/services" },
  };
}

function buildIndustriesMegaMenu(): MegaMenuContent {
  return {
    columns: [
      {
        heading: "Industries We Serve",
        links: homeIndustries.map((industry) => ({
          label: industry.title,
          href: industry.href,
          icon: industryIconMap[industry.icon],
        })),
      },
    ],
    featured: {
      eyebrow: "Portfolio",
      title: "Selected engagements",
      description:
        "Explore our associate firms and technology partners across legal, compliance, AI, and ERP.",
      href: "/industries",
      label: "View Portfolio",
    },
    viewAll: { label: "View All Industries", href: "/industries" },
  };
}

function buildAboutMegaMenu(): MegaMenuContent {
  return {
    columns: [
      {
        heading: "Company",
        links: [
          { label: "Our Story", href: "/about", icon: Building2 },
          { label: "Leadership Team", href: "/about", icon: HeartHandshake },
          { label: "Certifications", href: "/about", icon: Award },
        ],
      },
      {
        heading: "Get Involved",
        links: [
          { label: "Case Studies", href: "/case-studies", icon: Newspaper },
          { label: "Careers", href: "/careers", icon: Briefcase },
          { label: "Contact Us", href: "/contact", icon: Phone },
        ],
      },
    ],
    viewAll: { label: "About Symbio Advisory", href: "/about" },
  };
}

function buildCareersMegaMenu(): MegaMenuContent {
  const openRoles = getOpenJobs().slice(0, 4);

  return {
    columns: [
      {
        heading: "Open Positions",
        links: openRoles.length
          ? openRoles.map((job) => ({
              label: job.title,
              href: job.href,
              description: job.location,
            }))
          : [{ label: "No open roles right now", href: "/careers" }],
      },
      {
        heading: "Why Symbio",
        links: [
          { label: "Culture & Benefits", href: "/careers", icon: HeartHandshake },
          { label: "Hiring Process", href: "/careers", icon: ClipboardCheck },
        ],
      },
    ],
    featured: {
      eyebrow: "We're Hiring",
      title: "Join our team",
      description:
        "Help businesses grow while growing your own career with Symbio Advisory.",
      href: "/careers",
      label: "View All Roles",
    },
    viewAll: { label: "View All Careers", href: "/careers" },
  };
}

export const megaMenuContent: Record<MegaMenuKey, MegaMenuContent> = {
  services: buildServicesMegaMenu(),
  industries: buildIndustriesMegaMenu(),
  about: buildAboutMegaMenu(),
  careers: buildCareersMegaMenu(),
};
