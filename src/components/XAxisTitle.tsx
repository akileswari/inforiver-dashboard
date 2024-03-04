// XAxisTitle.tsx
import React from 'react';

interface XAxisTitleProps {
  x: number;
  y: number;
  text: string;
}

const XAxisTitle: React.FC<XAxisTitleProps> = ({ x, y, text }) => {
  return (
    <text x={x} y={y} fontSize="14px" textAnchor="middle">
      {text}
    </text>
  );
};

export default XAxisTitle;
