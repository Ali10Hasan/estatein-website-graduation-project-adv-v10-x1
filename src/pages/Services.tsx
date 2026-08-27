import PageHero from "../components/Hero/PageHero";
import CardAdvantages from "../components/CardAdvantages";
import PropertyManagementSection from "../components/sections/PropertyManagementSection";
import UnlockPropertySection from "../components/sections/UnlockPropertySection";

interface CardAdvantagesProps {
  Arrow: string;
  Icone: string;
  advantage: string;
}

const cardAdvantagesData: CardAdvantagesProps[] = [
  {
    Arrow: "/assets/icons/ArrowIcone.png",
    Icone: "/assets/icons/AdvantageIcone1.png",
    advantage: "Find Your Dream Home",
  },
  {
    Arrow: "/assets/icons/ArrowIcone.png",
    Icone: "/assets/icons/AdvantageIcone2.png",
    advantage: "Unlock Property Value",
  },
  {
    Arrow: "/assets/icons/ArrowIcone.png",
    Icone: "/assets/icons/AdvantageIcone3.png",
    advantage: "Effortless Property Management",
  },
  {
    Arrow: "/assets/icons/ArrowIcone.png",
    Icone: "/assets/icons/AdvantageIcone4.png",
    advantage: "Smart Investments, Informed Decisions",
  },
];
const Services = () => {
  return (
    <div>
      <PageHero
        title="Elevate Your Real Estate Experience"
        description="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
        className="2xl:h-390 xl:h-315 h-278"
      />

      <div className="Site-Advatages-Container mt-[40px] mb-[60px] mx-[13px] md:mx-0 md:mt-[20px] flex flex-wrap gap-[10px] md:gap-[20px] items-center justify-start w-[calc(100%-26px)] md:w-full bg-grey-08 p-[4px] md:p-[20px] rounded-[12px] md:rounded-[0px] shadow-[0px_0px_0px_4px_rgba(25,_25,_25,_1)] md:shadow-[0px_0px_0px_10px_rgba(25,_25,_25,_1)]">
        {cardAdvantagesData.map((item, index) => (
          <div
            key={index}
            className="w-[calc(50%-5px)] md:w-[calc(25%-15px)] h-[188px] bg-grey-10 rounded-[12px]"
          >
            <CardAdvantages
              Arrow={item.Arrow}
              Icone={item.Icone}
              advantage={item.advantage}
            />
          </div>
        ))}
      </div>

      <UnlockPropertySection />
      <PropertyManagementSection />
    </div>
  );
};

export default Services;
