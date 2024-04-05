import React from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import XAxis from "../components/axis/xAxis.tsx";
import YAxis from "../components/axis/yAxis.tsx";
import TextValues from "../components/dataValues/TextValues.tsx";

interface AreaChartProps {
  data: { name: string; value: number }[][];
  width: number;
  height: number;
  theme: string;
}

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  width,
  height,
  theme,
}) => {
  // Dimensions
  const margin = { top: 20, right: 30, bottom: 50, left: 80 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Calculate the maximum and minimum values across all datasets
  const allValues = data.reduce(
    (acc, curr) => [...acc, ...curr.map((d) => d.value)],
    []
  );
  const maxValue = Math.max(...allValues) || 0;
  const minValue = Math.min(...allValues) || 0;

  // Scales
  const xScale = scaleBand()
    .domain(data[0].map((d) => d.name))
    .range([0, innerWidth])
    .padding(0.4);

  const yScale = scaleLinear()
    .domain([Math.min(minValue, 0), Math.max(maxValue, 0)])
    .nice()
    .range([innerHeight, 0]);

  // Calculate the baseline y-coordinate
  const baselineY = yScale(0);

  // Generate paths for area and stroke for each dataset
  const areaPaths = data.map(
    (dataset) =>
      dataset.map((d) => `${xScale(d.name)!},${yScale(d.value)}`).join(" L ") +
      ` L ${xScale(dataset[dataset.length - 1].name)!},${baselineY} L ${xScale(
        dataset[0].name
      )!},${baselineY}`
  );

  const strokePaths = data.map(
    (dataset) =>
      `M ${xScale(dataset[0].name)!},${yScale(dataset[0].value)} L ${dataset
        .map((d) => `${xScale(d.name)!},${yScale(d.value)}`)
        .join(" L ")} L ${xScale(dataset[dataset.length - 1].name)!},${yScale(
        dataset[dataset.length - 1].value
      )}`
  );

  return (
    <g width={width} height={height}>
      {data.map((dataset, index) => (
        <g key={index} transform={`translate(${margin.left}, ${margin.top})`}>
          {/* X Axis */}
          <XAxis
            innerHeight={innerHeight}
            data={dataset}
            xScale={xScale}
            index={index}
            theme={theme}
          />

          {/* Area */}
          <path d={`M ${areaPaths[index]}`} fill="#1e97d9" fillOpacity="0.5" />

          {/* Stroke */}
          <path
            d={strokePaths[index]}
            fill="none"
            stroke="#1e97d9"
            strokeWidth="2"
          />

          {/* Circles */}
          {dataset.map((d, i) => (
            <circle
              key={i}
              cx={xScale(d.name)! + xScale.bandwidth() / -30}
              cy={yScale(d.value) - 2}
              r={3}
              fill="steelblue"
            />
          ))}

          {/* Y Axis */}
          <YAxis
            margin={margin}
            width={innerWidth}
            yScale={yScale}
            theme={theme}
          />
        </g>
      ))}

      {/* X Axis Label */}
      <text
        x={margin.left + innerWidth / 2}
        y={height - 10}
        textAnchor="middle"
        fontSize={"20px"}
      >
        Category
      </text>

      {/* Y Axis Label */}
      <text
        x={-((height - margin.top - margin.bottom) / 2 + margin.top)}
        y={30}
        textAnchor="middle"
        transform={`rotate(-90)`}
        fontSize={"20px"}
      >
        Value
      </text>

      {/* Data values at the end of each bar */}
      {data.map((dataset, index) =>
        dataset.map((d, i) => (
          <TextValues
            key={i}
            x={xScale(d.name)! + xScale.bandwidth() + 20}
            y={yScale(d.value) + 10}
            value={d.value}
            xScale={xScale}
            yScale={yScale}
            fontSize={12}
            theme={theme}
          />
        ))
      )}
    </g>
  );
};

export default AreaChart;
