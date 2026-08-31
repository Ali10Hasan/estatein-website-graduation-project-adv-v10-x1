import { createSlice } from "@reduxjs/toolkit";

interface UIState {
    theme: "light" | "dark";
}

const getInitialTheme = (): "light" | "dark" => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
        return stored;
    }
    return "dark";
};

const initialState: UIState = {
    theme: "dark",
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", state.theme);
        },
    },
});

export const { toggleTheme } = uiSlice.actions;

export default uiSlice.reducer;