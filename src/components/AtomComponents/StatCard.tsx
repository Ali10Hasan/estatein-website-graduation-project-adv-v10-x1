import type { IStats } from "../Hero/data"


const StatCard = ({ value, desc }: IStats) => {
    return (
        <div className="bg-grey-10 h-full w-full text-center xl:text-left xl:max-w-190 2xl:max-w-240 2xl:py-16 2xl:px-24 xl:px-20 xl:py-14 p-16 text-white rounded-lg xl:rounded-[10px] 2xl:rounded-xl border border-grey-15 transition-all duration-500 ease-in-out 
            hover:bg-purple-60/20 hover:border-bg-purple-70">
            <h3 className="font-bold 2xl:text-[40px] xl:text-[30px] text-[24px] leading-[150%]">{value}</h3>
            <p className="text-grey-60 font-medium 2xl:text-[18px] xl:text-[16px] text-[14px]">{desc}</p>
        </div>
    )
}

export default StatCard
