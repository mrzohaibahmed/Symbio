import type { CompanyStory, FeatureItem, TimelineItem } from "@/types";

export const aboutHero = {
  title: "Who We Are",
  description:
    "Symbio Advisory is built for businesses that need clarity, structure, and professional guidance. We help entrepreneurs, companies, and growing organizations make better financial, compliance, and strategic decisions with confidence.",
  image:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Symbio Advisory team collaborating in a bright corporate office",
} as const;

export const companyStory: CompanyStory = {
  introduction:
    "At Symbio Advisory, our purpose is simple: to connect businesses with practical advice, reliable systems, and growth-focused solutions. We believe every business deserves guidance that is clear, professional, and result-oriented.",
  mission:
    "Practical Advice. Reliable Systems. Growth-Focused Solutions.",
  vision:
    "Clear, professional, and result-oriented guidance for businesses that want stronger financial, compliance, and strategic decisions.",
  values: [
    {
      id: "clarity",
      title: "Clarity",
      description: "Clear insights for smarter decisions.",
    },
    {
      id: "structure",
      title: "Structure",
      description: "Systems and processes that drive efficiency.",
    },
    {
      id: "confidence",
      title: "Confidence",
      description: "Reliable guidance you can trust.",
    },
    {
      id: "growth",
      title: "Growth",
      description: "Strategic advice for lasting success.",
    },
  ],
};

export const companyJourney: TimelineItem[] = [
  {
    id: "founded",
    year: "2018",
    title: "Founded",
    description:
      "Symbio Advisory was established to help businesses access practical advice, reliable systems, and stronger financial direction.",
  },
  {
    id: "growth",
    year: "2020",
    title: "Growth",
    description:
      "Expanded services across tax, corporate advisory, accounting, and compliance to support growing client needs.",
  },
  {
    id: "expansion",
    year: "2022",
    title: "Expansion",
    description:
      "Strengthened systems offerings across ERP, automation, invoicing, and business process support.",
  },
  {
    id: "current",
    year: "2025",
    title: "Current Position",
    description:
      "Today Symbio Advisory supports businesses with finance, tax, compliance, systems, and strategic growth under one platform.",
  },
  {
    id: "future",
    year: "2027+",
    title: "Future Goals",
    description:
      "We continue building practical, growth-focused advisory and systems solutions that help businesses move forward with confidence.",
  },
];

export const aboutWhyChoose: FeatureItem[] = [
  {
    id: "practical-advice",
    title: "Practical Advice",
    description:
      "Clear advisory that helps businesses make informed decisions with confidence.",
    icon: "users",
  },
  {
    id: "reliable-systems",
    title: "Reliable Systems",
    description:
      "Structured systems and processes that improve consistency and efficiency.",
    icon: "award",
  },
  {
    id: "growth-solutions",
    title: "Growth Solutions",
    description:
      "Growth-focused support built around business performance, planning, and sustainability.",
    icon: "heart-handshake",
  },
  {
    id: "compliance-support",
    title: "Compliance Support",
    description:
      "Professional guidance across tax, corporate, and reporting requirements.",
    icon: "cpu",
  },
  {
    id: "decision-confidence",
    title: "Decision Confidence",
    description:
      "Insight that helps owners and management teams move forward with confidence.",
    icon: "headset",
  },
  {
    id: "one-platform",
    title: "One Professional Platform",
    description:
      "Finance, tax, compliance, systems, and growth support under one advisory platform.",
    icon: "layers",
  },
];

export const aboutPageContent = {
  storyEyebrow: "Our Purpose",
  storyTitle: "Practical Advice. Reliable Systems. Growth-Focused Solutions.",
  journeyEyebrow: "Our Journey",
  journeyTitle: "From founding ambition to trusted partner",
  journeyDescription:
    "A clear path of growth shaped by client needs, delivery excellence, and digital capability.",
  whyEyebrow: "Purpose in Action",
  whyTitle: "What businesses can expect from Symbio Advisory",
  whyDescription:
    "We connect businesses with practical advice, reliable systems, and growth-focused solutions that help them move forward with confidence.",
  teamEyebrow: "Leadership",
  teamTitle: "Meet the team behind the work",
  teamDescription:
    "Leaders, advisors, accountants, and tax consultants united by one standard: practical excellence.",
  certificationsEyebrow: "Credentials",
  certificationsTitle: "Certifications & memberships",
  certificationsDescription:
    "Professional affiliations that reinforce our commitment to quality, ethics, and continuous improvement.",
  statsEyebrew: "Impact",
  statsTitle: "Symbio by the numbers",
  officesEyebrow: "Offices",
  officesTitle: "Connect with Symbio Advisory",
  officesDescription:
    "Reach our teams across Pakistan and the UK for professional advisory support.",
} as const;
