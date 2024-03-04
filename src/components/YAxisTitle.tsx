// YAxisTitle.tsx
import React from 'react';

interface YAxisTitleProps {
  x: number;
  y: number;
  text: string;
}

const YAxisTitle: React.FC<YAxisTitleProps> = ({ x, y, text }) => {
  return (
    <text x={x} y={y} fontSize="14px" textAnchor="middle" transform={`rotate(-90, ${x}, ${y})`}>
      {text}
    </text>
  );
};

export default YAxisTitle;
