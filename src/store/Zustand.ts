import { create } from "zustand";

const useChartStore = create((set) => ({
  chartToggled: null,
  activeChart: null,
  setToggledChartType1: (payload: any) =>
    set((state: any) => ({
      chartToggled: state.chartToggled === payload ? null : payload,
    })),
  setActiveChart1: (payload: any) => set({ activeChart: payload }),
  clearActiveChart: () =>
    set({
      activeChart: null,
      chartToggled: null,
    })
}));

export default useChartStore;
