interface FeatureProps {
    feature: string
}

import { GiElectric } from "react-icons/gi";

const Feature = ({ feature }: FeatureProps) => {
    return (
        <div
            className="flex gap-10 bg-[linear-gradient(90deg,#1A1A1A_0%,rgba(26,26,26,0)_100%)]
                        light:bg-[linear-gradient(238.21deg,#A685FA10_8.76%,rgba(255,255,255,0)_50.09%)]
            border-l border-purple-60 2xl:px-24 2xl:py-18 xl:px-16 xl:py-14 px-12 py-10 hover:border-l-5 hover:rounded-l-2xl transition-all duration-300 group">
            <GiElectric className="text-white light:text-grey-08 group-hover:text-purple-60 text-[18px] xl:text-[20px] 2xl:text-[24px]" />
            <span className="text-grey-60 font-medium text-sm xl:text-base 2xl:text-[18px]">{feature}</span>
        </div>
    )
}

export default Feature