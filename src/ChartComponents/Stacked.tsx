import React from 'react';
import * as d3 from 'd3';
import DataLabel from '../components/dataValues/Datalabel';
import YAxis from '../components/axis/yAxis';
import XAxis from '../components/axis/xAxis';

interface StackedChartProps {
  data: { name: string; value: number }[][];
  width: number;
  height: number;
}

const StackedChart: React.FC<StackedChartProps> = ({ data, width, height }) => {
  // Margins
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const totals = data.map(categoryData => d3.sum(categoryData, d => d.value));
  const maxTotal = d3.max(totals) || 0;

  const categories = data[0].map(d => d.name);

  const xScale = d3
    .scaleBand()
    .domain(categories)
    .range([0, innerWidth])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([Math.min(0, d3.min(totals) || 0), maxTotal])
    .range([innerHeight, 0]);

  const bars = data.map((categoryData, categoryIndex) => {
    let yOffset = 0;
    return categoryData.map((item, index) => {
      const value = item.value;
      const barHeight = Math.abs(yScale(value) - yScale(0));
      let barY, adjustedHeight;

      if (value >= 0) {
        barY = yScale(yOffset + value);
        adjustedHeight = barHeight;
      } else {
        barY = yScale(yOffset);
        adjustedHeight = Math.abs(yScale(0) - yScale(value));
      }

      yOffset += value;

      const labelX = xScale(categories[categoryIndex]) + xScale.bandwidth() / 2;
      const labelY = value >= 0 ? barY + adjustedHeight / 2 : yScale(0) + 20;

      return (
        <g key={`${categoryIndex}-${index}`}>
          <rect
            x={xScale(categories[categoryIndex])}
            y={value >= 0 ? barY : yScale(0)}
            width={xScale.bandwidth()}
            height={adjustedHeight}
            fill="#007bff" // Set the color here
          />
          <DataLabel x={labelX} y={labelY} value={value} positive={value >= 0 ? 'true' : 'false'} />
        </g>
      );
    });
  });

  const totalLabels = totals.map((total, categoryIndex) => {
    const barX = xScale(categories[categoryIndex]) + xScale.bandwidth() / 2;
    const barY = total >= 0 ? yScale(total) - 10 : yScale(total) + 20;
    return (
      <text
        key={`total-${categoryIndex}`}
        x={barX}
        y={barY}
        dy="0.35em"
        fontSize="12px"
        fill="#000" // Set the color here
        textAnchor="middle"
      >
        Total: {total}
      </text>
    );
  });

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <text x={innerWidth / 2} y={-margin.top / 2} fontSize="18px" textAnchor="middle">
          Stacked Chart
        </text>

        <XAxis innerHeight={innerHeight} xScale={xScale} data={data[0]} />
        {bars.flat()}
        {totalLabels}
      </g>
      <YAxis margin={margin} width={innerWidth} yScale={yScale} />
    </svg>
  );
};

export default StackedChart;
