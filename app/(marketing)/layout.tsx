import { Footer, Navbar } from "@/components/layout";
import { SkipToContent } from "@/components/shared";
import { PageTransition } from "@/components/animations";

/**
 * Marketing shell: sticky navbar + page transitions + corporate footer.
 */
export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <SkipToContent />
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
