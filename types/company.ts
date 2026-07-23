export interface CompanyAddress {
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  postalCode?: string;
  country: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  address: CompanyAddress;
  foundedYear: number;
}
