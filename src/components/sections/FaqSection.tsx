import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

import SliderSection from "../Slider/SliderSection";
import FaqCard from "../FaqCard";
import Error from "../Error";
import Container from "../Container";
import CardSkeleton from "../CardSkeleton";
import { SkeletonTheme } from "react-loading-skeleton";

/**
 * FaqSection
 * ----------
 * Home-page "Frequently Asked Questions" section.
 *
 * Data flow:
 *  Firestore ("faqs" collection)
 *    -> DataListener (onSnapshot, realtime)
 *    -> redux/slices/faqSlice (items/loading/error)
 *    -> this component (useSelector)
 *
 * No direct Firebase calls happen here — the section is a pure
 * consumer of the `faqs` slice, keeping data-fetching and UI decoupled.
 *
 * Layout/responsiveness is fully delegated to the existing
 * <SliderSection /> + <Slider /> components (1 card mobile /
 * 2 cards tablet / 3 cards desktop), so this component only
 * supplies the header copy and the list of <FaqCard /> children —
 * the same way <OurValues /> keeps its header text inline.
 *
 * The outer div supplies a real, visible side gutter matching
 * <Navbar />'s own px-80 / max-[992px]:px-16 convention, because
 * <Container />'s built-in px-3/sm:px-4/md:px-6 resolves to only
 * 3px/4px/6px under this project's `--spacing: 1px` theme override
 * (see src/index.css) and is not visibly noticeable on its own.
 */
const FaqSection = () => {
  const { items: faqs, loading, error } = useSelector(
    (state: RootState) => state.faqs
  );

  if (error) {
    return <Error message={error} />;
  }

  return (
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
              <FaqCard key={faq.id} faq={faq} />
            ))}
        </SliderSection>
      </SkeletonTheme>
    </Container>
  );
};

export default FaqSection;