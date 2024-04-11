import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GridState {
    grids: GridItem[];
}

interface GridItem {
    gridId: string;
    width: number;
    height: number;
    x: number;
    y: number;
}

const initialState: GridState = {
    grids: [
        {
            gridId: "0-0",
            x,
            y: 0,
            width: 3.5,
            height: 4
        },
        {
            gridId: "0-1",
            x: 0,
            y: 1,
            width: 3.5,
            height: 4
        },
        {
            gridId: "1-0",
            x: 1,
            y: 0,
            width: 3.5,
            height: 4
        },
        {
            gridId: "1-1",
            x: 1,
            y: 1,
            width: 3.5,
            height: 4
        },
    ]
};

const gridItemSlice = createSlice({
    name: "gridItem",
    initialState,
    reducers: {
        setGridItems: (state, action: PayloadAction<GridItem[]>) => {
            state.grids = action.payload;
        },
        updateGridItems: (state, action: PayloadAction<{ itemId: string, width: number, height: number }>) => {
            const { itemId, width, height } = action.payload;
            state.grids = state.grids.map(item => {
                if (item.gridId === itemId) {
                    return { ...item, width, height };
                }
                return item;
            });
        },
    },
});

export const { setGridItems, updateGridItems } = gridItemSlice.actions;
export default gridItemSlice.reducer;
