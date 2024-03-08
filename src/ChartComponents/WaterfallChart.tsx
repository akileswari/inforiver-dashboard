
import * as d3 from 'd3';
import XAxis from '../components/Axis/xAxis'; 
import YAxis from '../components/Axis/yAxis'; 

const WaterfallChart = ({ data, width, height }) => {
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
  const xScale = d3.scaleBand()
    .domain(categories)
    .range([0, innerWidth])
    .paddingInner(barPadding);

  // yScale
  const yScale = d3.scaleLinear()
    .domain([0, total])
    .range([innerHeight, 0]);

  // Generate bars and connector lines
  let cumulativeSum = 0;
  const bars = flattenedData.map((entry, index) => {
    const { name, value } = entry;
    const barHeight = Math.abs(yScale(value) - yScale(0));
    const barY = value >= 0 ? yScale(cumulativeSum + value) : yScale(cumulativeSum);
    const fill = value >= 0 ? 'green' : 'red';
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
        stroke="gray"
        strokeWidth={1}
      />
    ) : null;

    // Cumulative text
    const cumulativeText = index > 0 ? (
      <text
        x={xScale(name) + xScale.bandwidth() / 2}
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
          x={xScale(name)}
          y={barY}
          width={barWidth}
          height={barHeight}
          fill={fill}
        />
        <text
          x={xScale(name) + xScale.bandwidth() / 2}
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
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {/* Render YAxis component */}
        <YAxis margin={margin} width={innerWidth} yScale={yScale} />

        {/* Render XAxis component */}
        <XAxis innerHeight={innerHeight} xScale={xScale} data={flattenedData} />

        {/* Render bars */}
        {bars}
        {totalBar}
      </g>
    </svg>
  );
};

export default WaterfallChart;
