import Link from "next/link";
import { Container } from "@/components/layout";
import { PrimaryButton, OutlineButton } from "@/components/ui";

export default function JobNotFound() {
  return (
    <section className="border-b border-border pt-[calc(var(--header-height)+3rem)] pb-24">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          404
        </p>
        <h1 className="heading-font mt-3 text-4xl font-semibold">Role not found</h1>
        <p className="mt-4 text-muted-foreground">
          This role may have closed or the link is incorrect.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton asChild>
            <Link href="/careers">View open roles</Link>
          </PrimaryButton>
          <OutlineButton asChild>
            <Link href="/contact">Contact talent team</Link>
          </OutlineButton>
        </div>
      </Container>
    </section>
  );
}
