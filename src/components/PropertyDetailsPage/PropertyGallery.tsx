import { useRef, useState } from "react";
import type { IProperty } from "../../types/propertyType";
import { StaggerContainer, StaggerItem } from "../FramerMotion/Animation";

interface PropertyGalleryProps {
    property: IProperty;
}

const PropertyGallery = ({ property }: PropertyGalleryProps) => {
    const images = property.images

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const handleSelectImage = (index: number) => {
        setCurrentImageIndex(index);

        const selectedThumb = thumbRefs.current[index];

        if (selectedThumb) {
            selectedThumb.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest"
            });
        }
    };

    const handleNext = () => {
        if (images.length === 0) return;

        const nextIndex =
            currentImageIndex === images.length - 1
                ? 0
                : currentImageIndex + 1;

        handleSelectImage(nextIndex);
    };

    const handlePrev = () => {
        if (images.length === 0) return;

        const prevIndex =
            currentImageIndex === 0
                ? images.length - 1
                : currentImageIndex - 1;

        handleSelectImage(prevIndex);
    };

    return (
        <div className="flex flex-col 2xl:gap-50 xl:gap-40 gap-30 2xl:mt-120 xl:mt-80 mt-60 2xl:mb-30 mb-20 max-w-358 sm:max-w-[95%] xl:max-w-7xl 2xl:max-w-1596 mx-auto">
            {/* Gallery Heading */}

            <div className="flex lg:items-center items-start lg:gap-20 gap-10 flex-col lg:flex-row ">
                <h1 className="text-[20px] xl:text-2xl 2xl:text-3xl font-semibold ">{property.title}</h1>

                <div className="flex justify-between items-center grow gap-20">
                    <div className="flex items-center 2xl:gap-6 gap-4 border border-grey-15 rounded-lg 2xl:p-10 p-8">
                        <img src="/assets/icons/location.svg" alt="location" className="2xl:w-24 2xl:h-24 w-20 h-20" />
                        <span className="text-[14px] 2xl:text-[18px] font-medium">{property.location}</span>
                    </div>

                    <div className="flex lg:block gap-4 items-center">
                        <span className="text-[14px] text-grey-60 font-medium block lg:mb-2">Price</span>
                        <span className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold text-white">${property.price.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            {/* Gallery Container */}
            <div className="bg-grey-10 border border-grey-15 rounded-xl flex flex-col gap-20 2xl:gap-30 p-20 xl:p-40 2xl:p-50 ">

                {/* Thumbnails */}
                <div className="bg-grey-08 border border-grey-15 p-10 2xl:p-20 rounded-xl overflow-hidden order-2 lg:order-1">
                    <StaggerContainer
                        className="flex items-center gap-10 scrollbar-none scroll-smooth justify-between"
                    >
                        {images.map((img, index) => (
                            <StaggerItem
                                key={index}
                                className="w-67 h-41 sm:w-auto shrink-0 2xl:w-144 2xl:h-94 xl:w-122 xl:h-74"
                            >
                                <button
                                    ref={(el) => { thumbRefs.current[index] = el; }}
                                    onClick={() => handleSelectImage(index)}
                                    className={`w-full h-full rounded-md 2xl:rounded-lg overflow-hidden transition-all ${currentImageIndex === index
                                        ? ""
                                        : "opacity-60"
                                        }`}
                                >
                                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                                </button>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
                {/* Gallery Slider */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-30 2xl:h-583 xl:h-507 h-249 order-1 lg:order-2">
                    <div className="rounded-[10px] overflow-hidden ">
                        <img
                            src={images[currentImageIndex]}
                            alt={property.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {images.length > 1 && (
                        <div className="rounded-[10px] overflow-hidden hidden lg:block">
                            <img
                                src={images[(currentImageIndex + 1) % images.length]}
                                alt={property.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </div>

                {/* Control Bar */}
                {images.length > 1 && (
                    <div className="bg-grey-08 mx-auto p-8 2xl:p-10 rounded-[100px] 2xl:h-78 xl:h-60 order-3">
                        <div className="flex gap-10">
                            <button
                                onClick={handlePrev}
                                className="2xl:w-58 2xl:h-58 w-44 h-44 rounded-full bg-grey-10 border border-grey-15 flex items-center justify-center hover:bg-purple-60 transition-colors "
                            >
                                <img src="/assets/icons/left-arrow.svg" alt="left-arrow" />
                            </button>

                            <div className="flex items-center gap-8">
                                {images.map((_, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleSelectImage(index)}
                                        className={`cursor-pointer h-3 w-12 2xl:w-20 2xl:h-5 rounded-[60px] transition-all ${currentImageIndex === index
                                            ? "bg-purple-60 scale-y-150"
                                            : "w-12 bg-grey-15"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={handleNext}
                                className="2xl:w-58 2xl:h-58 w-44 h-44 rounded-full bg-grey-10 border border-grey-15 flex items-center justify-center hover:bg-purple-60 transition-colors "
                            >
                                <img src="/assets/icons/right-arrow.svg" alt="right-arrow" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PropertyGallery;