// CustomToolbar.jsx
import React from 'react';
import "./customIcon.css";
import { useTheme } from "../Theme/Theme"; 
import { getIcon } from "../constant/Helper";

const CustomToolbar = () => {
  const { theme, toggleTheme } = useTheme(); // Using the useTheme hook to get theme and toggleTheme function

  return (
    <div className="custom-toolbar">
      <div className="custom-item">
        <i className={getIcon("light-card")}></i>
        <div className="custom-label">Auto fit</div>
      </div>
      <div className="custom-item">
        <i className={getIcon("light-swap")}></i>
        <div className="custom-label">Swap</div>
      </div>
      <div className="custom-item">
        <i className={getIcon(theme.name)}></i> 
        <div className="custom-label">Theme</div>
        <select value={theme.name} onChange={toggleTheme}> 
          <option value="light-theme">Light Theme</option>
          <option value="dark-theme">Dark Theme</option>
        </select>
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
