import Search from "./Search"
import Select from "../inputs/Select"
import { TiLocation } from "react-icons/ti";
import { IoIosHome } from "react-icons/io";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import type { JSX } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
export interface SelectionData {
    Icone: JSX.Element;
    FilterText: string;
    FilterKey: keyof RootState["properties"]["filters"];
}
const SelectionData:SelectionData[]=[
    {
        Icone:<TiLocation/>,
        FilterText:"Location",
        FilterKey:"location"
    },
    {
        Icone: <IoIosHome />,
        FilterText:"Property Type",
        FilterKey:"propertyType"
    },
    {
        Icone: <MdOutlinePriceChange />,
        FilterText:"Pricing Range",
        FilterKey:"price"
    },
    {
        Icone: <IoCubeOutline />,
        FilterText:"Property Size",
        FilterKey:"propertySize"
    },
    {
        Icone: <MdDateRange />,
        FilterText:"Build Year",
        FilterKey:"buildYear"
    },
]
const FilterSection = () => {
  const Options=useSelector((state:RootState)=>state.properties.itemsFiltered);

  return (
    <div className="">
        <div className="Search">
        <Search/>
        </div>
        <div  className="flex w-[85%] md:w-[97%] lg:w-[85%] p-10 mx-auto bg-grey-10 flex-col md:flex-row md:justify-around rounded-[12px]   gap-15 relative top-60 md:bottom-20 md:top-auto" >       
        {SelectionData.map((item,index)=>{
            const OptionsUnique:string[]=Array.from(new Set(Options.map((option:any)=>option[item.FilterKey!])));
            {item.FilterKey==="price" && OptionsUnique.sort((a,b)=>parseInt(a)-parseInt(b))}
            return(
                <>
                 <Select Icone={item.Icone} FilterText={item.FilterText} filterKey={item.FilterKey} options={OptionsUnique} />
                </>
            )
        })}
        </div>
    </div>
  )
}

export default FilterSection