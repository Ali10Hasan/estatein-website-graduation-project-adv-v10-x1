import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { IProperty } from "../../types/propertyType";
import { getProperties } from "../../data/propertiesApi";


interface PropertiesState {
    items: IProperty[];
    loading: boolean;
    error: string | null;
}

const initialState: PropertiesState = {
    items: [],
    loading: false,
    error: null,
};

export const fetchProperties = createAsyncThunk(
    "properties/fetchProperties",
    async () => {
        const properties = await getProperties();

        return properties;
    }
);

const propertiesSlice = createSlice({
    name: "properties",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(fetchProperties.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchProperties.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })

            .addCase(fetchProperties.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch properties";
            });
    },
});

export default propertiesSlice.reducer;