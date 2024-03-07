// BarChart.tsx
import React from 'react';
import * as d3 from 'd3';
import DataLabel from '../components/Datalabel.tsx'; 
import CategoryLabel from '../components/CategoryLabel.tsx'; 
import XAxisTitle from '../components/XAxisTitle.tsx'; 
import YAxis from '../components/YAxis.tsx'; 
import XAxisLine from '../components/Xaxis.tsx';
import theme from '../Theme/Theme'; 

interface BarChartProps {
  data: { name: string, value: number }[][];
  width: number;
  height: number;
}

const BarChart: React.FC<BarChartProps> = ({ data, width, height }) => {
  const allValues = data.reduce((acc, current) => [...acc, ...current], []);
  const maxValue = Math.max(...allValues.map(entry => entry.value));
  const minValue = Math.min(...allValues.map(entry => entry.value));
  const padding = 60; 
  const yAxisTickCount = 5;

  // y-axis scale
  const yScale = d3.scaleLinear()
    .domain([minValue, maxValue])
    .range([height - padding, padding]);

  // x-axis scale
  const xScale = d3.scaleBand()
    .domain(data[0].map(entry => entry.name)) 
    .range([padding, width - padding])
    .paddingInner(0.1);

  const xAxisLineY = yScale(0);

  return (
    <g>
      <YAxis yScale={yScale} padding={padding} height={height} yAxisTickCount={yAxisTickCount} />
      
      <XAxisLine x1={padding} y1={xAxisLineY} x2={width - padding} y2={xAxisLineY} />
        
      {data.map((dataset, datasetIndex) => (
        dataset.map((entry, index) => {
          const value = entry.value;
          const barHeight = Math.abs(yScale(value) - yScale(0));
          const barWidth = xScale.bandwidth(); 
          const x = xScale(entry.name) || 0;
          const y = value >= 0 ? yScale(value) : yScale(0);
          const fill = value >= 0 ? 'blue' : 'red';
          // Category labels
          const categoryLabelX = x + barWidth / 2;
          const categoryLabelY = height - padding + 20;
          return (
            <g key={`${datasetIndex}-${index}`}>
              <rect x={x} y={y} width={barWidth} height={barHeight} fill={fill} />
             
              <CategoryLabel x={categoryLabelX} y={categoryLabelY} text={entry.name} style={{ fontSize: theme.fontSize, fill: theme.fontColor }} /> 
             
              <DataLabel x={x + barWidth / 2} y={y} value={value} positive={value >= 0} style={{ fontSize: theme.fontSize, fill: theme.fontColor }} /> 
            </g>
          );
        })
      ))}
        
      <XAxisTitle x={width / 2}  y={height - padding / 2 +2} text="X-Axis" style={{ fontSize: theme.fontSize, fill: theme.fontColor }} />
      
      
    </g>
  );
};

export default BarChart;
