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

interface FiltersState {
    searchQuery: string;
    location: string;
    propertyType: string;
    price: string;
    area: string;
    builtYear: string;
}
interface PropertiesState {
    items: IProperty[];
    itemsFiltered: IProperty[];
    filters: FiltersState;
    loading: boolean;
    error: string | null;
}

const initialState: PropertiesState = {
    items: [],
    itemsFiltered: [],
    filters:{
        searchQuery:"",
        location: "",
        propertyType: "",
        price: "",
        area: "",
        builtYear: "",
    },
    loading: true,
    error: null,
};

const propertiesSlice = createSlice({
    name: "properties",
    initialState,

   
    reducers: {
        setProperties: (state, action: PayloadAction<IProperty[]>) => {
            state.itemsFiltered = action.payload;
            state.loading = false;
            state.error = null;
            propertiesSlice.caseReducers.ApplyPropertyFiltered(state);
        },

        setPropertiesError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },

        updateFilter: (state, action: PayloadAction<{ key: keyof FiltersState; value: string }>) => {
            state.filters[action.payload.key] = action.payload.value;
            propertiesSlice.caseReducers.ApplyPropertyFiltered(state);
        },

        ApplyPropertyFiltered:(state)=>{
            const { searchQuery, location, propertyType, price, area, builtYear} = state.filters;
            state.items=state.itemsFiltered.filter((property)=>{
                if(location && property.location?.toLowerCase()!==location) return false;
                if(propertyType && property.propertyType?.toLowerCase()!==propertyType) return false;
                if(price && property.price.toString()!==price) return false;
                if(area && property.area?.toString().toLowerCase()!==area) return false;
                if(builtYear && property.builtYear!==Number(builtYear)) return false;
                if(searchQuery && !property.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
                return true;
            })
        }
    },
});

export const {
    setProperties,
    setPropertiesError,
    updateFilter,
} = propertiesSlice.actions;

export default propertiesSlice.reducer;
