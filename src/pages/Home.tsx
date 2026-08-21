import Hero from "../components/Hero/Hero";
import FaqSection from "../components/sections/FaqSection";
import PropertiesList from "../components/sections/PropertiesSection/PropertiesList";
import SiteAdvantage from "../components/sections/SiteAdvantage";


const Home = () => {

    return (
        <>
            <Hero />
            <SiteAdvantage/>
            <PropertiesList />
            <FaqSection/>
        </>



    );
};
export default Home;