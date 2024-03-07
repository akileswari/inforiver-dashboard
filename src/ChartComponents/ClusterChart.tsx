import React from 'react';
import * as d3 from 'd3';
import DataLabel from '../components/Datalabel';
import YAxis from '../components/YAxis';
import MonthLabels from '../components/MonthLabels';
import XAxisLine from '../components/Xaxis';
import XAxisTitle from '../components/XAxisTitle';
import YAxisTitle from '../components/YAxisTitle';

interface ClusteredChartProps {
  datasets: { name: string; value: number }[][];
  width: number;
  height: number;
}

const ClusteredChart: React.FC<ClusteredChartProps> = ({ datasets, width, height }) => {
  const margin = { top: 100, right: 100, bottom: 40, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const numCategories = datasets.length;

  const monthNames = datasets[0].map((d) => d.name);

  const minValue = d3.min(datasets.flat(), (d) => d.value) || 0;
  const maxValue = d3.max(datasets.flat(), (d) => d.value) || 0;

  const colorScale = d3.scaleOrdinal<string>().domain(d3.range(numCategories).map(String)).range(d3.schemeCategory10);

  const xScale = d3
    .scaleBand()
    .domain(monthNames)
    .range([0, innerWidth])
    .paddingInner(0.1)
    .paddingOuter(0.1);

  const yScale = d3.scaleLinear().domain([minValue, maxValue]).nice().range([innerHeight, 0]);

  const yAxisElement = <YAxis yScale={yScale} padding={margin.left + -36} height={innerHeight} yAxisTickCount={5} />; // Adjust padding here
  const bars = datasets.map((dataset, categoryIndex) =>
    dataset.map(({ name, value }, index) => {
      const barWidth = xScale.bandwidth() / numCategories;
      const barX = xScale(name) + barWidth * categoryIndex;
      const barY = yScale(Math.max(0, value));
      const barHeight = Math.abs(yScale(value) - yScale(0));
      return (
        <g key={`${categoryIndex}-${index}`}>
          <rect
            x={barX}
            y={value >= 0 ? barY : yScale(0)}
            width={barWidth}
            height={barHeight}
            fill={colorScale(String(categoryIndex))}
          />
          <DataLabel x={barX + barWidth / 2} y={value >= 0 ? barY : barY + barHeight} value={value} positive={value >= 0} />
        </g>
      );
    })
  );

  const monthLabels = <MonthLabels monthNames={monthNames} xScale={xScale} innerHeight={innerHeight} />;

  return (
    <svg width={width} height={height} style={{ margin: 'auto', display: 'block' }}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <text x={innerWidth / 2} y={-margin.top / 2} fontSize="18px" textAnchor="middle">
          Cluster Chart
        </text>
        {bars.flat()}
        <XAxisLine x1={0} y1={yScale(0)} x2={innerWidth} y2={yScale(0)} />
        {yAxisElement}
        {monthLabels}
        <XAxisTitle x={innerWidth / 2} y={innerHeight + margin.bottom / 2 + 15} text="X-Axis" />
        <YAxisTitle x={-margin.left / 2} y={innerHeight / 2} text="Y-Axis" />
      </g>
    </svg>
  );
};

export default ClusteredChart;
