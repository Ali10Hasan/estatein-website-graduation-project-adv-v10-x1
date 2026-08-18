import { useEffect } from "react";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "../redux/store/store";

import { readProperties } from "../data/propertiesAPI";
import { readFaqs } from "../data/faqsApi";
import { readTestimonials } from "../data/testimonialsAPI";

import { setProperties } from "../redux/slices/propertiesSlice";
import { setFaqs } from "../redux/slices/faqSlice";
import { setTestimonials } from "../redux/slices/testimonialsSlice";

const DataListener = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {

        readProperties((properties) => {
            dispatch(setProperties(properties));
        });

        readFaqs((faqs) => {
            dispatch(setFaqs(faqs));
        });

        readTestimonials((testimonials) => {
            dispatch(setTestimonials(testimonials));
        });

    }, [dispatch]);

    return null;
};

export default DataListener;