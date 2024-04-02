import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rows: 3,
  columns: 3,
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
  },
});

export const { setRows, setColumns } = toolbarSlice.actions;
export default toolbarSlice.reducer;
