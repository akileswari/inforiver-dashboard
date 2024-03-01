import React from "react";

const YAxis = ({ margin, width, yScale }) => {
  return (
    <g>
      <line
        x1={margin.top - 20}
        y1={yScale(0)}
        x2={width}
        y2={yScale(0)}
        stroke="black"
      />
    </g>
  );
};

export default YAxis;
