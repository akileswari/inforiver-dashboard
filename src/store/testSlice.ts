import { createSlice } from "@reduxjs/toolkit";

interface GlobalState {
    grids: GridItem[];
    columns: number;
    rows: number;
}

interface GridItem {
    i: string;
    width: number;
    height: number;
    x: number;
    y: number;
}

interface GridState {
    globalItems: GlobalState;
    history: GlobalState[];
    currentHistoryIndex: number;
}

const generateInitialGlobalState = (rows: number, columns: number): GlobalState => {
    const grids: GridItem[] = [];
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            grids.push({
                i: `${y}-${x}`,
                x: x*(width/columns),
                y: x,
                width: width/columns,
                height: height/rows
            });
        }
    }
    return {
        columns,
        rows,
        grids
    };
};

const initialState: GridState = {
    globalItems: generateInitialGlobalState(2, 2), // Set default rows and columns here
    history: [],
    currentHistoryIndex: -1
};

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        setTestItems: (state, action) => {
            state.globalItems = action.payload;
            console.log("state.....", state);
        },
        updateTestItemSize: (state, action) => {
            console.log("state.....", state);
            state.globalItems = action.payload;
            state.history.push(action.payload);
            state.currentHistoryIndex = state.history.length - 1;
        },
        undo: (state) => {
            if (state.currentHistoryIndex > 0) {
                state.currentHistoryIndex--;
                state.globalItems = state.history[state.currentHistoryIndex];
            }
        },
        redo: (state) => {
            if (state.currentHistoryIndex < state.history.length - 1) {
                state.currentHistoryIndex++;
                state.globalItems = state.history[state.currentHistoryIndex];
            }
        },
    },
});

export const { setTestItems, updateTestItemSize, undo, redo } = testSlice.actions;
export default testSlice.reducer;
