import React, { useState } from "react";

import SubPanel from "./components/SubPanel/SubPanel";
import Title from "./components/pageTitle/title";
import InforiverLogo from "./components/pageTitle/InforiverLogo";
import SidePanel from "./components/sidePanel/SidePanel";
import TemplateWrapper from "./templateBuilder/TemplateWrapper";
import Toolbar from "./components/layout/toolbar";

export enum ELayouts {
  CHART = "CHART",
  CARD = "CARD",
  TABLE = "TABLE",
  NOTES = "NOTES",
  LAYOUT = "LAYOUT",
}

const MainComp = () => {
  const [showSubPanelElements, setShowSubPanelElements] =
    useState<ELayouts | null>(null);
  const [showToolbar, setShowToolbar] = useState<ELayouts | null>(null);

  const toggleToPreview = (payload: ELayouts) => {
    setShowSubPanelElements(payload === showSubPanelElements ? null : payload);
  };

  const toolPreview = (payload: ELayouts) => {
    setShowToolbar(payload === showToolbar ? null : payload);
  };

  return (
    <div className="App">
      <InforiverLogo />
      <Title
        title={
          showSubPanelElements === ELayouts.LAYOUT ? "Layout" : "Insert element"
        }
      />
      <div className="main-content">
        <SidePanel
          toggleToPreview={toggleToPreview}
          showSubPanelElements={showSubPanelElements}
        />
        {showSubPanelElements === ELayouts.LAYOUT && (
          <Toolbar
            toolpreview={toolPreview}
            showSubPanelElements={showSubPanelElements}
          />
        )}
        {showSubPanelElements === ELayouts.CHART && (
          <SubPanel
            toggleToPreview={toggleToPreview}
            showSubPanelElements={showSubPanelElements}
          />
        )}

        <TemplateWrapper />
      </div>
    </div>
  );
};

export default MainComp;
