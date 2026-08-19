import React from 'react';

interface ClientQuoteCardProps {
  quote: string;
}

export const ClientQuoteCard: React.FC<ClientQuoteCardProps> = ({ quote }) => {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-[12px] p-[30px] flex flex-col gap-[14px] w-full h-full justify-center">
      <span className="text-[#999999] text-sm xl:text-[18px] font-medium leading-[150%]">
        What They Said 🤗
      </span>
      <p className="text-white text-sm xl:text-[18px] font-medium leading-[150%]">
        {quote}
      </p>
    </div>
  );
};