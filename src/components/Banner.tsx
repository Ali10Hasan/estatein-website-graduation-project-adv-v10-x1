import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"

const Banner = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true)

    if (!isVisible) return null

    return (
        <div
            className="relative py-20 max-[992px]:py-40 flex justify-center items-center w-full bg-grey-10 bg-[url('/assets/imgs/BannerBgSmall.webp')] min-[992px]:bg-[url('/assets/imgs/BannerBG.webp')] bg-size-[100%_100%] bg-center bg-no-repeat text-white font-medium text-18"
        >
            <p className="relative z-10 w-full text-center max-[992px]:text-left max-[992px]:text-[12px] pl-16 pr-48">
                ✨Discover Your Dream Property with Estatein{" "}
                <a href="#" className="ml-2 underline cursor-pointer hover:text-purple-60">
                    Learn More
                </a>
            </p>

            <button
                onClick={() => setIsVisible(false)}
                aria-label="Close banner"
                className="absolute right-16 z-10 bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center shrink-0 rounded-full border-none cursor-pointer"
            >
                <IoCloseOutline className="w-32 h-32" />
            </button>
        </div>
    )
}

export default Banner