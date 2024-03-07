import { useState } from "react";
import { getIcon } from "../constant/Helper";

const SidePanel = () => {
  const [showElements, setShowElements] = useState(false);

  const toggleElements = () => {
    setShowElements(!showElements);
  };
  // array opf objects for insert and layout
  return (
    <div className="menu">
      <div className="menu-layout">
        <i className={getIcon("light-layout")}></i>
        <span className="menu-header">Layout</span>
      </div>
      <div className="menu-layout" onClick={toggleElements}>
        <i className={getIcon("light-dropdown-bottom")}></i>
        <span className="menu-header">Insert element</span>
      </div>
      {showElements && (
        <>
          <div className="menu-item">
            <i className={getIcon("light-chart")}></i>
            <span className="menu-label">Chart</span>
          </div>
          <div className="menu-item">
            <i className={getIcon("light-card")}></i>
            <span className="menu-label">Card</span>
          </div>
          <div className="menu-item">
            <i className={getIcon("light-table")}></i>
            <span className="menu-label">Table</span>
          </div>
          <div className="menu-item">
            <i className={getIcon("light-notes")}></i>
            <span className="menu-label">Notes</span>
          </div>
        </>
      )}
    </div>
  );
};

export default SidePanel;
