import React from "react";
import TemplatePreview from "./TemplatePreview";
import TemplateToolbar from "./TemplateToolbar";

const TemplateWrapper = () => {
  return (
    <div className="template-wrapper">
      <TemplateToolbar />
      <TemplatePreview />
    </div>
  );
};

export default TemplateWrapper;
