import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITestimonial } from "../../types/testimonialType";
import {
    addTestimonial as addTestimonialToFirebase,
    deleteTestimonial as deleteTestimonialFromFirebase,
    updateTestimonial as updateTestimonialInFirebase,
} from "../../data/testimonialsAPI";

interface UpdateTestimonialPayload {
    id: string;
    data: Partial<Omit<ITestimonial, "id">>;
}

export const addTestimonial = createAsyncThunk(
    "testimonials/addTestimonial",
    async (testimonial: Omit<ITestimonial, "id">) => {
        return addTestimonialToFirebase(testimonial);
    }
);

export const updateTestimonial = createAsyncThunk(
    "testimonials/updateTestimonial",
    async ({ id, data }: UpdateTestimonialPayload) => {
        await updateTestimonialInFirebase(id, data);
    }
);

export const deleteTestimonial = createAsyncThunk(
    "testimonials/deleteTestimonial",
    async (id: string) => {
        await deleteTestimonialFromFirebase(id);
    }
);

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
