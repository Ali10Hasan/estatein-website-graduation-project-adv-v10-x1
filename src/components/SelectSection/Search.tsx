import { CiSearch } from "react-icons/ci"
import { useDispatch } from "react-redux"
import { updateFilter} from "../../redux/slices/propertiesSlice"

const Search = () => {
  const dispatch=useDispatch()
  return (
    <div className="Search-Container mx-auto w-[85%] md:w-[60%] h-80 relative top-30  md:top-auto md:bottom-30 flex justify-between items-center bg-grey-08 light:bg-white-99 border border-grey-15 light:border-white-90 rounded-[12px] md:rounded-tr-md md:rounded-tl-md  px-20 shadow-[0px_0px_0px_4px_rgba(25,25,25,1)] light:shadow-[0px_0px_0px_4px_rgba(247,247,248,1)] md:shadow-[0px_0px_0px_10px_rgba(25,25,25,1)] md:light:shadow-[0px_0px_0px_10px_rgba(247,247,248,1)]">
        <input type="text" className="bg-transparent w-[80%] h-full focus:outline-none placeholder:text-white light:placeholder:text-grey-08 text-white light:text-grey-08  text-md" placeholder="Search For A Property By Title" 
        onChange={(e)=>{dispatch(updateFilter({key:"searchQuery",value:e.target.value}))}}
        />
        <div className="Btn-Content flex items-center gap-6 px-12 py-15 cursor-pointer bg-purple-60  w-60 sm:h-60 md:w-145 lg:w-185  rounded-[8px] text-white light:text-grey-08">
            <CiSearch className="w-20 h-20 mx-auto md:mx-0"/>
            <button className="hidden md:block  md:text-sm md:text-md lg:text-lg ">Find Property</button>
        </div>
    </div>
  )
}

export default Search