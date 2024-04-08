import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   
    gridItems: [], 
  };
  const gridSlice = createSlice({
    name: "grid",
  initialState,
  reducers: {

    setGridItems: (state, action) => {
      state.gridItems = action.payload;
    },

  },
});

export const { setGridItems } = gridSlice.actions;
export default gridSlice.reducer;