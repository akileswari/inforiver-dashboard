import LineChart from "../ChartComponents/LineChart";
import ClusterLineChart from "../ChartComponents/ClusttereLine";
import { dataSets, lineData } from "../components/dataSets/ChartDatas";
import BarChart from "../ChartComponents/Bar";
import StackedBarChart from "../ChartComponents/StackedBarChart";
import AreaChart from "../ChartComponents/AreaChart";
// import { useEffect, useLayoutEffect, useRef, useState } from "react";
import StackedLineChart from "../ChartComponents/StackedLineChart";
import useChartStore from "../store/zustand/zustand";
import WaterfallChart from "../ChartComponents/WaterfallChart";
import ClusteredBarChart from "../ChartComponents/ClusterBarChart";
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
  "100stacked-column": StackedBarChart,
  "grouped-column": ClusteredBarChart,
};
const TemplatePreview = ({
  height,
  width,
  templateRef,
}: {
  height: number;
  width: number;
  templateRef: React.MutableRefObject<HTMLDivElement>;
}) => {
  // const { height, width } = prop;

  const activeChart = useChartStore((state: any) => state.activeChart);

  const SelectedComp = componentIds[activeChart];

  const finalData =
    activeChart === "clustered-line" ||
    activeChart === "stacked-line" ||
    activeChart === "grouped-column" ||
    activeChart === "100stacked-column"
      ? dataSets
      : lineData;
  // const templateRef = useRef(null);
  // const [previewHeight, setPreviewHeight] = useState();
  // const [previewWidth, setPreviewWidth] = useState();
  // useLayoutEffect(() => {
  //   let calcHeight = (templateRef.current as any).clientHeight;
  //   let calcWidth = (templateRef.current as any).clientWidth;

  //   setPreviewHeight(calcHeight);
  //   setPreviewWidth(calcWidth);
  // }, []);
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
    <div className="template-preview">
      <svg
        // style={{ height: previewHeight, width: previewWidth }
        height={templateRef?.current?.clientHeight}
        width={templateRef?.current?.clientWidth}
        style={{ backgroundColor: theme.chart.background }}
        // className={themeClassName}
      >
        {SelectedComp && (
          <SelectedComp
            data={finalData}
            height={height}
            width={width}
            theme={theme}
          />
        )}
        {/* <ClusteredBarChart
          datasets={dataSets}
          height={600}
          width={600}
          theme={theme}
        /> */}
      </svg>
    </div>
  );
};

export default TemplatePreview;
