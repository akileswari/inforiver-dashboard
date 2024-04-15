import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToolbarState {
  rows: number;
  columns: number;
  spacing: number;
  margin: number;
  cornerRadius: number;
  stroke: number;
  shadow: boolean;
  strokeColor: string;
  shadowColor: string;
  selectedShadow: string;
  pastStates: ToolbarState[];
  futureStates: ToolbarState[];
  undoCount: number;
  redoCount: number;
}

const initialState: ToolbarState = {
  rows: 3,
  columns: 3,
  spacing: 3,
  margin: 3,
  cornerRadius: 0,
  stroke: 1,
  shadow: false,
  strokeColor: 'black',
  shadowColor: 'black',
  selectedShadow: '',
  pastStates: [],
  futureStates: [],
  undoCount: 0,
  redoCount: 0,
};

const toolbarSlice = createSlice({
  name: "toolbar",
  initialState,
  reducers: {
    setRows: (state, action: PayloadAction<number>) => {
      state.rows = action.payload;
    },
    setColumns: (state, action: PayloadAction<number>) => {
      state.columns = action.payload;
    },
    setSpacing: (state, action: PayloadAction<number>) => {
      state.spacing = action.payload;
    },
    setMargin: (state, action: PayloadAction<number>) => {
      state.margin = action.payload;
    },
    setCornerRadius: (state, action: PayloadAction<number>) => {
      state.cornerRadius = action.payload;
    },
    setStroke: (state, action: PayloadAction<number>) => {
      state.stroke = action.payload;
    },
    setShadow: (state, action: PayloadAction<boolean>) => {
      state.shadow = action.payload;
    },
    setStrokeColor: (state, action: PayloadAction<string>) => {
      state.strokeColor = action.payload;
    },
    setShadowColor: (state, action: PayloadAction<string>) => {
      state.shadowColor = action.payload;
    },
    setSelectedShadow: (state, action: PayloadAction<string>) => {
      state.selectedShadow = action.payload;
    },
    // saveState: (state) => {
    //   state.pastStates.push({ ...state });
    // },
    // undo: (state) => {
    //   if (state.pastStates.length > 0) {
    //     const lastState = state.pastStates.pop();
    //     if (lastState) {
    //       state.futureStates.push({ ...state });
    //       Object.assign(state, lastState);
    //       state.undoCount++;
    //       state.redoCount--;
    //     }
    //   }
    // },
    // redo: (state) => {
    //   if (state.futureStates.length > 0) {
    //     const nextState = state.futureStates.pop();
    //     if (nextState) {
    //       state.pastStates.push({ ...state });
    //       Object.assign(state, nextState);
    //       state.undoCount--;
    //       state.redoCount++;
    //     }
    //   }
    // },
  },
});

export const {
  setRows,
  setColumns,
  setSpacing,
  setMargin,
  setCornerRadius,
  setStroke,
  setShadow,
  setStrokeColor,
  setShadowColor,
  setSelectedShadow,
  // saveState,
  // undo,
  // redo,
} = toolbarSlice.actions;

export default toolbarSlice.reducer;
