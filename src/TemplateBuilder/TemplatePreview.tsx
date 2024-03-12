import LineChart from "../ChartComponents/LineChart";
import { useSelector } from "react-redux";
import { lineData, datasets } from "../components/dataSets/ChartDatas";
import BarChart from "../ChartComponents/Bar";
// import BarChart from "../ChartComponents/Bar.tsx";
// import ClusterLineChart from "../ChartComponents/ClusttereLine";
// import StackedLineChart from "../ChartComponents/StackedLineChart";

interface IProps {
  height: number;
  width: number;
}

const componentIds: Record<string, React.FC<any>> = {
  "overlapped-column": BarChart,
};
const TemplatePreview = (prop: IProps) => {
  const { height, width } = prop;
  const activeChart: string = useSelector(
    (state: any) => state.chartStore.activeChart
  );
  const SelectedComp = componentIds[activeChart];

  return (
    <div
      className="template-preview"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg style={{ width: `${width}px`, height: `${height}px` }}>
        {/* <LineChart data={lineData} width={width} height={height} /> */}

        {SelectedComp && (
          <SelectedComp data={lineData} width={width} height={height} />
        )}
        {/* <BarChart data={lineData} height={height} width={width} /> */}
        {/* <ClusterLineChart data={datasets} height={height} width={width} /> */}
        {/* <StackedLineChart data={datasets} height={height} width={width} /> */}
      </svg>
    </div>
  );
};

export default TemplatePreview;
