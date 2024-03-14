// CustomToolbar.jsx

import React from 'react';
import './customIcon.css';
import { getIcon } from "../constant/Helper";
const CustomToolbar = () => {
  return (
    <div className="custom-toolbar">
      <div className="custom-item">
        <div className="custom-icon">
        <i className={getIcon("light-redo")}></i>
        </div>
        <div className="custom-label">Auto fit</div>
      </div>
      <div className="custom-item">
        <div className="custom-icon">
        <i className={getIcon("light-swap")}></i>
        </div>
        <div className="custom-label">Swap</div>
      </div>
      <div className="custom-item">
        <div className="custom-icon">
        <i className={getIcon("light-theme")}></i>
        </div>
        <div className="custom-label">Theme</div>
      </div>
      <div className="custom-separator"></div>
      <div className="custom-item">
        <div className="arrow-up"></div>
      </div>
      <div className="custom-item">
        <div className="double-arrow"></div>
      </div>
    </div>
  );
};

export default CustomToolbar;
