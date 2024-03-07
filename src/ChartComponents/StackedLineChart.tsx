import React from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import XAxis from "../components/Axis/xAxis.tsx";
import YAxis from "../components/Axis/yAxis.tsx";
// import XTicks from "./Ticks/xTicks.tsx";
// import YTicks from "../compon/ents/Ticks/yTicks.tsx";
interface LineChartProps {
  data: { name: string[]; values: number[] }[];
  width: number;
  height: number;
}

const StackedLineChart: React.FC<LineChartProps> = ({
  data,
  width,
  height,
}) => {
  // Dimensions
  const margin = { top: 20, right: 30, bottom: 50, left: 80 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Scales
  const xScale = scaleBand()
    .domain(data[0].name)
    .range([0, innerWidth])
    .padding(0.4);

  const yScale = scaleLinear()
    .domain([0, getMaxCumulativeSum(data)])
    .nice()
    .range([innerHeight, 0]);

  // Helper function to calculate maximum cumulative sum
  function getMaxCumulativeSum(data: { name: string[]; values: number[] }[]) {
    let maxSum = 0;
    for (let i = 0; i < data[0].values.length; i++) {
      maxSum = Math.max(maxSum, data[0].values[i] + data[1].values[i]);
    }
    return maxSum;
  }

  // Calculate cumulative sums for each pair of values
  const cumulativeSums: number[] = [];
  for (let i = 0; i < data[0].values.length; i++) {
    const sum = data[0].values[i] + data[1].values[i];
    cumulativeSums.push(sum);
  }

  // Generate path for line for each dataset
  const path1 = data[0].values.map(
    (value, i) =>
      `${i === 0 ? "M" : "L"} ${
        xScale(data[0].name[i])! + xScale.bandwidth() / 2
      } ${yScale(value)}`
  );

  // Generate path for cumulative line
  const cumulativePath = cumulativeSums.map(
    (sum, i) =>
      `${i === 0 ? "M" : "L"} ${
        xScale(data[0].name[i])! + xScale.bandwidth() / 2
      } ${yScale(sum)}`
  );

  return (
    <g width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <XAxis innerHeight={innerHeight} data={data} xScale={xScale} />

        {/* Line for first dataset */}
        <path d={path1.join(" ")} fill="none" stroke="blue" strokeWidth={1} />

        {/* Line for second dataset */}
        <path
          d={cumulativePath.join(" ")}
          fill="none"
          stroke="red"
          strokeWidth={2}
        />

        {/* Labels for first dataset */}
        {data[0].values.map((value, i) => (
          <text
            key={i}
            x={xScale(data[0].name[i])! + xScale.bandwidth() / 2}
            y={yScale(value)}
            dy={-10} // Adjust the vertical position of the label
            textAnchor="middle"
            fontSize={12}
            fill="blue"
          >
            {value}
          </text>
        ))}

        {/* Labels for second dataset */}
        {data[1].values.map((value, i) => (
          <text
            key={i}
            x={xScale(data[0].name[i])! + xScale.bandwidth() / 2}
            y={yScale(value)}
            dy={-10} // Adjust the vertical position of the label
            textAnchor="middle"
            fontSize={12}
            fill="red"
          >
            {value}
          </text>
        ))}

        {/* Labels for cumulative sum */}
        {cumulativeSums.map((sum, i) => (
          <text
            key={i}
            x={xScale(data[0].name[i])! + xScale.bandwidth() / 2}
            y={yScale(sum)}
            dy={-10} // Adjust the vertical position of the label
            textAnchor="middle"
            fontSize={12}
            fill="red"
          >
            {sum}
          </text>
        ))}

        {/* Total sum data labels */}
        {cumulativeSums.map((sum, i) => (
          <text
            key={i}
            x={xScale(data[0].name[i])! + xScale.bandwidth() / 2}
            y={yScale(data[0].values[i] + data[1].values[i]) - 20}
            dy={10}
            textAnchor="middle"
            fontSize={12}
            fill="black"
          >
            {data[0].values[i] + data[1].values[i]}
          </text>
        ))}

        {/* x-axis */}
        {/* <g transform={`translate(0, ${innerHeight})`} className="axis axis--x">
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
        </g> */}

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
        {/* <YTicks yScale={yScale} /> */}

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
    </g>
  );
};

export default StackedLineChart;
