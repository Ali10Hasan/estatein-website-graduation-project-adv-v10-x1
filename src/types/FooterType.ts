import type { IconType } from "react-icons/lib";

export interface BrandingData {
  logoIconDark: string;
  logoIconeLight: string;
  logoText: string;
  emailIcon: string;
  emailPlaceholder: string;
  shareIcon: string;
}
export interface ColumnData {
  header: string;
  path: string;
  links: string[];
}
export interface FooterBottomData {
  copyright: string;
  legalLinks: string;
  socialLinks: string[];
  socialIcons: IconType[];
}