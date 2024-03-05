//TemplatePreview.tsx
import React from "react";
import BarChart from "../ChartComponents/BarChart";
import WaterfallChart from "../ChartComponents/WaterfallChart";
//import WaterfallChart from "../ChartComponents/WaterfallChart";

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
        {/* <WaterfallChart data={data} categories={categories} width={svgWidth} height={svgHeight} /> */}
      </svg>
    </div>
  );
};

export default TemplatePreview;


// import React from "react";
// import ClusteredChart from "../ChartComponents/ClusterChart"; // Import ClusteredChart component

// interface TemplatePreviewProps {
//   svgWidth: number;
//   svgHeight: number;
// }

// const TemplatePreview: React.FC<TemplatePreviewProps> = ({ svgWidth, svgHeight }) => {
//   const data = [
//     [10, 20, 30, 40, 50], 
//     [20, 30, -10, 20, 30], 
//   ];
//   const categories = ["A", "B", "C", "D", "E"];

//   return (
//     <div className="template-preview">
//       <svg width={svgWidth} height={svgHeight}>
//         {/* Render ClusteredChart instead of BarChart */}
//         <ClusteredChart datasets={[{ name: categories, values: data }]} width={svgWidth} height={svgHeight} />
//       </svg>
//     </div>
//   );
// };

// export default TemplatePreview;
