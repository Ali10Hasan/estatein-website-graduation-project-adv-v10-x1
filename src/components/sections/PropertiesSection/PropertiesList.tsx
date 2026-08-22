import { useEffect } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { readProperties } from "../../../data/propertiesAPI";
import { setProperties } from "../../../redux/slices/propertiesSlice";
import type { RootState } from "../../../redux/store/store";
import CardSkeleton from "../../CardSkeleton.tsx";
import Error from "../../Error";
import SliderSection from "../../Slider/SliderSection";
import PropertyCard from "./PropertyCard";

interface PropertiesListProps {
    showCategory?: boolean;
    showDetails?: boolean;
    sectionTitle: string
    Sectiondescription: string
}

const PropertiesList = ({
    showCategory = true,
    showDetails = true,
    sectionTitle,
    Sectiondescription
}: PropertiesListProps) => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state: RootState) => state.properties);

    useEffect(() => {
        const stopListening = readProperties((data) => {
            dispatch(setProperties(data));
        });

        return stopListening
    }, [dispatch]);


    if (error) return <Error message={error} />


    return (
        <section className="2xl:max-w-1596 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-640 max-w-358 2xl:my-150 xl:my-120 my-80">
            <SkeletonTheme baseColor="#1a1a1a" highlightColor="#2a2a2a">
                <SliderSection
                    title={sectionTitle}
                    desc={Sectiondescription}
                    desktopCards={3}
                    tabletCards={2}
                    mobileCards={1}
                    showButton={true}
                    buttonContent="View All Properties"
                    buttonClassName="2xl:px-24 2xl:py-18 bg-grey-10 text-white border border-grey-15 rounded-[10px] text-[18px] font-medium"
                >
                    {loading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                            <CardSkeleton variant="property" key={index} />
                        ))
                    ) : (
                        items.map((property) => (
                            <PropertyCard
                                key={property.id}
                                {...property}
                                showCategory={showCategory}
                                showDetails={showDetails}
                            />
                        ))
                    )}
                </SliderSection>
            </SkeletonTheme>
        </section>
    );
};

export default PropertiesList;