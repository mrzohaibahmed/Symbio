import type { TeamMember } from "@/types";

/* ──────────────────────────────────────────────────────────
   Section-level editorial copy
   ────────────────────────────────────────────────────────── */
export const teamSectionContent = {
  eyebrow: "MEET OUR TEAM",
  title: "Experienced Professionals.\nTrusted Advisors.",
  description:
    "Our multidisciplinary team combines expertise in accounting, taxation, audit, legal advisory, compliance, ERP implementation, and strategic consulting to help businesses make confident decisions and achieve sustainable growth.",
  ctaTitle: "Need Advice From Our Experts?",
  ctaDescription:
    "Our multidisciplinary professionals are ready to help your business with accounting, taxation, audit, compliance, legal advisory, ERP implementation, and strategic consulting.",
} as const;

/* ──────────────────────────────────────────────────────────
   Department labels and tab order
   ────────────────────────────────────────────────────────── */
export const departmentLabels: Record<TeamMember["department"], string> = {
  leadership: "Leadership",
  directors: "Directors",
  "associate-directors": "Associate Directors",
  management: "Management",
  legal: "Legal Team",
};

export const departmentOrder: TeamMember["department"][] = [
  "leadership",
  "directors",
  "associate-directors",
  "management",
  "legal",
];

/* ──────────────────────────────────────────────────────────
   Enrichment map  —  keyed by TeamMember.id
   ────────────────────────────────────────────────────────── */
export interface TeamMemberEnrichment {
  location: string;
  expertise: string[];
  email?: string;
}

export const teamEnrichments: Record<string, TeamMemberEnrichment> = {
  /* ─── Leadership ─── */
  "muhammad-arslan-mohsan": {
    location: "Lahore, Pakistan",
    expertise: ["Audit", "IFRS"],
  },
  "awais-afzal-mirza": {
    location: "Lahore, Pakistan",
    expertise: ["Audit", "Tax"],
  },
  "salman-hassan": {
    location: "Lahore, Pakistan",
    expertise: ["Assurance", "Tax"],
  },
  "haram-ishtiaq-akhtar": {
    location: "Lahore, Pakistan",
    expertise: ["Financial Advisory", "ERP"],
  },

  /* ─── Directors ─── */
  "nureed-mahmood-arshad": {
    location: "Lahore, Pakistan",
    expertise: ["Financial Reporting", "Tax Compliance"],
  },
  "muhammad-aziz-anwar": {
    location: "Lahore, Pakistan",
    expertise: ["Income Tax", "Audit"],
  },
  "awais-tariq": {
    location: "Lahore, Pakistan",
    expertise: ["Tax Notices", "SECP Compliance"],
  },
  "ali-muazzam-rao": {
    location: "Lahore, Pakistan",
    expertise: ["Business Development", "Strategy"],
  },
  "noman-ali-fazal": {
    location: "Lahore, Pakistan",
    expertise: ["Oracle ERP", "Controls"],
  },

  /* ─── Associate Directors ─── */
  "sheraz-ahmad": {
    location: "Lahore, Pakistan",
    expertise: ["Corporate Law", "Regulatory Compliance"],
  },
  "syed-muhammad-usman-shah": {
    location: "Lahore, Pakistan",
    expertise: ["Internal Audit", "Financial Planning"],
  },

  /* ─── Management ─── */
  "hafiz-muhammad-zeeshan": {
    location: "Lahore, Pakistan",
    expertise: ["Operations", "People Management"],
  },

  /* ─── Legal Team ─── */
  "mian-muhammad-imran": {
    location: "Lahore, Pakistan",
    expertise: ["Tax Litigation", "Corporate Governance"],
  },
  mudassar: {
    location: "Lahore, Pakistan",
    expertise: ["Corporate Law", "Civil Litigation"],
  },
  "mian-danish-ali": {
    location: "Lahore, Pakistan",
    expertise: ["Corporate Compliance", "Tax Advisory"],
  },
  "muhammad-shakeel": {
    location: "Lahore, Pakistan",
    expertise: ["Cross-Border Law", "Corporate Registrations"],
  },
};
