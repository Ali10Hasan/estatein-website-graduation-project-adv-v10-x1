import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PropertyCard from "./PropertyCard";
import { readProperties } from "../../../data/propertiesAPI";
import { setProperties } from "../../../redux/slices/propertiesSlice";
import Loading from "../../Loading";
import Error from "../../Error";
import type { RootState } from "../../../redux/store/store";



const PropertiesList = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state: RootState) => state.properties);

    useEffect(() => {
        const stopListening = readProperties((data) => {
            dispatch(setProperties(data));
        });

        return stopListening
    }, [dispatch]);

    if (loading) return <Loading />;
    if (error) return <Error message={error} />


    return (
        <>

            <div className="">
                {items.map((property) => (
                    <PropertyCard
                        key={property.id}
                        {...property}
                    />
                ))}
            </div>
        </>
    );
};

export default PropertiesList;