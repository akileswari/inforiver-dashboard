<<<<<<< HEAD
=======
import LineChart from "../ChartComponents/LineChart";
import { useSelector } from "react-redux";
import ClusterLineChart from "../ChartComponents/ClusttereLine";
import { dataSets, lineData } from "../components/dataSets/ChartDatas";
import BarChart from "../ChartComponents/Bar";
import AreaChart from "../ChartComponents/AreaChart";
import { useEffect, useRef, useState } from "react";
import StackedLineChart from "../ChartComponents/StackedLineChart";
// import BarChart from "../ChartComponents/Bar.tsx";
// import ClusterLineChart from "../ChartComponents/ClusttereLine";
// import StackedLineChart from "../ChartComponents/StackedLineChart";
>>>>>>> 6e7eb559bacbe37b62f310448ab0e11887778710

import React from 'react';
import BarChart from '../ChartComponents/BarChart';
import WaterfallChart from '../ChartComponents/WaterfallChart';
import { useTheme } from '../components/Theme/Theme';

interface TemplatePreviewProps {
  svgWidth: number;
  svgHeight: number;
}

<<<<<<< HEAD
const TemplatePreview: React.FC<TemplatePreviewProps> = ({ svgWidth, svgHeight }) => {
  const { theme, toggleTheme } = useTheme();

  const data = [
    [
      { name: 'Detergent', value: 10 },
      { name: 'Shampoo', value: 20 },
      { name: 'Tooth Brush', value: -19 },
      { name: 'Oil', value: 30 },
      { name: 'Face Wash', value: 35 },
    ],
  ];
=======
const componentIds: Record<string, React.FC<any>> = {
  "overlapped-column": BarChart,
  area: AreaChart,
  line: LineChart,
  "clustered-line": ClusterLineChart,
  "stacked-line": StackedLineChart,
};
const TemplatePreview = (prop: IProps) => {
  const { height, width } = prop;
  const activeChart: string = useSelector(
    (state: any) => state.chartStore.activeChart
  );
>>>>>>> 6e7eb559bacbe37b62f310448ab0e11887778710

  const SelectedComp = componentIds[activeChart];
  // console.log(activeChart);

  const finalData =
    activeChart === "clustered-line" || activeChart === "stacked-line"
      ? dataSets
      : lineData;
  const templateRef = useRef(null);
  const [previewHeight, setPreviewHeight] = useState();
  const [previewWidth, setPreviewWidth] = useState();
  useEffect(() => {
    let calcHeight = (templateRef.current as any).clientHeight;
    let calcWidth = (templateRef.current as any).clientWidth;
    // setPreviewHeight((templateRef.current as any).clientheight);'
    // console.log(templateRef.current);
    // const val = (templateRef.current as any).getBoundingClientRect;
    // console.log(val.height);
    // console.log((templateRef.current as any).style.height);
    // console.log((templateRef.current as any).clientHeight);
    setPreviewHeight(calcHeight);
    setPreviewWidth(calcWidth);
    // document.addEventListener("resize", () => {});
  });
  console.log(height, width);
  return (
<<<<<<< HEAD
    <div className="template-preview">
      <svg width={svgWidth} height={svgHeight} style={{ backgroundColor: theme.backgroundColor }}>
        <BarChart data={data} width={svgWidth} height={svgHeight} theme={theme} toggleTheme={toggleTheme} />
        {/* <WaterfallChart data={data} width={500} height={300} theme={theme} toggleTheme={toggleTheme} /> */}

        <g transform={`translate(${svgWidth - 100}, 20)`}>
          <rect width="90" height="30" fill="gray" rx="5" onClick={toggleTheme} />
          <text x="45" y="20" textAnchor="middle" fill="white" fontSize="14">
            Toggle Theme
          </text>
        </g>
=======
    <div
      ref={templateRef}
      className="template-preview"
      style={{ height: "100%", width: "100%" }}
    >
      <svg
        // style={{ height: previewHeight, width: previewWidth }
        height={previewWidth}
        width={previewHeight}
      >
        {/* <LineChart data={lineData} width={width} height={height} /> */}

        {SelectedComp && (
          <SelectedComp
            data={finalData}
            height={previewWidth}
            width={previewHeight}
          />
        )}
        {/* <BarChart data={lineData} height={height} width={width} /> */}
        {/* <ClusterLineChart data={datasets} height={height} width={width} /> */}
        {/* <StackedLineChart data={datasets} height={height} width={width} /> */}
>>>>>>> 6e7eb559bacbe37b62f310448ab0e11887778710
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