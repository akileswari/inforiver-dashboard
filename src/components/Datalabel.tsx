import React from 'react';

const DataLabel = ({ x, y, value, positive }) => {
  return (
    <text
      x={x}
      y={positive ? y - 5 : y + 15} // Adjust y-coordinate based on value's sign
      fontSize="12px"
      textAnchor="middle"
    >
      {value}
    </text>
  );
};

export default DataLabel;
