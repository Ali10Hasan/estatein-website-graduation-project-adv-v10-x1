import type { BrandingData, ColumnData, FooterBottomData } from "../type";

export const brandingData: BrandingData = {
  logoIcon: "/logo.png",
  logoText: "Estatein",
  emailIcon: "/EmailImage.png",
  emailPlaceholder: "Enter Your Email",
  shareIcon: "/ShareImage.png",
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
  socialIcons: ["/face.png", "/linkedin.png", "/twitter.png", "/youtube.png"],
};