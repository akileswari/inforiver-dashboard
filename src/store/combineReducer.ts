import { combineReducers } from "redux";
import globalReducer from "./globalSlice";
import gridItemReducer from "./gridItemSlice";
import undoRedoReducer from "./undoRedoSlice";

const rootReducer = combineReducers({
    global: globalReducer,
    gridItems: gridItemReducer,
    undoRedo: undoRedoReducer, 
});

export default rootReducer;
