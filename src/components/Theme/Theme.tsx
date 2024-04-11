import { useState } from "react";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";

type ThemeKey = "light" | "dark";
type Theme = typeof lightTheme | typeof darkTheme;

export const useTheme = (): {
  theme: Theme;
  setTheme: (themeKey: ThemeKey) => void;
} => {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>("light");

  const setTheme = (themeKey: ThemeKey) => {
    setCurrentTheme(themeKey);
    console.log(themeKey, "==");
  };

  const getTheme = (theme: ThemeKey): Theme => {
    switch (theme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
      default:
        return lightTheme;
    }
  };

  const theme: Theme = getTheme(currentTheme);

  return { theme, setTheme };
};
