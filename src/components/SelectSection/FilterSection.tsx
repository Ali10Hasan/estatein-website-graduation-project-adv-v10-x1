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
    FilterKey:string;
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
        FilterKey:"area"
    },
    {
        Icone: <MdDateRange />,
        FilterText:"Build Year",
        FilterKey:"builtYear"
    },
]
const FilterSection = () => {
  const Options=useSelector((state:RootState)=>state.properties.itemsFiltered);

  return (
    <div className="">
        <div className="Search">
        <Search/>
        </div>
        <div  className="flex w-[85%] md:w-[97%] lg:w-[85%] p-10 mx-auto bg-grey-10 light:bg-white-95 flex-col md:flex-row md:justify-around rounded-[12px]   gap-15 relative top-60 md:bottom-20 md:top-auto" >       
        {SelectionData.map((item,index)=>{
           const OptionsUnique: string[] = Array.from(new Set(Options.map((option: any) => { return (item.FilterKey == "location" || item.FilterKey == "propertyType" || item.FilterKey == "area") && option[item.FilterKey!] ? String(option[item.FilterKey!]).toLowerCase() : option[item.FilterKey!] }).filter((option) => option !== undefined && option !== null && option !== 0)));
            {item.FilterKey==="price" && OptionsUnique.sort((a,b)=>parseInt(a)-parseInt(b))}
            {item.FilterKey==="area" && OptionsUnique.sort((a,b)=>parseInt(a)-parseInt(b))}
            {item.FilterKey==="builtYear" && OptionsUnique.sort((a,b)=>parseInt(b)-parseInt(a))}
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