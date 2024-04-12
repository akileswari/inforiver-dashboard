import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toolbarSlice from "./ToolbarSlice";
import titleSlice from "./titleSlice";
import themeStore from "./themeIndicator";
import selectedGrid from "./gridItems";
// import gridSlice from "./gridSlice";
const rootReducer = combineReducers({
  themeStore: themeStore,
  toolbar: toolbarSlice,
  title: titleSlice,
  // grid: gridSlice,
  selectedGrid: selectedGrid,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
