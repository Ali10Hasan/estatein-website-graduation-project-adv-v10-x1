import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from "../slices/propertiesSlice";
import faqReducer from "../slices/faqSlice";
import testimonialsReducer from "../slices/testimonialsSlice";

const store = configureStore({
    reducer: {
        properties: propertiesReducer,
        faqs: faqReducer,
        testimonials: testimonialsReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;