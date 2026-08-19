import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProperty } from "../../types/propertyType";

interface PropertiesState {
    items: IProperty[];
    loading: boolean;
    error: string | null;
}

const initialState: PropertiesState = {
    items: [],
    loading: true,
    error: null,
};

const propertiesSlice = createSlice({
    name: "properties",
    initialState,

    reducers: {
        setProperties: (state, action: PayloadAction<IProperty[]>) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },

        setPropertiesError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    setProperties,
    setPropertiesError,
} = propertiesSlice.actions;

export default propertiesSlice.reducer;