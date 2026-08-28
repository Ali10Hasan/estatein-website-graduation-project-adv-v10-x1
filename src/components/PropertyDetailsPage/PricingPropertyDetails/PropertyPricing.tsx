import { useState } from "react";
import type { IProperty } from "../../../types/propertyType";
import LearnMore from "./LearnMore";
import PricingCard from "./PricingCard";
import { calculatePropertyPricing } from "./propertyPricingCon";
import HeaderSection from "../../HeaderSection";

interface PropertyPricingProps {
    property: IProperty;
}

const PropertyPricing = ({ property }: PropertyPricingProps) => {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const pricing = calculatePropertyPricing(property.price);

    return (
        <>
            <HeaderSection title={"Comprehensive Pricing Details"} description={"At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"} />


            <div className="flex flex-col 2xl:gap-50 xl:gap-40 gap-30 2xl:mb-150 xl:mb-120 mb-80 mt-40 xl:mt-60 2xl:mt-80">
                {/* Note */}
                <div className="bg-grey-10 border border-grey-15 2xl:px-50 2xl:py-30 xl:px-40 xl:py-20 py-24 px-20 2xl:rounded-xl rounded-lg flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-16 2xl:gap-20 ">
                    <span className="font-semibold text-[18px] xl:text-[20px] 2xl:text-[24px] xl:pr-16 xl:border-r xl:border-grey-15 border-b border-b-grey-15 xl:border-b-0 pb-10 xl:pb-0">Note</span>
                    <p className="text-[14px] 2xl:text-[18px] text-grey-60">
                        The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.
                    </p>
                </div>
                {/* Cards */}
                <div className="flex flex-col xl:flex-row 2xl:gap-50 xl:gap-40 gap-20">
                    <div className="2xl:w-220 xl:w-194 w-full">
                        <p className="2xl:text-[20px] xl:text-[16px] text-[14px] font-medium text-grey-60 mb-2">Listing Price</p>
                        <span className="font-semibold text-[24px] xl:text-[30px] 2xl:text-[40px]">${property.price.toLocaleString()}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-20 xl:gap-40 2xl:gap-50 grow">
                        {/* Additional Fees */}
                        <PricingCard
                            onLearnMore={() => setSelectedCard("Additional Fees")}
                            title="Additional Fees"
                            rows={[
                                [
                                    {
                                        label: "Property Transfer Tax",
                                        value: `$${pricing.transferTax.toLocaleString()}`,
                                        badge: "Based on the sale price and local regulations",
                                        className: "border-b border-grey-15 pb-20 sm:pb-0 sm:border-none"

                                    },
                                    {
                                        label: "Legal Fees",
                                        value: `$${pricing.legalFees.toLocaleString()}`,
                                        badge: "Approximate cost for legal services, including title transfer",
                                        className: "sm:border-l border-grey-15 sm:pl-20"
                                    }
                                ],
                                [
                                    {
                                        label: "Home Inspection",
                                        value: `$${pricing.homeInspection.toLocaleString()}`,
                                        badge: "Recommended for due diligence",
                                        // className: "border-b border-grey-15 pb-20 sm:pb-0 sm:border-none",
                                        className: "border-b border-grey-15 pb-20 sm:pb-0 sm:border-none"

                                    },
                                    {
                                        label: "Property Insurance",
                                        value: `$${pricing.propertyInsuranceAnnual.toLocaleString()}`,
                                        badge: "Annual cost for comprehensive property insurance",
                                        className: "sm:border-l border-grey-15 sm:pl-20"
                                    }
                                ],
                                [
                                    {
                                        label: "Mortgage Fees",
                                        value: `$${pricing.propertyInsuranceAnnual.toLocaleString()}`,
                                        badge: "If applicable, consult with your lender for specific details",
                                    }
                                ]
                            ]}
                        />

                        {/* Monthly Costs */}
                        <PricingCard
                            title="Monthly Costs"
                            onLearnMore={() => setSelectedCard("Monthly Costs")}

                            rows={[
                                [
                                    {
                                        label: "Property Taxes", value: `$${pricing.monthlyPropertyTax.toLocaleString()}`,
                                        badge: "Approximate monthly property tax based on the sale price and local rates"
                                    }
                                ],
                                [
                                    {
                                        label: "Homeowners' Association Fee", value: `$${pricing.hoaFee.toLocaleString()}`,
                                        badge: "Monthly fee for common area maintenance and security"
                                    }
                                ]
                            ]}
                        />

                        {/* Total Initial Costs */}
                        <PricingCard
                            title="Total Initial Costs"
                            onLearnMore={() => setSelectedCard("Total Initial Costs")}

                            rows={[
                                [
                                    {
                                        label: "Listing Price",
                                        value: `$${pricing.listingPrice.toLocaleString()}`,
                                        className: "border-b border-grey-15 pb-20 sm:pb-0 sm:border-none"

                                    },
                                    {
                                        label: "Additional Fees",
                                        value: `$${pricing.additionalFees.toLocaleString()}`,
                                        badge: "Property transfer tax, legal fees, inspection, insurance",
                                        className: "sm:border-l border-grey-15 sm:pl-20"

                                    }
                                ],
                                [
                                    {
                                        label: "Down Payment",
                                        value: `$${pricing.downPayment.toLocaleString()}`,
                                        badge: "20%",
                                        className: "border-b border-grey-15 pb-20 sm:pb-0 sm:border-none"

                                    },
                                    {
                                        label: "Mortgage Amount",
                                        value: `$${pricing.mortgageAmount.toLocaleString()}`,
                                        badge: "If applicable",
                                        className: "sm:border-l border-grey-15 sm:pl-20"

                                    }
                                ]
                            ]}
                        />

                        {/* Monthly Expenses */}
                        <PricingCard
                            title="Monthly Expenses"
                            onLearnMore={() => setSelectedCard("Monthly Expenses")}

                            rows={[
                                [
                                    {
                                        label: "Property Taxes",
                                        value: `$${pricing.monthlyPropertyTax.toLocaleString()}`,
                                        className: "border-b border-grey-15 pb-20 sm:pb-0 sm:border-none"

                                    },
                                    {
                                        label: "Homeowners' Association Fee",
                                        value: `$${pricing.hoaFee.toLocaleString()}`,
                                        className: "sm:border-l border-grey-15 sm:pl-20"

                                    }
                                ],
                                [
                                    {
                                        label: "Mortgage Payment",
                                        value: "Varies based on terms and interest rate",
                                        // className: "pb-20 border-b border-grey-15 sm:border-none"
                                        className: "border-b border-grey-15 pb-20 sm:pb-0 sm:border-none"

                                    },
                                    {
                                        label: "Property Insurance",
                                        value: `$${pricing.monthlyPropertyInsurance.toLocaleString()}`,
                                        badge: "Approximate monthly cost",
                                        className: "sm:border-l border-grey-15 sm:pl-20"

                                    }
                                ]
                            ]}
                        />

                        {selectedCard && (
                            <LearnMore
                                selectedCard={selectedCard}
                                onClose={() => setSelectedCard(null)}
                            />)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PropertyPricing;