import React from 'react';
import * as d3 from 'd3';
import DataLabel from '../components/Datalabel';
import YAxis from '../components/Axis/yAxis';
import XAxis from '../components/Axis/xAxis';
import YAxisTitle from '../components/YAxisTitle';
import XAxisTitle from '../components/XAxisTitle';

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

  const yAxisElement = <YAxis margin={margin} width={innerWidth} yScale={yScale} />; // Adjust padding here
  const xAxisElement = <XAxis innerHeight={innerHeight} xScale={xScale} data={datasets[0]} />;

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

  return (
    <svg width={width} height={height} style={{ margin: 'auto', display: 'block' }}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <text x={innerWidth / 2} y={-margin.top / 2} fontSize="18px" textAnchor="middle">
          Cluster Chart
        </text>
        {bars.flat()}
        {yAxisElement}
        {xAxisElement}
        <XAxisTitle x={innerWidth / 2} y={innerHeight + margin.bottom / 2 + 15} text="X-Axis" />
        <YAxisTitle x={-margin.left / 2} y={innerHeight / 2} text="Y-Axis" />
      </g>
    </svg>
  );
};

export default ClusteredChart;
