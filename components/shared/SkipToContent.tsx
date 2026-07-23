/**
 * Skip link for keyboard users — jumps past chrome into main content.
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="absolute left-4 top-4 z-50 -translate-y-16 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground opacity-0 transition focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
}
