import type { IconType } from "react-icons/lib";

export interface BrandingData {
  logoIcon: string;
  logoText: string;
  emailIcon: string;
  emailPlaceholder: string;
  shareIcon: string;
}
export interface ColumnData {
  header: string;
  links: string[];
}
export interface FooterBottomData {
  copyright: string;
  legalLinks: string;
  socialIcons: IconType[];
}