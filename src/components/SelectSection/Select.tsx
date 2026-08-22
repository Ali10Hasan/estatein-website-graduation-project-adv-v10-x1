import type { SelectionData } from "./FilterSection"
import { IoIosArrowDown } from "react-icons/io";
const Select = ({Icone, FilterText}:SelectionData) => {
  return (
    
            <div className="filter-info flex md:w-[30%] lg:items-center w-full md:justify-around   p-20 md:p-2 md:py-15 lg:px-10 lg:py-25  bg-smoky-black rounded-[10px]   gap-5 md:gap-3 lg:gap-5">
                <div className="icone text-[30px] md:text-[25px] lg:text-[30px]  text-grey-20">
                    {Icone}
                </div>
           
            <div className="relative w-full flex ">
          <select 
            className="w-full  bg-transparent text-white text-lg md:text-[12px]  lg:text-[16px] outline-none border-none appearance-none  cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled hidden>{FilterText}</option>
            <option value="location1" className="bg-[#141414]">Location 1</option>
            <option value="location2" className="bg-[#141414]">Location 2</option>
          </select>
          
          
          <div className=" absolute h-30 w-30 md:w-20 md:h-20 lg:w-30 lg:h-30 bg-grey-20 rounded-[50%] md:top-2 lg:top-auto right-0 md:right-1 lg:right-1 flex items-center justify-center text-grey-40 pointer-events-none">
                <IoIosArrowDown />
          </div>
          </div>
         </div>
   
  )
}

export default Select;

