// In your gridSlice.ts file
import { createSlice } from "@reduxjs/toolkit";

interface GridItem {
  i: string;
  width: number;
  height: number;
}

interface GridState {
  gridItems: GridItem[];
  history: GridItem[][];
  currentHistoryIndex: number;
}

const initialState: GridState = {
  gridItems: [] as GridItem[],
  history: [],
  currentHistoryIndex: -1,
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
      const updatedItems = state.gridItems.map((item) => {
        if (item.i === itemId) {
          return { ...item, width, height };
        }
        return item;
      });
      state.gridItems = updatedItems;
      state.history.push(updatedItems);
      state.currentHistoryIndex = state.history.length - 1;
    },
    undo: (state) => {
      if (state.currentHistoryIndex > 0) {
        state.currentHistoryIndex--;
        state.gridItems = state.history[state.currentHistoryIndex];
      }
    },
    redo: (state) => {
      if (state.currentHistoryIndex < state.history.length - 1) {
        state.currentHistoryIndex++;
        state.gridItems = state.history[state.currentHistoryIndex];
      }
    },
  },
});

export const { setGridItems, updateGridItemSize, undo, redo } =
  gridSlice.actions;
export default gridSlice.reducer;
