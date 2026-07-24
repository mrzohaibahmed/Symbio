export interface CertificationItem {
  id: string;
  number: string;
  title: string;
  issuer: string;
  description: string;
  clientValue: string;
  badgeLabel: string;
  trustBadge: string;
  year: string;
  benefits: string[];
}

export const certificationsSectionContent = {
  eyebrow: "WHY CLIENTS TRUST SYMBIO",
  title: "Professional Memberships & Industry Credentials",
  description:
    "Our professional memberships, strategic affiliations, and quality standards reflect our commitment to ethical advisory, regulatory excellence, and delivering long-term value for every client.",
  bottomTitle: "Built on Trust.\nFocused on Long-Term Partnerships.",
  bottomDescription:
    "Our memberships and professional affiliations represent more than certifications. They demonstrate our commitment to professional excellence, ethical business practices, regulatory compliance, and delivering measurable outcomes for every client we serve.",
} as const;

export const certifications: CertificationItem[] = [
  {
    id: "cpa-network",
    number: "01",
    title: "CPA Partner Network",
    issuer: "Professional Accountancy Network",
    description:
      "Recognized partnership standards for accounting quality and ethics.",
    clientValue:
      "Recognized partnership standards ensuring international accounting quality, independent audit oversight, and ethical compliance for client operations.",
    badgeLabel: "CPA",
    trustBadge: "Verified Membership",
    year: "2024",
    benefits: [
      "Ethical advisory standards",
      "Independent quality assurance",
      "International accounting compliance",
      "Continuous professional development",
      "Trusted professional network",
    ],
  },
  {
    id: "tax-institute",
    number: "02",
    title: "Chartered Tax Affiliation",
    issuer: "International Tax Institute",
    description:
      "Affiliation reflecting rigorous tax advisory and compliance practice standards.",
    clientValue:
      "Rigorous tax advisory standards that safeguard clients from regulatory non-compliance and optimize corporate tax positioning.",
    badgeLabel: "CTA",
    trustBadge: "Professional Affiliation",
    year: "2023",
    benefits: [
      "Regulatory compliance assurance",
      "Corporate tax optimization",
      "Cross-border tax advisory",
      "Withholding tax management",
      "Dispute resolution readiness",
    ],
  },
  {
    id: "iso-quality",
    number: "03",
    title: "ISO-Aligned Quality Practices",
    issuer: "Quality Systems Consortium",
    description:
      "Internal delivery methods aligned to documented quality management principles.",
    clientValue:
      "Internal delivery methods aligned with international quality management principles to ensure consistent, defect-free advisory outcomes.",
    badgeLabel: "ISO",
    trustBadge: "Certified Partner",
    year: "2025",
    benefits: [
      "Process-driven delivery",
      "Documented quality controls",
      "Consistent advisory outcomes",
      "Continuous improvement cycles",
      "Measurable performance standards",
    ],
  },
  {
    id: "digital-trust",
    number: "04",
    title: "Digital Trust Member",
    issuer: "Enterprise Systems Alliance",
    description:
      "Membership focused on secure, reliable digital finance system delivery.",
    clientValue:
      "Industry certification focused on secure ERP delivery, reliable digital finance systems, and enterprise data protection.",
    badgeLabel: "DTA",
    trustBadge: "Verified Membership",
    year: "2024",
    benefits: [
      "Secure ERP implementation",
      "Enterprise data protection",
      "Digital finance reliability",
      "System integration standards",
      "Cybersecurity best practices",
    ],
  },
  {
    id: "chamber",
    number: "05",
    title: "Chamber of Commerce Member",
    issuer: "Austin Chamber of Commerce",
    description:
      "Active membership supporting local enterprise growth and professional standards.",
    clientValue:
      "Active membership supporting regional enterprise growth, commercial advocacy, and transparent business ethics.",
    badgeLabel: "COC",
    trustBadge: "Professional Affiliation",
    year: "2019",
    benefits: [
      "Regional business advocacy",
      "Commercial networking access",
      "Transparent business ethics",
      "Enterprise growth support",
      "Professional standards compliance",
    ],
  },
  {
    id: "advisory-council",
    number: "06",
    title: "Business Advisory Council",
    issuer: "Growth Leaders Forum",
    description:
      "Peer council participation for continuous improvement in advisory practice.",
    clientValue:
      "Executive council participation ensuring continuous methodology upgrades, strategic leadership, and practice excellence.",
    badgeLabel: "BAC",
    trustBadge: "Verified Membership",
    year: "2022",
    benefits: [
      "Continuous methodology upgrades",
      "Peer-reviewed advisory practices",
      "Strategic leadership insights",
      "Cross-industry best practices",
      "Practice excellence benchmarks",
    ],
  },
];
