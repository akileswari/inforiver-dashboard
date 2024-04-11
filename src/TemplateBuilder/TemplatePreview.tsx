import { useSelector } from "react-redux";
import LayoutGrid from "../components/layout/layoutGrid";

// const componentIds: Record<string, React.FC<any>> = {
//   "overlapped-column": BarChart,
//   area: AreaChart,
//   line: LineChart,
//   "clustered-line": ClusterLineChart,
//   "stacked-line": StackedLineChart,
//   waterfall: WaterfallChart,
//   "100stacked-column": StackedBarChart,
//   "grouped-column": ClusteredBarChart,
// };
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
  const {
    rows,
    columns,
    spacing,
    margin,
    strokeColor,
    stroke,
    cornerRadius,
    shadow,
    shadowColor,
    selectedShadow,
  } = useSelector((state: any) => state.toolbar);
  // const activeChart = useChartStore((state: any) => state.activeChart);

  // // const isChartActive = activeChart !== null;
  // const SelectedComp = componentIds[activeChart];

  // const finalData =
  //   activeChart === "clustered-line" ||
  //   activeChart === "stacked-line" ||
  //   activeChart === "grouped-column" ||
  //   activeChart === "100stacked-column"
  //     ? dataSets
  //     : lineData;

  // const themeType = useSelector((state: any) => state.themeStore.themeType);
  // console.log(themeType);

  // const getTheme = (theme: any): any => {
  //   switch (theme) {
  //     case "light":
  //       return lightTheme;
  //     case "dark":
  //       return darkTheme;
  //     default:
  //       return lightTheme;
  //   }
  // };
  // const theme = getTheme(themeType);

  return (
    <div ref={templateRef} className="template-preview">
      <LayoutGrid
        rows={rows}
        columns={columns}
        margin={spacing}
        containerPadding={margin}
        strokeColor={strokeColor}
        strokeWidth={stroke}
        cornerRadius={cornerRadius}
        shadow={shadow}
        shadowColor={shadowColor}
        selectedShadow={selectedShadow}
        height={height}
        width={width}
      />
    </div>
  );
};

export default TemplatePreview;
