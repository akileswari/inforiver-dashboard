import LineChart from "../ChartComponents/LineChart";
import { useSelector } from "react-redux";
import ClusterLineChart from "../ChartComponents/ClusttereLine";
import { dataSets, lineData } from "../components/dataSets/ChartDatas";
import BarChart from "../ChartComponents/Bar";
import AreaChart from "../ChartComponents/AreaChart";
import { useEffect, useRef, useState } from "react";
import StackedLineChart from "../ChartComponents/StackedLineChart";
// import BarChart from "../ChartComponents/Bar.tsx";
// import ClusterLineChart from "../ChartComponents/ClusttereLine";
// import StackedLineChart from "../ChartComponents/StackedLineChart";

interface IProps {
  height: number;
  width: number;
}

const componentIds: Record<string, React.FC<any>> = {
  "overlapped-column": BarChart,
  area: AreaChart,
  line: LineChart,
  "clustered-line": ClusterLineChart,
  "stacked-line": StackedLineChart,
};
const TemplatePreview = (prop: IProps) => {
  const { height, width } = prop;
  const activeChart: string = useSelector(
    (state: any) => state.chartStore.activeChart
  );

  const SelectedComp = componentIds[activeChart];
  // console.log(activeChart);

  const finalData =
    activeChart === "clustered-line" || activeChart === "stacked-line"
      ? dataSets
      : lineData;
  const templateRef = useRef(null);
  const [previewHeight, setPreviewHeight] = useState();
  const [previewWidth, setPreviewWidth] = useState();
  useEffect(() => {
    let calcHeight = (templateRef.current as any).clientHeight;
    let calcWidth = (templateRef.current as any).clientWidth;
    // setPreviewHeight((templateRef.current as any).clientheight);'
    // console.log(templateRef.current);
    // const val = (templateRef.current as any).getBoundingClientRect;
    // console.log(val.height);
    // console.log((templateRef.current as any).style.height);
    // console.log((templateRef.current as any).clientHeight);
    setPreviewHeight(calcHeight);
    setPreviewWidth(calcWidth);
    // document.addEventListener("resize", () => {});
  });
  return (
    <div
      ref={templateRef}
      className="template-preview"
      style={{ height: "100%", width: "100%" }}
    >
      <svg
        // style={{ height: previewHeight, width: previewWidth }
        height={previewWidth}
        width={previewHeight}
      >
        {/* <LineChart data={lineData} width={width} height={height} /> */}

        {SelectedComp && (
          <SelectedComp
            data={finalData}
            height={previewWidth}
            width={previewHeight}
          />
        )}
        {/* <BarChart data={lineData} height={height} width={width} /> */}
        {/* <ClusterLineChart data={datasets} height={height} width={width} /> */}
        {/* <StackedLineChart data={datasets} height={height} width={width} /> */}
      </svg>
    </div>
  );
};

export default TemplatePreview;
