import React from "react";

interface YAxisProps {
  margin: { top: number; right: number; bottom: number; left: number };
  width: number;
  yScale: any;
  theme: {
    xAxis: any;
    yAxis: any;
    fontSize: string;
    fontColor: string;
    fontFamily: string;
    backgroundColor: string;
    axisStrokeColor: string;
  };
}

const YAxis: React.FC<YAxisProps> = ({ margin, width, yScale, theme }) => {
  return (
    <>
      <g>
        <line
          x1={margin.top - 20}
          y1={yScale(0)}
          x2={width}
          y2={yScale(0)}
          stroke={theme.yAxis.line}
        />
      </g>

      <g className="axis axis--y">
        {yScale.ticks().map((tick, i) => (
          <g
            key={i}
            transform={`translate(${margin.left - 80}, ${yScale(tick) + 10})`}
          >
            <line x1={-6} x2={0} y1={0} y2={0} stroke={theme.yAxis.line} />
            <text
              x={-9}
              y={0}
              dy="0.32em"
              textAnchor="end"
              fill={theme.yAxis.label}
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
