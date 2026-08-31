import { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store/store";
import CardSkeleton from "../../CardSkeleton.tsx";
import Error from "../../Error";
import SliderSection from "../../Slider/SliderSection";
import PropertyCard from "./PropertyCard";
import Container from "../../Container.tsx";

interface PropertiesListProps {
    showCategory?: boolean;
    showDetails?: boolean;
    sectionTitle: string
    Sectiondescription: string,
    showButton: boolean,
    buttonContent: string,
    className?: string
}

const PropertiesList = ({
    showCategory = true,
    showDetails = true,
    sectionTitle,
    Sectiondescription,
    showButton,
    buttonContent,
    className
}: PropertiesListProps) => {
    const { items, loading, error } = useSelector((state: RootState) => state.properties);

    if (error) return <Error message={error} />

    console.log("PropertiesList items:", items); // Debugging line
    return (
        <Container>
            <section className={`${className}`}>
                <SkeletonTheme
                    baseColor="#703BF7 "
                    highlightColor="#A685FA">
                    <SliderSection
                        title={sectionTitle}
                        desc={Sectiondescription}
                        desktopCards={3}
                        tabletCards={2}
                        mobileCards={1}
                        showButton={showButton}
                        buttonContent={buttonContent}
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
        </Container>
    );
};

export default PropertiesList;