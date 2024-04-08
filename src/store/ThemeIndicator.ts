import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeType: "light",
};

const themeReducer = createSlice({
  name: "theme",
  initialState,

  reducers: {
    setThemeType: (state, action) => {
      state.themeType = action.payload;
    },
    // setThemeType('light');
  },
});

const themeStore = themeReducer;

export const { setThemeType } = themeStore.actions;
export default themeStore.reducer;
