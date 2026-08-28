import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

import SliderSection from "../Slider/SliderSection";
import FaqCard from "../FaqCard";
import Loading from "../Loading";
import Error from "../Error";
import Container from "../Container";
const FaqSection = () => {
  const { items: faqs, loading, error } = useSelector(
    (state: RootState) => state.faqs
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (faqs.length === 0) {
    return null;
  }

  return (
    <div className="px-80 max-[992px]:px-16">
      <Container className="my-80 md:my-96">
        <SliderSection
          title="Frequently Asked Questions"
          desc="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          desktopCards={3}
          tabletCards={2}
          mobileCards={1}
          showButton
          buttonContent="View All FAQ's"
          buttonClassName="rounded-lg border border-grey-15 bg-grey-08 px-20 text-white transition-colors hover:bg-grey-15 cursor-pointer whitespace-nowrap"
        >
          {faqs.map((faq) => (
            <FaqCard id={faq.id} question={faq.question} answer={faq.answer}/>
          ))}
        </SliderSection>
      </Container>
    </div>
  );
};

export default FaqSection;