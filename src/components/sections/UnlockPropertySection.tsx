import {
  ServicesFeatureSection,
  type CardItem,
} from "./ServicesFeatureSection";

const unlockPropertyData: CardItem[] = [
  {
    id: "1",
    title: "Valuation Mastery",
    description:
      "Discover the true worth of your property with our expert valuation services.",
    icon: (
      <img
        src="/assets/icons/Valuation.svg"
        alt="Valuation Mastery"
        className="w-82 h-82 object-contain"
      />
    ),
  },
  {
    id: "2",
    title: "Strategic Marketing",
    description:
      "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
    icon: (
      <img
        src="/assets/icons/Strategici.svg"
        alt="Strategic Marketing"
        className="w-82 h-82 object-contain"
      />
    ),
  },
  {
    id: "3",
    title: "Negotiation Wizardry",
    description:
      "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    icon: (
      <img
        src="/assets/icons/Strategic.svg"
        alt="Negotiation Wizardry"
        className="w-82 h-82 object-contain"
      />
    ),
  },
  {
    id: "4",
    title: "Closing Success",
    description:
      "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    icon: (
      <img
        src="/assets/icons/Closing.svg"
        alt="Closing Success"
        className="w-82 h-82 object-contain"
      />
    ),
  },
];

export const UnlockPropertySection = () => {
  return (
    <ServicesFeatureSection
      title="Unlock Property Value"
      description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey."
      cardsData={unlockPropertyData}
      bannerTitle="Unlock the Value of Your Property Today"
      bannerDescription="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
    />
  );
};

export default UnlockPropertySection;
