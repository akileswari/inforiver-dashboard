import { configureStore, combineReducers } from "@reduxjs/toolkit";
import chartSlicer from "./chartSlicer";
import toolbarSlice from "./ToolbarSlice";

const rootReducer = combineReducers({
  chartStore: chartSlicer,
  toolbar: toolbarSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
