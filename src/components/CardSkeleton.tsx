import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ICardSkeleton {
    variant?: "property" | "review" | "faq";
}

export const CardSkeleton = ({ variant = "property" }: ICardSkeleton) => {
    return (
        <div className="bg-grey-08 border border-grey-15 max-w-358 xl:max-w-413 2xl:max-w-lg p-24 xl:p-30 2xl:p-40 rounded-xl flex flex-col justify-between h-full">
            {variant === "property" && (
                <div className="flex flex-col gap-20 xl:gap-24 2xl:gap-30 h-full">
                    <div className="h-210 xl:h-255 2xl:h-318 rounded-[10px] overflow-hidden">
                        <Skeleton height="100%" width="100%" />
                    </div>
                    <div className="flex flex-col justify-between grow">
                        <div>
                            <div className="mb-16 2xl:mb-20">
                                <Skeleton width={100} height={30} borderRadius={28} />
                            </div>
                            <div className="mb-2 xl:mb-4 2xl:mb-6">
                                <Skeleton height={24} width="80%" />
                            </div>
                            <div className="mb-20 xl:mb-24 2xl:mb-30">
                                <Skeleton count={2} height={16} />
                            </div>
                            <div className="flex flex-wrap gap-6 mb-20 xl:mb-24 2xl:gap-10 2xl:mb-30">
                                <Skeleton width={110} height={32} borderRadius={28} />
                                <Skeleton width={110} height={32} borderRadius={28} />
                                <Skeleton width={90} height={32} borderRadius={28} />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between items-center gap-30 xl:gap-40 2xl:gap-50">
                            <div>
                                <Skeleton width={40} height={14} className="mb-1" />
                                <Skeleton width={90} height={24} />
                            </div>
                            <Skeleton width={160} height={45} borderRadius={8} />
                        </div>
                    </div>
                </div>

            )}

            {variant === "review" && (
                <div className="flex flex-col gap-20">

                    <div className="flex gap-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Skeleton key={i} circle width={24} height={24} />
                        ))}
                    </div>

                    <div>
                        <Skeleton height={22} width="60%" className="mb-2" />
                        <Skeleton count={3} height={16} />
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                        <Skeleton circle width={50} height={50} />
                        <div className="w-full">
                            <Skeleton height={16} width="40%" className="mb-1" />
                            <Skeleton height={14} width="60%" />
                        </div>
                    </div>
                </div>
            )}


            {variant === "faq" && (
                <div className="flex flex-col gap-24 justify-between h-full">
                    <div>
                        <Skeleton height={28} width="90%" className="mb-3" />
                        <Skeleton count={2} height={16} className="mb-6" />
                    </div>

                    <div>
                        <Skeleton width={120} height={40} borderRadius={8} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardSkeleton;