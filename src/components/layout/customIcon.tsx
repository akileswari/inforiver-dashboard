import React, { useState } from 'react';
import "../CSS/customIcon.css";
import { useTheme } from "../Theme/Theme";
import { getIcon } from "../constant/Helper";

const CustomToolbar = () => {
  const { theme, setTheme } = useTheme(); // Destructure setTheme from useTheme

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value; // Get the selected theme from the dropdown
    setTheme(selectedTheme); // Set the selected theme using the setTheme function from useTheme
  };

  return (
    <div className="custom-toolbar">
      <div className="custom-item">
        <i className={getIcon("light-theme")}></i>
        <select value={theme.name} onChange={handleThemeChange} title='Theme'>
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
