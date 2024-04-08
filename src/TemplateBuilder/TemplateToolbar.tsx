import React from "react";
import CustomToolbar from "../components/layout/CustomToolBar";
interface TemplateToolbarProps {
  selectedGridItems: string[];
  swapGridItems: () => void;
  undo;
  redo;
}
const TemplateToolbar: React.FC<TemplateToolbarProps> = ({
  selectedGridItems,
  swapGridItems,
  undo,
  redo,
}) => {
  return (
    <div className="template-toolbar">
      <CustomToolbar
        selectedGridItems={selectedGridItems}
        swapGridItems={swapGridItems}
        undo={undo}
        redo={redo}
      />
    </div>
  );
};

export default TemplateToolbar;
