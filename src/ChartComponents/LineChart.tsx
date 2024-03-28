import React from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import XAxis from "../components/Axis/xAxis.tsx";
import YAxis from "../components/Axis/yAxis.tsx";
import TextValues from "../components/DataValues/TextValues.tsx";

interface LineChartProps {
  data: { name: string; value: number }[][];
  width: number;
  height: number;
}

const LineChart: React.FC<LineChartProps> = ({ data, width, height }) => {
  // Dimensions
  const margin = { top: 20, right: 30, bottom: 50, left: 80 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Calculate the maximum and minimum values across all datasets
  const allValues: number[] = [];

  // Loop through each dataset
  for (const dataset of data) {
    // Loop through each item in the dataset
    for (const item of dataset) {
      // Add the value of each item to allValues
      allValues.push(item.value);
    }
  }

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

  return (
    <g width={width} height={height}>
      {data.map((dataset, index) => (
        <g key={index} transform={`translate(${margin.left}, ${margin.top})`}>
          {/* X Axis */}
          <XAxis
            innerHeight={innerHeight}
            xScale={xScale}
            data={dataset}
            index={index}
          />

          {/* Line */}
          {dataset.map((d, i) => {
            if (i < dataset.length - 1) {
              return (
                <g key={i}>
                  <path
                    d={`M${
                      xScale(dataset[i].name)! + xScale.bandwidth() / 2
                    },${yScale(dataset[i].value)} L${
                      xScale(dataset[i + 1].name)! + xScale.bandwidth() / 2
                    },${yScale(dataset[i + 1].value)}`}
                    stroke="#cc936b"
                    strokeWidth={2}
                    fill="none"
                  />
                  {/* Circles */}
                  <circle
                    cx={xScale(dataset[0].name)! + xScale.bandwidth() / 2}
                    cy={yScale(dataset[0].value)}
                    r={4}
                    fill="#cc936b"
                  />
                  <circle
                    cx={
                      xScale(dataset[dataset.length - 1].name)! +
                      xScale.bandwidth() / 2
                    }
                    cy={yScale(dataset[dataset.length - 1].value)}
                    r={4}
                    fill="#cc936b"
                  />
                  <circle
                    cx={xScale(d.name)! + xScale.bandwidth() / 2}
                    cy={yScale(d.value)}
                    r={4}
                    fill="#cc936b"
                  />
                </g>
              );
            } else {
              return null;
            }
          })}

          {/* Y Axis */}
          <YAxis margin={margin} width={innerWidth} yScale={yScale} />
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
        Sales
      </text>

      {/* Data values */}
      {data.map((dataset, index) =>
        dataset.map((d, i) => (
          <TextValues
            key={i}
            x={xScale(d.name)! + xScale.bandwidth() + 50} // Adjust the x position as needed
            y={yScale(d.value)}
            value={d.value}
            xScale={xScale}
            yScale={yScale}
            fontSize={"12px"}
          />
        ))
      )}
    </g>
  );
};

export default LineChart;
