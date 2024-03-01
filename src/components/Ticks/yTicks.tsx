import React from "react";

const YTicks = ({ yScale }) => {
  return (
    <g className="axis axis--y">
      {yScale.ticks().map((tick, i) => (
        <g key={i} transform={`translate(0, ${yScale(tick)})`}>
          <line x1={-6} x2={0} y1={0} y2={0} stroke="#000" />
          <text
            x={-9}
            y={0}
            dy="0.32em"
            textAnchor="end"
            fill="#000"
            fontSize={12}
          >
            {tick}
          </text>
        </g>
      ))}
    </g>
  );
};

export default YTicks;
