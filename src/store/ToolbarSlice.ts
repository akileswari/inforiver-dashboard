// In your Redux slice file (ToolbarSlice.js)

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rows: 3,
  columns: 3,
  spacing: 3,
  margin: 3,
  cornerRadius: 0,
  stroke: 0,
  shadow: false,
  strokeColor: 'black',
  shadowColor: 'black',
  selectedShadow: ''
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
    setStrokeColor: (state, action) => {
      state.strokeColor = action.payload;
    },

    setShadowColor: (state, action) => {
      state.shadowColor= action.payload;
    },
    setSelectedShadow: (state, action) => {
      state.selectedShadow = action.payload;
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
  setStrokeColor,
  setShadowColor,
  setSelectedShadow,
} = toolbarSlice.actions;
export default toolbarSlice.reducer;
