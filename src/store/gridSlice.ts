import { createSlice } from "@reduxjs/toolkit";

interface GridItem {
  i: string;
  width: number;
  height: number;
}

interface GridState {
  gridItems: GridItem[];
}

const initialState: GridState = {
  gridItems: [] as GridItem[], 
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    setGridItems: (state, action) => {
      state.gridItems = action.payload;
    },
    updateGridItemSize: (state, action) => {
      const { itemId, width, height } = action.payload;
      state.gridItems = state.gridItems.map(item => {
        if (item.i === itemId) {
          return { ...item, width, height };
        }
        return item;
      });
    },
  },
});

export const { setGridItems, updateGridItemSize } = gridSlice.actions;
export default gridSlice.reducer;
