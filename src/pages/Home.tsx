import Hero from "../components/Hero/Hero";
import PropertiesList from "../components/sections/PropertiesSection/PropertiesList";
import SiteAdvantage from "../components/sections/SiteAdvantage";


const Home = () => {

    return (
        <>
            <Hero />
            <SiteAdvantage />
            <PropertiesList
                showCategory={false}
                sectionTitle="Featured Properties"
                Sectiondescription="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein."
            />
        </>



    );
};
export default Home;