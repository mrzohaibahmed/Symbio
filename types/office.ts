export interface Office {
  id: string;
  name: string;
  shortDescription?: string;
  status?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state?: string;
  postalCode?: string;
  country: string;
  phone?: string;
  phoneDisplay?: string;
  email?: string;
  workingHours?: string;
  mapEmbedUrl?: string;
  mapLabel?: string;
  image?: string;
  imageAlt?: string;
  directionsUrl?: string;
  services?: string[];
}
