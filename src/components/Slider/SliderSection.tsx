import { useState, useCallback } from "react";
import type { CSSProperties } from "react";
import Slider from "../Slider/Slider";
import { SliderControls } from "../Slider/SliderControls";
import Button from "../AtomComponents/Button";
import type { HeaderProp } from "../../types/sliderType";
import Stars from "../AtomComponents/Stars";

function SliderSection({
  title,
  desc,
  children,
  desktopCards = 3,
  tabletCards = 2,
  mobileCards = 1,
  showButton = true,
  buttonContent,
}: HeaderProp) {
  const totalItems = children.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(mobileCards);
  const [showAll, setShowAll] = useState(false);

  const handleVisibleCardsChange = useCallback(
    (count: number) => {
      setVisibleCards(count);

      setCurrentIndex((prev) =>
        Math.min(prev, Math.max(totalItems - count, 0))
      );
    },
    [totalItems]
  );

  const canPrev = totalItems > visibleCards;
  const canNext = totalItems > visibleCards;

  const next = useCallback(() => {
    const maxIndex = Math.max(totalItems - visibleCards, 0);

    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  }, [totalItems, visibleCards]);

  const prev = useCallback(() => {
    const maxIndex = Math.max(totalItems - visibleCards, 0);

    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  }, [totalItems, visibleCards]);

  const formattedCurrent = String(currentIndex + 1).padStart(2, "0");
  const formattedTotal = String(totalItems).padStart(2, "0");

const isPropertiesButton = buttonContent === "View All Properties";

const actionButton = (
  <Button
    content={showAll ? "Show Less" : buttonContent ?? "View All"}
    href={isPropertiesButton ? "/properties" : undefined}
    onClick={
      isPropertiesButton
        ? undefined
        : () => setShowAll((prev) => !prev)
    }
    className="text-white text-sm md:text-base bg-grey-10 border border-grey-15"
  />
);
  const gridStyle = {
    "--mobile-cols": `repeat(${mobileCards}, minmax(0, 1fr))`,
    "--tablet-cols": `repeat(${tabletCards}, minmax(0, 1fr))`,
    "--desktop-cols": `repeat(${desktopCards}, minmax(0, 1fr))`,
  } as CSSProperties;

  return (
      <section className="relative">
        <Stars />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:pt-6 lg:pt-10 mb-40 md:mb-60 lg:mb-80">
          <div className="md:max-w-975 min-[1440px]:max-w-1200">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-10 lg:mb-14 text-white"> {title}</h1>
            <p className="text-sm md:text-base lg:text-lg min-[1440px]:text-lg text-grey-60 font-medium">{desc}</p>
          </div>
          {showButton && (
            <div className="hidden md:block shrink-0">{actionButton} </div>
          )}
        </div>
        {showAll ? (
          <div className="grid gap-20 grid-cols-(--mobile-cols) md:grid-cols-(--tablet-cols)  lg:grid-cols-(--desktop-cols) "style={gridStyle} >
            {children}
          </div>
        ) : (
          <Slider
            currentIndex={currentIndex}
            gap={20}
            desktopCards={desktopCards}
            tabletCards={tabletCards}
            mobileCards={mobileCards}
            onVisibleCardsChange={handleVisibleCardsChange}>
            {children}
          </Slider>
        )}

        {!showAll && (
          <div className="border-t border-grey-15 flex items-center justify-between gap-4 pt-16">
            <div className="hidden md:block text-grey-60 text-base min-[1440px]:text-xl font-medium px-1">
              <span className="text-white">{formattedCurrent}</span>{" "} of{" "}{formattedTotal} </div>
            <div
              className={showButton ? "flex items-center gap-3 w-full md:w-auto justify-between md:justify-end"
                                    : "flex items-center w-full md:w-auto"}  >
              {showButton && (
                <div className="block md:hidden">{actionButton} </div>
              )}

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
        )}
      </section>
  );
}

export default SliderSection;