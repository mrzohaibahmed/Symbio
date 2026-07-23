/**
 * Route-level loading UI for individual service detail pages.
 */
export default function ServiceDetailLoading() {
  return (
    <div
      className="container-shell pt-[calc(var(--header-height)+2rem)] pb-20"
      role="status"
      aria-live="polite"
      aria-label="Loading service details"
    >
      <div className="animate-pulse space-y-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="h-4 w-48 rounded bg-muted" />
            <div className="h-12 w-full rounded bg-muted" />
            <div className="h-4 w-5/6 rounded bg-muted" />
            <div className="h-4 w-2/3 rounded bg-muted" />
          </div>
          <div className="aspect-[5/4] rounded-2xl bg-muted" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-28 rounded-xl bg-muted" />
          ))}
        </div>
      </div>
      <span className="sr-only">Loading service…</span>
    </div>
  );
}
