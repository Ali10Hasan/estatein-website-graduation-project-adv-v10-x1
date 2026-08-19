import { useEffect } from "react";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "../redux/store/store";

import { readFaqs } from "../data/faqsAPI";
import { readTestimonials } from "../data/testimonialsAPI";

import { setProperties, setPropertiesError } from "../redux/slices/propertiesSlice";
import { setFaqs, setFaqsError } from "../redux/slices/faqSlice";
import { setTestimonials, setTestimonialsError } from "../redux/slices/testimonialsSlice";
import { readProperties } from "../data/propertiesAPI";

const DataListener = () => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {

        const stopPropertiesListener = readProperties(
            (properties) => {
                dispatch(
                    setProperties(properties)
                );
            },
            () => {
                dispatch(
                    setPropertiesError(
                        "Failed to load properties."
                    )
                );
            }
        );


        const stopFaqsListener = readFaqs(
            (faqs) => {
                dispatch(
                    setFaqs(faqs)
                );
            },
            () => {
                dispatch(
                    setFaqsError(
                        "Failed to load FAQs."
                    )
                );
            }
        );


        const stopTestimonialsListener = readTestimonials(
            (testimonials) => {
                dispatch(
                    setTestimonials(testimonials)
                );
            },
            () => {
                dispatch(
                    setTestimonialsError(
                        "Failed to load testimonials."
                    )
                );
            }
        );


        return () => {
            stopPropertiesListener();
            stopFaqsListener();
            stopTestimonialsListener();
        };

    }, [dispatch]);

    return null;
};

export default DataListener;