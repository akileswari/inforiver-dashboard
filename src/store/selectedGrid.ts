import { createSlice } from "@reduxjs/toolkit";
//integrate griditem
// 1.grid id , height and width i chart records
//2. active key
interface IChartRecords {
  [key: string]: {
    chartType: string;
    height: number;
    width: number;
    gridId: string;
  };
}

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
      state.selectedGridItem = action.payload;
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
    // setThemeType('light');
  },
});

const selectedGridStore = gridItemsReducer;

export const { setGridItem, setChart, setActiveGrid, setDeleteChart } =
  selectedGridStore.actions;
export default selectedGridStore.reducer;
