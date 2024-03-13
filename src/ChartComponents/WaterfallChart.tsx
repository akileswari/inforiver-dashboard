import React from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import XAxis from '../components/Axis/xAxis'; 
import YAxis from '../components/Axis/yAxis'; 
import DataLabel from '../components/Datalabel';

const WaterfallChart = ({ data, width, height, theme, toggleTheme }) => {
  // Flatten the data and calculate the total sum
  const flattenedData = data.flat();
  const total = flattenedData.reduce((acc, entry) => acc + entry.value, 0);

  // Margins and inner dimensions
  const margin = { top: 100, right: 100, bottom: 40, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Calculate bar width and xScale
  const barPadding = 0.1;
  const barWidth = innerWidth / flattenedData.length - innerWidth / flattenedData.length * barPadding;
  const categories = flattenedData.map(entry => entry.name);
  const xScale = scaleBand()
    .domain(categories)
    .range([0, innerWidth])
    .paddingInner(barPadding);

  // yScale
  const yScale = scaleLinear()
    .domain([0, total])
    .range([innerHeight, 0]);

  // Generate bars and connector lines
  let cumulativeSum = 0;
  const bars = flattenedData.map((entry, index) => {
    const { name, value } = entry;
    const barHeight = Math.abs(yScale(value) - yScale(0));
    const barY = value >= 0 ? yScale(cumulativeSum + value) : yScale(cumulativeSum);
    const fill = value >= 0 ? theme.variance.positive : theme.variance.negative; // Use positive or negative color from variance
    cumulativeSum += value;

    // Connector lines
    const connectorLineStartX = xScale(name) + xScale.bandwidth() / 2;
    const connectorLineEndX = index < flattenedData.length - 1 ? xScale(flattenedData[index + 1].name) + xScale.bandwidth() / 2 : xScale(name) + xScale.bandwidth() / 2;
    const connectorLineY = yScale(cumulativeSum);
    const connectorLine = index !== flattenedData.length - 1 ? (
      <line
        key={`connector-line-${index}`}
        x1={connectorLineStartX}
        y1={connectorLineY}
        x2={connectorLineEndX}
        y2={connectorLineY}
        stroke={theme.waterfall.connectingLineColor}
        strokeWidth={theme.waterfall.connectingLineStrokeWidth}
      />
    ) : null;

    // Cumulative text
    const cumulativeText = index > 0 ? (
      <DataLabel
        key={`cumulative-text-${index}`}
        x={xScale(name) + xScale.bandwidth() / 2}
        y={barY - 20}
        value={cumulativeSum}
        theme={theme}
      />
    ) : null;

    return (
      <g key={index}>
        <rect
          x={xScale(name)}
          y={barY}
          width={barWidth}
          height={barHeight}
          fill={fill}
        />
        <DataLabel
          x={xScale(name) + xScale.bandwidth() / 2}
          y={barY - 5}
          value={value}
          theme={theme}
        />
        {cumulativeText}
        {connectorLine}
      </g>
    );
  });

  // Total bar
  const totalBar = (
    <rect
      x={innerWidth}
      y={yScale(total)}
      width={xScale.bandwidth()}
      height={innerHeight - yScale(total)}
      fill="blue"
    />
  );

  return (
    <g transform={`translate(${margin.left}, ${margin.top})`}>
      {/* Render YAxis component */}
      <YAxis margin={margin} width={innerWidth} yScale={yScale} theme={theme} />

      <XAxis innerHeight={innerHeight} xScale={xScale} data={flattenedData} theme={theme} />

      {bars}
      {totalBar}

      <button onClick={toggleTheme}>Toggle Theme</button>
    </g>
  );
};

export default WaterfallChart;
