import React from 'react';

interface XAxisProps {
  innerHeight: number;
  xScale: any;
<<<<<<< HEAD
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
=======
  data: { name: string; value: number }[];
  index: number;
}

const XAxis: React.FC<XAxisProps> = ({ innerHeight, xScale, data, index }) => {
  return (
    <g transform={`translate(0, ${innerHeight})`} className="axis axis--x">
      {/* Add y-axis line */}
      <line x1={0} y1={0} x2={0} y2={-innerHeight} stroke="black" />
      {/* Render x-axis labels */}
      {data.map((d, i) => (
        <text
          key={i}
          className={`data-label-xAxis-${index}-${i}`}
          x={xScale(d.name)! + xScale.bandwidth() / 2}
          y={20} // Adjust this value to position the labels lower
          textAnchor="middle"
        >
          {d.name}
        </text>
      ))}
    </g>
>>>>>>> 6e7eb559bacbe37b62f310448ab0e11887778710
  );
};

export default XAxis;
