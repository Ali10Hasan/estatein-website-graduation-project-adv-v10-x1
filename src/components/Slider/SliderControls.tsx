import { FaArrowLeft ,FaArrowRight } from "react-icons/fa6";
import type { SliderControlsProps } from "../../types/sliderType";


export function SliderControls({
    canPrev,
    canNext,
    onPrev,
    onNext,
    formattedCurrent,
    formattedTotal,
    showNumberBetween = false,
    fullWidth = false,
}: SliderControlsProps) {
    return (
        <div className={ fullWidth ? "flex items-center justify-between w-full md:w-auto md:justify-normal md:gap-10"
                                    : "flex items-center gap-5 lg:gap-20"}>

            <button
                onClick={onPrev}
                disabled={!canPrev}
                aria-label="Previous Slide"
                className="w-44 h-44 2xl:w-58 2xl:h-58 rounded-full border border-grey-15 light:border-white-90 bg-grey-10 light:bg-white-95 text-white light:text-grey-08 hover:bg-grey-15 light:hover:bg-purple-75 flex items-center justify-center transition-all " >
                <FaArrowLeft className="w-14.4 h-14.4 md:h-17 min-[1440px]:w-18 min-[1440px]:h-21" />
            </button>

            {showNumberBetween && (
                <div className="md:hidden text-grey-60 light:text-grey-40 text-sm font-medium px-4 ">
                    <span className="text-white light:text-grey-08 font-(--font-urbanist)">{formattedCurrent}</span> of {formattedTotal}
                </div>
            )}

            <button
                onClick={onNext}
                disabled={!canNext}
                aria-label="Next Slide"
                className="w-44 h-44 2xl:w-58 2xl:h-58 rounded-full border border-grey-15 light:border-white-90 bg-grey-10 light:bg-white-95 text-white light:text-grey-08 hover:bg-grey-15 light:hover:bg-purple-75 flex items-center justify-center transition-all">
                <FaArrowRight className="w-14.4 h-14.4 md:h-17 min-[1440px]:w-18 min-[1440px]:h-21" />
            </button>
        </div>
    );
}