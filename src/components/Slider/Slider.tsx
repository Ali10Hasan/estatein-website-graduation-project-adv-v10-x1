import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import type { SliderProps } from "../../types/sliderType";
import type { CSSProperties } from "react";

export default function Slider({
  children,
  currentIndex,
  gap = 20,
  desktopCards = 3,
  tabletCards = 2,
  mobileCards = 1,
  onVisibleCardsChange,
}: SliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const visibleCardsRef = useRef(mobileCards);

  const recalculate = useCallback(() => {
    const screenWidth = window.innerWidth;

    const count =
      screenWidth >= 1024 ? desktopCards
        : screenWidth >= 768 ? tabletCards : mobileCards;

    if (visibleCardsRef.current !== count) {
      visibleCardsRef.current = count;
      onVisibleCardsChange(count);
    }

    if (!containerRef.current) return;
    const availableWidth = containerRef.current.clientWidth;
    const totalGap = gap * (count - 1);
    const width = (availableWidth - totalGap) / count;

    setCardWidth(width);
  }, [desktopCards, tabletCards, mobileCards, gap, onVisibleCardsChange,]);

  useEffect(() => {
    recalculate();
    window.addEventListener("resize", recalculate);
    return () => {
      window.removeEventListener("resize", recalculate);
    };
  }, [recalculate]);

  const translateX = useMemo(
    () => (cardWidth + gap) * currentIndex,
    [cardWidth, gap, currentIndex]
  );

  const trackStyle = {
    "--gap": `${gap}px`,
    "--tx": `${translateX}px`,
  } as CSSProperties;

  const cardStyle = {
    width: `${cardWidth}px`,
  } as CSSProperties;

  return (
    <div ref={containerRef} className="w-full overflow-hidden mb-30 md:mb-40 lg:mb-50">
      <div className=" flex gap-(--gap) transition-transform duration-500 ease-in-out w-max pt-6 pb-6 -translate-x-(--tx) " style={trackStyle} >
        {children.map((child, index) => (
          <div key={index} className="shrink-0" style={cardStyle}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}