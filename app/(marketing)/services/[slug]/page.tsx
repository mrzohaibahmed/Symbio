import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, CTASection } from "@/components/sections/shared";
import {
  ServiceOverviewSection,
  ServiceBenefitsSection,
  ServiceFeaturesSection,
  ServiceProcessSection,
  ServiceFaqSection,
  ServiceIndustriesSection,
  ServiceRelatedSection,
  ServiceCaseStudySection,
  ServiceContactBanner,
} from "@/components/sections/services/detail";
import { getFaqsByIds, getServiceBySlug, services } from "@/data";
import { companyInfo } from "@/constants";
import { siteConfig } from "@/lib/seo";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
    keywords: service.keywords,
    alternates: {
      canonical: service.href,
    },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}${service.href}`,
      title: `${service.title} | ${companyInfo.name}`,
      description: service.shortDescription,
      siteName: companyInfo.name,
      locale: siteConfig.locale,
      images: [
        {
          url: service.image,
          alt: service.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${companyInfo.name}`,
      description: service.shortDescription,
      images: [service.image],
    },
  };
}

function ServiceJsonLd({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  const faqItems = getFaqsByIds(service.faqIds);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.url}${service.href}#service`,
        name: service.title,
        description: service.description,
        url: `${siteConfig.url}${service.href}`,
        provider: {
          "@type": "Organization",
          name: companyInfo.name,
          url: siteConfig.url,
        },
        areaServed: service.industries,
        image: service.image,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${siteConfig.url}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `${siteConfig.url}${service.href}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
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

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceJsonLd slug={slug} />
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.shortDescription}
        image={service.image}
        imageAlt={service.imageAlt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />
      <ServiceOverviewSection service={service} />
      <ServiceBenefitsSection service={service} />
      <ServiceFeaturesSection service={service} />
      <ServiceProcessSection service={service} />
      <ServiceFaqSection service={service} />
      <ServiceIndustriesSection service={service} />
      <ServiceRelatedSection service={service} />
      <ServiceCaseStudySection service={service} />
      <CTASection
        title={`Ready to get started with ${service.title}?`}
        description="Connect with Symbio Advisory and we’ll help map the right next steps for your business."
      />
      <ServiceContactBanner />
    </>
  );
}
