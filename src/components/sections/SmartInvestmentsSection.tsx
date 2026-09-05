import { useNavigate } from "react-router-dom";
import Container from "../Container";
import { ValueCard } from "../ValueCard";
import Stars from "../AtomComponents/Stars";
import Button from "../AtomComponents/Button";
import type { ValueItem } from "../../types/ValueCards";

const INVESTMENT_SERVICES_DATA: ValueItem[] = [
  {
    id: "1",
    title: "Market Insight",
    description:
      "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions.",
    icon: (
      <img
        src="/assets/icons/Valuation.svg"
        alt="Market Insight"
        className="w-82 h-82 object-contain border-none p-0 shrink-0"
      />
    ),
  },
  {
    id: "2",
    title: "ROI Assessment",
    description:
      "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments.",
    icon: (
      <img
        src="/assets/icons/rqi.svg"
        alt="ROI Assessment"
        className="w-82 h-82 object-contain border-none p-0 shrink-0"
      />
    ),
  },
  {
    id: "3",
    title: "Customized Strategies",
    description:
      "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs.",
    icon: (
      <img
        src="/assets/icons/Customized.svg"
        alt="Customized Strategies"
        className="w-82 h-82 object-contain border-none p-0 shrink-0"
      />
    ),
  },
  {
    id: "4",
    title: "Diversification Mastery",
    description:
      "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations.",
    icon: (
      <img
        src="/assets/icons/AdvantageIcone4.png"
        alt="Diversification Mastery"
        className="w-82 h-82 object-contain border-none p-0 shrink-0"
      />
    ),
  },
];

export const SmartInvestmentsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-grey-08 light:bg-white-99 text-white light:text-grey-08 font-urbanist w-full py-40 md:pt-80 md:pb-50 overflow-x-hidden">
      <Container>
        <div className="flex flex-col min-[992px]:flex-row min-[992px]:items-stretch gap-30 min-[768px]:gap-40 min-[992px]:gap-80 w-full max-w-full">
          <div className="w-full min-[992px]:flex-2 flex flex-col justify-between gap-30 md:gap-40 shrink-0 box-border">
            <div className="flex flex-col gap-10 md:gap-14">
              <div className="relative pt-12 md:pt-16 pl-6 md:pl-8">
                <div className="absolute top-0 left-0 pointer-events-none">
                  <Stars />
                </div>

                <h2 className="text-[28px] sm:text-[38px] md:text-[48px] font-semibold text-white light:text-grey-08 font-urbanist leading-[130%] md:leading-[150%]">
                  Smart Investments, Informed Decisions
                </h2>
              </div>

              <p className="text-grey-60 light:text-grey-40 text-[14px] sm:text-[16px] md:text-[18px] font-urbanist leading-[150%]">
                Building a real estate portfolio requires a strategic approach.
                Estatein's Investment Advisory Service empowers you to make
                smart investments and informed decisions.
              </p>
            </div>

            <div
              className="rounded-lg relative overflow-hidden border border-grey-15 light:border-white-90 rounded-10 md:rounded-12 p-16 sm:p-24 md:p-30 lg:p-40 bg-grey-10 light:bg-white-95 flex flex-col justify-between gap-14 md:gap-20 bg-no-repeat bg-cover bg-center transition-all duration-300 hover:border-grey-30 light:hover:border-grey-40 mt-10 md:mt-0"
              style={{ backgroundImage: "url('/assets/imgs/back3.svg')" }}
            >
              <div className="flex flex-col gap-10 relative z-10">
                <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-white light:text-grey-08 font-urbanist leading-snug">
                  Unlock Your Investment Potential
                </h3>
                <p className="text-grey-60 light:text-grey-40 text-[14px] md:text-[16px] font-urbanist leading-[150%] relative z-10">
                  Explore our Property Management Service categories and let us
                  handle the complexities while you enjoy the benefits of
                  property ownership.
                </p>
              </div>

              <div className="relative z-10 w-full">
                <Button
                  content="Learn More"
                  onClick={() => navigate("/contact")}
                  className="w-full text-center py-12 md:py-16 bg-grey-08 light:bg-white-99 border border-grey-15 light:border-white-90 text-white light:text-grey-08 rounded-8 md:rounded-10 text-[14px] md:text-[16px] font-medium font-urbanist hover:bg-grey-15 light:hover:bg-white-90 transition-all duration-200 cursor-pointer active:scale-95"
                />
              </div>
            </div>
          </div>

          <div className="w-full min-[992px]:flex-3 bg-grey-10 light:bg-white-95 rounded-lg  p-10 md:p-14 min-[992px]:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 min-[992px]:gap-16 box-border">
            {INVESTMENT_SERVICES_DATA.map((item) => (
              <div
                key={item.id}
                className="border border-grey-15 light:border-white-90 rounded-lg p-16 md:p-24 bg-grey-08 light:bg-white-99 hover:border-purple-60 light:hover:border-purple-60  transition-all duration-200"
              >
                <ValueCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SmartInvestmentsSection;
