import { createSlice } from "@reduxjs/toolkit";

interface GlobalState {
    columns: number;
    rows: number;
}

const initialGlobalState: GlobalState = {
    columns: 2,
    rows: 2,
};

const globalSlice = createSlice({
    name: "global",
    initialState: initialGlobalState,
    reducers: {
        setGlobalState: (state, action) => {
            state.columns = action.payload.columns;
            state.rows = action.payload.rows;
        },
    },
});

export const { setGlobalState } = globalSlice.actions;
export default globalSlice.reducer;
