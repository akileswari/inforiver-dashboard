import React from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import XAxis from "../components/Axis/xAxis.tsx";
import YAxis from "../components/Axis/yAxis.tsx";
import TextValues from "../components/DataValues/TextValues.tsx";

interface LineChartProps {
  data: { name: string; value: number }[];
  width: number;
  height: number;
}

const LineChart: React.FC<LineChartProps> = ({ data, width, height }) => {
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

  const highestValueIndex = data.reduce((acc, curr, index) => {
    if (curr.value > data[acc].value) {
      return index;
    } else {
      return acc;
    }
  }, 0);

  const highestValueData = data[highestValueIndex];

  return (
    <g width={`${width}px`} height={`${height}px`}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {/* <line x1={0} y1={0} x2={0} y2={innerHeight} stroke="black" /> */}
        <XAxis innerHeight={innerHeight} xScale={xScale} data={data} />

        {data.map((d, i) => {
          if (i < data.length - 1) {
            return (
              <g key={i}>
                <path
                  d={`M${
                    xScale(data[i].name)! + xScale.bandwidth() / 2
                  },${yScale(data[i].value)} L${
                    xScale(data[i + 1].name)! + xScale.bandwidth() / 2
                  },${yScale(data[i + 1].value)}`}
                  stroke="#cc936b"
                  strokeWidth={2}
                  fill="none"
                />
                <circle
                  cx={xScale(data[0].name)! + xScale.bandwidth() / 2}
                  cy={yScale(data[0].value)}
                  r={4}
                  fill="#cc936b"
                />
                <circle
                  cx={
                    xScale(data[data.length - 1].name)! + xScale.bandwidth() / 2
                  }
                  cy={yScale(data[data.length - 1].value)}
                  r={4}
                  fill="#cc936b"
                />
                <circle
                  cx={xScale(highestValueData.name) + xScale.bandwidth() / 2}
                  cy={yScale(highestValueData.value)}
                  r={4}
                  fill="#cc936b"
                />
              </g>
            );
          } else {
            return null;
          }
        })}

        {/* Rendering YAxis component */}
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
        Sales
      </text>

      {data.map((d, i) => (
        <TextValues
          key={i}
          x={xScale(d.name)! + xScale.bandwidth() + 50} // Add 39 for offset
          y={yScale(d.value)}
          value={d.value}
          xScale={xScale}
          yScale={yScale}
        />
      ))}
    </g>
  );
};

export default LineChart;
