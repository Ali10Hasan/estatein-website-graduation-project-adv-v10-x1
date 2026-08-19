import { useSelector } from "react-redux";

import type { RootState } from "../redux/store/store";

import DataListener from "../components/DataListener";
import Loading from "../components/Loading";
import Error from "../components/Error";


const Home = () => {

    const properties = useSelector(
        (state: RootState) => state.properties
    );

    const faqs = useSelector(
        (state: RootState) => state.faqs
    );

    const testimonials = useSelector(
        (state: RootState) => state.testimonials
    );


    const isLoading =
        properties.loading ||
        faqs.loading ||
        testimonials.loading;


    const error =
        properties.error ||
        faqs.error ||
        testimonials.error;


    return (
        <div>
            <DataListener />

            {isLoading && <Loading />}

            {!isLoading && error && <Error message={error} />}

            {!isLoading && !error && (
                <>
                    <h1>Home</h1>
                    
                </>
            )}

        </div>
    );
};

export default Home;