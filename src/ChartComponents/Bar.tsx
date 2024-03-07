import React from "react";
<<<<<<< HEAD
import BarChart from "../ChartComponents/BarChart"; 

const Bar: React.FC = () => {
 

  return (
    <div className="App">
      
       
        <g>
        
        </g>
     
    </div>
=======
import { scaleBand, scaleLinear } from "d3-scale";
import XAxis from "../components/Axis/xAxis.tsx";
import YAxis from "../components/Axis/yAxis.tsx";
import TextValues from "../components/DataValues/TextValues.tsx";
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
  const xScale = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, innerWidth])
    .padding(0.3);

  const yScale = scaleLinear()
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
      />{" "}
      {d.value >= 0 ? (
        <TextValues
          x={xScale(d.name)! + 20}
          y={yScale(d.value)! - 5}
          value={d.value}
          xScale={xScale}
          yScale={yScale}
          // bandwidth={xScale.bandwidth()}
        />
      ) : (
        <TextValues
          x={xScale(d.name)! + 40}
          y={yScale(d.value)!}
          value={d.value}
          xScale={xScale}
          yScale={yScale}
          // bandwidth={xScale.bandwidth()}
        />
      )}
    </g>
  ));

  return (
    <g width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {bars}
        <XAxis innerHeight={innerHeight} xScale={xScale} data={data} />
        <YAxis margin={margin} width={innerWidth} yScale={yScale} />
      </g>
      {/* Add labels for x and y axes */}
      <text x={margin.left + innerWidth / 2} y={height - 10} textAnchor="middle" fontSize={"20px"}>
        Product
      </text>
      <text
        x={margin.left - 30}
        y={margin.top + innerHeight / 2}
        textAnchor="middle"
        transform={`rotate(-90, ${margin.left - 30}, ${margin.top + innerHeight / 2})`}
        fontSize={"20px"}
      >
        Sales
      </text>
    </g>
>>>>>>> 55a520db1d37b8ccddef075fd48859066a3b3557
  );
};

export default BarChart;
