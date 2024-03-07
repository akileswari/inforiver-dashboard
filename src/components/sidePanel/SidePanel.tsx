import { useState } from "react";
import { getIcon } from "../constant/Helper";

const SidePanel = () => {
  const [showElements, setShowElements] = useState(false);

  const toggleElements = () => {
    setShowElements(!showElements);
  };
  // array opf objects for insert and layout
  const RepeatingElements = ({ className, iconName, label }) => {
    return (
      <div className="menu-item">
        <i className={getIcon(iconName)}></i>
        <span className="menu-label">{label}</span>
      </div>
    );
  };

  const MenuLayoutItem = ({ iconName, label, onClick }) => {
    return (
      <div className="menu-layout" onClick={onClick}>
        <i className={getIcon(iconName)}></i>
        <span className="menu-header">{label}</span>
      </div>
    );
  };

  return (
    <div className="menu">
      <MenuLayoutItem
        iconName="light-layout"
        label="Layout"
        //  In this onclick  replace it with the layout redirection
        onClick={toggleElements}
      />
      <MenuLayoutItem
        iconName="light-dropdown-bottom"
        label="Insert element"
        onClick={toggleElements}
      />

      {showElements && (
        <>
          <RepeatingElements
            className="menu-item"
            iconName="light-chart"
            label="Chart"
          />
          <RepeatingElements
            className="menu-item"
            iconName="light-card"
            label="Card"
          />
          <RepeatingElements
            className="menu-item"
            iconName="light-table"
            label="Table"
          />
          <RepeatingElements
            className="menu-item"
            iconName="light-notes"
            label="Notes"
          />
        </>
      )}
    </div>
  );
};

export default SidePanel;
