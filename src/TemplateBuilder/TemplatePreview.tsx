
import React from "react";
import BarChart from "../ChartComponents/BarChart";
import WaterfallChart from "../ChartComponents/WaterfallChart";

interface TemplatePreviewProps {
  svgWidth: number;
  svgHeight: number;
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({ svgWidth, svgHeight }) => {
  const data = [
    [
      { name: "Detergent", value: 10 },
      { name: "Shampoo", value: 20 },
      { name: "Tooth Brush", value: -19 },
      { name: "Oil", value: 30 },
      { name: "Face Wash", value: 35 },
     ],
    // [
    //   { name: "Detergent", value: 50 },
    //   { name: "Shampoo", value: 75 },
    //   { name: "Tooth Brush", value: 60 },
    //   { name: "Oil", value: 55 },
    //   { name: "Face Wash", value: -10 },
    // ],
    // [
    //   { name: "Detergent", value: 50 },
    //   { name: "Shampoo", value: 75 },
    //   { name: "Tooth Brush", value: 60 },
    //   { name: "Oil", value: 55 },
    //   { name: "Face Wash", value: -10 },
    // ],
  ];

  return (
    <div className="template-preview">
      <svg width={svgWidth} height={svgHeight}>
        <BarChart data={data} width={svgWidth} height={svgHeight} />
        {/* <WaterfallChart data={data}  width={svgWidth} height={svgHeight} /> */}
      </svg>
    </div>
  );
};

export default TemplatePreview;


// import React from 'react';
// import ClusteredChart from '../ChartComponents/ClusterChart'; 

// interface TemplatePreviewProps {
//   svgWidth: number;
//   svgHeight: number;
// }

// const TemplatePreview: React.FC<TemplatePreviewProps> = ({ svgWidth, svgHeight }) => {

//   const data = [
//     [
//       { name: "Detergent", value: 10 },
//       { name: "Shampoo", value: 20 },
//       { name: "Tooth Brush", value: -19 },
//       { name: "Oil", value: 30 },
//       { name: "Face Wash", value: 35 },
//     ], [
//       { name: "Detergent", value: 50 },
//       { name: "Shampoo", value: 75 },
//       { name: "Tooth Brush", value: 60 },
//       { name: "Oil", value: 55 },
//       { name: "Face Wash", value: -10 },
//     ], [
//       { name: "Detergent", value: 50 },
//       { name: "Shampoo", value: 75 },
//       { name: "Tooth Brush", value: 60 },
//       { name: "Oil", value: 55 },
//       { name: "Face Wash", value: -10 },
//     ]
//   ];

//   return (
//     <div className="template-preview">
//       <svg width={svgWidth} height={svgHeight}>
//         {/* Render ClusteredChart with correct props */}
//         <ClusteredChart datasets={data} width={svgWidth} height={svgHeight} />
//       </svg>
//     </div>
//   );
// }

// export default TemplatePreview;
// import React from 'react';
// import StackedChart from '../ChartComponents/Stacked';

// interface TemplatePreviewProps {
//   svgWidth: number;
//   svgHeight: number;
// }

// const TemplatePreview: React.FC<TemplatePreviewProps> = ({ svgWidth, svgHeight }) => {
//   const data = [
//     [
//       { name: "Detergent", value: 10 },
//       { name: "Shampoo", value: 20 },
//       { name: "Tooth Brush", value: -19 },
//       { name: "Oil", value: 30 },
//       { name: "Face Wash", value: 35 },
//     ], [
//       { name: "Detergent", value: 50 },
//       { name: "Shampoo", value: 75 },
//       { name: "Tooth Brush", value: 60 },
//       { name: "Oil", value: 55 },
//       { name: "Face Wash", value: -10 },
//     ], [
//       { name: "Detergent", value: 50 },
//       { name: "Shampoo", value: 75 },
//       { name: "Tooth Brush", value: 60 },
//       { name: "Oil", value: 55 },
//       { name: "Face Wash", value: -10 },
//     ]
//   ];

//   return (
//     <div className="template-preview">
//       <svg width={svgWidth} height={svgHeight}>
//         <StackedChart data={data} width={svgWidth} height={svgHeight} categories={data[0].map(item => item.name)} />
//       </svg>
//     </div>
//   );
// }

// export default TemplatePreview;