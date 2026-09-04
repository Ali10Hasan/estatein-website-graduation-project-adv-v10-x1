import PageHero from "../components/Hero/PageHero"
import FilterSection from "../components/SelectSection/FilterSection"
import PropertiesList from "../components/sections/PropertiesSection/PropertiesList"
import Form from "../components/Form/Form"
const Properties = () => {
    return (
        <div>
            <PageHero
                title={"Find Your Dream Property"}
                description={"Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "}
            />
            <FilterSection />
            <PropertiesList
                showDetails={false}
                sectionTitle={"Discover a World of Possibilities"}
                Sectiondescription="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
                showButton={false}
                buttonContent={""}
                className="2xl:mt-153 xl:mt-103 mt-150"
            />
        <Form
            title="Let's Make it Happen"
            subtitle="Ready to take the first step toward your dream property? Fill out the form below and our real estate wizards will work their magic to find your perfect match. Don't wait, let's embark on this exciting journey together."
            showPropertyFields
        />
        </div>
    )
}

export default Properties