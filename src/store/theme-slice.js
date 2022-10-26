import { createSlice } from "@reduxjs/toolkit";

const whiteMode = {
  color: "#111517",
  background: "#ffffff",
};

const darkMode = {
  color: "#ffffff",
  background: "#2b3844",
};

const initialState = { theme: true, color: whiteMode, toggle: false };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle(state) {
      state.theme = !state.theme;
      state.color = state.theme ? whiteMode : darkMode;
      state.toggle = false;
    },
    show(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;
