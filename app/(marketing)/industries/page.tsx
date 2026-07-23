import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout";
import { CTASection } from "@/components/sections/shared";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { homeIndustries } from "@/data";
import { industryIconMap } from "@/lib/icons";
import { companyInfo } from "@/constants";
import { siteConfig } from "@/lib/seo";

const title = "Industries";
const description =
  "Symbio Advisory serves businesses across healthcare, retail, manufacturing, education, construction, real estate, restaurants, NGOs, and technology.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "industry advisory",
    "sector-specific consulting",
    "business advisory by industry",
    "Symbio Advisory industries",
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
            name: "Industries",
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
          <p className="eyebrow mb-4 text-accent-light">Industries</p>
          <h1 className="heading-font max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Industry Expertise That Drives Results
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/60">
            We bring deep sector knowledge to deliver advisory, compliance, and systems solutions tailored to the unique challenges of your industry.
          </p>
        </div>
      </section>

      <Section aria-labelledby="industries-grid-heading">
        <FadeUp>
          <SectionHeading
            id="industries-grid-heading"
            eyebrow="Sectors We Serve"
            title="Tailored solutions for every industry"
            description="From healthcare to technology, we understand the nuances of each sector and deliver advisory that creates real impact."
            align="center"
          />
        </FadeUp>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {homeIndustries.map((industry) => {
            const Icon = industryIconMap[industry.icon];

            return (
              <StaggerItem key={industry.id}>
                <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-xl hover:shadow-primary/8">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/20 to-transparent"
                    />
                    <span className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-accent shadow-lg transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="heading-font text-xl font-bold text-foreground">
                      {industry.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {industry.description}
                    </p>
                    <Link
                      href={industry.href}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-200 hover:gap-3"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      <Section aria-labelledby="industry-approach-heading" dark>
        <FadeUp>
          <SectionHeading
            id="industry-approach-heading"
            eyebrow="Our Approach"
            title="How we deliver industry-specific value"
            description="Every engagement begins with understanding your sector's regulatory landscape, competitive dynamics, and operational challenges."
            align="center"
            light
          />
        </FadeUp>
        <StaggerContainer className="grid gap-6 md:grid-cols-3">
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
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-accent/25 hover:bg-white/8">
                <h3 className="heading-font text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.desc}</p>
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
