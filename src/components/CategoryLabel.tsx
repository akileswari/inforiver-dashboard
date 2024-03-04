import React from 'react';

interface CategoryLabelProps {
  x: number;
  y: number;
  text: string;
  fontSize?: string;
}

const CategoryLabel: React.FC<CategoryLabelProps> = ({ x, y, text, fontSize = "12px" }) => {
  return (
    <text x={x} y={y} fontSize={fontSize} textAnchor="middle">
      {text}
    </text>
  );
};

export default CategoryLabel;
