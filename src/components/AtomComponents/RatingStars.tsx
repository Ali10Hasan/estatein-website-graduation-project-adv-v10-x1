import { FaStar } from "react-icons/fa6";

interface RatingStarsProps {
    rating: number;
}

const RatingStars = ({ rating }: RatingStarsProps) => {
    return (
        <div className="flex flex-wrap items-center lg:gap-10 gap-8">
            {Array.from({ length: rating }).map((_, index) => (
                <span className="flex 
                items-center 
                justify-center
                bg-grey-10
                border 
                border-grey-15 
                rounded-full
                p-6
                lg:p-10" 
                key={index}><FaStar className="text-[#FFE500] lg:text-xl text-lg"/></span>
            ))}
        </div>
    );
};

export default RatingStars;