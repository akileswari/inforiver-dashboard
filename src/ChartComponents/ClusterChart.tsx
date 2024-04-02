import React from 'react';
import * as d3 from 'd3';
import DataLabel from '../components/dataValues/Datalabel';
import YAxis from '../components/axis/yAxis';
import XAxis from '../components/axis/xAxis';

interface ClusteredChartProps {
  datasets: { name: string; value: number }[][];
  width: number;
  height: number;
  theme: any; 
  toggleTheme: () => void;
}

const ClusteredChart: React.FC<ClusteredChartProps> = ({ datasets, width, height, theme, toggleTheme }) => {
  const margin = { top: 100, right: 100, bottom: 40, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const numCategories = datasets.length;

  const monthNames = datasets[0].map((d) => d.name);

  const minValue = d3.min(datasets.flat(), (d) => d.value) || 0;
  const maxValue = d3.max(datasets.flat(), (d) => d.value) || 0;

 
  const colorScale = d3.scaleOrdinal<string>().domain(d3.range(numCategories).map(String)).range(theme.chart.seriesColors);

  const xScale = d3
    .scaleBand()
    .domain(monthNames)
    .range([0, innerWidth])
    .paddingInner(0.1)
    .paddingOuter(0.1);

  const yScale = d3.scaleLinear().domain([minValue, maxValue]).nice().range([innerHeight, 0]);

  const yAxisElement = <YAxis margin={margin} width={innerWidth} yScale={yScale} theme={theme} />;
  const xAxisElement = <XAxis innerHeight={innerHeight} xScale={xScale} data={datasets[0]} theme={theme} />;

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
          <DataLabel x={barX + barWidth / 2} y={value >= 0 ? barY : barY + barHeight} value={value} positive={value >= 0} theme={theme} />
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
        
        <button onClick={toggleTheme}>Toggle Theme</button> {/* Add a button to toggle theme */}
      </g>
    </svg>
  );
};

export default ClusteredChart;
