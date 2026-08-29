import type { ReactNode } from "react";
import Stars from "./AtomComponents/Stars";

export interface HeaderSectionProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}
const HeaderSection = ({ title, description, children, className }: HeaderSectionProps) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-20 md:gap-5 ${className}`}>
      <div className="relative md:max-w-975 min-[1440px]:max-w-1200">
        <Stars />
        <h1 className="mt-8 text-3xl md:text-4xl font-semibold mb-6 md:mb-10 text-white light:text-grey-10">
          {title}
        </h1>
        <p className="text-sm md:text-base min-[1440px]:text-lg text-grey-60 light:text-grey-40 font-medium">
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