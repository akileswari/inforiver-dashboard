import React from "react";
import TemplatePreview from "./TemplatePreview";
import TemplateToolbar from "./TemplateToolbar";

const TemplateWrapper = () => {
  // console.log(document.getElementsByClassName("template-toolbar"));

  // console.log(eWidth);
  const divHeight = 400;
  const divWidth = 800;

  const fHeight = divHeight - 75;
  const fWidth = divWidth - 200;

  return (
    <div
      className="template-wrapper"
      style={{ height: `${divHeight}px`, width: `${divWidth}px` }}
    >
      <TemplateToolbar />
      <TemplatePreview height={fHeight} width={fWidth} />
    </div>
  );
};

export default TemplateWrapper;
