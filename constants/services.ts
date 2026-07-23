/**
 * Footer / navigation service links.
 * Full catalog content lives in data/services.ts.
 */
export const footerServices = [
  {
    id: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    href: "/services/accounting-bookkeeping",
  },
  {
    id: "tax-advisory-compliance",
    title: "Tax Advisory & Compliance",
    href: "/services/tax-advisory-compliance",
  },
  {
    id: "audit-assurance-services",
    title: "Audit & Assurance Services",
    href: "/services/audit-assurance-services",
  },
  {
    id: "business-financial-advisory",
    title: "Business & Financial Advisory",
    href: "/services/business-financial-advisory",
  },
  {
    id: "corporate-advisory-compliance",
    title: "Corporate Advisory & Compliance",
    href: "/services/corporate-advisory-compliance",
  },
  {
    id: "erp-implementation-automation",
    title: "ERP Implementation & Automation",
    href: "/services/erp-implementation-automation",
  },
  {
    id: "additional-solutions",
    title: "Additional Solutions",
    href: "/services/additional-solutions",
  },
] as const;

/** @deprecated Prefer footerServices or data/services — retained for compatibility */
export const services = footerServices;

export const industries = [
  {
    id: "financial-services",
    title: "Financial Services",
    href: "/industries#financial-services",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    href: "/industries#healthcare",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    href: "/industries#manufacturing",
  },
  {
    id: "retail-commerce",
    title: "Retail & Commerce",
    href: "/industries#retail-commerce",
  },
] as const;
