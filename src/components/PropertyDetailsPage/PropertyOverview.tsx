import type { IProperty } from "../../types/propertyType";
import { StaggerContainer, StaggerItem } from "../FramerMotion/Animation";
import Feature from "./FeaturesPropertyDetails/Feature";
import PropertyFeatureCard from "./FeaturesPropertyDetails/PropertyFeatureCard";

interface PropertyOverviewProps {
    property: IProperty;
}

const PropertyOverview = ({ property }: PropertyOverviewProps) => {
    const features = property.features ?? [];

    const featuresList = [
        {
            label: "Bedrooms",
            value: property.bedrooms
                ? String(property.bedrooms).padStart(2, "0")
                : "No Bedrooms",

            className: "border-r border-grey-15 pr-10",

            icon: (
                <img
                    src="/assets/icons/bedroom.svg"
                    alt="Bedrooms"
                />
            ),
        },

        {
            label: "Bathrooms",
            value: property.bathrooms
                ? String(property.bathrooms).padStart(2, "0")
                : "No Bathrooms",

            className: "xl:border-r border-grey-15 pr-10",

            icon: (
                <img
                    src="/assets/icons/bathroom.svg"
                    alt="Bathrooms"
                />
            ),
        },

        {
            label: "Area",
            value: property.area
                ? `${property.area} Square Feet`
                : "0 Square Feet",

            className:
                "col-span-2 xl:col-span-1 border-t border-grey-15 pt-20 xl:pt-0 xl:border-none",

            icon: (
                <img
                    src="/assets/icons/area.svg"
                    alt="Area"
                />
            ),
        },
    ];

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-30 mb-80 xl:mb-120 2xl:mb-150">

            {/* 
                Left
             */}

            <div className="border border-grey-15 2xl:p-50 xl:p-40 p-20 rounded-[10px] h-fit 2xl:rounded-xl flex flex-col gap-20 xl:gap-40 2xl:gap-50">

                {/* Description */}

                <div>
                    <h2 className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold mb-6 xl:mb-10 2xl:mb-14">
                        Description
                    </h2>

                    <p className="text-grey-60 text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium">
                        {property.shortDescription}
                    </p>
                </div>

                {/* Property Stats */}

                <StaggerContainer
                    className="border-t border-grey-15 2xl:pt-20 xl:pt-16 pt-20 grid grid-cols-2 xl:grid-cols-3 2xl:gap-40 xl:gap-20 gap-40"
                >
                    {featuresList.map((featureItem) => (
                        <StaggerItem
                            key={featureItem.label}
                            className={featureItem.className}
                        >
                            <PropertyFeatureCard
                                label={featureItem.label}
                                value={featureItem.value}
                                icon={featureItem.icon}
                            />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>

            {/* 
                Right
             */}

            <div className="border border-grey-15 2xl:p-50 xl:p-40 p-20 rounded-xl">

                <h2 className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold mb-20 xl:mb-40 2xl:mb-50">
                    Key Features and Amenities
                </h2>

                {features.length > 0 ? (
                    <StaggerContainer className="flex flex-col gap-18 xl:gap-20 2xl:gap-30">
                        {features.map((feature, index) => (
                            <StaggerItem key={index}>
                                <Feature feature={feature} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                ) : (
                    <p className="text-grey-20 uppercase text-[16px] font-bold xl:text-[28px]">
                        No Features Available .....
                    </p>
                )}
            </div>
        </div>
    );
};

export default PropertyOverview;