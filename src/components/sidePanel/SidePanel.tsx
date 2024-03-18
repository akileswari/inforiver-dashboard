import { useState } from "react";
import { getIcon } from "../constant/Helper";
import { ELayouts } from "../../MainComp";

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
  interface RepeatingElements {
    className: string;
    iconName: string;
    label: string;
    onClick: () => void;
  }
  const [showElements, setShowElements] = useState(false);

  const toggleElements = () => {
    setShowElements(!showElements);
  };

  // array opf objects for insert and layout
  const RepeatingElements = ({
    className,
    iconName,
    label,
    onClick,
  }: RepeatingElements) => {
    return (
      <div className="menu-item" onClick={onClick}>
        <i className={getIcon(iconName)}></i>
        <span className="menu-label">{label}</span>
      </div>
    );
  };

  const MenuLayoutItem = ({ iconName, label, onClick }: MenuLayoutItem) => {
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
