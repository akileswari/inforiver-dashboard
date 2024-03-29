import React, { useState } from "react";
import "../CSS/customIcon.css";
import { useTheme } from "../Theme/Theme";
import { getIcon } from "../constant/Helper";
import themeStore from "../../store/zustand/themeIndicator";
import { color, select } from "d3";
const CustomToolbar = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  // const { theme, setTheme } = useTheme(); // Destructure setTheme from useTheme

  const themeType = themeStore((state: any) => state.themeType);
  console.log(themeType);

  const handleThemeChange = (event) => {
    // console.log(event.target.value);
    const selectedTheme = event.target.value; // Get the selected theme from the dropdown
    setSelectedTheme(selectedTheme); // Set state to reflect the change in selected theme
    setThemeType(selectedTheme);
  };

  const setThemeType = themeStore((state: any) => state.setTHemeType);

  return (
    <div className="custom-toolbar">
      <div className="custom-item">
        <i className={getIcon("light-theme")}></i>

        <select
          value={selectedTheme}
          onChange={handleThemeChange}
          title="Theme"
          style={{ color: "black" }}
        >
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
        </select>
      </div>
      <div className="custom-item">
        <i className={getIcon("light-swap")}></i>
        <div className="custom-label">Swap</div>
      </div>
      <div className="custom-item">
        <i className={getIcon("light-delete")}></i>
        <div className="custom-label">Delete</div>
      </div>
      <div className="line"></div>
      <div className="custom-separator"></div>
      <div className="custom-item">
        <i className={getIcon("light-undo")}></i>
      </div>
      <div className="custom-item">
        <i className={getIcon("light-redo")}></i>
      </div>
    </div>
  );
};

export default CustomToolbar;
