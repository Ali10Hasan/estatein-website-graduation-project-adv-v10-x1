import type { OurAchievementProps } from "../types/OurAchievementType"
const OurAchievement = ({title , description} : OurAchievementProps) => {
  return (
    <div className="w-full rounded-xl border border-grey-15 p-24 min-[992px]:p-40 flex flex-col justify-start text-white bg-grey-08 ring-8 ring-grey-09 hover:border-purple-65 hover:bg-grey-15 transition-colors">
      <h3 className="font-semibold text-20 min-[992px]:text-24 pb-14">{title}</h3>
        <p className="font-medium text-14 min-[992px]:text-18 text-grey-60">{description}</p>
    </div>
  )
}

export default OurAchievement
