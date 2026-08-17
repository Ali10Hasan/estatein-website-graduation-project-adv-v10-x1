import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITestimonial } from "../../types/testimonialType";

interface TestimonialsState {
    items: ITestimonial[];
    loading: boolean;
    error: string | null;
}

const initialState: TestimonialsState = {
    items: [],
    loading: true,
    error: null,
};

const testimonialsSlice = createSlice({
    name: "testimonials",
    initialState,

    reducers: {
        setTestimonials: (
            state,
            action: PayloadAction<ITestimonial[]>
        ) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },

        setTestimonialsError: (
            state,
            action: PayloadAction<string>
        ) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    setTestimonials,
    setTestimonialsError,
} = testimonialsSlice.actions;

export default testimonialsSlice.reducer;