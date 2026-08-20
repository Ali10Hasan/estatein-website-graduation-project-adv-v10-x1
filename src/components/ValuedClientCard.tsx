import React from 'react';
import type { ClientItem } from '../../../types/client';
import { ClientQuoteCard } from './ClientQuoteCard';

export const ValuedClientCard: React.FC<ClientItem> = ({
  establishedYear,
  companyName,
  domain,
  category,
  testimonial,
  websiteUrl = '#',
}) => {
  return (
    <article className="bg-[#1A1A1A] border border-[#262626] rounded-[12px] p-6 lg:p-[50px] flex flex-col justify-between gap-8 hover:border-[#703BF7]/40 transition-colors duration-300 w-full">
      {/* Upper Container */}
      <div className="flex items-center justify-between gap-[30px] w-full">
        <div className="flex flex-col gap-[6px]">
          <span className="text-[#999999] text-sm lg:text-base font-medium">
            Since {establishedYear}
          </span>
          <h3 className="text-xl lg:text-[30px] font-semibold text-white leading-[150%]">
            {companyName}
          </h3>
        </div>
        
        {/* Visit Website Button (148px width, 63px height approx / padding 18px 24px) */}
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-[18px] bg-[#1A1A1A] border border-[#262626] rounded-[10px] text-white text-sm lg:text-[18px] font-medium hover:bg-[#262626] hover:border-[#703BF7] transition-all whitespace-nowrap text-center"
        >
          Visit Website
        </a>
      </div>

      {/* Domain & Category Sub Container */}
      <div className="grid grid-cols-2 gap-[30px] py-[16px] border-y border-[#262626]">
        <div className="flex flex-col gap-2">
          <span className="text-[#999999] text-xs lg:text-sm font-medium flex items-center gap-1.5">
            <span className="w-[18px] h-[18px] opacity-60">❖</span> Domain
          </span>
          <p className="text-white text-sm lg:text-[18px] font-medium">{domain}</p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[#999999] text-xs lg:text-sm font-medium flex items-center gap-1.5">
            <span className="w-[18px] h-[18px] opacity-60">⚡</span> Category
          </span>
          <p className="text-white text-sm lg:text-[18px] font-medium">{category}</p>
        </div>
      </div>

      {/* Testimonial Quote Sub Card */}
      <ClientQuoteCard quote={testimonial} />
    </article>
  );
};