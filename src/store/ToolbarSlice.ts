// In your Redux slice file (ToolbarSlice.js)

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rows: 3,
  columns: 3,
  spacing: 0,
  margin: 0,
  cornerRadius: 0,
  stroke: 0,
  shadow: false,
};

const toolbarSlice = createSlice({
  name: "toolbar",
  initialState,
  reducers: {
    setRows: (state, action) => {
      state.rows = action.payload;
    },
    setColumns: (state, action) => {
      state.columns = action.payload;
    },
    setSpacing: (state, action) => {
      state.spacing = action.payload;
    },
    setMargin: (state, action) => {
      state.margin = action.payload;
    },
    setCornerRadius: (state, action) => {
      state.cornerRadius = action.payload;
    },
    setStroke: (state, action) => {
      state.stroke = action.payload;
    },
    setShadow: (state, action) => {
      state.shadow = action.payload;
    },
  },
});

export const {
  setRows,
  setColumns,
  setSpacing,
  setMargin,
  setCornerRadius,
  setStroke,
  setShadow,
} = toolbarSlice.actions;
export default toolbarSlice.reducer;
