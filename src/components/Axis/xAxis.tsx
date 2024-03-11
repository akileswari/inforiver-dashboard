import React from 'react';

interface XAxisProps {
  innerHeight: number;
  xScale: any; // Adjust the type as needed
  data: { name: string; value: number }[]; // Adjust the type as needed
  theme: {
    fontSize: string;
    fontColor: string;
    fontFamily: string;
    backgroundColor: string;
    textColor: string; 
  };
}

const XAxis: React.FC<XAxisProps> = ({ innerHeight, xScale, data, theme }) => {
  return (
    <>
      <line x1={0} y1={0} x2={0} y2={innerHeight} stroke={theme.textColor} /> {/* Update stroke here */}
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
                fill: theme.textColor,
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
