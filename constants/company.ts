import type { CompanyInfo } from "@/types";

export const companyInfo: CompanyInfo = {
  name: "Symbio Advisory",
  legalName: "Symbio Advisory",
  tagline: "Professional advisory that helps businesses move forward.",
  description:
    "A modern advisory firm helping businesses manage finance, tax, compliance, systems, and strategic growth under one professional platform.",
  email: "symbio@charteredaccountant.pk",
  phone: "+923007864666",
  phoneDisplay: "+92 300 7864666",
  address: {
    line1: "248-E, Maulana Shaukat Ali Road",
    line2: "Johar Town",
    city: "Lahore",
    state: "Punjab",
    postalCode: "",
    country: "Pakistan",
  },
  foundedYear: 2018,
};

export const companyRoutes = {
  home: "/",
  about: "/about",
  services: "/services",
  industries: "/industries",
  caseStudies: "/case-studies",
  careers: "/careers",
  contact: "/contact",
  privacy: "/privacy",
} as const;
