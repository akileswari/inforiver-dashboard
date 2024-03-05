import React from 'react';
import XAxisLine from '../components/Xaxis';
import YAxis from '../components/YAxis';
import d3 from 'd3';

interface WaterfallChartProps {
  data: number[];
  categories: string[];
  width: number;
  height: number;
}

const WaterfallChart: React.FC<WaterfallChartProps> = ({ data, categories, width, height }) => {
  // Calculate total sum of data
  const total = data.reduce((cur, value) => cur + value, 0);

  // margins
  const margin = { top: 100, right: 100, bottom: 40, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

 
  const barPadding = 0.1;
  const barWidth = innerWidth / data.length - innerWidth / data.length * barPadding;

  
  let cumulativeSum = 0;
  const bars = data.map((value, index) => {
    const barHeight = Math.abs(value / total * innerHeight);
    const barY = value >= 0 ? innerHeight - cumulativeSum / total * innerHeight - barHeight : innerHeight - cumulativeSum / total * innerHeight;
    const fill = value >= 0 ? 'green' : 'red';
    cumulativeSum += value;

    const labelX = index * (innerWidth / data.length) + innerWidth / data.length / 2;
    const labelY = innerHeight + 15;

    return (
      <g key={index}>
        <rect
          x={index * (innerWidth / data.length)}
          y={barY}
          width={barWidth}
          height={barHeight}
          fill={fill}
        />
        <text
          x={labelX}
          y={labelY}
          fontSize="12px"
          fill="black"
          textAnchor="middle"
        >
          {categories[index]}
        </text>
      </g>
    );
  });

  
  const totalBar = (
    <rect
      x={innerWidth}
      y={innerHeight - total / total * innerHeight}
      width={innerWidth / data.length}
      height={total / total * innerHeight}
      fill="blue"
    />
  );

  
  // const xAxisTitleY = innerHeight + margin.bottom / 2;
  // const xAxisTitle = (
  //   <text
  //     x={innerWidth / 2}
  //     y={xAxisTitleY}
  //     fontSize="12px"
  //     textAnchor="middle"
  //   >
  //     X-Axis
  //   </text>
  // );

  
  // const yAxisTitle = (
  //   <text
  //     transform={`translate(${-margin.left / 2},${innerHeight / 2}) rotate(-90)`}
  //     fontSize="14px"
  //     textAnchor="middle"
  //   >
  //     Y-Axis
  //   </text>
  // );

  return (
    <svg width={width} height={height} style={{ margin: 'auto', display: 'block' }}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {bars}
        {totalBar}
        <XAxisLine x1={0} y1={innerHeight} x2={innerWidth} y2={innerHeight} />
        <YAxis yScale={d3.scaleLinear().domain([0, total]).range([innerHeight, 0])} padding={margin.left} height={innerHeight} yAxisTickCount={5} />
        {/* {xAxisTitle}
        {yAxisTitle} */}
      </g>
    </svg>
  );
};

export default WaterfallChart;
