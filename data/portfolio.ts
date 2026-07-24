export interface PortfolioEngagement {
  id: string;
  name: string;
  category: string;
  title: string;
  description: string;
  outcome: string;
}

export interface SectorIndustry {
  id: string;
  title: string;
  iconName: string;
}

export const portfolioContent = {
  eyebrow: "Portfolio · Selected Engagements",
  title: "Work we are proud to put our name on.",
  description:
    "Our portfolio highlights associate firms, technology partners and advisory clients across accounting, compliance, ERP and legal services.",
  industriesEyebrow: "Sector Expertise",
  industriesTitle: "Sectors & Industry Experience",
  industriesDescription:
    "We provide advisory, compliance, audit, and technology solutions across a broad spectrum of commercial and industrial sectors.",
} as const;

export const portfolioEngagements: PortfolioEngagement[] = [
  {
    id: "360-law",
    name: "360 Law Solicitors (LLP)",
    category: "Legal & Professional Services",
    title: "Corporate law and litigation support",
    description:
      "A full-service law firm supported with regulatory advisory, corporate structuring and legal risk management for complex client mandates.",
    outcome: "Trusted partner",
  },
  {
    id: "amr-co",
    name: "AMR & Co.",
    category: "Compliance & Advisory",
    title: "Tax compliance and governance advisory",
    description:
      "An associate compliance firm delivering tax, governance and regulatory advisory services in support of our wider financial solutions.",
    outcome: "Strengthened compliance",
  },
  {
    id: "kodnod",
    name: "KodNod",
    category: "AI & Technology",
    title: "AI services for digital transformation",
    description:
      "An innovative AI service provider helping clients become more efficient with software development, cybersecurity and digital transformation.",
    outcome: "Technology accelerated",
  },
  {
    id: "awais-ca",
    name: "Awais A. M. & Co.",
    category: "Chartered Accountancy",
    title: "Tax, audit and business advisory support",
    description:
      "An associated CA firm offering tax compliance, audit, bookkeeping and advisory services as part of the broader MASH network.",
    outcome: "Business advisory strengthened",
  },
  {
    id: "huram-akhtar",
    name: "Huram I. Akhtar & Co.",
    category: "ERP & Accounting",
    title: "ERP, bookkeeping and compliance services",
    description:
      "A partner firm delivering ERP, bookkeeping and regulatory advisory services to complement our financial solutions.",
    outcome: "Operational efficiency improved",
  },
  {
    id: "tech-blaze",
    name: "Tech Blaze",
    category: "Technology & Digital",
    title: "Technology services for digital-first businesses",
    description:
      "A technology partner providing software development, web solutions, cybersecurity and digital transformation support.",
    outcome: "Digital capabilities expanded",
  },
];

export const sectorIndustriesData = [
  { id: "retail", title: "Retail & Distribution", iconName: "ShoppingBag" },
  { id: "coop", title: "Co-operative Societies", iconName: "Scale" },
  { id: "construction", title: "Engineering & Construction", iconName: "HardHat" },
  { id: "manufacturing", title: "Manufacturing & Extraction", iconName: "Factory" },
  { id: "food", title: "Foods & Beverages", iconName: "UtensilsCrossed" },
  { id: "textile", title: "Textile & Leather", iconName: "Shirt" },
  { id: "real-estate", title: "Housing & Real Estate", iconName: "Building2" },
  { id: "hospitality", title: "Hospitality & Other Services", iconName: "Sparkles" },
  { id: "poultry", title: "Poultry & Feed", iconName: "Leaf" },
  { id: "oil", title: "Oil & Banaspati", iconName: "Droplets" },
  { id: "non-profit", title: "Non-Profit Organizations", iconName: "HeartHandshake" },
  { id: "beauty", title: "Beauty & Salon", iconName: "Scissors" },
  { id: "education", title: "Education", iconName: "GraduationCap" },
  { id: "it-telecom", title: "IT & Telecommunications", iconName: "Wifi" },
  { id: "healthcare", title: "Pharmaceuticals & Healthcare", iconName: "Hospital" },
] as const;

export const portfolioIndustries = sectorIndustriesData.map((item) => item.title);
