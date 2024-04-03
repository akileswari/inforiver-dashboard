import { useRef, useState, useLayoutEffect } from "react";
import TemplatePreview from "./TemplatePreview";
import TemplateToolbar from "./TemplateToolbar";

const TemplateWrapper = () => {
  // console.log(document.getElementsByClassName("template-toolbar"));

  // console.log(eWidth);
  const templateRef = useRef(null);
  const [previewHeight, setPreviewHeight] = useState(0);
  const [previewWidth, setPreviewWidth] = useState(0);
  useLayoutEffect(() => {
    let calcHeight = (templateRef.current as any).clientHeight;
    let calcWidth = (templateRef.current as any).clientWidth;

    setPreviewHeight(calcHeight);
    setPreviewWidth(calcWidth);
  }, []);

  console.log(previewHeight, "Preview Height");
  console.log(previewWidth, "Preview Width");

  return (
    <div className="template-wrapper" ref={templateRef}>
      <TemplateToolbar />
      <TemplatePreview height={previewHeight} width={previewWidth} />
    </div>
  );
};

export default TemplateWrapper;
