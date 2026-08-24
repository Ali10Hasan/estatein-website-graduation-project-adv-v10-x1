import PageHero from "../components/Hero/PageHero";
import { UnlockPropertySection } from "../components/UnlockPropertySection";
import PropertyManagementSection from "../components/PropertyManagementSection";

const Services = () => {
  return (
    <div>
      <PageHero
        title={"Elevate Your Real Estate Experience"}
        description={
          "Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
        }
        className="2xl:h-390 xl:h-315 h-278"
      />
      <UnlockPropertySection />
      <PropertyManagementSection />
    </div>
  );
};

export default Services;