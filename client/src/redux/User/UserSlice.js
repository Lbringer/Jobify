import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Aditya",
  dark_theme: true,
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
    },
  },
});

export const { TOGGLE_DARK_THEME } = userSlice.actions;

export default userSlice.reducer;
