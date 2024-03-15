import React from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import XAxis from "../components/Axis/xAxis.tsx";
import YAxis from "../components/Axis/yAxis.tsx";
import TextValues from "../components/DataValues/TextValues.tsx";

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

  // Flatten values from all datasets
  const allValues: number[] = [];
  data.forEach((dataset) => allValues.push(...dataset.values));

  // Calculate the maximum value from all datasets
  const maxValue = Math.max(...allValues);

  // Scales
  const xScale = scaleBand()
    .domain(data[0].name)
    .range([0, innerWidth])
    .padding(0.4);

  const yScale = scaleLinear()
    .domain([0, maxValue])
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
        {/* X Axis */}
        <XAxis innerHeight={innerHeight} xScale={xScale} data={data} />

        {/* Draw lines and circles */}
        {data.map((dataset, i) => (
          <React.Fragment key={i}>
            {/* Line */}
            <path
              d={generateLinePath(dataset)}
              fill="none"
              stroke="#cc936b"
              strokeWidth={2}
            />

            {/* Circles and text values */}
            {dataset.values.map((value, j) => (
              <React.Fragment key={j}>
                <circle
                  cx={xScale(dataset.name[j])! + xScale.bandwidth() / 2}
                  cy={yScale(value)}
                  r={4}
                  fill="#cc936b"
                />
                <TextValues
                  x={xScale(dataset.name[j])! + xScale.bandwidth() / 2 - 10}
                  y={yScale(value) - 10}
                  value={value}
                  xScale={xScale}
                  yScale={yScale}
                />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}

        {/* Y Axis */}
        <YAxis margin={margin} width={width} yScale={yScale} />
      </g>

      {/* X Axis Label */}
      <text
        x={(width - margin.left - margin.right) / 2 + margin.left}
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
    </svg>
  );
};

export default ClusterLineChart;
