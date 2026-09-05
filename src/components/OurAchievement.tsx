import type { OurAchievementProps } from "../types/ourAchievementType"

const OurAchievement = ({title, description}: OurAchievementProps) => {
  return (
    <div className="w-full rounded-xl border border-grey-15 light:border-white-90 p-24 min-[992px]:p-40 flex flex-col justify-start text-white light:text-grey-10 bg-grey-08 light:bg-white-99 ring-8 ring-grey-09 light:ring-0 light:shadow-lg light:shadow-grey-15/10 hover:border-purple-65 hover:bg-grey-15 light:hover:bg-white-95 light:hover:shadow-xl transition-all duration-300">
      <h3 className="font-semibold text-20 min-[992px]:text-24 pb-14">{title}</h3>
        <p className="font-medium text-14 min-[992px]:text-18 text-grey-60 light:text-grey-40">{description}</p>
    </div>
  )
}

export default OurAchievement
