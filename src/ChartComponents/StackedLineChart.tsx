import React from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import XAxis from "../components/axis/xAxis";
import YAxis from "../components/axis/yAxis";
import TextValues from "../components/dataValues/TextValues";

interface DataItem {
  name: string;
  value: number;
}

interface LineChartProps {
  data: DataItem[][];
  width: number;
  height: number;
  index: number; // Add index property here
}

const StackedLineChart: React.FC<LineChartProps> = ({
  data,
  width,
  height,
  index, // Receive index prop here
}) => {
  // Dimensions
  const margin = { top: 20, right: 30, bottom: 50, left: 80 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Calculate cumulative values
  const cumulativeData = data.reduce((acc, cur) => {
    const lastDataset = acc[acc.length - 1];
    return [
      ...acc,
      cur.map((d, i) => ({
        ...d,
        cumulativeValue:
          d.value + (lastDataset ? lastDataset[i].cumulativeValue : 0),
      })),
    ];
  }, [] as DataItem[][]);

  // Helper function to calculate maximum cumulative sum
  function getMaxCumulativeSum(data: DataItem[][]) {
    return Math.max(...data[data.length - 1].map((d) => d.cumulativeValue));
  }
  // Scales
  const xScale = scaleBand()
    .domain(data[0].map((d) => d.name))
    .range([0, innerWidth])
    .padding(0.4);

  const yScale = scaleLinear()
    .domain([0, getMaxCumulativeSum(cumulativeData)])
    .nice()
    .range([innerHeight, 0]);

  // Generate paths for lines for each dataset
  const paths = cumulativeData.map((dataset) =>
    dataset.map(
      (d) =>
        `${xScale(d.name)! + xScale.bandwidth() / 2} ${yScale(
          d.cumulativeValue
        )}`
    )
  );

  // Generate data labels for each dataset
  const dataLabels = cumulativeData.map((dataset) =>
    dataset.map((d) => ({
      x: xScale(d.name)! + xScale.bandwidth() / 2,
      y: yScale(d.cumulativeValue),
      label: d.cumulativeValue.toString(), // Adjust this as needed
    }))
  );

  return (
    <g width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {/* X and Y Axes */}
        <XAxis
          innerHeight={innerHeight}
          data={data[0]}
          xScale={xScale}
          index={index}
        />
        <YAxis margin={margin} width={width} yScale={yScale} />

        {/* Lines for each dataset */}
        {paths.map((path, i) => (
          <path
            key={i}
            d={`M ${path.join(" L ")}`}
            fill="none"
            stroke={i === 0 ? "blue" : "red"}
            strokeWidth={i === 0 ? 1 : 2}
          />
        ))}

        <text
          x={margin.left + innerWidth / 3}
          y={height - margin.right}
          textAnchor="middle"
          fontSize={"20px"}
        >
          Category
        </text>

        {/* Y Axis Label */}
        <text
          x={-((height - margin.top - margin.bottom) / 2 + margin.top)}
          y={margin.right - margin.left}
          textAnchor="middle"
          transform={`rotate(-90)`}
          fontSize={"20px"}
        >
          Sales
        </text>

        {/* Data labels for each dataset */}
        {dataLabels.map((dataset, i) =>
          dataset.map((d, j) => (
            <TextValues
              key={`${i}-${j}`}
              x={d.x}
              y={d.y - 5} // Adjust this value to position labels properly
              value={d.label}
              xScale={xScale}
              yScale={yScale}
              fontSize={"12px"}
            />
          ))
        )}
      </g>
    </g>
  );
};

export default StackedLineChart;
