import React from 'react';

interface ClientQuoteCardProps {
  quote: string;
}

export const ClientQuoteCard: React.FC<ClientQuoteCardProps> = ({ quote }) => {
  return (
    <div className="bg-grey-08 light:bg-white-99 border border-grey-15 light:border-white-90 rounded-xl p-30 flex flex-col gap-14 w-full h-full justify-center">
      <span className="text-grey-60 light:text-grey-40 text-sm xl:text-[18px] font-medium leading-[150%]">
        What They Said 🤗
      </span>
      <p className="text-white light:text-grey-08 text-sm xl:text-[18px] font-medium leading-[150%]">
        {quote}
      </p>
    </div>
  );
};