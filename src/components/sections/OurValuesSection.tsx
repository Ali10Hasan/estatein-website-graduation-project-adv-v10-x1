import Container from "../Container";
import { ValueCard } from "../ValueCard";
import { FaStar } from "react-icons/fa";
import { FaGraduationCap, FaUsers } from "react-icons/fa6";
import type { ValueItem } from "../../types/ValueCards";
import HeaderSection from "../HeaderSection";

const VALUES_DATA: ValueItem[] = [
  {
    id: "1",
    title: "Trust",
    description:
      "Trust is the cornerstone of every successful real estate transaction.",
    icon: <FaStar className="text-purple-75" />,
  },
  {
    id: "2",
    title: "Excellence",
    description:
      "We set the bar high for ourselves. From the properties we list to the services we provide.",
    icon: <FaGraduationCap className="text-purple-75" />,
  },
  {
    id: "3",
    title: "Client-Centric",
    description:
      "Your dreams and needs are at the center of our universe. We listen, understand.",
    icon: <FaUsers className="text-purple-75" />,
  },
  {
    id: "4",
    title: "Our Commitment",
    description:
      "We are dedicated to providing you with the highest level of service, professionalism.",
    icon: <FaStar className="text-purple-75" />,
  },
];

export const OurValuesSection = () => {
  return (
    <Container>
      <section className="flex flex-col">
        <div className="flex flex-col min-[992px]:flex-row min-[992px]:items-stretch gap-40 min-[768px]:gap-60 min-[992px]:gap-80">
          <div className="min-[992px]:flex-2 flex flex-col justify-center">
            <HeaderSection
              title="Our Values"
              description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
            />
          </div>
          <div className="min-[992px]:flex-3 bg-grey-08 light:bg-white-99 ring-8 ring-grey-09 light:ring-white-97 border border-grey-15 light:border-white-90 rounded-2xl p-10 grid grid-cols-1 min-[992px]:grid-cols-2">
            <div className="min-[992px]:border-r border-b border-grey-15 light:border-white-90 pb-20 min-[992px]:pb-20 min-[992px]:pr-20 rounded-tl-xl hover:bg-grey-15 light:hover:bg-white-90 transition-colors">
              <ValueCard {...VALUES_DATA[0]} />
            </div>
            <div className="border-b border-grey-15 light:border-white-90 pb-20 min-[992px]:pb-20 min-[992px]:pl-20 rounded-tr-xl hover:bg-grey-15 light:hover:bg-white-90 transition-colors">
              <ValueCard {...VALUES_DATA[1]} />
            </div>
            <div className="border-b min-[992px]:border-b-0 min-[992px]:border-r border-grey-15 light:border-white-90 pt-20 pb-20 min-[992px]:pb-0 min-[992px]:pr-20 rounded-bl-xl hover:bg-grey-15 light:hover:bg-white-90 transition-colors">
              <ValueCard {...VALUES_DATA[2]} />
            </div>
            <div className="pt-20 min-[992px]:pl-20 rounded-br-xl hover:bg-grey-15 light:hover:bg-white-90 transition-colors">
              <ValueCard {...VALUES_DATA[3]} />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default OurValuesSection;
