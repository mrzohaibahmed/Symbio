"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { ServiceCard } from "@/components/cards";
import { serviceCategories, services } from "@/data";
import { servicesPageContent } from "./constants";

/**
 * Client service grid with category filters and search placeholder.
 */
export function ServicesCatalogSection() {
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState("all");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return services.filter((service) => {
      const matchesCategory =
        categoryId === "all" || service.categoryId === categoryId;
      const matchesQuery =
        normalized.length === 0 ||
        service.title.toLowerCase().includes(normalized) ||
        service.shortDescription.toLowerCase().includes(normalized) ||
        service.features.some((feature) =>
          feature.toLowerCase().includes(normalized),
        );

      return matchesCategory && matchesQuery;
    });
  }, [categoryId, query]);

  return (
    <Section aria-labelledby="services-catalog-heading">
      <FadeUp>
        <SectionHeading
          id="services-catalog-heading"
          eyebrow={servicesPageContent.gridEyebrow}
          title={servicesPageContent.gridTitle}
          description={servicesPageContent.gridDescription}
          align="center"
        />
      </FadeUp>

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block w-full max-w-md">
          <span className="sr-only">Search services</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={servicesPageContent.searchPlaceholder}
            className="h-11 w-full rounded-md border border-input bg-card pl-10 pr-3 text-sm text-foreground outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Service categories"
        >
          <button
            type="button"
            onClick={() => setCategoryId("all")}
            className={`rounded-md px-3 py-2 text-sm font-medium transition ${
              categoryId === "all"
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
            aria-pressed={categoryId === "all"}
          >
            {servicesPageContent.allCategoriesLabel}
          </button>
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setCategoryId(category.id)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                categoryId === category.id
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={categoryId === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="border-y border-dashed border-border py-12 text-center text-base text-muted-foreground">
          No services match your search. Try another keyword or category.
        </p>
      ) : (
        <StaggerContainer className="mt-8 space-y-4">
          {filtered.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </Section>
  );
}
