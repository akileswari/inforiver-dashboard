import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GridItem {
  i: string;
  w: number;
  h: number;
  width?: number;
  height?: number;
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
    // setGridItems: (state, action: PayloadAction<GridItem[]>) => {
    //   state.gridItems = action.payload.map((item) => ({
    //     ...item,
    //     width: item.w,
    //     height: item.h,
    //     pixelWidth: Math.floor(item.w * 101),
    //     pixelHeight: Math.floor(item.h * 150),
    //   }));
    // },
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

        const pixelWidth = Math.floor(width * 101);
        const pixelHeight = Math.floor(height * 150);

        state.gridItems[index].pixelWidth = pixelWidth;
        state.gridItems[index].pixelHeight = pixelHeight;

        const resizedItem: GridItem = {
          ...state.gridItems[index],
          pixelWidth,
          pixelHeight,
        };
        state.history.push([resizedItem]);
        state.currentHistoryIndex = state.history.length - 1;
        console.log("Resized grid item:", resizedItem);
      } else {
        console.error("Grid item not found:", itemId);
      }
    },
    undo: (state) => {
      if (state.currentHistoryIndex > 0) {
        state.currentHistoryIndex -= 1;
        state.gridItems = [...state.history[state.currentHistoryIndex]];
        console.log("Undo: Reverted to previous state");
      } else {
        console.log("Undo: Cannot go back");
      }
    },
    redo: (state) => {
      if (state.currentHistoryIndex < state.history.length - 1) {
        state.currentHistoryIndex += 1;
        state.gridItems = [...state.history[state.currentHistoryIndex]];
        console.log("Redo: Restored to next state");
      } else {
        console.log("Redo: Cannot go forward");
      }
    },
  },
});

export const { updateGridItems, updateGridItemSize, undo, redo } =
  gridSlice.actions;
export default gridSlice.reducer;
