import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";

interface SliderProps {
  children: React.ReactNode[];
  currentIndex: number;
  gap?: number;
  desktopCards?: number;
  tabletCards?: number;
  mobileCards?: number;
  onVisibleCardsChange: (count: number) => void;
}

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
  const [visibleCards, setVisibleCards] = useState(mobileCards);

  const cardStyle = {
    width: cardWidth > 0 ? `${cardWidth}px` : undefined,
  };

  const recalculate = useCallback(() => {
    const width = window.innerWidth;
    const count =
      width >= 1024 ? desktopCards : width >= 768 ? tabletCards : mobileCards;

    setVisibleCards((prev) => {
      if (prev !== count) {
        onVisibleCardsChange(count);
      }
      return count;
    });

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

  return (
    <div ref={containerRef} className="overflow-hidden w-full mb-30 md:mb-40 lg:mb-50">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          gap: `${gap}px`,
          transform: `translateX(-${translateX}px)`,
          width: "max-content",
        }} >
        {children.map((child, index) => (
          <div
            key={index}
            className="shrink-0 w-full md:w-auto"
            style={cardStyle}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}