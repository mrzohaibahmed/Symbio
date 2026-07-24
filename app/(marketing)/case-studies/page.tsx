import type { Metadata } from "next";
import { TrendingUp, Users, Target, BarChart3, CheckCircle } from "lucide-react";
import { Section, SectionHeading, SectionTransition } from "@/components/layout";
import { CTASection } from "@/components/sections/shared";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { companyInfo } from "@/constants";
import { siteConfig } from "@/lib/seo";

const title = "Case Studies";
const description =
  "Client outcomes and transformation stories from Symbio Advisory — see how we help businesses achieve measurable results.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "advisory case studies",
    "business transformation stories",
    "client success stories",
    "Symbio Advisory results",
  ],
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/case-studies`,
    title: `${title} | ${companyInfo.name}`,
    description,
    siteName: companyInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${companyInfo.name}`,
    description,
  },
};

const caseStudies = [
  {
    id: "summit-health",
    title: "Summit Health Group — Financial Transformation",
    industry: "Healthcare",
    challenge: "Outdated financial reporting systems and manual reconciliation processes causing delays.",
    solution: "Implemented modern ERP with automated reconciliation and real-time dashboards.",
    results: [
      { metric: "65%", label: "Faster Month-End Close" },
      { metric: "40%", label: "Reduction in Manual Work" },
    ],
    icon: TrendingUp,
  },
  {
    id: "harbor-retail",
    title: "Harbor Retail — Growth Advisory",
    industry: "Retail",
    challenge: "Rapid expansion without structured financial planning creating margin pressure.",
    solution: "Developed a comprehensive financial model, budget framework, and growth roadmap.",
    results: [
      { metric: "28%", label: "Margin Improvement" },
      { metric: "3x", label: "Store Expansion Rate" },
    ],
    icon: BarChart3,
  },
  {
    id: "crestline-mfg",
    title: "Crestline Manufacturing — Digital Invoicing",
    industry: "Manufacturing",
    challenge: "Paper-based invoicing causing collection delays and cash flow unpredictability.",
    solution: "Deployed digital invoicing platform integrated with their ERP and banking systems.",
    results: [
      { metric: "45%", label: "Faster Collections" },
      { metric: "₹12M", label: "Cash Flow Improvement" },
    ],
    icon: Target,
  },
  {
    id: "vertex-labs",
    title: "Vertex Labs — Corporate Governance",
    industry: "Technology",
    challenge: "Fast-growing startup lacking corporate governance structure ahead of Series B.",
    solution: "Established board governance, compliance frameworks, and investor reporting.",
    results: [
      { metric: "100%", label: "Compliance Achieved" },
      { metric: "Series B", label: "Successfully Raised" },
    ],
    icon: Users,
  },
  {
    id: "civic-path",
    title: "Civic Path NGO — Grant Reporting",
    industry: "Non-Profit",
    challenge: "Inconsistent grant reporting and donor communication creating trust issues.",
    solution: "Built standardized reporting templates and transparent financial dashboards.",
    results: [
      { metric: "3x", label: "Grant Renewals" },
      { metric: "95%", label: "Donor Satisfaction" },
    ],
    icon: CheckCircle,
  },
  {
    id: "aurora-edu",
    title: "Aurora Education — Systems Integration",
    industry: "Education",
    challenge: "Multiple disconnected systems across campuses with no unified data view.",
    solution: "Integrated student management, finance, and HR onto a single ERP platform.",
    results: [
      { metric: "70%", label: "Fewer Manual Entries" },
      { metric: "Real-time", label: "Cross-Campus Visibility" },
    ],
    icon: TrendingUp,
  },
];

function CaseStudiesJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `${title} | ${companyInfo.name}`,
        url: `${siteConfig.url}/case-studies`,
        description,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case Studies",
            item: `${siteConfig.url}/case-studies`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesJsonLd />
      <section className="relative overflow-hidden gradient-navy-deep pt-[calc(var(--header-height)+2rem)] pb-14 md:pb-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 pattern-grid" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
        <div className="container-shell relative">
          <p className="eyebrow mb-4 text-accent-light">Case Studies</p>
          <h1 className="heading-font max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Proven Results, Real Impact
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/60">
            Explore how Symbio Advisory helps businesses transform their operations, improve financial clarity, and achieve sustainable growth.
          </p>
        </div>
        <SectionTransition />
      </section>

      <Section aria-labelledby="case-studies-heading">
        <FadeUp>
          <SectionHeading
            id="case-studies-heading"
            eyebrow="Client Success"
            title="Stories of transformation"
            description="Each engagement is unique. Here are some of the outcomes we've delivered across industries."
            align="center"
          />
        </FadeUp>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => {
            const Icon = study.icon;

            return (
              <StaggerItem key={study.id}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-xl">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground">
                      {study.industry}
                    </span>
                  </div>

                  <h3 className="heading-font text-lg font-bold text-foreground">
                    {study.title}
                  </h3>

                  <div className="mt-4 space-y-3 flex-1">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Challenge</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Solution</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 rounded-xl bg-surface p-4">
                    {study.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <p className="heading-font text-2xl font-extrabold text-accent">{result.metric}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      <CTASection
        title="Ready to write your success story?"
        description="Let's discuss how Symbio Advisory can help your business achieve measurable transformation."
      />
    </>
  );
}
