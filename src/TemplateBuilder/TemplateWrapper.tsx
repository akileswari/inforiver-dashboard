import TemplatePreview from "./TemplatePreview";
import TemplateToolbar from "./TemplateToolbar";

const TemplateWrapper = () => {
  // console.log(document.getElementsByClassName("template-toolbar"));

  // console.log(eWidth);

  return (
    <div
      className="template-wrapper"
      // style={{ height: `${divHeight}px`, width: `${divWidth}px` }}
      // style={{ height: '100%', width: '100%' }}
    >
      <TemplateToolbar />
      <TemplatePreview />
    </div>
  );
};

export default TemplateWrapper;
