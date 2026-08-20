import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFaq } from "../../types/faqType";
import {
    addFaq as addFaqToFirebase,
    deleteFaq as deleteFaqFromFirebase,
    updateFaq as updateFaqInFirebase,
} from "../../data/faqsAPI";

interface UpdateFaqPayload {
    id: string;
    data: Partial<Omit<IFaq, "id">>;
}

export const addFaq = createAsyncThunk(
    "faqs/addFaq",
    async (faq: Omit<IFaq, "id">) => {
        return addFaqToFirebase(faq);
    }
);

export const updateFaq = createAsyncThunk(
    "faqs/updateFaq",
    async ({ id, data }: UpdateFaqPayload) => {
        await updateFaqInFirebase(id, data);
    }
);

export const deleteFaq = createAsyncThunk(
    "faqs/deleteFaq",
    async (id: string) => {
        await deleteFaqFromFirebase(id);
    }
);

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
