import React from 'react';

const MonthLabels = ({ monthNames, xScale, innerHeight }) => {
  return monthNames.map((month, index) => {
    const x = xScale(month) + xScale.bandwidth() / 2; // Position label at the center of the bar
    const y = innerHeight + 20; // Shift label below the x-axis
    return (
      <text key={index} x={x} y={y} textAnchor="middle" fontSize="12px">
        {month}
      </text>
    );
  });
};

export default MonthLabels;
