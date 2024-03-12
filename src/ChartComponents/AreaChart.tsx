import React from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import XAxis from "../components/Axis/xAxis.tsx";
import YAxis from "../components/Axis/yAxis.tsx";
interface AreaChartProps {
  data: { name: string; value: number }[];
  width: number;
  height: number;
}

const AreaChart: React.FC<AreaChartProps> = ({ data, width, height }) => {
  // Dimensions
  const margin = { top: 20, right: 30, bottom: 50, left: 80 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const values = data.map((d) => d.value);

  //maximum and minimum values
  const maxValue = Math.max(...values) || 0;
  const minValue = Math.min(...values) || 0;

  // scales
  const xScale = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, innerWidth])
    .padding(0.4);

  const yScale = scaleLinear()
    .domain([Math.min(minValue, 0), Math.max(maxValue, 0)])
    .nice()
    .range([innerHeight, 0]);

  // Calculate the baseline y-coordinate
  const baselineY = yScale(0);

  // path data for the area
  const areaPath = data
    .map((d) => `${xScale(d.name)},${yScale(d.value)}`)
    .join(" L");

  const areaData = `M${xScale(
    data[0].name
  )},${baselineY} L${areaPath} L${xScale(
    data[data.length - 1].name
  )},${baselineY}`;

  // path data for the stroke
  const strokePath = `M${xScale(data[0].name)},${yScale(
    data[0].value
  )} L${areaPath} L${xScale(data[data.length - 1].name)},${yScale(
    data[data.length - 1].value
  )}`;

  return (
    <g width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <XAxis innerHeight={innerHeight} data={data} xScale={xScale} />
        {/* stroke */}
        <path d={strokePath} fill="none" stroke="#1e97d9" strokeWidth="2" />

        {/* area */}
        <path d={areaData} fill="#1e97d9" fillOpacity="0.5" />

        {/* Circles */}
        {data.map((d, i) => (
          <circle
            key={i}
            cx={xScale(d.name)! + xScale.bandwidth() / 40}
            cy={yScale(d.value)}
            r={3}
            fill="steelblue"
          />
        ))}

        <YAxis margin={margin} width={width} yScale={yScale} />
      </g>

      {/*labels for x and y axes */}
      <text
        x={(width - margin.left - margin.right) / 2 + margin.left}
        y={height - 10}
        textAnchor="middle"
        fontSize={"20px"}
      >
        Category
      </text>
      <text
        x={-((height - margin.top - margin.bottom) / 2 + margin.top)}
        y={30}
        textAnchor="middle"
        transform={`rotate(-90)`}
        fontSize={"20px"}
      >
        Value
      </text>

      {/*data values at the end of each bar */}
      {data.map((d, i) => (
        <text
          key={i}
          x={xScale(d.name)! + xScale.bandwidth()}
          y={yScale(d.value)}
          dx={8} // offset position for visibility
          dy={"0.32em"} // vertically center text on data point
          textAnchor="start"
        >
          {d.value}
        </text>
      ))}
    </g>
  );
};

export default AreaChart;
