import type { ValueItem } from '../types/ValueCards';


export const ValueCard = ({ title, description, icon }: ValueItem) => {
  return (
    <div className="flex flex-col gap-3.5 p-6 xl:p-30 h-full justify-start">
      <div className="flex items-center gap-10">
        <div className="w-48 h-48 rounded-full border border-purple-60 flex items-center justify-center text-purple-60 bg-grey-08 shrink-0">
          {icon}
        </div>
        <h3 className="text-20 font-semibold text-white">
          {title}
        </h3>
      </div>

      <p className="text-grey-60 text-16">
        {description}
      </p>
    </div>
  );
};