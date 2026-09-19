/**
 * Central local asset paths.
 * Drop real brand files into public/ using these names to replace starters.
 */
export const brandAssets = {
  logo: "/logos/symbio-logo.svg",
  logoMark: "/logos/symbio-mark.svg",
  logoWhite: "/logos/symbio-logo-white.svg",
} as const;

export const imageAssets = {
  heroHome: "/images/hero/home.jpg",
  heroAbout: "/images/hero/about.jpg",
  heroServices: "/images/hero/services.jpg",
  heroCareers: "/images/hero/careers.jpg",
  heroContact: "/images/hero/contact.jpg",
  heroJob: "/images/hero/job.jpg",
} as const;

export function clientLogoPath(id: string): string {
  return `/logos/clients/${id}.svg`;
}

export function serviceImagePath(slug: string): string {
  return `/images/services/${slug}.jpg`;
}

export function serviceCaseStudyImagePath(slug: string): string {
  return `/images/case-studies/${slug}.jpg`;
}

export function teamPhotoPath(id: string): string {
  return `/images/team/${id}.jpg`;
}

export function industryImagePath(id: string): string {
  return `/images/industries/${id}.jpg`;
}

export function testimonialPhotoPath(id: string): string {
  return `/images/testimonials/${id}.jpg`;
}
