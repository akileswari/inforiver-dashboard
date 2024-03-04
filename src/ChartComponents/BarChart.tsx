import React from 'react';
import * as d3 from 'd3';
import DataLabel from './util/Datalabel.tsx'; 
import CategoryLabel from './util/CategoryLabel.tsx'; 
import XAxisTitle from './util/XAxisTitle.tsx'; 
import YAxisTitle from './util/YAxisTitle.tsx'; 

interface BarChartProps {
  data: number[];
  categories: string[]; 
  width: number;
  height: number;
}

const BarChart: React.FC<BarChartProps> = ({ data, categories, width, height }) => {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const padding = 60; 
  const yAxisTickCount = 5;

  //  y-axis scale
  const yScale = d3.scaleLinear()
    .domain([minValue, maxValue])
    .range([height - padding, padding]);

  //  y-axis generator
  const yAxis = d3.axisLeft(yScale)
    .ticks(yAxisTickCount);

  // x-axis scale
  const xScale = d3.scaleBand()
    .domain(categories.slice(0, data.length)) 
    .range([padding, width - padding])
    .paddingInner(0.1);

  // Calculate the position of the x-axis line
  const xAxisLineY = yScale(0);

  return (
    <div>
      <h1>Bar Chart</h1>
      <svg width={width} height={height} style={{ margin: 'auto', display: 'block' }}>
        {/* Y-axis */}
        <g transform={`translate(${padding}, 0)`} ref={node => d3.select(node).call(yAxis)} />
       
        <YAxisTitle x={padding - 20} y={height / 2} text="Y-Axis" />
        
        <line x1={padding} y1={xAxisLineY} x2={width - padding} y2={xAxisLineY} stroke="black" />
        
        {data.map((value, index) => {
          const barHeight = Math.abs(yScale(value) - yScale(0));
          const barWidth = xScale.bandwidth();
          const x = xScale(categories[index]) || 0;
          const y = value >= 0 ? yScale(value) : yScale(0);
          const fill = value >= 0 ? 'blue' : 'red';
          // Category labels
          const categoryLabelX = x + barWidth / 2;
          const categoryLabelY = height - padding + 20;
          return (
            <g key={index}>
              <rect x={x} y={y} width={barWidth} height={barHeight} fill={fill} />
             
              <CategoryLabel x={categoryLabelX} y={categoryLabelY} text={categories[index]} />
             
              <DataLabel x={x + barWidth / 2} y={y} value={value} positive={value >= 0} />
            </g>
          );
        })}
        
        <XAxisTitle x={width / 2} y={height - padding / 2 +2} text="X-Axis" />
      </svg>
    </div>
  );
};

export default BarChart;



















