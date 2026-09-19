import { Section, SectionHeading } from "@/components/layout";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { companyStory, aboutPageContent } from "@/data";

export function AboutStorySection() {
  return (
    <Section aria-labelledby="about-story-heading">
      <FadeUp>
        <SectionHeading
          id="about-story-heading"
          eyebrow={aboutPageContent.storyEyebrow}
          title={aboutPageContent.storyTitle}
          description={companyStory.introduction}
        />
      </FadeUp>

      <div className="grid gap-6 md:grid-cols-2">
        <FadeUp delay={0.05}>
          <article className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/20 hover:shadow-lg">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="heading-font text-xl font-bold text-accent">Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {companyStory.mission}
            </p>
          </article>
        </FadeUp>
        <FadeUp delay={0.1}>
          <article className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/20 hover:shadow-lg">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="heading-font text-xl font-bold text-accent">Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {companyStory.vision}
            </p>
          </article>
        </FadeUp>
      </div>

      <div className="mt-14">
        <FadeUp>
          <h3 className="heading-font mb-6 text-2xl font-bold text-accent">
            Core Values
          </h3>
        </FadeUp>
        <StaggerContainer className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {companyStory.values.map((value) => (
            <StaggerItem key={value.id}>
              <article className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-lg">
                <h4 className="heading-font text-lg font-bold text-accent">
                  {value.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
