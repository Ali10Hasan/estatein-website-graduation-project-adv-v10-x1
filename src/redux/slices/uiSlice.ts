import { createSlice } from "@reduxjs/toolkit";

interface UIState {
    theme: "light" | "dark";
}

const initialState: UIState = {
    theme: "dark",
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
    },
});

export const { toggleTheme } = uiSlice.actions;

export default uiSlice.reducer;