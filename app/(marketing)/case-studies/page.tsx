import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/layout";
import { CTASection, PageHero } from "@/components/sections/shared";
import { FadeUp } from "@/components/animations";
import { CaseStudiesCarousel } from "@/components/sections/case-studies/CaseStudiesCarousel";
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
      <PageHero
        eyebrow="Case Studies"
        title="Proven Results, Real Impact"
        description="Explore how Symbio Advisory helps businesses transform their operations, improve financial clarity, and achieve sustainable growth."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
      />

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

        <CaseStudiesCarousel />
      </Section>

      <CTASection
        title="Ready to write your success story?"
        description="Let's discuss how Symbio Advisory can help your business achieve measurable transformation."
      />
    </>
  );
}
