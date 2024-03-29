import { create } from "zustand";

const themeStore = create((set) => ({
  themeType: "light",
  setTHemeType: (payload: any) =>
    set((state: any) => ({
      themeType: state.themeType === payload ? "light" : payload,
    })),
}));
export default themeStore;
