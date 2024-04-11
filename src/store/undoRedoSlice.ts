import { createSlice } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import gridItemReducer from "./gridItemSlice";

interface UndoRedoState {
    past: any[];
    present: any;
    future: any[];
}

const initialState: UndoRedoState = {
    past: [],
    present: null,
    future: [],
};

const undoRedoSlice = createSlice({
    name: "undoRedo",
    initialState,
    reducers: {
        undo: (state) => {
            const previousState = state.past[state.past.length - 1];
            const newPast = state.past.slice(0, state.past.length - 1);
            return {
                past: newPast,
                present: previousState,
                future: [state.present, ...state.future],
            };
        },
        redo: (state) => {
            const nextState = state.future[0];
            const newFuture = state.future.slice(1);
            return {
                past: [...state.past, state.present],
                present: nextState,
                future: newFuture,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(globalReducer.actions.setGlobalState, (state, action) => {
                state.present = action.payload;
            })
            .addCase(gridItemReducer.actions.setGridItems, (state, action) => {
                state.present = action.payload;
            });
    },
});

export const { undo, redo } = undoRedoSlice.actions;
export default undoRedoSlice.reducer;
