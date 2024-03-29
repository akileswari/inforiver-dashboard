import React, { useState } from "react";
import { getIcon } from "../constant/Helper";
import { ELayouts } from "../../MainComp";

import CustomToolbar from "../layout/customIcon";
import Toolbar from "../layout/toolbar";

const SidePanel = ({
  toggleToPreview,
  showSubPanelElements,
}: {
  toggleToPreview: (value: ELayouts) => void;
  showSubPanelElements: ELayouts;
}) => {
  interface MenuLayoutItem {
    iconName: string;
    label: string;
    onClick: () => void;
  }

  const [showLayoutSection, setShowLayoutSection] = useState(false);
  const [showInsertElementSubPanel, setShowInsertElementSubPanel] = useState(true); // State to control rendering of subpanel for "Insert element"

  const toggleLayoutSection = () => {
    setShowLayoutSection(!showLayoutSection);
    setShowInsertElementSubPanel(false); // Hide subpanel when layout section is toggled
  };

  const toggleInsertElement = () => {
    setShowInsertElementSubPanel(true); // Always show subpanel when "Insert element" is clicked
    setShowLayoutSection(false); // Hide layout section if open
  };

  const MenuLayoutItem = ({ iconName, label, onClick }: MenuLayoutItem) => {
    return (
      <div className="menu-layout" onClick={onClick}>
        <i className={getIcon(iconName)}></i>
        <span className="menu-header">{label}</span>
      </div>
    );
  };

  const RepeatingElements = ({
    className,
    iconName,
    label,
    onClick,
  }: {
    className: string;
    iconName: string;
    label: string;
    onClick: () => void;
  }) => {
    return (
      <div className={className} onClick={onClick}>
        <i className={getIcon(iconName)}></i>
        <span className="menu-label">{label}</span>
      </div>
    );
  };

  return (
    <div className="menu">
      <MenuLayoutItem
        iconName="light-layout"
        label="Layout"
        onClick={toggleLayoutSection}
      />
      <MenuLayoutItem
        iconName="light-dropdown-bottom"
        label="Insert element"
        onClick={toggleInsertElement}
      />

      {showLayoutSection && (
        <><CustomToolbar /><Toolbar /></>
      )}

      {showInsertElementSubPanel && (
        <>
          <RepeatingElements
            className="menu-item"
            iconName="light-chart"
            label="Chart"
            onClick={() => toggleToPreview(ELayouts.CHART)}
          />

          <RepeatingElements
            className="menu-item"
            iconName="light-card"
            label="Card"
            onClick={() => toggleToPreview(ELayouts.CARD)}
          />
          <RepeatingElements
            className="menu-item"
            iconName="light-table"
            label="Table"
            onClick={() => toggleToPreview(ELayouts.TABLE)}
          />
          <RepeatingElements
            className="menu-item"
            iconName="light-notes"
            label="Notes"
            onClick={() => toggleToPreview(ELayouts.NOTES)}
          />
        </>
      )}
    </div>
  );
};

export default SidePanel; 
