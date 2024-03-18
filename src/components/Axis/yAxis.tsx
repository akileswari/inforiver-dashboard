import React from 'react';

interface YAxisProps {
  margin: { top: number; right: number; bottom: number; left: number };
  width: number;
  yScale: any; 
  theme: {
    yAxis?: {
      label: string;
      line: string;
      gridLine: string;
      axisLine: string;
      scaleBand: string;
    };
    fontColor: string;
    fontSize: string;
    fontFamily: string;
  };
}

const YAxis: React.FC<YAxisProps> = ({ margin, width, yScale, theme }) => {
  const yAxisTheme = theme.yAxis || {};

  return (
    <>
      <line
        x1={margin.left}
        y1={0}
        x2={margin.left}
        y2={width} // Adjusted to use width instead of yScale
        stroke={yAxisTheme.line || theme.fontColor}
      />

      <g className="axis axis--y">
        {yScale.ticks().map((tick, i) => (
          <g key={i} transform={`translate(${margin.left}, ${yScale(tick)})`}>
            <line x1={0} x2={-6} y1={0} y2={0} stroke={yAxisTheme.line || theme.fontColor} /> 
            <text
              x={-9}
              y={0}
              dy="0.32em"
              textAnchor="end"
              fill={yAxisTheme.label || theme.fontColor}
              fontSize={theme.fontSize}
              fontFamily={theme.fontFamily}
            >
              {tick}
            </text>
          </g>
        ))}
      </g>
    </>
  );
};

export default YAxis;
