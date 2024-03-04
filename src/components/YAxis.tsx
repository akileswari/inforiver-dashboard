import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface YAxisProps {
  scale: d3.ScaleLinear<number, number>;
  ticks: number;
}

const YAxis: React.FC<YAxisProps> = ({ scale, ticks }) => {
  const ref = useRef<SVGGElement>(null); 
  useEffect(() => {
    const yAxis = d3.axisLeft(scale).ticks(ticks);
    d3.select(ref.current).call(yAxis);
  }, [scale, ticks]);

  return <g ref={ref} />;
};

export default YAxis;
