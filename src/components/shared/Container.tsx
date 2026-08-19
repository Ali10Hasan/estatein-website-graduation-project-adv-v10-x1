import React from 'react';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`w-full max-w-[1440px] xl:max-w-[1700px] mx-auto px-3 sm:px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
};