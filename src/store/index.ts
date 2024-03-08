import { configureStore, combineReducers } from "@reduxjs/toolkit";
import chartSlicer from "./chartSlicer";

const rootReducer = combineReducers({
  chartStore: chartSlicer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
