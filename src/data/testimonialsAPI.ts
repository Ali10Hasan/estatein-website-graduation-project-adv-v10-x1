import type { ITestimonial } from "../types/testimonialType";
import { addData, deleteData, readData, updateData } from "./FirebaseAPI";

export const readTestimonials = (
    callback: (testimonials: ITestimonial[]) => void,
    errorCallback?: (error: Error) => void
) => {
    return readData<ITestimonial>(
        "testimonials",
        callback,
        errorCallback
    );
};

export const addTestimonial = (
    testimonial: Omit<ITestimonial, "id">
) => {
    return addData(
        "testimonials",
        testimonial
    );
};

export const updateTestimonial = (
    id: string,
    testimonial: Partial<Omit<ITestimonial, "id">>
) => {
    return updateData(
        "testimonials",
        id,
        testimonial
    );
};

export const deleteTestimonial = (
    id: string
) => {
    return deleteData(
        "testimonials",
        id
    );
};