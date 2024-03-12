
import React from "react";
import BarChart from "../ChartComponents/BarChart";
import lightTheme from "../components/Theme/lightTheme";
import darkTheme from "../components/Theme/darkTheme";
import WaterfallChart from "../ChartComponents/WaterfallChart";

interface TemplatePreviewProps {
  svgWidth: number;
  svgHeight: number;
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({ svgWidth, svgHeight }) => {
  const [isLightTheme, setIsLightTheme] = React.useState(true);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  const theme = isLightTheme ? lightTheme : darkTheme;

  const data = [
    [
      { name: "Detergent", value: 10 },
      { name: "Shampoo", value: 20 },
      { name: "Tooth Brush", value: -19 },
      { name: "Oil", value: 30 },
      { name: "Face Wash", value: 35 },
    ],
  ];

  return (
    <div className="template-preview">
      <svg width={svgWidth} height={svgHeight} style={{ backgroundColor: theme.backgroundColor }}>
        {/* <BarChart data={data} width={svgWidth} height={svgHeight} theme={theme} toggleTheme={toggleTheme}  /> */}
        <WaterfallChart data={data} width={500} height={300} theme={theme} toggleTheme={toggleTheme} />

        <g transform={`translate(${svgWidth - 100}, 20)`}>
          <rect width="90" height="30" fill="gray" rx="5" onClick={toggleTheme} />
          <text x="45" y="20" textAnchor="middle" fill="white" fontSize="14">
            Toggle Theme
          </text>
        </g>
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
      
//         <ClusteredChart datasets={data} width={svgWidth} height={svgHeight} />
//       </svg>
//     </div>
//   );
//  }

//  export default TemplatePreview;
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
//       { name: "Tooth Brush", value: 19 },
//       { name: "Oil", value: 30 },
//       { name: "Face Wash", value: 35 },
//     ], [
//       { name: "Detergent", value: 50 },
//       { name: "Shampoo", value: 75 },
//       { name: "Tooth Brush", value: 60 },
//       { name: "Oil", value: 55 },
//       { name: "Face Wash", value: 10 },
//     ], [
//       { name: "Detergent", value: 50 },
//       { name: "Shampoo", value: 75 },
//       { name: "Tooth Brush", value: 60 },
//       { name: "Oil", value: 55 },
//       { name: "Face Wash", value: 10 },
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