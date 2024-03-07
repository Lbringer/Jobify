import { createSlice } from "@reduxjs/toolkit";

const lightCSS = {
  bg: "#eef5ff",
  font: "#176b87",
  accent: "#176b87",
  menu: "#89B3C6",
};

const darkCSS = {
  bg: "#040d12",
  font: "#ffffff",
  accent: "#4d4d4d",
  menu: "#4d4d4d",
};

const initialState = {
  name: "Aditya",
  dark_theme: localStorage.getItem("dark_theme") == "true",
  css: localStorage.getItem("dark_theme") == "true" ? darkCSS : lightCSS,
};

//Async functions
//Fetch user data
//Logout

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    TOGGLE_DARK_THEME: (state) => {
      state.dark_theme = !state.dark_theme;
      localStorage.setItem("dark_theme", state.dark_theme);

      if (state.dark_theme) {
        state.css = darkCSS;
      } else {
        state.css = lightCSS;
      }
    },
  },
});

export const { TOGGLE_DARK_THEME } = userSlice.actions;

export default userSlice.reducer;
