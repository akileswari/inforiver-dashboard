import React from "react";
import CustomToolbar from "../components/layout/customToolbar";
interface TemplateToolbarProps {
  selectedGridItems: string[];
  swapGridItems: () => void;
}
const TemplateToolbar: React.FC<TemplateToolbarProps> = ({
  selectedGridItems,
  swapGridItems,
}) => {
  return (
    <div className="template-toolbar">
      <CustomToolbar
        selectedGridItems={selectedGridItems}
        swapGridItems={swapGridItems}
      />
    </div>
  );
};

export default TemplateToolbar;
