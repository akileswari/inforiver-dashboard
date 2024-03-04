import React from 'react';
import * as d3 from 'd3';

const XAxis = ({ xScale, innerHeight }) => {
  const xAxis = d3.axisBottom(xScale);
  return (
    <g transform={`translate(0, ${innerHeight})`}>
      <g ref={node => d3.select(node).call(xAxis)} />
    </g>
  );
};

export default XAxis;
