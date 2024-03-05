import React from "react";
// import LineChart from "../ChartComponents/LineChart";
// import BarChart from "../ChartComponents/Bar.tsx";
// import ClusterLineChart from "../ChartComponents/ClusttereLine";
import StackedLineChart from "../ChartComponents/StackedLineChart";

interface IProps {
  height: number;
  width: number;
}
const TemplatePreview = (prop: IProps) => {
  const { height, width } = prop;

  const lineData = [
    { name: "Detergent", value: 50 },
    { name: "Shampoo", value: 75 },
    { name: "Tooth Brush", value: 60 },
    { name: "Oil", value: 55 },
    { name: "Face Wash", value: -10 },
  ];
  const datasets = [
    {
      name: ["January", "February", "March", "April", "May"],
      values: [10, 20, 15, 25, 30],
    },
    {
      name: ["January", "February", "March", "April", "May"],
      values: [15, 25, 20, 30, 35],
    },
  ];

  return (
    <div
      className="template-preview"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg style={{ width: `${width}px`, height: `${height}px` }}>
        {/* <LineChart data={lineData} width={width} height={height} /> */}

        {/* <BarChart data={lineData} height={height} width={width} /> */}
        {/* <ClusterLineChart data={datasets} height={height} width={width} /> */}
        <StackedLineChart data={datasets} height={height} width={width} />
      </svg>
    </div>
  );
};

export default TemplatePreview;
