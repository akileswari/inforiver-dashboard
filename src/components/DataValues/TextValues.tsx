function TextValues({ x, y, value, xScale, yScale }) {
  const isPositive = value >= 0;

  // Adjust y position based on whether the value is positive or negative
  const adjustedY = isPositive ? y - 5 : y;

  return (
    <text
      x={x}
      y={adjustedY}
      dy={isPositive ? "0.32em" : "1em"} // Vertically center text on data point
      textAnchor={xScale.range()[1] / 2 < x ? "end" : "start"} // Adjust textAnchor based on position
      dominantBaseline={isPositive ? "baseline" : "hanging"}
    >
      {value}
    </text>
  );
}

export default TextValues;
