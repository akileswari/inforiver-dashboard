import LineChart from "../ChartComponents/LineChart";
import ClusterLineChart from "../ChartComponents/ClusttereLine";
import { dataSets, lineData } from "../components/dataSets/ChartDatas";
import BarChart from "../ChartComponents/Bar";
import AreaChart from "../ChartComponents/AreaChart";
import { useEffect, useRef, useState } from "react";
import StackedLineChart from "../ChartComponents/StackedLineChart";
import useChartStore from "../store/zustand/zustand";
import WaterfallChart from "../ChartComponents/WaterfallChart";
import { useSelector } from "react-redux";
import lightTheme from "../components/Theme/lightTheme";
import darkTheme from "../components/Theme/darkTheme";

const componentIds: Record<string, React.FC<any>> = {
  "overlapped-column": BarChart,
  area: AreaChart,
  line: LineChart,
  "clustered-line": ClusterLineChart,
  "stacked-line": StackedLineChart,
  waterfall: WaterfallChart,
};
const TemplatePreview = () => {
  // const { height, width } = prop;

  const activeChart = useChartStore((state: any) => state.activeChart);

  const SelectedComp = componentIds[activeChart];

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
  const themeType = useSelector((state: any) => state.themeStore.themeType);

  const getTheme = (theme: any): any => {
    switch (theme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
      default:
        return lightTheme;
    }
  };
  const theme = getTheme(themeType);
  // const themeClassName = theme. === "dark" ? "dark-theme" : "light-theme";

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
        style={{ backgroundColor: theme.chart.background }}
        // className={themeClassName}
      >
        {SelectedComp && (
          <SelectedComp
            data={finalData}
            height={previewWidth}
            width={previewHeight}
            theme={theme}
          />
        )}
      </svg>
    </div>
  );
};

export default TemplatePreview;
