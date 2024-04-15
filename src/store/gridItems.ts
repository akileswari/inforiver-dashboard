import { PayloadAction, createSlice } from "@reduxjs/toolkit";
//integrate griditem
// 1.grid id , height and width i chart records
//2. active key
interface IChartRecords {
  [key: string]: {
    chartType: string;
    height?: number;
    width?: number;
    gridId: string;
    pixelWidth?: any;
    pixelHeight?: any;
    w: number;
    h: number;
  };
}
//grid-items //grid-settings //undo-redo
interface ISelectedGrid {
  selectedGridItem: string[];
  activeGrid: string;
  chartRecords: IChartRecords;
}
//grid settings we have to store
const initialState: ISelectedGrid = {
  selectedGridItem: [],
  activeGrid: "",
  chartRecords: {},
};

const gridItemsReducer = createSlice({
  name: "selected-grid",
  initialState,

  reducers: {
    setGridItem: (state, action) => {
      const payload = action.payload;
      if (Array.isArray(payload)) {
        const updatedGrid: any[] = [];
        payload.forEach((item: any) => {
          updatedGrid.push({
            id: item.i,
            width: item.w,
            height: item.h,
            pixelWidth: Math.floor(item.w * 101),
            pixelHeight: Math.floor(item.h * 150),
          });
        });
        state.selectedGridItem = updatedGrid;
      } else if (typeof payload === "object") {
        const item = payload;
        const updatedGridItem = {
          id: item.itemId,
          width: item.width,
          height: item.height,
          pixelWidth: Math.floor(item.width * 101),
          pixelHeight: Math.floor(item.height * 150),
        };
        state.selectedGridItem = [updatedGridItem];
      } else {
        console.error("Payload is neither an array nor an object:", payload);
      }
    },

    updateGridItemSize: (
      state,
      action: PayloadAction<{ itemId: string; width: number; height: number }>
    ) => {
      const { itemId, width, height } = action.payload;
      const index = state.selectedGridItem.findIndex((item) => item === itemId);

      if (index !== -1) {
        // Retrieve the corresponding chart record using the itemId
        const chartRecord = state.chartRecords[itemId];

        if (chartRecord) {
          // Update the width, height, pixelWidth, and pixelHeight properties
          state.chartRecords[itemId] = {
            ...chartRecord,
            width,
            height,
            pixelWidth: Math.floor(width * 101),
            pixelHeight: Math.floor(height * 150),
          };

          // Update the selectedGridItem with the updated chart record
          state.selectedGridItem[index] = itemId;

          const resizedItem = state.chartRecords[itemId];
          // state.history.push([resizedItem]);
          // state.currentHistoryIndex = state.history.length - 1;
          console.log("Resized grid item:", resizedItem);
        } else {
          console.error("Chart record not found for itemId:", itemId);
        }
      } else {
        console.error("Grid item not found:", itemId);
      }
    },

    setActiveGrid: (state, action) => {
      state.activeGrid = action.payload;
    },
    setChart: (state, action) => {
      state.chartRecords = { ...state.chartRecords, ...action.payload };
    },
    setDeleteChart: (state, action) => {
      state.chartRecords = { ...action.payload };
    },
  },
});

const selectedGridStore = gridItemsReducer;

export const { setGridItem, setChart, setActiveGrid, setDeleteChart } =
  selectedGridStore.actions;
export default selectedGridStore.reducer;
