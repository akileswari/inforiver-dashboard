// import React from "react";
// import BarChart from "../ChartComponents/BarChart";
// import WaterfallChart from "../ChartComponents/WaterfallChart";
// import { useTheme } from "../components/Theme/Theme";

// interface TemplatePreviewProps {
//   svgWidth: number;
//   svgHeight: number;
// }

// const TemplatePreview: React.FC<TemplatePreviewProps> = ({
//   svgWidth,
//   svgHeight,
// }) => {
//   const { theme, toggleTheme } = useTheme();

//   const data = [
//     [
//       { name: "Detergent", value: 10 },
//       { name: "Shampoo", value: 20 },
//       { name: "Tooth Brush", value: -19 },
//       { name: "Oil", value: 30 },
//       { name: "Face Wash", value: 35 },
//     ],
//   ];

//   return (
//     <div className="template-preview">
//       <svg
//         width={svgWidth}
//         height={svgHeight}
//         style={{ backgroundColor: theme.chart.background }}
//       >
//         {/* <BarChart data={data} width={svgWidth} height={svgHeight} theme={theme} toggleTheme={function (): void {
//           throw new Error('Function not implemented.');
//         } } /> */}
//         <WaterfallChart
//           data={data}
//           width={500}
//           height={300}
//           theme={theme}
//           toggleTheme={toggleTheme}
//         />

//         <g transform={`translate(${svgWidth - 100}, 20)`}>
//           <rect width="90" height="30" fill={theme.footer.label} rx="5" />
//           <foreignObject x="0" y="0" width="90" height="30">
//             <select
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 backgroundColor: "transparent",
//                 border: "none",
//                 outline: "none",
//               }}
//               onChange={(e) => toggleTheme(e.target.value)}
//             >
//               <option value="light">Light Theme</option>
//               <option value="dark">Dark Theme</option>
//             </select>
//           </foreignObject>
//         </g>
//       </svg>
//     </div>
//   );
// };

// export default TemplatePreview;

import React from 'react';
import ClusteredChart from '../ChartComponents/ClusterChart';
import { useTheme } from "../components/Theme/Theme";
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
    ], [
      { name: "Detergent", value: 50 },
      { name: "Shampoo", value: 75 },
      { name: "Tooth Brush", value: 60 },
      { name: "Oil", value: 55 },
      { name: "Face Wash", value: -10 },
    ], [
      { name: "Detergent", value: 50 },
      { name: "Shampoo", value: 75 },
      { name: "Tooth Brush", value: 60 },
      { name: "Oil", value: 55 },
      { name: "Face Wash", value: -10 },
    ]
  ];

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="template-preview">
      <svg width={svgWidth} height={svgHeight} style={{ backgroundColor: theme.chart.background }}>

        <ClusteredChart datasets={data} width={svgWidth} height={svgHeight} theme={theme} toggleTheme={toggleTheme} />

        
        <g transform={`translate(${svgWidth - 100}, 20)`}>
          <rect width="90" height="30" fill={theme.footer.label} rx="5" />
          <foreignObject x="0" y="0" width="90" height="30">
            <select
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
              }}
              onChange={(e) => toggleTheme(e.target.value)}
            >
              <option value="light">Light Theme</option>
              <option value="dark">Dark Theme</option>
            </select>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
 }

  export default TemplatePreview;
// import React from 'react';
// import StackedChart from '../ChartComponents/Stacked';
// import { useTheme } from "../components/Theme/Theme";
// interface TemplatePreviewProps {
//   svgWidth: number;
//   svgHeight: number;
// }

// const TemplatePreview: React.FC<TemplatePreviewProps> = ({ svgWidth, svgHeight }) => {
//   const data = [
//     [
//       { name: "Detergent", value: 10 },
//       { name: "Shampoo", value: 20 },
//       { name: "Tooth Brush", value: 30 },
     
//     ], [
//       { name: "Detergent", value: 50 },
//       { name: "Shampoo", value: 10 },
//       { name: "Tooth Brush", value: 20 },
     
//     ], [
//       { name: "Detergent", value: 20 },
//       { name: "Shampoo", value: 10 },
//       { name: "Tooth Brush", value: 30 },
      
//     ]
//   ];

//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className="template-preview">
//       <svg width={svgWidth} height={svgHeight} style={{ backgroundColor: theme.chart.background }}>
//         <StackedChart data={data} width={svgWidth} height={svgHeight} categories={data[0].map(item => item.name)} theme={theme} toggleTheme={toggleTheme} />
//         <g transform={`translate(${svgWidth - 100}, 20)`}>
//           <rect width="90" height="30" fill={theme.footer.label} rx="5" />
//           <foreignObject x="0" y="0" width="90" height="30">
//             <select
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 backgroundColor: "transparent",
//                 border: "none",
//                 outline: "none",
//               }}
//               onChange={(e) => toggleTheme(e.target.value)}
//             >
//               <option value="light">Light Theme</option>
//               <option value="dark">Dark Theme</option>
//             </select>
//           </foreignObject>
//         </g> 
//       </svg>
//     </div>
//   );
// }

// export default TemplatePreview;
