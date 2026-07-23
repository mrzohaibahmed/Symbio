export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
  external?: boolean;
}
