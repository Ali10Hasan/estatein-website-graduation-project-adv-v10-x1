import { CiSearch } from "react-icons/ci"

const Search = () => {
  return (
    <div className="Search-Container mx-auto w-[85%] md:w-[60%] h-80 relative top-30  md:top-auto md:bottom-30 flex justify-between items-center bg-grey-08 border border-grey-15 rounded-[12px] md:rounded-tr-md md:rounded-tl-md  px-20 shadow-[0px_0px_0px_4px_rgba(25,25,25,1)] md:shadow-[0px_0px_0px_10px_rgba(25,25,25,1)]">
        <input type="text" className="bg-transparent w-[80%] h-full focus:outline-none placeholder:text-white text-white text-md" placeholder="Search For A Property" />
        <div className="Btn-Content flex items-center gap-6 px-12 py-15 cursor-pointer bg-purple-60 w-60 sm:h-60 md:w-145 lg:w-185  rounded-[8px] text-white">
            <CiSearch className="w-20 h-20 mx-auto md:mx-0"/>
            <button className="hidden md:block  md:text-sm lg:text-lg ">Find Property</button>
        </div>
    </div>
  )
}

export default Search