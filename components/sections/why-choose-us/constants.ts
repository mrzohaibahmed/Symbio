import type { ChallengeItem } from "./types";

export const whyChooseUsHeader = {
  eyebrow: "PROBLEMS WE SOLVE",
  title: "Helping Businesses Move\nFrom Complexity to Confidence.",
  description:
    "Growing businesses face increasing financial, operational, regulatory, tax, governance, and technology challenges. Symbio Advisory helps organizations solve these issues through practical advisory, compliance, audit, legal, and ERP solutions.",
  primaryCtaText: "Schedule a Consultation",
  primaryCtaHref: "/contact",
  secondaryCtaText: "Explore Our Services",
  secondaryCtaHref: "/services",
} as const;

export const whyChooseUsContent = whyChooseUsHeader;

export const businessChallenges: ChallengeItem[] = [
  {
    id: "corporate-legal-confusion",
    number: "01",
    title: "Corporate & Legal Confusion",
    shortTitle: "Corporate & Legal Confusion",
    summary:
      "Growing businesses often struggle with registrations, governance, compliance, legal filings, and corporate obligations. Without specialized advisory support, these challenges can delay operations and increase regulatory exposure.",
    impacts: ["Regulatory Risk", "Operational Delays", "Legal Exposure"],
    services: [
      "Corporate Advisory",
      "Legal Compliance",
      "Business Registration",
      "Corporate Governance",
      "Secretarial Services",
    ],
    industries: [
      "Healthcare",
      "Manufacturing",
      "Retail",
      "Technology",
      "Construction",
    ],
    href: "/services#corporate-advisory",
    visualType: "architectural-grid",
  },
  {
    id: "manual-systems-delays",
    number: "02",
    title: "Manual Systems & Delays",
    shortTitle: "Manual Systems & Delays",
    summary:
      "Manual records, spreadsheet-based workflows, and disconnected departments slow down execution across the enterprise. Lacking automated ERP systems, leadership cannot access real-time operational data or make agile decisions.",
    impacts: ["Manual Bottlenecks", "Operational Delays", "Poor Data Visibility"],
    services: [
      "ERP Implementation",
      "Process Automation",
      "Systems Advisory",
      "Digital Workflow Integration",
      "Data Management",
    ],
    industries: [
      "Manufacturing",
      "Retail",
      "Construction",
      "Logistics",
      "Healthcare",
    ],
    href: "/services#systems-advisory",
    visualType: "workflow-network",
  },
  {
    id: "weak-internal-controls",
    number: "03",
    title: "Weak Internal Controls",
    shortTitle: "Weak Internal Controls",
    summary:
      "Organizations frequently suffer financial leaks, unauthorized expenditures, and misstatement risks due to missing approval hierarchies and reconciliation gaps. Establishing robust internal control mechanisms protects enterprise assets.",
    impacts: ["Financial Loss", "Fraud Vulnerability", "Reporting Errors"],
    services: [
      "Internal Audit",
      "Risk Management",
      "Governance Frameworks",
      "SOP Development",
      "Control Assessment",
    ],
    industries: [
      "Financial Services",
      "Retail",
      "Real Estate",
      "NGOs",
      "Education",
    ],
    href: "/services#internal-controls",
    visualType: "security-mesh",
  },
  {
    id: "tax-compliance-pressure",
    number: "04",
    title: "Tax & Compliance Pressure",
    shortTitle: "Tax & Compliance Pressure",
    summary:
      "Rapidly shifting statutory tax regulations, complex notice responses, and tight filing schedules create severe compliance strain for corporate management. Proactive tax governance ensures statutory compliance while optimizing tax positions.",
    impacts: ["Regulatory Risk", "Penalties & Fines", "Financial Exposure"],
    services: [
      "Tax Compliance",
      "Corporate Tax Planning",
      "Regulatory Advisory",
      "Tax Audit Defense",
      "Statutory Filings",
    ],
    industries: [
      "Technology",
      "Healthcare",
      "Manufacturing",
      "Real Estate",
      "Retail",
    ],
    href: "/services#tax-compliance",
    visualType: "regulatory-lines",
  },
  {
    id: "no-clear-business-planning",
    number: "05",
    title: "No Clear Business Planning",
    shortTitle: "No Clear Business Planning",
    summary:
      "Operating without dynamic financial models, multi-year strategic budgets, and forecasting leaves executive leadership reactive to market shifts. Structured business planning aligns capital allocation with enterprise growth objectives.",
    impacts: ["Uncontrolled Growth", "Poor Visibility", "Capital Misallocation"],
    services: [
      "Financial Advisory",
      "Strategic Planning",
      "CFO Advisory",
      "Budgeting & Forecasting",
      "Capital Structuring",
    ],
    industries: [
      "Technology",
      "Manufacturing",
      "Healthcare",
      "Construction",
      "Restaurants",
    ],
    href: "/services#business-planning",
    visualType: "strategic-roadmap",
  },
  {
    id: "poor-financial-records",
    number: "06",
    title: "Poor Financial Records",
    shortTitle: "Poor Financial Records",
    summary:
      "Incomplete accounting histories, delayed period closing, and unstructured general ledgers impede debt financing, investor confidence, and tax compliance. Clean, audit-ready financial records provide executive clarity on cash velocity.",
    impacts: ["Compliance Risk", "Inaccurate Records", "Cash Flow Stress"],
    services: [
      "Accounting & Bookkeeping",
      "Financial Reporting",
      "Audit Preparation",
      "Cash Flow Management",
      "Ledger Cleanup",
    ],
    industries: [
      "Retail",
      "Real Estate",
      "Technology",
      "Education",
      "NGOs",
    ],
    href: "/services#financial-records",
    visualType: "financial-matrix",
  },
];
