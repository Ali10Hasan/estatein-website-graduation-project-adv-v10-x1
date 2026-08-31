import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IProperty } from "../../../types/propertyType";
import Button from "../../AtomComponents/Button";
import { LuBed, LuBath } from "react-icons/lu";
import { HiMiniHomeModern } from "react-icons/hi2";

interface PropertyCardProps extends IProperty {
    showCategory?: boolean;
    showDetails?: boolean;
}

export const PropertyCard = ({ images, title, shortDescription, category, bedrooms, bathrooms, propertyType, price, id, showCategory = true,
    showDetails = true }: PropertyCardProps) => {
    const navigate = useNavigate();

    const [isExpanded, setIsExpanded] = useState(false);

    const description = shortDescription || "";
    const cardImage = images.length > 0 ? images[0] : "";

    const maxLength = 75;
    const isLongText = description.length > maxLength;
    const displayedText = isExpanded || !isLongText
        ? description
        : description.slice(0, maxLength) + '...';

    return (
        <div className="bg-grey-08 light:bg-white-99 border border-grey-15 light:border-white-90 max-w-full xl:max-w-413 2xl:max-w-lg p-24 xl:p-30 2xl:p-40 rounded-xl text-white light:text-grey-08 flex flex-col gap-20 xl:gap-24 2xl:gap-30 h-full transition-all duration-300 hover:border-purple-60 group">
            <div className="h-210 xl:h-255 2xl:h-318 rounded-[10px] overflow-hidden">
                <img
                    src={cardImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
                />
            </div>

            <div className="flex flex-col flex-1">
                <div>
                    {showCategory && category && (
                        <div className="bg-grey-10 light:bg-white-97 border border-grey-15 light:border-white-90 rounded-[28px] 2xl:px-14 2xl:py-8 px-12 py-6 font-medium text-[18px] text-white light:text-grey-08 mb-16 2xl:mb-20 w-fit">
                            {category}
                        </div>
                    )}

                    <h3 className="font-semibold text-[18px] xl:text-[20px] 2xl:text-[24px] leading-normal mb-2 xl:mb-4 2xl:mb-6">
                        {title}
                    </h3>
                    <p className="font-medium text-[14px] xl:text-[16px] 2xl:text-[18px] text-grey-60 leading-normal mb-20 xl:mb-24 2xl:mb-30">
                        {displayedText}{' '}
                        {isLongText && (
                            <span
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-white light:text-grey-08 underline cursor-pointer hover:text-purple-60 transition-colors ml-1"
                            >
                                {isExpanded ? 'Show Less' : 'Read More'}
                            </span>
                        )}
                    </p>

                    {showDetails !== undefined && (
                        <div className="flex flex-wrap gap-6 mb-20 xl:mb-24 2xl:gap-10 2xl:mb-30">
                            <div className="bg-grey-10 light:bg-white-97 border border-grey-15 light:border-white-90 rounded-[28px] px-14 py-6 xl:py-8 font-medium text-[14px] 2xl:text-[18px] flex items-center gap-4">
                                <LuBed className="2xl:w-24 w-20 " />
                                <span>{bedrooms ?? 0}-Bedroom</span>
                            </div>
                            <div className="bg-grey-10 light:bg-white-97 border border-grey-15 light:border-white-90 rounded-[28px] px-14 py-6 xl:py-8 font-medium text-[14px] 2xl:text-[18px] flex items-center gap-4">
                                <LuBath className="2xl:w-24 w-20 " />
                                <span>{bathrooms ?? 0}-Bathroom</span>

                            </div>
                            <div className="bg-grey-10 light:bg-white-97 border border-grey-15 light:border-white-90 rounded-[28px] px-14 py-6 xl:py-8 font-medium text-[14px] 2xl:text-[18px] flex items-center gap-4">
                                <HiMiniHomeModern className="2xl:w-24 w-20 " />
                                <span>{propertyType}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap justify-between items-center gap-30 xl:gap-40 2xl:gap-50 mt-auto">
                    <div>
                        <span className="font-medium text-[14px] lg:text-lg text-grey-60 block">Price</span>
                        <span className="font-semibold text-[18px] xl:text-[20px] 2xl:text-[24px]">${price}
                        </span>
                    </div>
                    <Button onClick={() => navigate(`/property/${id}`)} className="bg-purple-60 hover:bg-purple-60/50 text-white light:text-grey-08 font-medium text-[14px] 2xl:text-[18px] py-14 px-32 xl:px-44 2xl:px-52 2xl:py-18 rounded-lg 2xl:rounded-[10px] transition-all duration-300" content={"View Property Details"} />

                </div>
            </div>
        </div>
    );
};

export default PropertyCard;