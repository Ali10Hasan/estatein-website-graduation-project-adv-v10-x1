import React from "react";

import Stars from "../AtomComponents/Stars";
import Container from "../Container";
import { ValueCard } from "../ValueCard";
import Button from "../AtomComponents/Button";

export interface CardItem {
  id: string;

  title: string;

  description: string;

  icon: React.ReactNode;
}

interface ServicesFeatureSectionProps {
  title: string;

  description: string;

  cardsData: CardItem[];

  bannerTitle: string;

  bannerDescription: string;

  buttonText?: string;
}

export const ServicesFeatureSection = ({
  title,

  description,

  cardsData,

  bannerTitle,

  bannerDescription,

  buttonText = "Learn More",
}: ServicesFeatureSectionProps) => {
  return (
    <section className="bg-grey-08 text-white font-urbanist w-full py-40 md:pt-80 md:pb-50">
      <Container>
        {/* Header Section */}

        <div className="mb-30 md:mb-50 relative px-16 sm:px-0">
          <Stars />

          <h2 className="text-[28px] sm:text-[38px] md:text-[48px] font-semibold mb-10 md:mb-14 text-white font-urbanist leading-[130%] md:leading-[150%]">
            {title}
          </h2>

          <p className="text-grey-60 text-[14px] sm:text-[16px] md:text-[18px] font-urbanist leading-[150%] max-w-[1296px] w-full block">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 px-16 sm:px-0">
          {cardsData.map((item) => (
            <div
              key={item.id}
              className="border border-grey-15 rounded-10 md:rounded-12 overflow-hidden bg-grey-08 transition-all duration-300 hover:border-purple-60 hover:shadow-lg p-16 md:p-24 [&_div:first-child]:gap-16"
            >
              <ValueCard
                id={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </div>
          ))}

          <div
            className="relative overflow-hidden col-span-1 md:col-span-2 border border-grey-15 rounded-10 md:rounded-12 p-16 sm:p-30 lg:p-50 bg-grey-10 flex flex-col justify-between gap-14 md:gap-20 bg-no-repeat bg-cover bg-right-bottom transition-all duration-300 hover:border-grey-30 mt-10 md:mt-0"
            style={{ backgroundImage: `url('/assets/imgs/BACKGROUND 2.svg')` }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-14 relative z-10 w-full">
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-white font-urbanist leading-snug">
                {bannerTitle}
              </h3>

              <Button
                content={buttonText}
                className="w-full sm:w-auto text-center relative z-10 bg-grey-08 border border-grey-15 text-white px-20 py-14 md:px-24 md:py-16 rounded-8 md:rounded-10 text-[14px] md:text-[16px] font-medium shrink-0 font-urbanist hover:bg-grey-15 transition-all duration-200 cursor-pointer active:scale-95"
              />
            </div>

            <p className="text-grey-60 text-[14px] md:text-[16px] font-urbanist leading-[150%] relative z-10 max-w-[820px]">
              {bannerDescription}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesFeatureSection;
