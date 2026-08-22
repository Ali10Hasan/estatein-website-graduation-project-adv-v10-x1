import type { ReactNode } from "react";

interface containerProps{
  children: ReactNode;
  className?:string;
}

const Container = ({children , className}: containerProps) => {
  return (
    <div className={`w-full max-w-1440 xl:max-w-1700 mx-auto px-16 md:px-80 lg:px-160 ${className}`}>
      {children}
    </div>
  );
}

export default Container
