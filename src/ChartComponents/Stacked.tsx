
import * as d3 from 'd3';
import XAxisLine from '../components/Xaxis.tsx'; 
import DataLabel from '../components/Datalabel.tsx'; 
import XAxisTitle from '../components/XAxisTitle.tsx'; 
import YAxisTitle from '../components/YAxisTitle.tsx'; 
import CategoryLabel from '../components/CategoryLabel.tsx';

type StackedChartData = number[][];
type StackedChartProps = {
  data: StackedChartData;
  width: number;
  height: number;
  categories: string[];
};

const StackedChart = ({ data, width, height, categories }: StackedChartProps) => {
  // Margins
  const margin = { top: 100, right: 100, bottom: 100, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Calculate the total sum of data for each category
  const totals = data.map(categoryData => d3.sum(categoryData));

  const xScale = d3
    .scaleBand()
    .domain(categories)
    .range([0, innerWidth])
    .padding(0.1);

  // Y-scale 
  const yScale = d3
    .scaleLinear()
    .domain([Math.min(0, d3.min(totals)), d3.max(totals)]) // Adjusted for negative values
    .range([innerHeight, 0]);

  // Bars and data labels
const bars = data.map((categoryData, categoryIndex) => {
  let yOffset = 0;
  return categoryData.map((value, index) => {
    const barHeight = Math.abs(yScale(value) - yScale(0)); // Absolute height
    let barY, adjustedHeight;
    
    // Adjust the y-coordinate and height for negative values
    if (value >= 0) {
      barY = yScale(yOffset + value);
      adjustedHeight = barHeight;
    } else {
      barY = yScale(yOffset);
      adjustedHeight = Math.abs(yScale(0) - yScale(value));
    }

    yOffset += value;

    // Calculate position for data label
    const labelX = xScale(categories[categoryIndex]) + xScale.bandwidth() / 2;
    const labelY = value >= 0 ? barY + adjustedHeight / 2 : yScale(0) + 20; // Adjusted label position for negative values

    return (
      <g key={`${categoryIndex}-${index}`}>
        <rect
          x={xScale(categories[categoryIndex])}
          y={value >= 0 ? barY : yScale(0)} 
          width={xScale.bandwidth()}
          height={adjustedHeight}
          fill={`rgb(${50 + index * 50}, ${100 + index * 100}, ${150 + index * 150})`} 
        />
       
        <DataLabel x={labelX} y={labelY} value={value} positive={value >= 0} />
      </g>
    );
  });
});


  // Add total value to each bar group
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
        fill="black"
        textAnchor="middle"
      >
        Total: {total}
      </text>
    );
  });

  // Y-axis
  const yAxis = d3.axisLeft(yScale).ticks(5);
  const yAxisElement = (
    <g transform={`translate(0, 0)`} ref={node => d3.select(node).call(yAxis)} />
  );

  // X-axis title
  const xAxisTitle = <XAxisTitle x={innerWidth / 2} y={innerHeight + margin.bottom / 3 + 50} text="X-Axis" />;

  // Y-axis title
  const yAxisTitle = <YAxisTitle x={-margin.left / 3} y={innerHeight / 2} text="Y-Axis" />;

  return (
    <svg width={width} height={height} style={{ margin: 'auto', display: 'block' }}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {/* Chart Heading */}
        <text x={innerWidth / 2} y={-margin.top / 2} fontSize="18px" textAnchor="middle">
          Stacked Chart
        </text>
        {/* X-axis */}
        {categories.map((category, index) => (
          <CategoryLabel
            key={index}
            x={xScale(category) + xScale.bandwidth() / 2}
            y={innerHeight + 60} 
            fontSize="12px"
            text={category}
          />
        ))}
        {/* Y-axis */}
        {yAxisElement}
        {/* X-axis line */}
        <XAxisLine innerWidth={innerWidth} y={yScale(0)} />
        {/* X-axis title */}
        {xAxisTitle}
        {/* Y-axis title */}
        {yAxisTitle}
        {bars.flat()}
        {totalLabels}
      </g>
    </svg>
  );
};

export default StackedChart;
