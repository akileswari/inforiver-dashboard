import React from "react";

const XAxis = ({ innerHeight, xScale, data }) => {
  // return <line x1={0} y1={0} x2={0} y2={innerHeight} stroke="black" />;
  return (
    <>
      <line x1={0} y1={0} x2={0} y2={innerHeight} stroke="black" />
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
    </>
  );
};

export default XAxis;
