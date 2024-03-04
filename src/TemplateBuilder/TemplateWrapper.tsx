import React from "react";
import TemplatePreview from "./TemplatePreview";
import TemplateToolbar from "./TemplateToolbar";

function TemplateWrapper() {
  const toolbarHeight = 75; 
  const remainingHeight = `calc(100% - ${toolbarHeight}px)`;
  const svgWidth = 500;
  const svgHeight = 400;

  return (
    <div className="template-wrapper" style={{ height: remainingHeight }}>
      <TemplateToolbar />
      <TemplatePreview svgWidth={svgWidth} svgHeight={svgHeight} />
    </div>
  );
}

export default TemplateWrapper;
