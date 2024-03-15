import React from "react";

interface XAxisProps {
  innerHeight: number;
  xScale: any;
  data: { name: string; value: number }[];
  index: number;
}

const XAxis: React.FC<XAxisProps> = ({ innerHeight, xScale, data, index }) => {
  return (
    <g
      transform={`translate(0, ${innerHeight + index * 20})`}
      className="axis axis--x"
    >
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
  );
};

export default XAxis;
