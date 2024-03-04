import React from 'react';

const XAxis = ({ innerHeight }) => {
  return (
    <g transform={`translate(0, ${innerHeight})`}>
      <line x1={0} y1={0} x2={innerHeight} y2={0} stroke="black" />
    </g>
  );
};

export default XAxis;
