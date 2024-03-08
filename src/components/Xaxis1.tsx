

type XAxisProps = {
  innerHeight: number;
  xScale: any; 
  data?: { name: string }[]; // Make the data prop optional
};

const XAxis = ({ innerHeight, xScale, data = [] }: XAxisProps) => {
  // Check if data is defined before using the map function
  if (!data) return null;

  return (
    <>
      <line x1={0} y1={0} x2={0} y2={innerHeight} stroke="black" />
      <g transform={`translate(0, ${innerHeight})`} className="axis axis--x">
        {data.map((d, i) => {
          return (
            <text
              key={i}
              className="data-label-xAxis-test"
              x={xScale(d.name)! + xScale.bandwidth() / 2}
              y={20} 
              textAnchor="middle"
            >
              {d.name}
            </text>
          );
        })}
      </g>
    </>
  );
};

export default XAxis;
