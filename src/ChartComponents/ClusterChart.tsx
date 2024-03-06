import * as d3 from 'd3';
import DataLabel from '../components/Datalabel.tsx';
import YAxis from '../components/YAxis.tsx';
import MonthLabels from '../components/MonthLabels.tsx';
import XAxisLine from '../components/Xaxis.tsx';
import XAxisTitle from '../components/XAxisTitle.tsx';
import YAxisTitle from '../components/YAxisTitle.tsx';
const ClusteredChart = ({ datasets, width, height }) => {
  const margin = { top: 100, right: 100, bottom: 40, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const numCategories = datasets.length;
  
  const monthNames = datasets[0].name;
  
  const minValue = d3.min(datasets, dataset => d3.min(dataset.values));
  const maxValue = d3.max(datasets, dataset => d3.max(dataset.values));
  
  const colorScale = d3.scaleOrdinal()
    .domain(d3.range(numCategories))
    .range(d3.schemeCategory10);
 
  const xScale = d3
    .scaleBand()
    .domain(monthNames)
    .range([0, innerWidth])
    .paddingInner(0.1)
    .paddingOuter(0.1);
  // yScale using D3
  const yScale = d3
    .scaleLinear()
    .domain([minValue, maxValue])
    .range([innerHeight, 0]);
  // Y-axis
  const yAxisElement = <YAxis scale={yScale} ticks={5} />;
  const bars = datasets.map((dataset, categoryIndex) => {
    return dataset.values.map((value, index) => {
      const barWidth = xScale.bandwidth() / numCategories;
      const barX = xScale(monthNames[index]) + barWidth * categoryIndex;
      const barY = yScale(Math.max(0, value)); 
      const barHeight = Math.abs(yScale(value) - yScale(0)); 
      return (
        <g key={`${categoryIndex}-${index}`}>
          <rect
            x={barX}
            y={value >= 0 ? barY : yScale(0)}
            width={barWidth}
            height={barHeight}
            fill={colorScale(categoryIndex)}
          />
          <DataLabel
            x={barX + barWidth / 2}
            y={value >= 0 ? barY : barY + barHeight}
            value={value}
            positive={value >= 0}
          />
        </g>
      );
    });
  });
 
  const monthLabels = <MonthLabels monthNames={monthNames} xScale={xScale} innerHeight={innerHeight} />;
  return (
    <g width={width} height={height} style={{ margin: 'auto', display: 'block' }}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <text x={innerWidth / 2} y={-margin.top / 2} fontSize="18px" textAnchor="middle">
          Cluster Chart
        </text>
        {bars.flat()}
        <XAxisLine innerWidth={innerWidth} y={yScale(0)} />
        {yAxisElement}
        {monthLabels}
        <XAxisTitle x={innerWidth / 2} y={innerHeight + margin.bottom / 2+15} text="X-Axis" /> 
        <YAxisTitle x={-margin.left / 2} y={innerHeight / 2} text="Y-Axis" /> 
      </g>
    </g>
  );
};
export default ClusteredChart;











