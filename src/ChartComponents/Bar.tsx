import React from "react";
import * as d3 from "d3";
import XAxis from "./Axis/xAxis.tsx";
import YAxis from "./Axis/yAxis.tsx";
import XTicks from "./Ticks/xTicks.tsx";
import YTicks from "./Ticks/yTicks.tsx";

interface BarChartProps {
  data: { name: string; value: number }[];
  width: number;
  height: number;
}

const BarChart: React.FC<BarChartProps> = ({ data, width, height }) => {
  // Dimensions
  const margin = { top: 20, right: 30, bottom: 40, left: 80 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Get the minimum value to determine if the y-axis should start at 0
  const minValue = Math.min(...data.map((d) => d.value));
  const maxValue = Math.max(...data.map((d) => d.value));
  // Create scales
  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, innerWidth])
    .padding(0.3);

  const yScale = d3
    .scaleLinear()
    .domain([Math.min(minValue, 0), Math.max(maxValue, 0)])
    .nice()
    .range([innerHeight, 0]);

  // Draw bars
  const bars = data.map((d) => (
    <g key={d.name}>
      {/* Bar */}
      <rect
        x={xScale(d.name)!}
        y={d.value >= 0 ? yScale(d.value)! : yScale(0)!}
        width={xScale.bandwidth()}
        height={Math.abs(yScale(d.value)! - yScale(0)!)}
        fill={d.value >= 0 ? "#4f45bd" : "orange"}
      />
      {/* Text for positive values */}
      {d.value >= 0 && (
        <text
          x={xScale(d.name)! + xScale.bandwidth() / 2}
          y={yScale(d.value)! - 5}
          textAnchor="middle"
          dominantBaseline="baseline"
        >
          {d.value}
        </text>
      )}
      {/* Text for negative values */}
      {d.value < 0 && (
        <text
          x={xScale(d.name)! + xScale.bandwidth() / 2}
          y={yScale(d.value)!}
          textAnchor="middle"
          dominantBaseline="hanging"
        >
          {d.value}
        </text>
      )}
    </g>
  ));

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {bars}
        <XAxis innerHeight={innerHeight} />
        <YAxis margin={margin} width={innerWidth} yScale={yScale} />
        <XTicks data={data} xScale={xScale} innerHeight={innerHeight} />
        <YTicks yScale={yScale} />
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
    </svg>
  );
};

export default BarChart;
