import { createSlice } from "@reduxjs/toolkit";

interface IChartRecords {
  [key: string]: {
    chartType: string;
  };
}

interface ISelectedGrid {
  selectedGridItem: string;
  chartRecords: IChartRecords;
}

const initialState: ISelectedGrid = {
  selectedGridItem: "",
  chartRecords: {},
};

const gridItemsReducer = createSlice({
  name: "selected-grid",
  initialState,

  reducers: {
    setGridItem: (state, action) => {
      state.selectedGridItem = action.payload;
    },
    setChart: (state, action) => {
      state.chartRecords[action.payload.key] = action.payload.title;
    },
    // setThemeType('light');
  },
});

const selectedGridStore = gridItemsReducer;

export const { setGridItem, setChart } = selectedGridStore.actions;
export default selectedGridStore.reducer;
