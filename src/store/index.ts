import { configureStore, combineReducers } from "@reduxjs/toolkit";
import chartSlicer from "./chartSlicer";
import toolbarSlice from "./ToolbarSlice";
import titleSlice from "./titleSlice";
import themeStore from "../store/ThemeIndicator";
const rootReducer = combineReducers({
  themeStore: themeStore,
  chartStore: chartSlicer,
  toolbar: toolbarSlice,
  title: titleSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
