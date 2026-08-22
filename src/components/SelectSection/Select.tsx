import type { SelectionData } from "./FilterSection"
import { IoIosArrowDown } from "react-icons/io";
const Select = ({Icone, FilterText}:SelectionData) => {
  return (
    
            <div className="filter-info flex items-center w-full  md:py-3 md:px-5 p-15 sm:p-20 lg:p-25  bg-smoky-black rounded-[10px]  gap-10 ">
                <div className="icone text-[30px] text-grey-15">
                    {Icone}
                </div>
           
            <div className="relative w-full">
          <select 
            className="w-full bg-transparent text-white  text-[14px] md:text-[16px] outline-none border-none appearance-none  cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled hidden>{FilterText}</option>
            <option value="location1" className="bg-[#141414]">Location 1</option>
            <option value="location2" className="bg-[#141414]">Location 2</option>
          </select>
          
          {/* السهم المخصص لجهة اليمين ليلغي سهم المتصفح الافتراضي */}
          <div className=" absolute top-[25%] right-0 flex items-center text-grey-40">
                <IoIosArrowDown />
          </div>
        </div>
         </div>
   
  )
}

export default Select;

