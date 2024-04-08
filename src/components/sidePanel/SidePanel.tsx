import React, { useState } from "react";
import { getIcon } from "../constant/Helper";
import { ELayouts } from "../../MainComponent";

const SidePanel = ({
  toggleToPreview,
  showSubPanelElements,
}: {
  toggleToPreview: (value: ELayouts) => void;
  showSubPanelElements: ELayouts;
}) => {
  const [showInsertElementSubPanel, setShowInsertElementSubPanel] =
    useState(true);

  const toggleToPreviewWithToolbar = (value: ELayouts) => {
    toggleToPreview(value);
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
        onClick={() => toggleToPreviewWithToolbar(ELayouts.LAYOUT)}
      />
      <MenuLayoutItem
        iconName="light-dropdown-bottom"
        label="Insert element"
        onClick={() => setShowInsertElementSubPanel(true)}
      />

      {showInsertElementSubPanel && (
        <>
          <RepeatingElements
            className="menu-item"
            iconName="light-chart"
            label="Chart"
            onClick={() => toggleToPreviewWithToolbar(ELayouts.CHART)}
          />

          <RepeatingElements
            className="menu-item"
            iconName="light-card"
            label="Card"
            onClick={() => toggleToPreviewWithToolbar(ELayouts.CARD)}
          />
          <RepeatingElements
            className="menu-item"
            iconName="light-table"
            label="Table"
            onClick={() => toggleToPreviewWithToolbar(ELayouts.TABLE)}
          />
          <RepeatingElements
            className="menu-item"
            iconName="light-notes"
            label="Notes"
            onClick={() => toggleToPreviewWithToolbar(ELayouts.NOTES)}
          />
        </>
      )}
    </div>
  );
};

export default SidePanel;
