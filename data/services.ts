import type { ServiceCategory, Service } from "@/types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "accounting-finance",
    label: "Accounting & Finance",
    slug: "accounting-finance",
    description: "Accounting, reporting, audit, and advisory support for stronger decisions.",
  },
  {
    id: "tax-compliance",
    label: "Tax & Compliance",
    slug: "tax-compliance",
    description: "Tax advisory, compliance, and corporate support to keep businesses protected.",
  },
  {
    id: "corporate-advisory",
    label: "Corporate Advisory",
    slug: "corporate-advisory",
    description: "Structured corporate solutions for incorporation, filings, and sustainable growth.",
  },
  {
    id: "systems-automation",
    label: "Systems & Automation",
    slug: "systems-automation",
    description: "ERP, automation, POS, EIMS, and digital invoicing solutions under one platform.",
  },
];

/**
 * Full service catalog for listing and dynamic detail pages.
 */
export const services: Service[] = [
  {
    id: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    slug: "accounting-bookkeeping",
    categoryId: "accounting-finance",
    icon: "calculator",
    shortDescription: "Accurate Books. Clear Reports. Stronger Business Decisions.",
    description:
      "We help businesses maintain accurate books, prepare financial statements, manage reports, and organize records so owners can make informed decisions with confidence.",
    overview:
      "Symbio Advisory helps businesses maintain reliable accounting records, organized books, and clear financial reporting so management can make stronger decisions with confidence.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Accountant reviewing financial ledgers and reports",
    href: "/services/accounting-bookkeeping",
    features: [
      "Accurate Bookkeeping",
      "Financial Reporting",
      "Profit & Loss Tracking",
      "Bank Reconciliation",
      "Financial Statements",
    ],
    benefits: [
      "More reliable financial records",
      "Better visibility into profit and cash flow",
      "Stronger reporting for business decisions",
      "Cleaner records for compliance and review",
    ],
    process: [
      { id: "ab-1", step: 1, title: "Review", description: "We review your current books, records, and reporting structure." },
      { id: "ab-2", step: 2, title: "Organize", description: "We organize accounts, reconciliations, and reporting routines." },
      { id: "ab-3", step: 3, title: "Maintain", description: "We deliver ongoing bookkeeping, reporting, and record support." },
      { id: "ab-4", step: 4, title: "Report", description: "We provide clear reports and financial statements for decision-making." },
    ],
    faqIds: ["ab-faq-1", "ab-faq-2", "ab-faq-3"],
    industries: ["Retail", "Manufacturing", "Services", "Healthcare", "Growing Businesses"],
    relatedServiceIds: ["tax-advisory-compliance", "business-financial-advisory", "digital-invoicing"],
    caseStudy: {
      title: "Bookkeeping Cleanup and Reporting Upgrade",
      challenge: "A growing business had incomplete records, weak reconciliations, and delayed reporting.",
      solution: "We cleaned the books, improved reporting routines, and introduced stronger monthly controls.",
      result: "Management gained clearer visibility into profit, expenses, and business performance.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Financial dashboard analytics on a laptop",
      href: "/case-studies",
    },
    keywords: ["accounting", "bookkeeping", "financial statements", "bank reconciliation"],
  },
  {
    id: "tax-advisory-compliance",
    title: "Tax Advisory & Compliance",
    slug: "tax-advisory-compliance",
    categoryId: "tax-compliance",
    icon: "receipt",
    shortDescription: "Registrations. Returns. Withholding. Representation.",
    description:
      "From tax registration and return filing to tax opinions, withholding, and representation, Symbio Advisory helps businesses stay compliant and manage tax matters professionally.",
    overview:
      "We help businesses manage tax registrations, filings, withholding matters, professional opinions, and representation so tax obligations stay organized and controlled.",
    image:
      "https://images.unsplash.com/photo-1554224311-beee4ece0eb3?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Tax documents and calculator on a professional desk",
    href: "/services/tax-advisory-compliance",
    features: [
      "Tax Registration",
      "Return Filing",
      "Tax Opinions",
      "Withholding",
      "Representation",
    ],
    benefits: [
      "Better control over filings and deadlines",
      "Reduced penalty and dispute risk",
      "Clear support on tax notices and obligations",
      "Professional handling of tax matters",
    ],
    process: [
      { id: "tax-1", step: 1, title: "Assess", description: "We review your current tax position, filings, and obligations." },
      { id: "tax-2", step: 2, title: "Register", description: "We support registrations and align required compliance steps." },
      { id: "tax-3", step: 3, title: "File", description: "We prepare and manage returns, withholding, and documentation." },
      { id: "tax-4", step: 4, title: "Represent", description: "We help address notices, opinions, and ongoing tax matters professionally." },
    ],
    faqIds: ["tax-faq-1", "tax-faq-2", "tax-faq-3"],
    industries: ["Trading", "Services", "Manufacturing", "Retail", "Corporate Groups"],
    relatedServiceIds: ["accounting-bookkeeping", "corporate-advisory-compliance", "audit-assurance-services"],
    caseStudy: {
      title: "Tax Compliance Stabilization",
      challenge: "A business was struggling with registrations, late filings, and withholding confusion.",
      solution: "We organized the tax calendar, completed registrations, and improved filing discipline.",
      result: "The business reduced stress, improved compliance, and handled tax matters more professionally.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Advisors reviewing tax planning documents",
      href: "/case-studies",
    },
    keywords: ["tax advisory", "tax compliance", "return filing", "withholding"],
  },
  {
    id: "audit-assurance-services",
    title: "Audit & Assurance Services",
    slug: "audit-assurance-services",
    categoryId: "accounting-finance",
    icon: "chart",
    shortDescription: "Internal Audits. System Reviews. Compliance Audits. Forensic Reviews.",
    description:
      "We support businesses with internal audits, system reviews, compliance audits, forensic reviews, and assurance services that improve controls and strengthen business reliability.",
    overview:
      "Symbio Advisory provides audit and assurance support that helps businesses review controls, strengthen processes, and improve confidence in operations and reporting.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Business audit documents and reporting charts",
    href: "/services/audit-assurance-services",
    features: [
      "Internal Audit",
      "System Review",
      "Compliance Audit",
      "Forensic Review",
      "Business Assurance",
    ],
    benefits: [
      "Stronger internal controls",
      "Better visibility into system and compliance gaps",
      "Reduced fraud and reporting risk",
      "Greater business reliability",
    ],
    process: [
      { id: "aa-1", step: 1, title: "Scope", description: "We define the audit, review, or assurance objective clearly." },
      { id: "aa-2", step: 2, title: "Examine", description: "We review records, systems, approvals, and control processes." },
      { id: "aa-3", step: 3, title: "Report", description: "We present findings, risks, and practical recommendations." },
      { id: "aa-4", step: 4, title: "Improve", description: "We support remediation to strengthen controls and business reliability." },
    ],
    faqIds: ["aa-faq-1", "aa-faq-2", "aa-faq-3"],
    industries: ["Manufacturing", "Retail", "Services", "NGOs", "Corporate Groups"],
    relatedServiceIds: ["accounting-bookkeeping", "business-financial-advisory", "corporate-advisory-compliance"],
    caseStudy: {
      title: "Internal Controls Review",
      challenge: "A business faced reporting delays, weak approvals, and inconsistent reconciliations.",
      solution: "We conducted a system review and internal audit to identify control gaps and process weaknesses.",
      result: "The business improved approvals, controls, and reporting reliability.",
      image:
        "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Business analytics report with graphs",
      href: "/case-studies",
    },
    keywords: ["audit", "assurance", "internal audit", "forensic review"],
  },
  {
    id: "business-financial-advisory",
    title: "Business & Financial Advisory",
    slug: "business-financial-advisory",
    categoryId: "accounting-finance",
    icon: "briefcase",
    shortDescription: "Plan Better. Manage Smarter. Grow Faster.",
    description:
      "Strong businesses are built on strong decisions. Our advisory solutions help you plan, manage, and grow with confidence.",
    overview:
      "We help business owners and management teams improve planning, budgeting, financing, performance monitoring, and strategic decision-making.",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Business leaders collaborating in a strategy meeting",
    href: "/services/business-financial-advisory",
    features: [
      "Budgeting & Planning",
      "Financial Monitoring",
      "Feasibility Studies",
      "Financing Support",
      "Restructuring & Turnaround",
      "Performance Improvement",
    ],
    benefits: [
      "Stronger budgeting and forecasting discipline",
      "Better financing and restructuring decisions",
      "Clearer performance visibility",
      "More confident business planning",
    ],
    process: [
      { id: "bfa-1", step: 1, title: "Understand", description: "We review your goals, performance, and current planning challenges." },
      { id: "bfa-2", step: 2, title: "Plan", description: "We build practical budgets, studies, and financial strategies." },
      { id: "bfa-3", step: 3, title: "Support", description: "We help with monitoring, financing, and restructuring priorities." },
      { id: "bfa-4", step: 4, title: "Improve", description: "We refine performance and guide decisions as the business grows." },
    ],
    faqIds: ["bfa-faq-1", "bfa-faq-2", "bfa-faq-3"],
    industries: ["Startups", "Growing Companies", "Manufacturing", "Retail", "Professional Services"],
    relatedServiceIds: ["accounting-bookkeeping", "corporate-advisory-compliance", "erp-implementation-automation"],
    caseStudy: {
      title: "Planning and Performance Improvement",
      challenge: "A business had no clear budgets, weak forecasting, and limited visibility into performance.",
      solution: "We introduced budgeting, monitoring routines, and financing support aligned to growth goals.",
      result: "Management made stronger decisions with clearer financial planning and performance oversight.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Executive reviewing business performance charts",
      href: "/case-studies",
    },
    keywords: ["business advisory", "financial advisory", "budgeting", "feasibility studies"],
  },
  {
    id: "corporate-advisory-compliance",
    title: "Corporate Advisory & Compliance",
    slug: "corporate-advisory-compliance",
    categoryId: "corporate-advisory",
    icon: "building",
    shortDescription: "Compliant Today. Stronger Tomorrow. Sustainable Business.",
    description:
      "From incorporation to compliance and corporate restructuring, Symbio Advisory provides end-to-end corporate solutions that keep your business compliant, structured, and future-ready.",
    overview:
      "We support businesses with incorporation, secretarial matters, regulatory filings, structuring decisions, and corporate compliance to keep operations organized and sustainable.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Modern corporate office buildings skyline",
    href: "/services/corporate-advisory-compliance",
    features: [
      "Company Incorporation",
      "Secretarial Compliance",
      "Corporate Structuring",
      "Regulatory Filings",
      "Mergers & Acquisitions",
      "Corporate Legal Guidance",
    ],
    benefits: [
      "Stronger corporate structure and compliance discipline",
      "Fewer delays in filings and registrations",
      "Better support for restructuring and corporate changes",
      "More confidence in legal and corporate matters",
    ],
    process: [
      { id: "cac-1", step: 1, title: "Review", description: "We review your corporate structure, registrations, and compliance needs." },
      { id: "cac-2", step: 2, title: "Structure", description: "We guide incorporation, structuring, and governance priorities." },
      { id: "cac-3", step: 3, title: "File", description: "We support filings, secretarial compliance, and documentation." },
      { id: "cac-4", step: 4, title: "Sustain", description: "We help the business remain compliant and future-ready as it grows." },
    ],
    faqIds: ["cac-faq-1", "cac-faq-2", "cac-faq-3"],
    industries: ["Corporate Groups", "Startups", "Professional Services", "Trading", "Growing Businesses"],
    relatedServiceIds: ["tax-advisory-compliance", "business-financial-advisory", "audit-assurance-services"],
    caseStudy: {
      title: "Corporate Compliance and Structuring Support",
      challenge: "A business faced delays with filings, structural changes, and compliance documentation.",
      solution: "We organized filings, clarified structure, and supported ongoing corporate compliance.",
      result: "The business became more structured, compliant, and prepared for future changes.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Corporate boardroom ready for a meeting",
      href: "/case-studies",
    },
    keywords: ["corporate advisory", "company incorporation", "regulatory filings", "compliance"],
  },
  {
    id: "erp-implementation-automation",
    title: "ERP Implementation & Automation",
    slug: "erp-implementation-automation",
    categoryId: "systems-automation",
    icon: "database",
    shortDescription: "Systems. Automation. Data Migration. User Training. Reporting.",
    description:
      "We help businesses implement accounting and ERP systems, automate workflows, migrate data, train users, and build efficient reporting systems for better decision-making.",
    overview:
      "Symbio Advisory helps businesses implement ERP and accounting systems, automate workflows, migrate data, and improve reporting so operations become more efficient and visible.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "ERP analytics dashboards on multiple screens",
    href: "/services/erp-implementation-automation",
    features: [
      "ERP Setup",
      "Workflow Automation",
      "Data Migration",
      "User Training",
      "Reporting Systems",
    ],
    benefits: [
      "Reduced manual processes and delays",
      "Better access to real-time information",
      "Improved user adoption and reporting",
      "Stronger systems for scaling the business",
    ],
    process: [
      { id: "erp-1", step: 1, title: "Assess", description: "We assess your current processes, systems, and reporting gaps." },
      { id: "erp-2", step: 2, title: "Design", description: "We design system setup, automation workflows, and migration needs." },
      { id: "erp-3", step: 3, title: "Implement", description: "We deploy the solution, migrate data, and train your team." },
      { id: "erp-4", step: 4, title: "Optimize", description: "We improve reporting and refine workflows after rollout." },
    ],
    faqIds: ["erp-faq-1", "erp-faq-2", "erp-faq-3"],
    industries: ["Manufacturing", "Retail", "Trading", "Distribution", "Professional Services"],
    relatedServiceIds: ["additional-solutions", "business-financial-advisory", "accounting-bookkeeping"],
    caseStudy: {
      title: "ERP and Workflow Automation Rollout",
      challenge: "A business relied on manual records, spreadsheets, and disconnected departments.",
      solution: "We implemented a structured ERP setup with automation, migration, training, and reporting improvements.",
      result: "The business gained better system control, faster processes, and stronger decision-making information.",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Team implementing enterprise software systems",
      href: "/case-studies",
    },
    keywords: ["ERP", "automation", "data migration", "user training"],
  },
  {
    id: "additional-solutions",
    title: "Additional Solutions",
    slug: "additional-solutions",
    categoryId: "systems-automation",
    icon: "pos",
    shortDescription: "ERP Odoo & Automation, POS and EIMS, Digital Invoicing",
    description:
      "Additional practical solutions from Symbio Advisory include ERP Odoo & Automation, POS and EIMS, and Digital Invoicing.",
    overview:
      "For businesses that need targeted systems support, we also provide ERP Odoo & Automation, POS and EIMS, and Digital Invoicing solutions under the same advisory platform.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Retail point-of-sale terminal in a modern store",
    href: "/services/additional-solutions",
    features: ["ERP Odoo & Automation", "POS and EIMS", "Digital Invoicing"],
    benefits: [
      "Flexible add-on system support",
      "Better operational visibility",
      "Improved invoicing and sales processes",
      "A connected advisory and systems experience",
    ],
    process: [
      { id: "as-1", step: 1, title: "Identify", description: "We identify the practical solution your business needs most." },
      { id: "as-2", step: 2, title: "Configure", description: "We configure the selected tools and business workflows." },
      { id: "as-3", step: 3, title: "Connect", description: "We align the solution with your operations and reporting needs." },
      { id: "as-4", step: 4, title: "Support", description: "We help your team use the solution effectively as the business grows." },
    ],
    faqIds: ["as-faq-1", "as-faq-2", "as-faq-3"],
    industries: ["Retail", "Trading", "Services", "Multi-branch Businesses"],
    relatedServiceIds: ["erp-implementation-automation", "accounting-bookkeeping", "tax-advisory-compliance"],
    caseStudy: {
      title: "POS, EIMS, and Invoicing Support",
      challenge: "A business needed better sales visibility, smoother invoicing, and more reliable digital systems.",
      solution: "We aligned POS, EIMS, and invoicing workflows with reporting and compliance needs.",
      result: "Operations became more organized, visible, and efficient across the business.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Retail store checkout area",
      href: "/case-studies",
    },
    keywords: ["Odoo", "POS", "EIMS", "digital invoicing"],
  },
];

/**
 * Homepage grid subset — derived from the full catalog so links stay in sync.
 */
export const homeServices = services.map((service) => ({
  id: service.id,
  title: service.title,
  slug: service.slug,
  description: service.shortDescription,
  href: service.href,
  icon: service.icon,
}));

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service, limit = 3): Service[] {
  return service.relatedServiceIds
    .map((id) => services.find((item) => item.id === id))
    .filter((item): item is Service => Boolean(item))
    .slice(0, limit);
}

export function getServicesByCategory(categoryId: string): Service[] {
  return services.filter((service) => service.categoryId === categoryId);
}
