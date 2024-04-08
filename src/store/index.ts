import { configureStore, combineReducers } from "@reduxjs/toolkit";
import chartSlicer from "./chartSlicer";
import toolbarSlice from "./ToolbarSlice";
import titleSlice from "./titleSlice";
import ThemeIndicator from "./ThemeIndicator";
const rootReducer = combineReducers({
  chartStore: chartSlicer,
  toolbar: toolbarSlice,
  title : titleSlice,
  themeStore :ThemeIndicator
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
