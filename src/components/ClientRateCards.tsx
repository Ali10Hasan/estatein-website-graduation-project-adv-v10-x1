import type { ITestimonial } from "../types/testimonialType"
import RatingStars from "./AtomComponents/RatingStars"

const ClientRateCards = ({ title, review, image, rating, name, location }: ITestimonial) => {
  return (
    <div className="h-full min-h-400 w-full rounded-xl border border-grey-15 p-24 min-[992px]:p-30 flex flex-col justify-start text-white bg-grey-08 hover:border-purple-65 hover:bg-grey-15 transition-colors">
      <div>
        <div className="pb-40">
          <RatingStars rating={rating} />
        </div>

        <h3 className="font-semibold text-20 min-[992px]:text-24 pb-14">
          {title}
        </h3>
        <p className="font-medium text-14 min-[992px]:text-18 text-grey-60">
          {review}
        </p>
      </div>

      <div className="flex items-center gap-12 pt-24 min-[992px]:pt-40 mt-auto">
        <img
          src={image}
          alt={name}
          className="w-60 h-60 rounded-full object-cover shrink-0"
        />
        <div className="flex flex-col justify-start items-start">
          <span className="font-medium text-16 min-[992px]:text-20">
            {name}
          </span>
          <span className="font-medium text-14 min-[992px]:text-18 text-grey-60">
            {location}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ClientRateCards