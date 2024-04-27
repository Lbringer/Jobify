import { createSlice } from "@reduxjs/toolkit";
import { lightCSS, darkCSS } from "../../utils/colors";

const initialState = {
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
