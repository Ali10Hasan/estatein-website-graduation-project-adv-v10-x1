import { TiSocialLinkedin } from "react-icons/ti";
import type { BrandingData, ColumnData, FooterBottomData } from "../types/FooterType";
import { CiTwitter } from "react-icons/ci";
import { PiTwitterLogoThin, PiYoutubeLogoThin } from "react-icons/pi";
import { BiLogoFacebook } from "react-icons/bi";
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialTwitter } from "react-icons/sl";
export const brandingData: BrandingData = {
  logoIcon: "assets/imgs/EstateinLogo.webp",
  logoText: "Estatein",
  emailIcon: "assets/imgs/icons/EmailImage.png",
  emailPlaceholder: "Enter Your Email",
  shareIcon: "assets/imgs/icons/ShareImage.png",
};

export const columnsData: { [key: string]: ColumnData } = {
  home: { header: "Home", links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQ's"] },
  about: { header: "About Us", links: ["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"] },
  properties: { header: "Properties", links: ["Portfolio", "Categories"] },
  services: { header: "Services", links: ["Valuation Mastery", "Strategic Marketing", "Negotiation Wizardry", "Closing Success", "Property Management"] },
  contact: { header: "Contact Us", links: ["Contact Form", "Our Offices"] }
};

export const footerBottomData:FooterBottomData = {
  copyright: "@2023 Estatein. All Rights Reserved.",
  legalLinks: "Terms & Conditions",
  socialIcons: [BiLogoFacebook,TiSocialLinkedin,PiTwitterLogoThin,PiYoutubeLogoThin ],
};