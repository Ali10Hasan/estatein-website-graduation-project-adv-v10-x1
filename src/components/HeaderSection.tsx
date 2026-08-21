import type { ReactNode } from "react";
import Stars from "./AtomComponents/Stars";

export interface HeaderSectionProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

/**
 * HeaderSection
 * -------------
 * Standalone "title + description (+ optional action)" header block,
 * topped by the decorative <Stars /> atom (same one used above the
 * Hero/AboutHero titles). Not tied to any slider/section — purely
 * presentational, driven entirely by props.
 *
 * Responsive behavior:
 *  - Mobile/Tablet (below md): title, description, then the action
 *    (children) stacked vertically, full width.
 *  - Desktop (md+): title/description on the left, action aligned
 *    to the right, sharing the same row.
 *
 * <Stars /> is absolutely positioned relative to its nearest
 * positioned ancestor (see AtomComponents/Stars.tsx), so the
 * title/description wrapper below is `relative` — matching the
 * exact same pattern already used in AboutHero.tsx's <header>.
 *
 * @param {HeaderSectionProps} props
 */
const HeaderSection = ({ title, description, children, className = "" }: HeaderSectionProps) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-20 md:gap-5 ${className}`}>
      <div className="relative md:max-w-975 min-[1440px]:max-w-1200">
        <Stars />
        <h1 className="mt-8 text-3xl md:text-4xl font-semibold mb-6 md:mb-10 text-white">
          {title}
        </h1>
        <p className="text-sm md:text-base min-[1440px]:text-lg text-grey-60 font-medium">
          {description}
        </p>
      </div>

      {children && (
        <div className="w-fit md:w-auto shrink-0">
          {children}
        </div>
      )}
    </div>
  );
};

export default HeaderSection;