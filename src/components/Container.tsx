import type { ReactNode } from "react";

interface containerProps{
  children: ReactNode;
  className:string;
}

const Container = ({children , className}: containerProps) => {
  return (
    <div className={`w-full max-w-1440 xl:max-w-1700 mx-auto px-3 sm:px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
}

export default Container
