import type { Metadata } from "next";
import { IndustriesSection } from "@/components/sections";
import { CTASection } from "@/components/sections/shared";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { Section, SectionHeading } from "@/components/layout";
import { companyInfo } from "@/constants";
import { siteConfig } from "@/lib/seo";

const title = "Portfolio & Industries";
const description =
  "Explore Symbio Advisory selected portfolio engagements across legal, compliance, AI, chartered accountancy, ERP, and technology, alongside our 15 key industry sectors.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "portfolio engagements",
    "selected engagements",
    "associate firms",
    "Symbio Advisory portfolio",
    "industry advisory",
  ],
  alternates: { canonical: "/industries" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/industries`,
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

function IndustriesJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `${title} | ${companyInfo.name}`,
        url: `${siteConfig.url}/industries`,
        description,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio & Industries",
            item: `${siteConfig.url}/industries`,
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

export default function IndustriesPage() {
  return (
    <>
      <IndustriesJsonLd />
      <section className="relative overflow-hidden gradient-navy-deep pt-[calc(var(--header-height)+2rem)] pb-14 md:pb-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 pattern-grid" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
        <div className="container-shell relative">
          <p className="eyebrow mb-4 text-accent-light">Portfolio · Selected Engagements</p>
          <h1 className="heading-font max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Work we are proud to put our name on.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/60">
            Our portfolio highlights associate firms, technology partners and advisory clients across accounting, compliance, ERP and legal services.
          </p>
        </div>
      </section>

      <IndustriesSection showEngagements />

      <Section aria-labelledby="industry-approach-heading" dark>
        <FadeUp>
          <SectionHeading
            id="industry-approach-heading"
            eyebrow="Our Approach"
            title="How we deliver industry-specific value"
            description="Every engagement begins with understanding your sector's regulatory landscape, competitive dynamics, and operational challenges."
            align="left"
            light
          />
        </FadeUp>
        <StaggerContainer className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Deep Sector Knowledge",
              desc: "Our advisors bring years of hands-on experience in each industry, ensuring solutions that address real-world challenges.",
            },
            {
              title: "Regulatory Compliance",
              desc: "We stay current with sector-specific regulations and help you maintain compliance while optimizing operations.",
            },
            {
              title: "Scalable Systems",
              desc: "We implement ERP and automation solutions designed for your industry's unique workflows and growth trajectory.",
            },
          ].map((item, index) => (
            <StaggerItem key={item.title}>
              <div className="border-t-2 border-white/20 pt-6">
                <span className="editorial-number block text-4xl font-extrabold text-accent-light">
                  0{index + 1}
                </span>
                <h3 className="heading-font mt-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <CTASection
        title="Need industry-specific advisory?"
        description="Tell us about your business and industry — we'll match you with advisors who understand your challenges."
      />
    </>
  );
}
