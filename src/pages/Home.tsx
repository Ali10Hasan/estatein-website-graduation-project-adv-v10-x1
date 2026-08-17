import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../redux/store/store";

import { setProperties } from "../redux/slices/propertiesSlice";
import { listenToProperties} from "../data/propertiesApi";

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { items, loading, error } = useSelector(
        (state: RootState) => state.properties
    );

    useEffect(() => {
        const stopListening = listenToProperties((properties) => {
            dispatch(setProperties(properties));
        });

        return () => {
            stopListening();
        };
    }, [dispatch]);

    console.log("Properties from Redux:", items);

    return (
        <div>
            <h1>Home</h1>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            <p>Properties Count: {items.length}</p>
        </div>
    );
};

export default Home;