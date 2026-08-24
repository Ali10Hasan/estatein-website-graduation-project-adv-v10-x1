import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProperty } from "../../types/propertyType";
import {
    addProperty as addPropertyToFirebase,
    deleteProperty as deletePropertyFromFirebase,
    updateProperty as updatePropertyInFirebase,
} from "../../data/propertiesAPI";

interface UpdatePropertyPayload {
    id: string;
    data: Partial<Omit<IProperty, "id">>;
}

export const addProperty = createAsyncThunk(
    "properties/addProperty",
    async (property: Omit<IProperty, "id">) => {
        return addPropertyToFirebase(property);
    }
);

export const updateProperty = createAsyncThunk(
    "properties/updateProperty",
    async ({ id, data }: UpdatePropertyPayload) => {
        await updatePropertyInFirebase(id, data);
    }
);

export const deleteProperty = createAsyncThunk(
    "properties/deleteProperty",
    async (id: string) => {
        await deletePropertyFromFirebase(id);
    }
);

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
