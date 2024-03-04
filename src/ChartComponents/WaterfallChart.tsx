import React from 'react';
import * as d3 from 'd3';
//import XAxisTitle from './util/XAxisTitle.tsx'; 
import YAxisTitle from './util/YAxisTitle.tsx'; 

const WaterfallChart = ({ data, categories, width, height }) => {
  // Calculate total sum of data
  const total = data.reduce((cur, value) => cur + value, 0);

  // margins
  const margin = { top: 100, right: 100, bottom: 40, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Calculate inner padding for bars
  const barPadding = 0.1;
  const barWidth = innerWidth / data.length - innerWidth / data.length * barPadding;

  // xScale 
  const xScale = d3
    .scaleBand()
    .domain(categories) // Use categories as domain instead of numeric indices
    .range([0, innerWidth])
    .paddingInner(barPadding);

  // yScale 
  const yScale = d3
    .scaleLinear()
    .domain([0, total])
    .range([innerHeight, 0]);

  // Generate bars and connector lines
  let cumulativeSum = 0;
  const bars = data.map((value, index) => {
    const barHeight = Math.abs(yScale(value) - yScale(0));
    const barY = value >= 0 ? yScale(cumulativeSum + value) : yScale(cumulativeSum);
    const fill = value >= 0 ? 'green' : 'red';
    cumulativeSum += value;

    // for connector lines
    // for connector lines
const connectorLineStartX = xScale(categories[index]) + xScale.bandwidth() / 2;
const connectorLineEndX = index < data.length - 1 ? xScale(categories[index + 1]) + xScale.bandwidth() / 2 : xScale(categories[index]) + xScale.bandwidth() / 2;
const connectorLineY = yScale(cumulativeSum);

// last bar
const connectorLine = index !== data.length - 1 ? (
  <line
    key={`connector-line-${index}`}
    x1={connectorLineStartX}
    y1={connectorLineY}
    x2={connectorLineEndX}
    y2={connectorLineY} 
    stroke="gray"
    strokeWidth={1}
  />
) : null;


    const cumulativeText = index > 0 ? (
      <text
        x={xScale(categories[index]) + xScale.bandwidth() / 2}
        y={barY - 20}
        fontSize="12px"
        fill="black"
        textAnchor="middle"
      >
        {cumulativeSum}
      </text>
    ) : null;

    return (
      <g key={index}>
        <rect
          x={xScale(categories[index])}
          y={barY}
          width={barWidth}
          height={barHeight}
          fill={fill}
        />
        <text
          x={xScale(categories[index]) + xScale.bandwidth() / 2}
          y={barY - 5}
          fontSize="12px"
          fill="black"
          textAnchor="middle"
        >
          {value}
        </text>
        {cumulativeText}
        {connectorLine}
      </g>
    );
  });

  // Generate total bar
  const totalBar = (
    <rect
      x={innerWidth}
      y={yScale(total)}
      width={xScale.bandwidth()}
      height={innerHeight - yScale(total)}
      fill="blue"
    />
  );

  // X-axis labels
  const xAxis = d3.axisBottom(xScale).tickSize(0); // Remove ticks
  const xAxisElement = (
    <g transform={`translate(0, ${innerHeight})`} ref={node => d3.select(node).call(xAxis)} />
  );

  // Y-axis labels
  const yAxis = d3.axisLeft(yScale).ticks(5);
  const yAxisElement = (
    <g transform={`translate(0, 0)`} ref={node => d3.select(node).call(yAxis)} />
  );

  // X-axis title
  const xAxisTitleY = innerHeight + margin.bottom / 2;

// X-axis title
const xAxisTitle = (
  <text
    x={innerWidth / 2}
    y={xAxisTitleY}
    fontSize="14px"
    textAnchor="middle"
  >
    X-Axis
  </text>
);
  // Y-axis title
  const yAxisTitle = (
    <YAxisTitle x={-margin.left / 2} y={innerHeight / 2} text="Y-Axis" />
  );

  const chartHeading = (
    <text x={innerWidth / 2} y={-margin.top / 2} fontSize="18px" textAnchor="middle">
      Waterfall Chart
    </text>
  );

  return (
    <svg width={width} height={height} style={{ margin: 'auto', display: 'block' }}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {chartHeading}
        {bars}
        {totalBar}
        {xAxisElement}
        {yAxisElement}
        {xAxisTitle}
        {yAxisTitle}
      </g>
    </svg>
  );
};

export default WaterfallChart;
