import React from 'react';

interface YAxisProps {
  yScale: any;
  padding: number;
  height: number;
  yAxisTickCount: number;
}

const YAxis: React.FC<YAxisProps> = ({ yScale, padding, height, yAxisTickCount }) => {
  return (
    <g>
      
      <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="black" />
      {yScale.ticks(yAxisTickCount).map((tick) => (
        <g key={tick} transform={`translate(${padding - 5},${yScale(tick)})`}>
          <line x1={-5} y1={0} x2={0} y2={0} stroke="black" />
          <text x={-10} y={4} textAnchor="end" dominantBaseline="middle">{tick}</text>
        </g>
      ))}
    </g>
  );
};

export default YAxis;
