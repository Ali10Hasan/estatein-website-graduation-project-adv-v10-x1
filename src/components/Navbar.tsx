import { useState } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import Button from "./Button"
import { IoCloseOutline } from "react-icons/io5"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isContactActive = location.pathname === "/contact"
  const [show, setShow] = useState<boolean>(false)
  const showMenu = () => {
    setShow(!show)
  }
  const activeStyle = 'bg-grey-08 p-10 rounded-lg border border-grey-15 transition-colors'
  return (
    <nav className="relative flex justify-between items-center px-80 py-20 bg-grey-10 font-medium text-18 text-white max-[992px]:px-16">
      <img src="/Imgs/EstateinLogo.png" className="w-94 h-28" alt="Estatein_Logo" />
      <ul className="flex justify-center items-center gap-20 max-[992px]:hidden">        
        <NavLink to="/" className={({isActive}) => (isActive ? activeStyle : 'nav-item')}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => (isActive ? activeStyle : 'nav-item')}>About us</NavLink>
        <NavLink to="/properties" className={({isActive}) => (isActive ? activeStyle : 'nav-item')}>Properties</NavLink>
        <NavLink to="/services" className={({isActive}) => (isActive ? activeStyle : 'nav-item')}>Services</NavLink>
        <NavLink to="/dashboard" className={({isActive}) => (isActive ? activeStyle : 'nav-item')}>Dashboard</NavLink>

      </ul>
      <Button onClick={()=> navigate('/contact')} content="Contact us" className={`max-[992px]:hidden w-110 h-50 rounded-lg cursor-pointer bg-grey-08 ${isContactActive ? 'bg-purple-60' : 'hover:bg-grey-15' }`} />
      <button 
        onClick={showMenu} 
        className="hidden max-[992px]:block border-none bg-transparent text-2xl cursor-pointer"
      >
        {show ? <IoCloseOutline /> : <HiOutlineMenuAlt3 />}
      </button>
      {show && (
        <div className="hidden max-[992px]:flex flex-col gap-20 absolute top-full left-0 w-full p-20 bg-grey-10 border-t border-grey-15 z-50 items-center">
          <NavLink to="/" onClick={showMenu} className={({isActive}) => (isActive ? activeStyle : 'nav-item')}>Home</NavLink>
          <NavLink to="/about" onClick={showMenu} className={({isActive}) => (isActive ? activeStyle : 'nav-item')}>About us</NavLink>
          <NavLink to="/properties" onClick={showMenu} className={({isActive}) => (isActive ? activeStyle : 'nav-item')}>Properties</NavLink>
          <NavLink to="/services" onClick={showMenu} className={({isActive}) => (isActive ? activeStyle : 'nav-item')}>Services</NavLink>
          <NavLink to="/dashboard" className={({isActive}) => (isActive ? activeStyle : 'nav-item')}>Dashboard</NavLink>
                <Button onClick={()=> navigate('/contact')} content="Contact us" className={`w-110 h-50 rounded-lg cursor-pointer bg-grey-08 ${isContactActive ? 'bg-purple-60' : "hover:bg-grey-15" }`} />
        </div>
      )}
    </nav>
  )
}

export default Navbar