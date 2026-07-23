import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { TeamCard } from "@/components/cards";
import { aboutPageContent, teamMembers } from "@/data";

export function AboutTeamSection() {
  return (
    <Section aria-labelledby="about-team-heading" muted>
      <FadeUp>
        <SectionHeading
          id="about-team-heading"
          eyebrow={aboutPageContent.teamEyebrow}
          title={aboutPageContent.teamTitle}
          description={aboutPageContent.teamDescription}
          align="center"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {teamMembers.map((member) => (
          <StaggerItem key={member.id}>
            <TeamCard member={member} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
