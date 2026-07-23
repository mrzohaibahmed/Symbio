import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { PageHero, CTASection } from "@/components/sections/shared";
import { ApplicationForm } from "@/components/forms";
import { JobCard } from "@/components/careers";
import {
  getJobBySlug,
  getOpenJobs,
  getRelatedJobs,
} from "@/data";
import { companyInfo } from "@/constants";
import { siteConfig } from "@/lib/seo";

interface JobDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getOpenJobs().map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: JobDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Role Not Found" };
  }

  return {
    title: job.title,
    description: job.shortDescription,
    keywords: [job.title, job.department, "Symbio Advisory careers", job.location],
    alternates: { canonical: job.href },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}${job.href}`,
      title: `${job.title} | ${companyInfo.name}`,
      description: job.shortDescription,
      siteName: companyInfo.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.title} | ${companyInfo.name}`,
      description: job.shortDescription,
    },
  };
}

function JobJsonLd({ slug }: { slug: string }) {
  const job = getJobBySlug(slug);
  if (!job) return null;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "JobPosting",
        title: job.title,
        description: job.overview,
        datePosted: job.postedAt,
        employmentType: job.employmentType.toUpperCase().replace("-", "_"),
        hiringOrganization: {
          "@type": "Organization",
          name: companyInfo.name,
          sameAs: siteConfig.url,
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.location,
          },
        },
        url: `${siteConfig.url}${job.href}`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: job.title,
            item: `${siteConfig.url}${job.href}`,
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

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const related = getRelatedJobs(job, 3);

  return (
    <>
      <JobJsonLd slug={slug} />
      <PageHero
        eyebrow={job.department}
        title={job.title}
        description={job.shortDescription}
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Professionals collaborating in a career interview setting"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
          { label: job.title },
        ]}
      />

      <Section aria-labelledby="job-overview-heading">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            <FadeUp>
              <SectionHeading
                id="job-overview-heading"
                eyebrow="Overview"
                title="Role overview"
                description={job.overview}
                className="mb-0"
              />
            </FadeUp>

            <FadeUp delay={0.05}>
              <h2 className="heading-font text-2xl font-semibold">Responsibilities</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="heading-font text-2xl font-semibold">Requirements</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {job.requirements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.15}>
              <h2 className="heading-font text-2xl font-semibold">Benefits</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {job.benefits.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="heading-font text-lg font-semibold">Role details</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground">Department</dt>
                  <dd className="font-medium text-foreground">{job.department}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Employment type</dt>
                  <dd className="font-medium capitalize text-foreground">
                    {job.employmentType.replace("-", " ")}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Experience</dt>
                  <dd className="font-medium text-foreground">{job.experience}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-medium text-foreground">{job.location}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Working hours</dt>
                  <dd className="font-medium text-foreground">{job.workingHours}</dd>
                </div>
                {job.salaryRange ? (
                  <div>
                    <dt className="text-muted-foreground">Salary range</dt>
                    <dd className="font-medium text-foreground">{job.salaryRange}</dd>
                  </div>
                ) : null}
              </dl>
              <Link
                href="#application-form"
                className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Jump to application
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        id="application-form"
        aria-labelledby="application-heading"
        muted
      >
        <FadeUp>
          <SectionHeading
            id="application-heading"
            eyebrow="Apply"
            title={`Apply for ${job.title}`}
            description="Share your experience and resume. We review every application carefully."
            align="center"
          />
        </FadeUp>
        <div className="mx-auto max-w-3xl">
          <ApplicationForm jobSlug={job.slug} jobTitle={job.title} />
        </div>
      </Section>

      {related.length > 0 ? (
        <Section aria-labelledby="related-jobs-heading">
          <FadeUp>
            <SectionHeading
              id="related-jobs-heading"
              eyebrow="Related Roles"
              title="You may also be interested in"
              align="center"
            />
          </FadeUp>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <StaggerItem key={item.id}>
                <JobCard job={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      ) : null}

      <CTASection
        title="Questions about this role?"
        description="Reach our talent team and we’ll help you understand fit, timeline, and next steps."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="All Careers"
        secondaryHref="/careers"
      />
    </>
  );
}
