import { IoIosArrowDown } from "react-icons/io";
import type { JSX } from "react";
interface SelectProps {
  Icone: JSX.Element;
  FilterText: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[]; 
}

const Select = ({ Icone, FilterText, name, value, onChange, options }: SelectProps) => {
  return (
    <div className="filter-info flex md:w-[30%] lg:items-center w-full md:justify-around p-20 md:p-2 md:py-15 lg:px-10 lg:py-25 bg-smoky-black light:bg-white-90 rounded-[10px] gap-5 md:gap-3 lg:gap-5">
      <div className="icone text-[30px] md:text-[25px] lg:text-[30px] text-grey-20 light:text-grey-08">
        {Icone}
      </div>

      <div className="relative w-full flex">
        <select 
          name={name}
          className="w-full bg-transparent text-white light:text-grey-08 text-lg md:text-[12px] lg:text-[16px] outline-none border-none appearance-none cursor-pointer"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled hidden>{FilterText}</option>
          <option value="" className="bg-grey-10 light:bg-white-95 text-grey-40 light:text-grey-20">All {FilterText}s</option>

          {options.map((optionValue, idx) => (
            <option key={idx} value={optionValue} className="bg-grey-10 light:bg-white-95 light:text-grey-08">
              {optionValue}
            </option>
          ))}
        </select>
        <div className="absolute h-30 w-30 md:w-20 md:h-20 lg:w-30 lg:h-30 bg-grey-10 light:bg-white-95 rounded-[50%] md:top-2 lg:top-auto right-0 md:right-1 lg:right-1 flex items-center justify-center text-grey-50 light:text-grey-08 pointer-events-none">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Select;
