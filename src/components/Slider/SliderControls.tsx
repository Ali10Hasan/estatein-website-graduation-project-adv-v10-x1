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
                className="w-44 h-44 min-[1441px]:w-58 min-[1441px]:h-58 rounded-full border border-grey-15 bg-grey-10 text-white flex items-center justify-center transition-all " >
                <FaArrowLeft className="w-14.4 h-14.4 md:h-17 min-[1440px]:w-18 min-[1440px]:h-21" />
            </button>

            {showNumberBetween && (
                <div className="md:hidden text-grey-60 text-sm font-medium px-10 ">
                    <span className="text-white font-(--font-urbanist)">{formattedCurrent}</span> of {formattedTotal}
                </div>
            )}

            <button
                onClick={onNext}
                disabled={!canNext}
                aria-label="Next Slide"
                className="w-44 h-44 min-[1441px]:w-58 min-[1441px]:h-58 rounded-full border border-grey-15 bg-grey-10 text-white flex items-center justify-center transition-all">
                <FaArrowRight className="w-14.4 h-14.4 md:h-17 min-[1440px]:w-18 min-[1440px]:h-21" />
            </button>
        </div>
    );
}