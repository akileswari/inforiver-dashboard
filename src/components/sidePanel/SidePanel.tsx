import React, { useState } from "react";
import { getIcon } from "../constant/Helper";
import { ELayouts } from "../../MainComponent";
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

  const menuItems = [
    {
      iconName: "light-chart",
      label: "Chart",
      layout: ELayouts.CHART,
    },
    {
      iconName: "light-card",
      label: "Card",
      layout: ELayouts.CARD,
    },
    {
      iconName: "light-table",
      label: "Table",
      layout: ELayouts.TABLE,
    },
    {
      iconName: "light-notes",
      label: "Notes",
      layout: ELayouts.NOTES,
    },
  ];
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

      {showLayoutSection && <LayoutSection />}

      {showElements && (
        <>
          {menuItems.map((menuItem, index) => (
            <RepeatingElements
              key={index}
              className="menu-item"
              iconName={menuItem.iconName}
              label={menuItem.label}
              onClick={() => toggleToPreview(menuItem.layout)}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default SidePanel;
