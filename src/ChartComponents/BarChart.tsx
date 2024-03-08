import React from 'react';
import * as d3 from 'd3';
import DataLabel from '../components/Datalabel.tsx'; 
import XAxis from '../components/Axis/xAxis.tsx'; 
import YAxis from '../components/Axis/yAxis.tsx'; 
import XAxisTitle from '../components/XAxisTitle.tsx'; 

interface BarChartProps {
  data: { name: string, value: number }[][];
  width: number;
  height: number;
}

const BarChart: React.FC<BarChartProps> = ({ data, width, height }) => {
  const margin = { top: 100, right: 100, bottom: 40, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const allValues = data.reduce((acc, current) => [...acc, ...current], []);
  const maxValue = Math.max(...allValues.map(entry => entry.value));
  const minValue = Math.min(...allValues.map(entry => entry.value));

  // y-axis scale
  const yScale = d3.scaleLinear()
    .domain([minValue, maxValue])
    .range([innerHeight, 0]);

  // x-axis scale
  const xScale = d3.scaleBand()
    .domain(data[0].map(entry => entry.name)) 
    .range([0, innerWidth])
    .paddingInner(0.1);

  return (
    <g transform={`translate(${margin.left}, ${margin.top})`}>
      <YAxis margin={margin} width={innerWidth} yScale={yScale} />
      
      <XAxis innerHeight={innerHeight} xScale={xScale} data={data[0]} />
      
      {data.map((dataset, datasetIndex) => (
        dataset.map((entry, index) => {
          const value = entry.value;
          const barHeight = Math.abs(yScale(value) - yScale(0));
          const barWidth = xScale.bandwidth(); 
          const x = xScale(entry.name) || 0;
          const y = value >= 0 ? yScale(value) : yScale(0);
          const fill = value >= 0 ? 'blue' : 'red';
          return (
            <g key={`${datasetIndex}-${index}`} transform={`translate(${x}, ${y})`}>
              <rect width={barWidth} height={barHeight} fill={fill} />
             
              <DataLabel x={barWidth / 2} y={value >= 0 ? -5 : barHeight + 15} value={value} positive={value >= 0} /> 
            </g>
          );
        })
      ))}
        
      <XAxisTitle x={innerWidth / 2}  y={innerHeight + margin.bottom / 2} text="X-Axis" />
      
    </g>
  );
};

export default BarChart;
