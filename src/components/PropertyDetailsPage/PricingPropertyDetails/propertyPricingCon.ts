export const calculatePropertyPricing = (listingPrice: number) => {
    const downPayment = listingPrice * 0.2;

    const propertyTaxAnnual = listingPrice * 0.01;

    const monthlyPropertyTax = Math.round(
        propertyTaxAnnual / 12
    );

    const transferTax = listingPrice * 0.02;

    const legalFees = 3000;

    const homeInspection = 500;

    const propertyInsuranceAnnual = 1200;

    const hoaFee = 300;

    const additionalFees =
        transferTax +
        legalFees +
        homeInspection +
        propertyInsuranceAnnual;

    const mortgageAmount =
        listingPrice - downPayment;
    const monthlyPropertyInsurance =
        Math.round(propertyInsuranceAnnual / 12);

    return {
        listingPrice,
        downPayment,
        propertyTaxAnnual,
        monthlyPropertyTax,
        transferTax,
        legalFees,
        homeInspection,
        propertyInsuranceAnnual,
        hoaFee,
        additionalFees,
        mortgageAmount,
        monthlyPropertyInsurance
    };
};