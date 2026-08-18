import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"

const Banner = () => {
    const [isVisible ,setIsvisible]= useState<boolean>(true)
        if(!isVisible) return null
        return (
            <div className="relative py-20 max-[992px]:py-40 flex justify-center items-center w-full bg-grey-10 text-white font-medium text-18">
                <img src="/Imgs/BannerBG.png" className="absolute z-0 inset-0 w-full h-full object-cover" alt="AbstractDesignBG" />
                <p className="relative z-10 w-full text-center max-[992px]:text-left pr-48">✨Discover Your Dream Property with Estatein<a href="" className="ml-2 underline cursor-pointer hover:text-purple-60">Learn More</a> </p>
                <button onClick={()=>{setIsvisible(false)}} aria-label="Close banner" className="absolute right-16 z-10 bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center shrink-0 rounded-full border-none cursor-pointer"><IoCloseOutline className="w-32 h-32" /></button>
            </div>
    )
}

export default Banner
