import React from 'react';
import themes from "../Theme/Theme";

interface YAxisProps {
  margin: { top: number; right: number; bottom: number; left: number };
  width: number;
  yScale: any; 
  theme: typeof themes; // Adjust the type of theme object
}

const YAxis: React.FC<YAxisProps> = ({ margin, width, yScale, theme }) => {
  console.log(theme);
  
  // Access yAxis property from the nested structure
  const yAxisTheme = theme.axis?.yAxis || {}; 

  return (
    <>
      <g>
        <line
          x1={margin.left - 20}
          y1={yScale(0)}
          x2={width}
          y2={yScale(0)}
          stroke={yAxisTheme.line} // Access line property from yAxisTheme
        />
      </g>

      <g className="axis axis--y">
        {yScale.ticks().map((tick, i) => (
          <g key={i} transform={`translate(0, ${yScale(tick)})`}>
            <line x1={-6} x2={0} y1={0} y2={0} stroke={yAxisTheme.line} /> 
            <text
              x={-9}
              y={0}
              dy="0.32em"
              textAnchor="end"
              fill={theme.fontColor} // Use fontColor for text color
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
