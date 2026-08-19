import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFaq } from "../../types/faqType";

interface FaqState {
    items: IFaq[];
    loading: boolean;
    error: string | null;
}

const initialState: FaqState = {
    items: [],
    loading: true,
    error: null,
};

const faqSlice = createSlice({
    name: "faqs",
    initialState,

    reducers: {
        setFaqs: (state, action: PayloadAction<IFaq[]>) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },

        setFaqsError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    setFaqs,
    setFaqsError,
} = faqSlice.actions;

export default faqSlice.reducer;