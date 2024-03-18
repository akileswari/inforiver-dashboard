import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   items: [],
  chartToggled: null,
  activeChart: null,
};

const ChartStore = createSlice({
  name: "chartStore",
  initialState,
  reducers: {
    setToggledChartType: (state, action) => {
      if (state.chartToggled === action.payload) {
        state.chartToggled = null;
        return;
      }
      state.chartToggled = action.payload;
    },
    setActiveChart: (state, action) => {
      state.activeChart = action.payload;
    },
  },
});

export const { setToggledChartType, setActiveChart } = ChartStore.actions;
export default ChartStore.reducer;
