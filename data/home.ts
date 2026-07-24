import type {
  FeatureItem,
  IndustryItem,
  ProcessStep,
  StatItem,
  TestimonialItem,
  TrustedCompany,
} from "@/types";

export const trustedCompanies: TrustedCompany[] = [
  {
    id: "360-law",
    name: "360 Law Solicitors (LLP)",
    logo: "/logos/clients/northline.svg",
    logoAlt: "360 Law Solicitors logo",
  },
  {
    id: "amr-co",
    name: "AMR & Co.",
    logo: "/logos/clients/vertex-labs.svg",
    logoAlt: "AMR & Co. logo",
  },
  {
    id: "kodnod",
    name: "KodNod",
    logo: "/logos/clients/harbor-retail.svg",
    logoAlt: "KodNod logo",
  },
  {
    id: "awais-ca",
    name: "Awais A. M. & Co.",
    logo: "/logos/clients/summit-health.svg",
    logoAlt: "Awais A. M. & Co. logo",
  },
  {
    id: "huram-akhtar",
    name: "Huram I. Akhtar & Co.",
    logo: "/logos/clients/crestline.svg",
    logoAlt: "Huram I. Akhtar & Co. logo",
  },
  {
    id: "tech-blaze",
    name: "Tech Blaze",
    logo: "/logos/clients/aurora-edu.svg",
    logoAlt: "Tech Blaze logo",
  },
];

export const whyChooseUsFeatures: FeatureItem[] = [
  {
    id: "corporate-legal-confusion",
    title: "Corporate & Legal Confusion",
    description:
      "Company registrations, filings, agreements, compliance, and corporate changes can become complicated. Businesses often face delays because they do not have proper legal and corporate advisory support.",
    icon: "users",
  },
  {
    id: "manual-systems-delays",
    title: "Manual Systems & Delays",
    description:
      "Manual records, Excel-based processes, and disconnected departments slow down business operations. Without ERP or automation, owners struggle to access accurate and real-time information.",
    icon: "award",
  },
  {
    id: "weak-internal-controls",
    title: "Weak Internal Controls",
    description:
      "Businesses often lose money because of weak systems, poor approvals, missing reconciliations, and lack of internal checks. These issues can create fraud risk, operational delays, and inaccurate reporting.",
    icon: "heart-handshake",
  },
  {
    id: "tax-compliance-pressure",
    title: "Tax & Compliance Pressure",
    description:
      "Tax deadlines, notices, filings, and changing regulations create stress for business owners. Without professional support, small mistakes can turn into penalties, disputes, and unnecessary financial exposure.",
    icon: "cpu",
  },
  {
    id: "no-clear-business-planning",
    title: "No Clear Business Planning",
    description:
      "Many businesses operate without proper budgets, forecasts, or financial planning. This makes it difficult to manage growth, control costs, arrange financing, or make confident business decisions.",
    icon: "headset",
  },
  {
    id: "poor-financial-records",
    title: "Poor Financial Records",
    description:
      "Many businesses struggle because their financial records are incomplete, outdated, or poorly managed. Without proper bookkeeping, owners cannot understand profit, cash flow, expenses, or real business performance.",
    icon: "layers",
  },
];

export const homeIndustries: IndustryItem[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Financial clarity and digital systems for care-focused organizations.",
    href: "/industries#healthcare",
    icon: "heart-pulse",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Healthcare professionals collaborating in a clinical setting",
  },
  {
    id: "retail",
    title: "Retail",
    description: "Stronger margins, inventory insight, and omnichannel finance operations.",
    href: "/industries#retail",
    icon: "shopping-bag",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Modern retail store interior with product displays",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Cost control, ERP alignment, and operational visibility across plants.",
    href: "/industries#manufacturing",
    icon: "factory",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Manufacturing facility with industrial equipment",
  },
  {
    id: "education",
    title: "Education",
    description: "Transparent reporting and efficient administration for learning institutions.",
    href: "/industries#education",
    icon: "graduation-cap",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
    imageAlt: "University campus building exterior",
  },
  {
    id: "construction",
    title: "Construction",
    description: "Project accounting, compliance, and cash-flow discipline for builders.",
    href: "/industries#construction",
    icon: "hard-hat",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Construction site with structural framework",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Portfolio reporting and advisory for developers and property operators.",
    href: "/industries#real-estate",
    icon: "home",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Contemporary commercial real estate building",
  },
  {
    id: "restaurants",
    title: "Restaurants",
    description: "Food-service finance, cost tracking, and scalable back-office systems.",
    href: "/industries#restaurants",
    icon: "utensils",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Restaurant dining room with warm lighting",
  },
  {
    id: "ngos",
    title: "NGOs",
    description: "Grant-ready reporting and stewardship for mission-driven organizations.",
    href: "/industries#ngos",
    icon: "hand-heart",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Community volunteers collaborating outdoors",
  },
  {
    id: "technology",
    title: "Technology",
    description: "Growth-ready finance and systems for product and SaaS companies.",
    href: "/industries#technology",
    icon: "monitor",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Close-up of technology circuit board hardware",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "consultation",
    step: 1,
    title: "Consultation",
    description:
      "We learn your goals, constraints, and current systems to define a clear starting point.",
  },
  {
    id: "planning",
    step: 2,
    title: "Planning",
    description:
      "Together we design a prioritized roadmap with milestones, owners, and measurable outcomes.",
  },
  {
    id: "implementation",
    step: 3,
    title: "Implementation",
    description:
      "Our team executes with disciplined delivery — advisory, systems, and change management.",
  },
  {
    id: "ongoing-support",
    step: 4,
    title: "Ongoing Support",
    description:
      "We stay engaged to refine performance, resolve issues, and sustain long-term improvement.",
  },
];

export const homeStats: StatItem[] = [
  { id: "portfolio-engagements", value: 6, suffix: "+", label: "Portfolio Engagements" },
  { id: "industry-sectors", value: 15, suffix: "+", label: "Industry Sectors" },
  { id: "experience", value: 15, suffix: "+", label: "Years Experience" },
  { id: "satisfaction", value: 98, suffix: "%", label: "Client Satisfaction" },
];

export const testimonials: TestimonialItem[] = [
  {
    id: "amelia-chen",
    name: "Amelia Chen",
    company: "Summit Health Group",
    position: "Chief Financial Officer",
    review:
      "Symbio helped us modernize financial reporting and implement a cleaner ERP workflow. The team is precise, responsive, and genuinely invested in our outcomes.",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    photoAlt: "Portrait of Amelia Chen",
  },
  {
    id: "marcus-reid",
    name: "Marcus Reid",
    company: "Harbor Retail",
    position: "Managing Director",
    review:
      "Their business advisory work gave us clarity on margins and growth priorities. We finally have a finance stack that scales with our expansion plans.",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    photoAlt: "Portrait of Marcus Reid",
  },
  {
    id: "sofia-martinez",
    name: "Sofia Martinez",
    company: "Crestline Manufacturing",
    position: "VP of Operations",
    review:
      "From consultation to go-live, Symbio kept implementation disciplined. Digital invoicing alone improved our collections cycle within the first quarter.",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    photoAlt: "Portrait of Sofia Martinez",
  },
  {
    id: "james-okafor",
    name: "James Okafor",
    company: "Vertex Labs",
    position: "Founder & CEO",
    review:
      "We needed corporate advisory that understood both growth and governance. Symbio delivered a strategy we could execute without slowing the product team.",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    photoAlt: "Portrait of James Okafor",
  },
];
