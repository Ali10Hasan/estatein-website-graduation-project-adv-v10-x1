import type { ReactNode } from "react";

interface containerProps{
  children: ReactNode;
  className?:string;
}

const Container = ({children , className}: containerProps) => {
  return (
    <div className={`w-full max-w-1900 mx-auto px-16 md:px-80 lg:px-160 pb-80 md:pb-120 lg:pb-150 ${className}`}>
      {children}
    </div>
  );
}

export default Container