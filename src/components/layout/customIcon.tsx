import React, { useState } from 'react';
import "./customIcon.css";
import { useTheme } from "../Theme/Theme";
import { getIcon } from "../constant/Helper";

const CustomToolbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-toolbar">
      
      <div className="custom-item">
        <i className={getIcon("light-theme")}></i>
        <select value={theme.name} onChange={toggleTheme}  title='Theme'>
          <option selected disabled>Theme</option>
          <option value="light-theme">Light Theme</option>
          <option value="dark-theme">Dark Theme</option>
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
