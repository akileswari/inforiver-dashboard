import React from 'react';

interface XAxisProps {
  innerHeight: number;
  xScale: any;
  data: { name: string; value: number }[]; 
  theme: {
    fontSize: string;
    fontColor: string;
    fontFamily: string;
    backgroundColor: string;
    axisStrokeColor: string; // Change to axisStrokeColor
  };
}

const XAxis: React.FC<XAxisProps> = ({ innerHeight, xScale, data, theme }) => {
  return (
    <>
      <line x1={0} y1={0} x2={0} y2={innerHeight} stroke={theme.axisStrokeColor} /> 
      <g transform={`translate(0, ${innerHeight})`} className="axis axis--x">
        {data.map((d, i) => {
          return (
            <text
              key={i}
              className="data-label-xAxis-test"
              x={xScale(d.name)! + xScale.bandwidth() / 2}
              y={20}
              textAnchor="middle"
              style={{
                fontSize: theme.fontSize,
                fill: theme.fontColor, // Use fontColor for text color
                fontFamily: theme.fontFamily,
                backgroundColor: theme.backgroundColor
              }}
            >
              {d.name}
            </text>
          );
        })}
      </g>
    </>
  );
};

export default XAxis;
