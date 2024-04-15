import React from "react";
import BarChart from "../chartComponents/Bar";
import AreaChart from "../chartComponents/AreaChart";
import LineChart from "../chartComponents/LineChart";
import StackedLineChart from "../chartComponents/ClusttereLine";
import WaterfallChart from "../chartComponents/WaterfallChart";
import StackedBarChart from "../chartComponents/StackedBarChart";
import ClusteredBarChart from "../chartComponents/ClusterBarChart";
import ClusterLineChart from "../chartComponents/ClusttereLine";
import { dataSets, lineData } from "./dataSets/ChartDatas";
import { useSelector } from "react-redux";
import lightTheme from "./Theme/lightTheme";
import darkTheme from "./Theme/darkTheme";

interface IChartGrid {
  componentId: string;
}
const ChartGrid = (props: IChartGrid) => {
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
  const activeChart = props.componentId;
  console.log(props);

  // const isChartActive = activeChart !== null;
  const SelectedComp = componentIds[activeChart];

  const finalData =
    activeChart === "clustered-line" ||
    activeChart === "stacked-line" ||
    activeChart === "grouped-column" ||
    activeChart === "100stacked-column"
      ? dataSets
      : lineData;

  const themeType = useSelector((state: any) => state.themeStore.themeType);
  const selectedGrid = useSelector((state: any) => state.selectedGrid);
  // const activeGridItem = selectedGrid.find(
  //   (item) => item.gridId === activeGrid
  // );

  const structuredData = { ...selectedGrid };
  const matchedId = structuredData.selectedGridItem.find(
    (item: any) => item.id === selectedGrid.activeGrid
  );
  const matchedItem = matchedId
    ? {
        pixelHeight: matchedId.pixelHeight,
        pixelWidth: matchedId.pixelWidth,
      }
    : null;

  console.log(matchedItem, "id");

  // console.log(selectedGrid);

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
  console.log(theme.chart.background);

  return (
    <svg
      height={matchedItem?.pixelHeight}
      width={matchedItem?.pixelWidth}
      style={{ backgroundColor: theme.chart.background }}
    >
      {SelectedComp && (
        <SelectedComp
          data={finalData}
          height={matchedItem?.pixelHeight}
          width={matchedItem?.pixelWidth}
          theme={theme}
        />
      )}
    </svg>
  );
};

export default ChartGrid;
