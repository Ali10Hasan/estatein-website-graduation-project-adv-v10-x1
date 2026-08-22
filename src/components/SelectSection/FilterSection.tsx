import Search from "./Search"
import Select from "./Select"
import { TiLocation } from "react-icons/ti";
import { IoIosHome } from "react-icons/io";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import type { JSX } from "react/jsx-runtime";
export interface SelectionData {
    Icone: JSX.Element;
    FilterText: string;
}
const SelectionData:SelectionData[]=[
    {
        Icone:<TiLocation/>,
        FilterText:"Location"
    },
    {
        Icone: <IoIosHome />,
        FilterText:"Property Type"
    },
    {
        Icone: <MdOutlinePriceChange />,
        FilterText:"Pricing Range"
    },
    {
        Icone: <IoCubeOutline />,
        FilterText:"Property Size"
    },
    {
        Icone: <MdDateRange />,
        FilterText:"Build Year"
    },
]
const FilterSection = () => {
  return (
    <div>
        <div className="Search">
        <Search/>
        </div>
        <div  className="flex w-[85%] md:w-[95%] p-10 mx-auto bg-grey-10 flex-col md:flex-row md:justify-around rounded-[12px]  items-center gap-15 relative top-60 md:bottom-20 md:top-auto" >       
        {SelectionData.map((item,index)=>{
            return(
                <>
                 <Select Icone={item.Icone} FilterText={item.FilterText}/>
                </>
            )
        })}
        </div>
    </div>
  )
}

export default FilterSection