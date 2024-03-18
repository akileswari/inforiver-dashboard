import React from 'react';

interface XAxisProps {
  innerHeight: number;
  xScale: any;
  data: { name: string; value: number }[]; 
  theme: {
    xAxis?: {
      label: string;
      line: string;
      gridLine: string;
      groupLine: string;
    };
    fontSize: string;
    fontColor: string;
    fontFamily: string;
  };
}

const XAxis: React.FC<XAxisProps> = ({ innerHeight, xScale, data, theme }) => {
  return (
    <>
      <line x1={0} y1={0} x2={0} y2={innerHeight} stroke={theme.xAxis?.line} />
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
                fill: theme.fontColor,
                fontFamily: theme.fontFamily,
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
