import { useState } from "react";
//import { AdvancedColorPicker } from "@visualbi/bifrost-ui/dist/react/forms/AdvancedColorPicker";
import TemplateWrapper from "./TemplateBuilder/TemplateWrapper";
import SubPanel from "./components/SubPanel/SubPanel";
import PageTitle from "./components/pageTitle/PageTitle";
import SidePanel from "./components/sidePanel/SidePanel";

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

  const toggleToPreview = (payload: ELayouts) => {
    setShowSubPanelElements(payload);
  };
  return (
    <div className="App">
      <PageTitle />
      <div className="main-content">
        <SidePanel
          toggleToPreview={toggleToPreview}
          showSubPanelElements={showSubPanelElements}
        />
        <SubPanel showSubPanelElements={showSubPanelElements} />
        <TemplateWrapper />
        {/* <AdvancedColorPicker onChange={function (color: string): void {
          throw new Error("Function not implemented.");
        } } value={""}
        /> */}
      </div>
    </div>
  );
};

export default MainComp;
