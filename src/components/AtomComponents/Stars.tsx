import { FaStar } from "react-icons/fa";

const Stars = () => {
    return (
        <div className="flex items-center gap-6 2xl:-top-30 -top-20  2xl:-left-20 xl:-left-10 -left-8 absolute ">
            <FaStar className="2xl:w-30 xl:w-24 w-20 animate-spin text-grey-40 scale-[120%]  light:text-purple-60" style={{ animationDuration: '4s' }} />
            <FaStar className="2xl:w-18 xl:w-14 w-12 animate-pulse text-grey-40 light:text-purple-60" />
            <FaStar className="2xl:w-9  xl:w-6 w-5 animate-bounce text-grey-40 light:text-purple-60" />
        </div>
    )
}

export default Stars



            // <FaStar className="2xl:w-30 xl:w-24 w-20 animate-spin scale-[120%] mix-blend-lighten ligh" style={{ animationDuration: '4s' }} />