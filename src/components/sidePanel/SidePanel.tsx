import React, { useState } from "react";
import { getIcon } from "../constant/Helper";
import { ELayouts } from "../../MainComp";

import CustomToolbar from "../layout/customToolbar";
import Toolbar from "../layout/toolbar";
import SubPanel from "../SubPanel/SubPanel";

const SidePanel = ({
  toggleToPreview,
  showSubPanelElements,
}: {
  toggleToPreview: (value: ELayouts) => void;
  showSubPanelElements: ELayouts;
}) => {
  const [showLayoutSection, setShowLayoutSection] = useState(false);
  const [showInsertElementSubPanel, setShowInsertElementSubPanel] = useState(true);

  const toggleLayoutSection = () => {
    setShowLayoutSection(!showLayoutSection);
    setShowInsertElementSubPanel(true);
  };

  const toggleToPreviewWithToolbar = (value: ELayouts) => {
    toggleToPreview(value);
    setShowLayoutSection(false);
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
        onClick={() => setShowInsertElementSubPanel(true)}
      />

      {showLayoutSection && (
        <Toolbar />
      )}

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

      {/* Render SubPanel after all menu items and the layout section */}
      {showLayoutSection && (
        <SubPanel showSubPanelElements={showSubPanelElements} />
      )}

      {/* Render CustomToolbar */}
      <CustomToolbar />
    </div>
  );
};

export default SidePanel;
