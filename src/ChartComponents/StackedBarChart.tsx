import React from "react";
import * as d3 from "d3";
import DataLabel from "../components/dataValues/Datalabel";
import YAxis from "../components/axis/yAxis";
import XAxis from "../components/axis/xAxis";

interface StackedBarChartProps {
  data: { name: string; value: number }[][];
  width: number;
  height: number;
  theme: any;
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  width,
  height,
  theme,
}) => {
  // Margins
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Calculate the total sum of data for each category
  const categorySums = data[0].map((_, index) =>
    data.reduce((sum, categoryData) => sum + categoryData[index].value, 0)
  );
  const maxTotal = Math.max(...categorySums);
  const minTotal = Math.min(...categorySums);

  const xScale = d3
    .scaleBand()
    .domain(data[0].map((d) => d.name))
    .range([0, innerWidth])
    .padding(0.1);
  console.log(xScale.range());

  const yScale = d3
    .scaleLinear()
    .domain([Math.min(minTotal, 0), Math.max(maxTotal, 0)])
    .nice()
    .range([innerHeight - 30, 0]);
  // yscale min and mapping is wrong
  console.log(yScale.domain(), yScale.range(), "Domain & range");

  const colorScale = d3.scaleOrdinal<string>().range(theme.chart.seriesColors);

  const bars = data[0].map((_, index) => {
    let yOffset = 0;
    return data.map((categoryData, categoryIndex) => {
      const item = categoryData[index];
      const value = item.value;
      const barHeight = Math.abs(yScale(value) - yScale(0));
      let barY, adjustedHeight;

      // Calculate barY and adjustedHeight based on yOffset
      if (value >= 0) {
        barY = yScale(yOffset + value);
        adjustedHeight = barHeight;
      } else {
        barY = yScale(0);
        adjustedHeight = Math.abs(yScale(yOffset) - yScale(yOffset + value));
      }

      yOffset += value;

      const labelX = xScale(item.name) + xScale.bandwidth() / 2;
      const labelY = yOffset >= 0 ? barY + adjustedHeight / 2 : yScale(0) + 20;

      return (
        <g key={`${categoryIndex}-${index}`}>
          <rect
            x={xScale(item.name)}
            y={barY}
            width={xScale.bandwidth()}
            height={adjustedHeight}
            fill={colorScale(categoryIndex)}
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

  // const totalLabels = totals.map((total, categoryIndex) => {
  //   const barX = xScale() + xScale.bandwidth() / 2;
  //   const barY = total >= 0 ? yScale(total) - 10 : yScale(total) + 20;
  //   return (
  //     <text
  //       key={`total-${categoryIndex}`}
  //       x={barX}
  //       y={barY}
  //       dy="0.35em"
  //       fontSize="12px"
  //       fill={theme.chart.labelColor}
  //       textAnchor="middle"
  //     >
  //       Total: {total}
  //     </text>
  //   );
  // });
  console.log(bars);

  return (
    <g>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <XAxis
          innerHeight={innerHeight}
          xScale={xScale}
          data={data[0]}
          theme={theme}
        />
        {bars}
        {/* {totalLabels} */}
      </g>
      <YAxis margin={margin} width={innerWidth} yScale={yScale} theme={theme} />
    </g>
  );
};

export default StackedBarChart;
