import React from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import XAxis from "../components/Axis/xAxis.tsx";
import YAxis from "../components/Axis/yAxis.tsx";
import TextValues from "../components/DataValues/TextValues.tsx";

interface ClusterChartProps {
  data: { name: string; value: number }[][];
  width: number;
  height: number;
}

const ClusterLineChart: React.FC<ClusterChartProps> = ({
  data: dataSets,
  width,
  height,
}) => {
  // Dimensions
  const margin = { top: 20, right: 30, bottom: 50, left: 80 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Flatten values from all datasets
  const allValues: number[] = [];
  dataSets.forEach((dataset) =>
    dataset.forEach((d) => allValues.push(d.value))
  );

  // Calculate the maximum value from all datasets
  const maxValue = Math.max(...allValues);

  // Extract unique category names
  const categoryNames = dataSets[0].map((d) => d.name);

  // Scales
  const xScale = scaleBand()
    .domain(categoryNames)
    .range([0, innerWidth])
    .padding(0.4);

  const yScale = scaleLinear()
    .domain([0, maxValue])
    .nice()
    .range([innerHeight, 0]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {/* X Axis */}
        <XAxis innerHeight={innerHeight} xScale={xScale} data={categoryNames} />

        {/* Draw lines and circles */}
        {dataSets.map((dataset, i) => (
          <React.Fragment key={i}>
            {/* Line */}
            <path
              d={generateLinePath(dataset, xScale, yScale)}
              fill="none"
              stroke="#cc936b"
              strokeWidth={2}
            />

            {/* Circles and text values */}
            {dataset.map((d, j) => (
              <React.Fragment key={j}>
                <circle
                  cx={xScale(d.name)! + xScale.bandwidth() / 2}
                  cy={yScale(d.value)}
                  r={4}
                  fill="#cc936b"
                />
                <TextValues
                  x={xScale(d.name)! + xScale.bandwidth() / 2 - 10}
                  y={yScale(d.value) - 10}
                  value={d.value}
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

const generateLinePath = (
  dataset: { name: string; value: number }[],
  xScale: any,
  yScale: any
) => {
  let path = "";
  dataset.forEach((d, i) => {
    const x = xScale(d.name)! + xScale.bandwidth() / 2;
    const y = yScale(d.value);
    if (i === 0) {
      path += `M ${x} ${y} `;
    } else {
      path += `L ${x} ${y} `;
    }
  });
  return path;
};

export default ClusterLineChart;
