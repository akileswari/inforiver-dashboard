import React from "react";

function TextValues({ x, y, value, xScale, yScale, fontSize, theme }) {
  const isPositive = value >= 0;

  const adjustedY = isPositive ? y - 5 : y;

  return (
    <text
      x={x}
      y={adjustedY}
      dy={isPositive ? "0.32em" : "1em"}
      textAnchor={xScale.range()[1] / 2 < x ? "end" : "start"}
      dominantBaseline={isPositive ? "baseline" : "hanging"}
      fontSize={fontSize}
      fill={theme.textColor}
    >
      {value}
    </text>
  );
}
export default TextValues;
