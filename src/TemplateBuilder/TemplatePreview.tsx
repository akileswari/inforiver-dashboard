import LineChart from "../ChartComponents/LineChart";
import { lineData, datasets } from "../components/dataSets/ChartDatas";
// import BarChart from "../ChartComponents/Bar.tsx";
// import ClusterLineChart from "../ChartComponents/ClusttereLine";
// import StackedLineChart from "../ChartComponents/StackedLineChart";

interface IProps {
  height: number;
  width: number;
}
const TemplatePreview = (prop: IProps) => {
  const { height, width } = prop;

  return (
    <div
      className="template-preview"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg style={{ width: `${width}px`, height: `${height}px` }}>
        <LineChart data={lineData} width={width} height={height} />

        {/* <BarChart data={lineData} height={height} width={width} /> */}
        {/* <ClusterLineChart data={datasets} height={height} width={width} /> */}
        {/* <StackedLineChart data={datasets} height={height} width={width} /> */}
      </svg>
    </div>
  );
};

export default TemplatePreview;
