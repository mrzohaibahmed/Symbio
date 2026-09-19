import type { Metadata } from "next";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { AppToaster } from "@/components/shared/AppToaster";
import { fontBody, fontHeading } from "@/lib/fonts";
import { defaultMetadata } from "@/lib/seo";
import { cn } from "@/utils";
import "@/styles/globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontHeading.variable,
          fontBody.variable,
          "min-h-screen bg-background font-sans text-foreground antialiased",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <AppToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
