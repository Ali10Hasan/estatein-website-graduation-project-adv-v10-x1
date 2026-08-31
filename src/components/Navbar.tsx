import { useState } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import Button from "./AtomComponents/Button"
import { IoCloseOutline } from "react-icons/io5"
import ThemeToggle from "./AtomComponents/ThemeToggle"
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About us" },
  { path: "/properties", label: "Properties" },
  { path: "/services", label: "Services" },
  { path: "/dashboard", label: "Dashboard" },
]
const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isContactActive = location.pathname === "/contact"
  const [show, setShow] = useState<boolean>(false)
  const showMenu = () => {
    setShow(!show)
  }
  const activeStyle = 'bg-grey-08 light:bg-white-97 p-10 rounded-lg border border-grey-15 light:border-white-90 transition-colors'
  return (
    <nav className="bg-grey-10 light:bg-white-97">
      <div className="w-full max-w-1900 mx-auto px-16 md:px-40 lg:px-60 relative flex justify-between items-center py-20 font-medium text-18 text-white light:text-grey-10">
        <img src="assets/imgs/EstateinLogo.webp" className="w-94 h-28 light:hidden" alt="Estatein_Logo" />
        <img src="assets/imgs/logolight.webp" className="w-94 h-28 hidden light:block" alt="Estatein_Logo" />
        <ul className="flex justify-center items-center gap-20 max-[992px]:hidden">        
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              className={({ isActive }) => (isActive ? activeStyle : 'hover:bg-grey-15 light:hover:bg-white-95 p-10 rounded-lg transition-colors')}
            >
              {link.label}
            </NavLink>
          ))}
        </ul>
        <Button 
          onClick={() => navigate('/contact')} 
          content="Contact us" 
          className={`max-[992px]:hidden rounded-lg cursor-pointer bg-grey-08 light:bg-white-97 ${isContactActive ? 'bg-purple-60' : 'hover:bg-grey-15 light:hover:bg-white-95'}`} 
        />
        <div className="max-[992px]:hidden">
          <ThemeToggle/>
        </div>

        <button 
          onClick={showMenu} 
          className="hidden max-[992px]:block border-none bg-transparent text-2xl cursor-pointer"
        >
          {show ? <IoCloseOutline /> : <HiOutlineMenuAlt3 />}
        </button>
        {show && (
  <div className={`hidden max-[992px]:flex flex-col gap-20 absolute top-full left-0 w-full p-20 bg-grey-10 light:bg-white-99 border-t border-grey-15 light:border-white-90 z-50 items-center }`}>
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                onClick={showMenu} 
                className={({ isActive }) => (isActive ? activeStyle : 'hover:bg-grey-15 light:hover:bg-white-95 p-10 rounded-lg transition-colors')}
              >
                {link.label}
              </NavLink>
            ))}
            <Button 
              onClick={() => {
                navigate('/contact')
                showMenu()
              }} 
              content="Contact us" 
              className={`rounded-lg cursor-pointer bg-grey-08 light:bg-white-97 ${isContactActive ? 'bg-purple-60' : 'hover:bg-grey-15 light:hover:bg-white-95'}`} 
            />
            <ThemeToggle/>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar