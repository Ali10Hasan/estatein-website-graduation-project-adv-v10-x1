import type { ExperienceCardProps } from "../types/experinceCardsType"
const ExperienceCards = ({ step, title, description }: ExperienceCardProps) => {
  return (
    <div className="w-full h-full  rounded-xl rounded-t-none flex bg-grey-08 light:bg-white-99 flex-col text-white light:text-grey-10 group cursor-pointer">
      <div className="border-l border-purple-60 pl-20 py-16">
        <span className="font-medium text-20">{step}</span>
      </div>
      <div className="rounded-xl rounded-tl-none bg-linear-to-br from-purple-60 via-grey-15 light:via-white-90 via-30% to-grey-08 light:to-white-99 p-1 flex-1">
        <div className="relative h-full rounded-xl rounded-tl-none bg-grey-08 light:bg-white-99 group-hover:bg-grey-15 light:group-hover:bg-white-95 transition-colors flex flex-col justify-start items-start p-50 overflow-hidden">
          <div className="absolute -top-30 -left-30 w-100 h-100 bg-purple-60/40 blur-xl pointer-events-none rounded-full z-0" />
          <div className="relative z-10 flex flex-col justify-start items-start w-full">
            <h3 className="font-semibold text-26 text-white light:text-grey-10 pb-14">{title}</h3>
            <p className="font-medium text-18 text-grey-60 light:text-grey-40">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCards
