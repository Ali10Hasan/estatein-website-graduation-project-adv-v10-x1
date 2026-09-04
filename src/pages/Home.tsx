import Hero from "../components/Hero/Hero";
import FaqSection from "../components/sections/FaqSection";
import PropertiesList from "../components/sections/PropertiesSection/PropertiesList";
import SiteAdvantage from "../components/sections/SiteAdvantage";
import WhatClientsSaySection from "../components/sections/WhatClientsSaySection";

const Home = () => {

    return (
        <>
            <Hero />

            <main>
                <SiteAdvantage />
                <PropertiesList
                    showCategory={false}
                    sectionTitle="Featured Properties"
                    Sectiondescription="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein."
                    showButton={true}
                    buttonContent="View All Properties"
                />
                <WhatClientsSaySection />
                <FaqSection />
            </main>

        </>

    );
};
export default Home;
