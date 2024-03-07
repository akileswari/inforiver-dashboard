import React from "react";
import TemplatePreview from "./TemplatePreview";
import TemplateToolbar from "./TemplateToolbar";
import {
  divHeight,
  divWidth,
  minHeight,
  minWidth,
} from "../components/constant/Helper";

const TemplateWrapper = () => {
  // console.log(document.getElementsByClassName("template-toolbar"));

  // console.log(eWidth);

  const fHeight = divHeight - minHeight;
  const fWidth = divWidth - minWidth;

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
