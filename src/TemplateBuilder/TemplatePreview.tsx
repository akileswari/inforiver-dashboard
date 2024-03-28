import LineChart from "../ChartComponents/LineChart";
import ClusterLineChart from "../ChartComponents/ClusttereLine";
import { dataSets, lineData } from "../components/dataSets/ChartDatas";
import BarChart from "../ChartComponents/Bar";
import AreaChart from "../ChartComponents/AreaChart";
import { useEffect, useRef, useState } from "react";
import StackedLineChart from "../ChartComponents/StackedLineChart";
import useChartStore from "../store/zustand/Zustand";
 
const componentIds: Record<string, React.FC<any>> = {
  "overlapped-column": BarChart,
  area: AreaChart,
  line: LineChart,
  "clustered-line": ClusterLineChart,
  "stacked-line": StackedLineChart,
};
const TemplatePreview = () => {
  // const { height, width } = prop;
 
  const activeChart = useChartStore((state: any) => state.activeChart);
 
  const SelectedComp = componentIds[activeChart];
  // console.log(SelectedComp);
 
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
 
    setPreviewHeight(calcHeight);
    setPreviewWidth(calcWidth);
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
        {SelectedComp && (
          <SelectedComp
            data={finalData}
            height={previewWidth}
            width={previewHeight}
          />
        )}
      </svg>
    </div>
  );
};
 
export default TemplatePreview;
 
