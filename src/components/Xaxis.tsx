// XAxisLine.tsx
import React from 'react';

interface XAxisLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const XAxisLine: React.FC<XAxisLineProps> = ({ x1, y1, x2, y2 }) => {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" />;
};

export default XAxisLine;
