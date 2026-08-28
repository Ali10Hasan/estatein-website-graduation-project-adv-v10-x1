import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PropertyDetailsSkeleton = () => {
    return (
        <div className="2xl:max-w-1596 xl:max-w-7xl sm:max-w-[95%] max-w-358 mx-auto flex flex-col text-white">

            {/* Gallery Heading Skeleton */}
            <div className="flex flex-col 2xl:gap-50 xl:gap-40 gap-30 2xl:mt-120 mb-20 2xl:mb-30 xl:mt-80">
                <div className="flex justify-between items-start md:items-center">
                    <div className="flex gap-20 py-10 items-center">
                        <Skeleton width={250} height={35} baseColor="#1a1a1a" highlightColor="#2a2a2a" />
                        <Skeleton width={120} height={40} baseColor="#1a1a1a" highlightColor="#2a2a2a" className="hidden sm:block" />
                    </div>
                    <div>
                        <Skeleton width={40} height={15} baseColor="#1a1a1a" highlightColor="#2a2a2a" style={{ marginBottom: '8px' }} />
                        <Skeleton width={100} height={30} baseColor="#1a1a1a" highlightColor="#2a2a2a" />
                    </div>
                </div>

                {/*Gallery  Skeleton */}
                <div className="2xl:p-50 xl:p-40 p-20 bg-grey-10 border border-grey-15 rounded-xl flex flex-col 2xl:gap-30 gap-20">
                    <div className="bg-grey-08 p-10 2xl:p-20 flex justify-between items-center rounded-xl border border-grey-15">
                        <div className="flex items-center gap-20 overflow-hidden w-full">
                            {[1, 2, 3, 4, 5, 6].map((_, i) => (
                                <Skeleton key={i} width={120} height={80} baseColor="#1a1a1a" highlightColor="#2a2a2a" borderRadius={8} />
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <Skeleton height={400} baseColor="#1a1a1a" highlightColor="#2a2a2a" borderRadius={12} />
                        <Skeleton height={400} baseColor="#1a1a1a" highlightColor="#2a2a2a" borderRadius={12} className="hidden lg:block" />
                    </div>
                </div>
            </div>

            {/*  Overview Section Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 mb-80 xl:mb-120 2xl:mb-150">
                <div className="bg-grey-08 border border-grey-15 2xl:p-50 xl:p-40 p-20 rounded-xl flex flex-col gap-4">
                    <Skeleton width={150} height={25} baseColor="#1a1a1a" highlightColor="#2a2a2a" />
                    <Skeleton count={3} baseColor="#1a1a1a" highlightColor="#2a2a2a" />
                    <div className="grid xl:grid-cols-3 grid-cols-2 gap-4 pt-4 border-t border-grey-15 mt-4">
                        <Skeleton height={50} baseColor="#1a1a1a" highlightColor="#2a2a2a" />
                        <Skeleton height={50} baseColor="#1a1a1a" highlightColor="#2a2a2a" />
                        <Skeleton height={50} baseColor="#1a1a1a" highlightColor="#2a2a2a" />
                    </div>
                </div>

                <div className="border border-grey-15 2xl:p-50 xl:p-40 p-20 rounded-xl bg-grey-08 flex flex-col gap-4">
                    <Skeleton width={220} height={25} baseColor="#1a1a1a" highlightColor="#2a2a2a" style={{ marginBottom: '16px' }} />
                    {[1, 2, 3, 4].map((_, i) => (
                        <Skeleton key={i} height={50} baseColor="#1a1a1a" highlightColor="#2a2a2a" borderRadius={12} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default PropertyDetailsSkeleton;