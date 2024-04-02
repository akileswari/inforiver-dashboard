import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeStore from "./themeIndicator";
const rootReducer = combineReducers({
  themeStore: themeStore,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
