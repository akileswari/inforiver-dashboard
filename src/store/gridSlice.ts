import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GridItem {
  i: string;
  w: number;
  h: number;
  width?: number;
  height?: number;
  pixelWidth?: number;
  pixelHeight?: number;
}
interface GridState {
  gridItems: GridItem[];
  history: GridItem[][];
  currentHistoryIndex: number;
  rows: number;
  columns: number;
}
const initialState: GridState = {
  gridItems: [],
  history: [],
  currentHistoryIndex: -1,
  rows: 3,
  columns: 3,
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    setGridItems: (state, action: PayloadAction<GridItem[]>) => {
      //const { rows, columns } = state;
      state.gridItems = action.payload.map((item) => ({
        ...item,
        width: item.w,
        height: item.h,
        pixelWidth: Math.floor(item.w * 101),
        pixelHeight: Math.floor(item.h * 150),
      }));
      console.log("Updated grid items:", state.gridItems);
    },
    updateGridItems: (state, action: PayloadAction<GridItem[]>) => {
      if (Array.isArray(action.payload)) {
        state.gridItems = action.payload.map((item) => ({
          ...item,
          width: item.w,
          height: item.h,
        }));
        const snapshot: GridItem[] = state.gridItems.map((item) => ({
          ...item,
        }));
        state.history.push(snapshot);
        state.currentHistoryIndex = state.history.length - 1;
        console.log("Updated grid items:", state.gridItems);
      } else {
        console.error(
          "Invalid payload type in updateGridItems action:",
          action.payload
        );
      }
    },
    updateGridItemSize: (
      state,
      action: PayloadAction<{ itemId: string; width: number; height: number }>
    ) => {
      const { itemId, width, height } = action.payload;
      const index = state.gridItems.findIndex((item) => item.i === itemId);

      if (index !== -1) {
        state.gridItems[index].w = width;
        state.gridItems[index].h = height;
        const snapshot: GridItem[] = state.gridItems.map((item) => ({
          ...item,
        }));
        state.history.push(snapshot);
        state.currentHistoryIndex = state.history.length - 1;
        console.log("resizehistory", history);
      } else {
        console.error("Grid item not found:", itemId);
      }
    },
    undo: (state) => {
      if (state.currentHistoryIndex > 0) {
        state.currentHistoryIndex -= 1;
        state.gridItems = [...state.history[state.currentHistoryIndex]];
      }
    },
    redo: (state) => {
      if (state.currentHistoryIndex < state.history.length - 1) {
        state.currentHistoryIndex += 1;
        state.gridItems = [...state.history[state.currentHistoryIndex]];
      }
    },
  },
});
export const { setGridItems, updateGridItems, updateGridItemSize, undo, redo } =
  gridSlice.actions;
export default gridSlice.reducer;
