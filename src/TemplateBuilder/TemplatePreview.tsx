// TemplatePreview.tsx
import React from "react";
import BarChart from "../ChartComponents/BarChart";

interface TemplatePreviewProps {
  svgWidth: number;
  svgHeight: number;
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({ svgWidth, svgHeight }) => {
  const data = [10, -20, 10, 30, 40];
  const categories = ["A", "B", "C", "D", "E"];

  return (
    <div className="template-preview">
      <svg width={svgWidth} height={svgHeight}>
        <BarChart data={data} categories={categories} width={svgWidth} height={svgHeight} />
      </svg>
    </div>
  );
};

export default TemplatePreview;
