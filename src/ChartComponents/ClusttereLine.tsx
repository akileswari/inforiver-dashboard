import React from "react";
import * as d3 from "d3";
// import XTicks from "./Ticks/xTicks.tsx";
import YTicks from "./Ticks/yTicks.tsx";
import XAxis from "./Axis/xAxis.tsx";
import YAxis from "./Axis/yAxis.tsx";

interface ClusterChartProps {
  data: { name: string[]; values: number[] }[];
  width: number;
  height: number;
}

const ClusterLineChart: React.FC<ClusterChartProps> = ({
  data,
  width,
  height,
}) => {
  // Dimensions
  const margin = { top: 20, right: 30, bottom: 50, left: 80 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Scales
  const xScale = d3
    .scaleBand()
    .domain(data[0].name)
    .range([0, innerWidth])
    .padding(0.4);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data.flatMap((d) => d.values)) || 0])
    .nice()
    .range([innerHeight, 0]);

  // Custom line generator function
  const generateLinePath = (dataset: { name: string[]; values: number[] }) => {
    let path = "";
    dataset.values.forEach((value, i) => {
      const x = xScale(dataset.name[i])! + xScale.bandwidth() / 2;
      const y = yScale(value);
      if (i === 0) {
        path += `M ${x} ${y} `;
      } else {
        path += `L ${x} ${y} `;
      }
    });
    return path;
  };

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <XAxis innerHeight={innerHeight} />
        {data.map((dataset, i) => (
          <React.Fragment key={i}>
            <path
              d={generateLinePath(dataset)}
              fill="none"
              stroke="#cc936b"
              strokeWidth={2}
            />
            {dataset.values.map((value, j) => (
              <React.Fragment key={j}>
                <circle
                  cx={xScale(dataset.name[j])! + xScale.bandwidth() / 2}
                  cy={yScale(value)}
                  r={4} // Radius of the circle
                  fill="#cc936b"
                />
                <text
                  x={xScale(dataset.name[j])! + xScale.bandwidth() / 2}
                  y={yScale(value)}
                  dy={-10} // Adjust the vertical position of the label
                  textAnchor="middle"
                  fontSize={12}
                >
                  {value}
                </text>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
        {/* Rendering XAxis component */}
        {/* <XTicks data={data} xScale={xScale} innerHeight={innerHeight} /> */}
        {/* Rendering YAxis component */}
        <YTicks yScale={yScale} />
        console.log(data[0].name+"hii");
        {/* x-axis */}
        <g transform={`translate(0, ${innerHeight})`} className="axis axis--x">
          {data[0].name.map((name, i) => (
            <text
              key={i}
              x={xScale(name)! + xScale.bandwidth() / 2}
              y={20}
              textAnchor="middle"
            >
              {name}
            </text>
          ))}
        </g>
        {/* y-axis */}
        {/* <g className="axis axis--y">
          {yScale.ticks().map((tick, i) => (
            <g key={i} transform={`translate(0, ${yScale(tick)})`}>
              <line x1={-6} x2={0} y1={0} y2={0} stroke="#000" />
              <text
                x={-9}
                y={0}
                dy="0.32em"
                textAnchor="end"
                fill="#000"
                fontSize={12}
              >
                {tick}
              </text>
            </g>
          ))}
        </g> */}
        {/* line to join axes */}
        {/* <line
          x1={0}
          y1={yScale(0)}
          x2={innerWidth}
          y2={yScale(0)}
          stroke="black"
        /> */}
        <YAxis margin={margin} width={width} yScale={yScale} />
        {/* labels for x and y axes */}
        <text
          x={(width - margin.left - margin.right) / 2}
          y={height - 30}
          textAnchor="middle"
          fontSize={"20px"}
        >
          Category
        </text>
        <text
          x={-((height - margin.top - margin.bottom) / 2)}
          y={margin.top - 50}
          textAnchor="middle"
          transform={`rotate(-90)`}
          fontSize={"20px"}
        >
          Sales
        </text>
      </g>
    </svg>
  );
};

export default ClusterLineChart;
