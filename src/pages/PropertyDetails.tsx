
import InquiryForm from "../components/PropertyDetailsPage/InquiryForm";
import Form from "../components/Form/Form";
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
            <div className="2xl:max-w-1628 xl:max-w-1296 px-16 mx-auto flex flex-col text-white light:text-grey-08">
                <PropertyGallery property={property} />
                <PropertyOverview property={property} />
                <InquiryForm />
                <PropertyPricing property={property} />
            </div>
            <FaqSection />

               <Form
                title="Let's Make it Happen"
                subtitle="Ready to take the first step toward your dream property? Fill out the form below and our real estate wizards will work their magic to find your perfect match. Don't wait, let's embark on this exciting journey together."
                showPropertyFields
            />
        </>
    );
};

export default PropertyDetails;