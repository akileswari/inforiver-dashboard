import React from "react";

const XTicks = ({ data, xScale, innerHeight }) => {
  return (
    <g transform={`translate(0, ${innerHeight})`} className="axis axis--x">
      {data.map((d, i) => (
        <text
          key={i}
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

export default XTicks;
