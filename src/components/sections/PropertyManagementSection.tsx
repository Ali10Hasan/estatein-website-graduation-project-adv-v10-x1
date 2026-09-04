import React from "react";

import ServicesFeatureSection, {
  type CardItem,
} from "./ServicesFeatureSection";

const effortlessManagementData: CardItem[] = [
  {
    id: "1",

    title: "Tenant Harmony",

    description:
      "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",

    icon: (
      <img
        src="/assets/icons/Tenant.svg"
        alt="Tenant Harmony"
        className="w-[82px] h-[82px] object-contain"
      />
    ),
  },

  {
    id: "2",

    title: "Maintenance Ease",

    description:
      "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",

    icon: (
      <img
        src="/assets/icons/Maintenance.svg"
        alt="Maintenance Ease"
        className="w-[82px] h-[82px] object-contain"
      />
    ),
  },

  {
    id: "3",

    title: "Financial Peace of Mind",

    description:
      "Managing property finances can be complex. Our financial experts take care of rent collection.",

    icon: (
      <img
        src="/assets/icons/Financial.svg"
        alt="Financial Peace of Mind"
        className="w-[82px] h-[82px] object-contain"
      />
    ),
  },

  {
    id: "4",

    title: "Legal Guardian",

    description:
      "Stay compliant with property laws and regulations effortlessly.",

    icon: (
      <img
        src="/assets/icons/AdvantageIcone4.png"
        alt="Legal Guardian"
        className="w-[82px] h-[82px] object-contain"
      />
    ),
  },
];

export const PropertyManagementSection: React.FC = () => {
  return (
    <ServicesFeatureSection
      title="Effortless Property Management"
      description="Owning a property should be a pleasure, not a hassle. Estatein Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you."
      cardsData={effortlessManagementData}
      bannerTitle="Experience Effortless Property Management"
      bannerDescription="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
    />
  );
};

export default PropertyManagementSection;
