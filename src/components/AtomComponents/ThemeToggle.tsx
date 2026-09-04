import { useDispatch, useSelector } from "react-redux"
import { LuSunDim } from "react-icons/lu"
import { IoMoonOutline } from "react-icons/io5"
import { toggleTheme } from "../../redux/slices/uiSlice"
import type { AppDispatch, RootState } from "../../redux/store/store"
import { useLocation } from "react-router-dom"

const ThemeToggle = () => {
  const theme = useSelector((state: RootState) => state.ui.theme)
  const dispatch = useDispatch<AppDispatch>()

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }
  const location=useLocation();
  const isDashboardPage = location.pathname === "/dashboard/properties";
  return (
    <button
      onClick={handleThemeToggle}
      aria-label="Toggle Theme"
      className={`
        ${isDashboardPage?
          "bg-white-90 h-60 w-65 border-2 border-purple-60 rounded-md flex items-center justify-center "
          :
          ` relative w-70 h-32 flex items-center rounded-full cursor-pointer transition-colors duration-300 outline-hidden hover:border-purple-65 ${theme == "dark" ? 'bg-grey-08 text-white' : 'bg-white-99 text-grey-08 '}`}
       '}
      
      `}
    >
      {isDashboardPage?
      (
        
        <div className="">
            <LuSunDim className={`w-25 h-25  text-white ${theme === "dark" ? "hidden" : "block"}`} />
            <IoMoonOutline className={`w-20 h-20  text-main-text ${theme === "dark" ? "block" : "hidden"}`} />
        </div>
        
      ):
      (
      <>
      <LuSunDim className="absolute left-6 w-18 h-18 text-white z-5 transition-opacity duration-300" />
      <IoMoonOutline
        className={`absolute right-6 w-18 h-18 text-main-text z-5 transition-opacity duration-300 ${
          theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      <div
        className={`absolute top-4 left-4 w-24 h-24 z-10 rounded-full bg-purple-65 transition-transform duration-300 ease-in-out ${
          theme === "dark" ? "translate-x-38" : "translate-x-0"
        }`}
      />
      </>)
      }
      
    </button>
  )
}

export default ThemeToggle