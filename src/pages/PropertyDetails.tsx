
import PropertyPricing from "../components/PropertyDetailsPage/PricingPropertyDetails/PropertyPricing";
import PropertyGallery from "../components/PropertyDetailsPage/PropertyGallery";
import PropertyOverview from "../components/PropertyDetailsPage/PropertyOverview";
import FaqSection from "../components/sections/FaqSection";
import type { IProperty } from "../types/propertyType";

interface PropertyDetailsProps {
    property: IProperty;
}

const PropertyDetails = ({ property }: PropertyDetailsProps) => {
    return (
        <>
            <div className="2xl:max-w-1596 xl:max-w-7xl sm:max-w-[95%] max-w-358 mx-auto flex flex-col text-white">
                <PropertyGallery property={property} />
                <PropertyOverview property={property} />
                <PropertyPricing property={property} />
            </div>
            <FaqSection />
        </>
    );
};

export default PropertyDetails;