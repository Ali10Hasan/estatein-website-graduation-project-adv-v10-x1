import { useState, useCallback } from "react";
import Slider from "../Slider/Slider";
import { SliderControls } from "../Slider/SliderControls";
import Button from "../AtomComponents/Button";
import type { HeaderProp } from "../../types/sliderType";



function SliderSection({
  title,
  desc,
  children,
  desktopCards = 3,
  tabletCards = 2,
  mobileCards = 1,
  showButton = true,
  buttonContent,
  buttonClassName ,
}: HeaderProp) {
const totalItems = children.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(mobileCards);

  const handleVisibleCardsChange = useCallback(
    (count: number) => {
      setVisibleCards(count);
      setCurrentIndex((prev) => Math.min(prev, Math.max(totalItems - count, 0)));},
    [totalItems]
  );

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < totalItems - visibleCards;

  const next = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalItems - visibleCards));
  }, [totalItems, visibleCards]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const formattedCurrent = String(currentIndex + 1).padStart(2, "0");
  const formattedTotal = String(totalItems).padStart(2, "0");

  const actionButton = (
    <Button
      content={buttonContent ?? ""}
      className={buttonClassName} />
  );

  return (
    <section className="bg-grey-08 ">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-40 md:mb-60 lg:mb-80">
          <div className="md:max-w-975 min-[1440px]:max-w-1200 ">
            <h1 className="text-[28px] md:text-[38px] font-semibold  mb-6 md:mb-10 text-white"> {title} </h1>
            <p className="text-[14px] md:text-[16px] min-[1440px]:text-[18px] text-grey-60 font-medium "> {desc} </p>
          </div>

          {showButton && (
            <div className="hidden md:block shrink-0">{actionButton}</div>
          )}
        </div>

        <Slider
          currentIndex={currentIndex}
          gap={30}
          desktopCards={desktopCards}
          tabletCards={tabletCards}
          mobileCards={mobileCards}
          onVisibleCardsChange={handleVisibleCardsChange}>
          {children}
        </Slider>

        <div className="border-t border-grey-15 flex items-center justify-between gap-4 pt-16">
          <div className="hidden md:block text-grey-60 text-[16px] min-[1440]:text-[20px] font-medium px-1">
            <span className="text-white">{formattedCurrent}</span> of {formattedTotal}
          </div>

          <div
            className={
              showButton
                ? "flex items-center gap-3 w-full md:w-auto justify-between md:justify-end"
                : "flex items-center w-full md:w-auto"
            } >

            {showButton && <div className="block md:hidden">{actionButton}</div>}
            <SliderControls
              canPrev={canPrev}
              canNext={canNext}
              onPrev={prev}
              onNext={next}
              formattedCurrent={formattedCurrent}
              formattedTotal={formattedTotal}
              showNumberBetween
              fullWidth={!showButton}
            />
          </div>
        </div>
    </section>
  );
}

export default SliderSection;