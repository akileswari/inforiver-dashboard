import React from "react";
import * as d3 from "d3";
import DataLabel from "../components/dataValues/Datalabel";
import YAxis from "../components/axis/yAxis";
import XAxis from "../components/axis/xAxis";

interface StackedBarChartProps {
  data: { name: string; value: number }[][];
  width: number;
  height: number;
  categories: string[];
  theme: any;
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  width,
  height,
  categories,
  theme,
}) => {
  // Margins
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Calculate the total sum of data for each category
  const totals = data.map((categoryData) =>
    d3.sum(categoryData, (d) => d.value)
  );
  const maxTotal = d3.max(totals) || 0;

  const xScale = d3
    .scaleBand()
    .domain(categories)
    .range([0, innerWidth])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([Math.min(0, d3.min(totals) || 0), maxTotal])
    .range([innerHeight, 0]);

  const colorScale = d3.scaleOrdinal<string>().range(theme.chart.seriesColors);

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
            fill={colorScale(index)}
          />
          <DataLabel
            x={labelX}
            y={labelY}
            value={value}
            positive={value >= 0 ? "true" : "false"}
            theme={theme}
          />
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
        fill={theme.chart.labelColor}
        textAnchor="middle"
      >
        Total: {total}
      </text>
    );
  });

  return (
    <g>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <text
          x={innerWidth / 2}
          y={-margin.top / 2}
          fontSize="18px"
          textAnchor="middle"
        >
          Stacked Chart
        </text>

        <XAxis
          innerHeight={innerHeight}
          xScale={xScale}
          data={data[0]}
          theme={theme}
        />

        {bars.flat()}
        {totalLabels}
      </g>
      <YAxis margin={margin} width={innerWidth} yScale={yScale} theme={theme} />
    </g>
  );
};

export default StackedBarChart;
