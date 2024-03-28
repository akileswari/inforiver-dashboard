import React from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import DataLabel from '../components/DataValues/Datalabel.tsx';
import XAxis from '../components/Axis/xAxis.tsx';
import YAxis from '../components/Axis/yAxis.tsx';

interface BarChartProps {
  data: { name: string; value: number }[][];
  width: number;
  height: number;
  theme: {
    fontSize: string;
    fontColor: string;
    fontFamily: string;
    backgroundColor: string;
    variance: {
      positive: string;
      negative: string;
    };
  };
  toggleTheme: () => void;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  width,
  height,
  theme,
  toggleTheme
}) => {
  const margin = { top: 40, right: 60, bottom: 40, left: 40 }; // Adjust margins
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const allValues = data.reduce((acc, current) => [...acc, ...current], []);
  const maxValue = Math.max(...allValues.map(entry => entry.value));
  const minValue = Math.min(...allValues.map(entry => entry.value));

  // y-axis scale
  const yScale = scaleLinear()
    .domain([minValue, maxValue])
    .range([innerHeight, 0]);

  // x-axis scale
  const xScale = scaleBand()
    .domain(data[0].map(entry => entry.name))
    .range([0, innerWidth])
    .paddingInner(0.1);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {/* Render the bars first */}
        {data.map((dataset, datasetIndex) =>
          dataset.map((entry, index) => {
            const value = entry.value;
            const barHeight = Math.abs(yScale(value) - yScale(0));
            const barWidth = xScale.bandwidth();
            const x = xScale(entry.name)!; // Remove the fallback value
            const y = value >= 0 ? yScale(value) : yScale(0);
            const fill = value >= 0 ? theme.variance.positive : theme.variance.negative;

            return (
              <g key={`${datasetIndex}-${index}`} transform={`translate(${x}, ${y})`} style={{ backgroundColor: theme.chart.backgroundColor }}>

                <rect width={barWidth} height={barHeight} fill={fill} />
                <DataLabel x={50} y={0} value={value} positive={true} theme={theme} />
              </g>
            );
          })
        )}
        {/* Render the x-axis line after the bars */}
        <XAxis
          innerHeight={innerHeight}
          xScale={xScale}
          data={data[0]}
          theme={theme}
        />
        {/* Render the y-axis line before the y-axis text */}
        <YAxis margin={margin} width={innerWidth} yScale={yScale} theme={theme} />
      </g>
      {/* Add button outside the g element */}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </svg>
  );
};

export default BarChart;
