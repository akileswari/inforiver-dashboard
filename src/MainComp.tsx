import React, { useState } from "react";

import SubPanel from "./components/SubPanel/SubPanel";
import Title from "./components/layout/layoutTittle"; // Import the Title component
import InforiverLogo from "./components/pageTitle/InforiverLogo";
import SidePanel from "./components/sidePanel/SidePanel";
import TemplateWrapper from "./TemplateBuilder/TemplateWrapper";
import Toolbar from "./components/layout/toolbar";

export enum ELayouts {
  CHART = "CHART",
  CARD = "CARD",
  TABLE = "TABLE",
  NOTES = "NOTES",
  LAYOUT = "LAYOUT"
}

const MainComp = () => {
  const [showSubPanelElements, setShowSubPanelElements] =
    useState<ELayouts | null>(null);
  const [showToolbar, setShowToolbar] = useState(false); // State to manage toolbar visibility

  const toggleToPreview = (payload: ELayouts) => {
    setShowSubPanelElements(payload === showSubPanelElements ? null : payload);
    setShowToolbar(payload === ELayouts.LAYOUT); // Show toolbar only when layout is clicked
  };

  return (
    <div className="App">
      <InforiverLogo />
      <Title title={showSubPanelElements === null ? "Layout" : "Insert element"} /> {/* Render the Title component */}
      <div className="main-content">
        <SidePanel
          toggleToPreview={toggleToPreview}
          showSubPanelElements={showSubPanelElements}
        />
        {showSubPanelElements === ELayouts.CHART && (
          <SubPanel
            toggleToPreview={toggleToPreview}
            showSubPanelElements={showSubPanelElements}
          />
        )}
        <TemplateWrapper />
      </div>
      {showToolbar && <Toolbar />}
    </div>
  );
};

export default MainComp;
