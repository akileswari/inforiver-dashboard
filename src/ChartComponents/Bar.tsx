import React from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import XAxis from "../components/axis/xAxis.tsx";
import YAxis from "../components/axis/yAxis.tsx";
import TextValues from "../components/dataValues/TextValues.tsx";

import { IThemeColor } from "../components/Theme/typing.ts";
interface BarChartProps {
  data: { name: string; value: number }[][];
  width: number;
  height: number;
  theme: IThemeColor;
}

const BarChart: React.FC<BarChartProps> = ({ data, width, height, theme }) => {
  // Dimensions

  const margin = { top: 20, right: 30, bottom: 40, left: 80 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Create scales
  const xScale = scaleBand()
    .domain(data[0].map((d) => d.name))
    .range([0, innerWidth])
    .padding(0.3);

  const yScale = scaleLinear()
    .domain([
      Math.min(
        ...data.map((dataset) => Math.min(...dataset.map((d) => d.value)))
      ),
      Math.max(
        ...data.map((dataset) => Math.max(...dataset.map((d) => d.value)))
      ),
    ])
    .nice()
    .range([innerHeight, 0]);

  // Draw bars
  const bars = data.map((dataset, index) => (
    <g key={index}>
      {dataset.map((d, i) => (
        <g key={i}>
          {/* Bar */}
          <rect
            x={xScale(d.name)! + (index * xScale.bandwidth()) / data.length}
            y={d.value >= 0 ? yScale(d.value)! : yScale(0)!}
            width={xScale.bandwidth() / data.length}
            height={Math.abs(yScale(d.value)! - yScale(0)!)}
            fill={d.value >= 0 ? "#4f45bd" : "orange"}
          />
          {/* Text Values */}
          <TextValues
            x={
              xScale(d.name)! +
              ((index + 0.5) * xScale.bandwidth()) / data.length
            }
            y={d.value >= 0 ? yScale(d.value)! - 5 : yScale(d.value)! + 10}
            value={d.value}
            xScale={xScale}
            yScale={yScale}
            fontSize={"12px"}
            theme={theme}
          />
        </g>
      ))}
      {/* X Axis */}
      <XAxis
        innerHeight={innerHeight}
        xScale={xScale}
        data={dataset}
        // index={index}
        theme={theme}
      />
    </g>
  ));

  return (
    <g
      width={width}
      height={height}
      style={{ backgroundColor: theme.chart.background }}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {bars}
        <YAxis
          margin={margin}
          width={innerWidth}
          yScale={yScale}
          theme={theme}
        />
      </g>
      {/* Add labels for x and y axes */}
      <text
        x={margin.left + innerWidth / 2}
        y={height - 10}
        textAnchor="middle"
        fontSize={"20px"}
      >
        Product
      </text>
      <text
        x={margin.left - 30}
        y={margin.top + innerHeight / 2}
        textAnchor="middle"
        transform={`rotate(-90, ${margin.left - 30}, ${
          margin.top + innerHeight / 2
        })`}
        fontSize={"20px"}
      >
        Sales
      </text>
    </g>
  );
};

export default BarChart;
