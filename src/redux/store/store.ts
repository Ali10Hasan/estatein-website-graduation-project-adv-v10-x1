import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from "../slices/propertiesSlice";
import faqReducer from "../slices/faqSlice";
import testimonialsReducer from "../slices/testimonialsSlice";
import uiReducer from "../slices/uiSlice"

const store = configureStore({
    reducer: {
        properties: propertiesReducer,
        faqs: faqReducer,
        testimonials: testimonialsReducer,
        ui: uiReducer
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;