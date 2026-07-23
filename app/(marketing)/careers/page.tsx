import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { PageHero, CTASection, FAQAccordion } from "@/components/sections/shared";
import { JobCard } from "@/components/careers";
import {
  careersBenefits,
  careersCulture,
  careersFaqs,
  careersHero,
  careersWhyJoin,
  getOpenJobs,
  hiringProcess,
} from "@/data";
import { featureIconMap } from "@/lib/icons";
import { companyInfo } from "@/constants";
import { siteConfig } from "@/lib/seo";

const title = "Careers";
const description =
  "Join Symbio Advisory. Explore open roles across advisory, tax, accounting, compliance, and technology.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Symbio Advisory careers",
    "business advisor jobs",
    "tax consultant careers",
    "accounting jobs Austin",
  ],
  alternates: { canonical: "/careers" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/careers`,
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

function CareersJsonLd() {
  const openJobs = getOpenJobs();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `${title} | ${companyInfo.name}`,
        url: `${siteConfig.url}/careers`,
        description,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Careers",
            item: `${siteConfig.url}/careers`,
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: openJobs.map((job, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: job.title,
          url: `${siteConfig.url}${job.href}`,
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

export default function CareersPage() {
  const openJobs = getOpenJobs();

  return (
    <>
      <CareersJsonLd />
      <PageHero
        eyebrow="Careers"
        title={careersHero.title}
        description={careersHero.description}
        image={careersHero.image}
        imageAlt={careersHero.imageAlt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
      />

      <Section aria-labelledby="why-join-heading">
        <FadeUp>
          <SectionHeading
            id="why-join-heading"
            eyebrow="Why Join Symbio"
            title="A place to grow with purpose"
            description="We hire people who care about clarity, craftsmanship, and client outcomes."
            align="center"
          />
        </FadeUp>
        <StaggerContainer className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {careersWhyJoin.map((item) => {
            const Icon = featureIconMap[item.icon];
            return (
              <StaggerItem key={item.id}>
                <article className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="heading-font text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      <Section aria-labelledby="culture-heading" muted>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <SectionHeading
              id="culture-heading"
              eyebrow={careersCulture.eyebrow}
              title={careersCulture.title}
              description={careersCulture.description}
              className="mb-0"
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {careersCulture.points.map((point) => (
                <li
                  key={point}
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm"
                >
                  {point}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </Section>

      <Section aria-labelledby="benefits-heading">
        <FadeUp>
          <SectionHeading
            id="benefits-heading"
            eyebrow="Benefits"
            title="What we offer"
            description="Support that helps you do your best work and build a lasting career."
            align="center"
          />
        </FadeUp>
        <ul className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
          {careersBenefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground shadow-sm"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="open-roles-heading" muted>
        <FadeUp>
          <SectionHeading
            id="open-roles-heading"
            eyebrow="Open Positions"
            title="Current openings"
            description="Find a role that matches your experience and ambition."
            align="center"
          />
        </FadeUp>
        {openJobs.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">
            No open roles right now. Check back soon or send a general inquiry via Contact.
          </p>
        ) : (
          <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {openJobs.map((job) => (
              <StaggerItem key={job.id}>
                <JobCard job={job} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </Section>

      <Section aria-labelledby="hiring-process-heading">
        <FadeUp>
          <SectionHeading
            id="hiring-process-heading"
            eyebrow="Hiring Process"
            title="What to expect"
            description="A clear, respectful process designed to find mutual fit."
            align="center"
          />
        </FadeUp>
        <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {hiringProcess.map((step) => (
            <li
              key={step.id}
              className="rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <span className="heading-font inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {step.step}
              </span>
              <h3 className="heading-font mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section aria-labelledby="careers-faq-heading" muted>
        <FadeUp>
          <SectionHeading
            id="careers-faq-heading"
            eyebrow="FAQ"
            title="Frequently asked questions"
            align="center"
          />
        </FadeUp>
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={careersFaqs} />
        </div>
      </Section>

      <CTASection
        title="Don’t see the right role?"
        description="Tell us about your background — we’re always interested in exceptional people."
        primaryLabel="Contact Talent Team"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
