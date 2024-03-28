import React, { useState } from "react";
import { getIcon } from "../constant/Helper";
import { ELayouts } from "../../MainComp";
import LayoutSection from "../layout/Layout";

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
  const [showElements, setshowElements] = useState(false);

  const toggleLayoutSection = () => {
    setShowLayoutSection(!showLayoutSection);
    setshowElements(false); 
  };

  const toggleInsertElement = () => {
    setshowElements(!showElements);
    if (!showElements) setShowLayoutSection(false); 
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
        <LayoutSection  />
      )}

      {showElements && (
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