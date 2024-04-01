import TemplatePreview from "./TemplatePreview";
import TemplateToolbar from "./TemplateToolbar";

const TemplateWrapper = () => {
  // console.log(document.getElementsByClassName("template-toolbar"));

  // console.log(eWidth);

  return (
    <div className="template-wrapper">
      <TemplateToolbar />
      <TemplatePreview />
    </div>
  );
};

export default TemplateWrapper;
