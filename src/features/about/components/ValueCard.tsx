import React from 'react';

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ValueCard: React.FC<ValueItem> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col gap-3.5 p-6 xl:p-[30px] bg-[#141414] h-full justify-start">
      <div className="flex items-center gap-3">
        <div className="w-[48px] h-[48px] rounded-full border border-[#703BF7] flex items-center justify-center text-[#703BF7] bg-[#1A1A1A] shrink-0">
          {icon}
        </div>
        <h3 className="text-[20px] font-semibold text-white font-['Urbanist'] leading-tight">
          {title}
        </h3>
      </div>

      <p className="text-[#999999] text-[16px] font-normal font-['Urbanist'] leading-[150%]">
        {description}
      </p>
    </div>
  );
};