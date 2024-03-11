interface DataLabelProps {
  x: number;
  y: number;
  value: number;
  positive: boolean;
  theme: {
    fontSize: string;
    textColor: string;
   
  };
}
const DataLabel: React.FC<DataLabelProps> = ({ x, y, value, positive, theme }) => {
  const { fontSize, textColor } = theme;

  return (
    <text x={x} y={y} fill={textColor} fontSize={fontSize} textAnchor="middle">
      {value}
    </text>
  );
};
export default DataLabel;