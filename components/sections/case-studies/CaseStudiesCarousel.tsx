"use client";

import { TrendingUp, Users, Target, BarChart3, CheckCircle } from "lucide-react";
import { Carousel } from "@/components/ui";

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

export function CaseStudiesCarousel() {
  return (
    <Carousel
      itemCount={caseStudies.length}
      ariaLabel="Case studies"
      itemClassName="mx-auto max-w-2xl"
      renderItem={(index) => {
        const study = caseStudies[index];
        const Icon = study.icon;

        return (
          <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground">
                {study.industry}
              </span>
            </div>

            <h3 className="heading-font text-xl font-bold text-accent">{study.title}</h3>

            <div className="mt-4 space-y-3">
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
        );
      }}
    />
  );
}
