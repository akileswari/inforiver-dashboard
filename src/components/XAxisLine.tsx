import React from 'react';

const XAxisLine = ({ innerWidth, y }) => {
  return (
    <line x1={0} y1={y} x2={innerWidth} y2={y} stroke="black" />
  );
};

export default XAxisLine;
