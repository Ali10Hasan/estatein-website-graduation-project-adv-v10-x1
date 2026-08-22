import type { ExperienceCardProps } from "../types/ExperinceCardsType"
const ExperienceCards = ({ step, title, description }: ExperienceCardProps) => {
  return (
    <div className="w-full h-full  rounded-xl rounded-t-none flex bg-grey-08 flex-col text-white group cursor-pointer">
      <div className="border-l border-purple-60 pl-20 py-16">
        <span className="font-medium text-20">{step}</span>
      </div>
      <div className="rounded-xl rounded-tl-none bg-linear-to-br from-purple-60 via-grey-15 via-30% to-grey-08 p-1 flex-1">
        <div className="relative h-full rounded-xl rounded-tl-none bg-grey-08 group-hover:bg-grey-15 transition-colors flex flex-col justify-start items-start p-50 overflow-hidden">
          <div className="absolute -top-30 -left-30 w-100 h-100 bg-purple-60/40 blur-xl pointer-events-none rounded-full z-0" />
          <div className="relative z-10 flex flex-col justify-start items-start w-full">
            <h3 className="font-semibold text-26 text-white pb-14">{title}</h3>
            <p className="font-medium text-18 text-grey-60">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCards