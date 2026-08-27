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

  const cardStyle = {
    "--card-w": cardWidth > 0 ? `${cardWidth}px` : "100%",
  } as CSSProperties;

  const recalculate = useCallback(() => {
    const width = window.innerWidth;
    const count =
      width >= 1024 ? desktopCards : width >= 768 ? tabletCards : mobileCards;

if (visibleCardsRef.current !== count) {
  visibleCardsRef.current = count;
  onVisibleCardsChange(count);
}

    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const totalGap = gap * (count - 1);
      setCardWidth((containerWidth - totalGap) / count);
    }
  }, [desktopCards, tabletCards, mobileCards, gap, onVisibleCardsChange]);

  useEffect(() => {
    recalculate();
    window.addEventListener("resize", recalculate);
    return () => window.removeEventListener("resize", recalculate);
  }, [recalculate]);

  const translateX = useMemo(
    () => (cardWidth + gap) * currentIndex,
    [cardWidth, gap, currentIndex]
  );

  const trackStyle = {
    "--gap": `${gap}px`,
    "--tx": `${translateX}px`,
  } as CSSProperties;

  return (
    <div ref={containerRef} className="overflow-hidden w-full mb-30 md:mb-40 lg:mb-50">
      <div
        className="flex gap-(--gap) transition-transform duration-500 ease-in-out w-max -translate-x-(--tx)"
        style={trackStyle}  >
        {children.map((child, index) => (
          <div
            key={index}
            className="shrink-0 w-(--card-w)"
            style={cardStyle}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
} 