import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import SliderSection from "../Slider/SliderSection";
import FaqCard from "../FaqCard";
import Error from "../Error";
import Container from "../Container";
import CardSkeleton from "../CardSkeleton";
import { SkeletonTheme } from "react-loading-skeleton";
const FaqSection = () => {
  const { items: faqs, loading, error } = useSelector(
    (state: RootState) => state.faqs
  );


  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <Container>
        <SkeletonTheme
          baseColor="#1A1A1A"
          highlightColor="#262626"
        >
          <SliderSection
            title="Frequently Asked Questions"
            desc="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
            desktopCards={3}
            tabletCards={2}
            mobileCards={1}
            showButton
            buttonContent="View All FAQ's"
          >
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                <CardSkeleton key={index} variant="faq" />
              ))
              : faqs.map((faq) => (
                <FaqCard id={faq.id} question={faq.question} answer={faq.answer} />
              ))
            }
          </SliderSection>
        </SkeletonTheme>
      </Container>
    </div>
  );
};

export default FaqSection;