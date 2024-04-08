import { configureStore, combineReducers } from "@reduxjs/toolkit";
import chartSlicer from "./chartSlicer";
import toolbarSlice from "./ToolbarSlice";
import titleSlice from "./titleSlice";
import ThemeIndicator from "./ThemeIndicator";
import gridSlice from "./gridSlice";
const rootReducer = combineReducers({
  chartStore: chartSlicer,
  toolbar: toolbarSlice,
  title : titleSlice,
  themeStore :ThemeIndicator,
  grid:gridSlice
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
