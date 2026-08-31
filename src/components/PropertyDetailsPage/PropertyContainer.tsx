import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readProperties } from "../../data/propertiesAPI";
import PropertyDetails from "../../pages/PropertyDetails";
import { setProperties } from "../../redux/slices/propertiesSlice";
import type { RootState } from "../../redux/store/store";
import Error from "../Error";
import PropertyDetailsSkeleton from "./PropertyDetailsSkeleton";

const PropertyContainer = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state: RootState) => state.properties);

    const [property, setProperty] = useState<(typeof items)[number] | null>(null);

    useEffect(() => {
        if (items.length === 0) {
            const stopListening = readProperties((data) => {
                dispatch(setProperties(data));
            });
            return stopListening;
        }
    }, [dispatch, items.length]);

    useEffect(() => {
        if (items.length > 0 && id) {
            const foundProperty = items.find(
                (item) => item.id === id
            );

            // eslint-disable-next-line react-hooks/set-state-in-effect
            setProperty(foundProperty ?? null);
        }
    }, [items, id]);

    if (error) return <Error message={error} />;

    if (loading) {
        return <PropertyDetailsSkeleton />;
    }
    if (!property) {
        return <Error message="Property not found." />;
    }


    return <PropertyDetails property={property} />;
};

export default PropertyContainer;