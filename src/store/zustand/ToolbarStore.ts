import { create } from 'zustand';


interface ToolbarState {
  rows: number;
  columns: number;
  setRows: (rows: number) => void;
  setColumns: (columns: number) => void;
}

const useToolbarStore = create<ToolbarState>((set) => ({
  rows: 3,
  columns: 3,
  setRows: (rows) => set({ rows }),
  setColumns: (columns) => set({ columns }),
}));

export default useToolbarStore;
