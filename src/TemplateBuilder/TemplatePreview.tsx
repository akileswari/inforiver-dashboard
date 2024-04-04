// TemplatePreview.tsx
import React, { useEffect, useRef, useState } from "react";
import useChartStore from "../store/zustand/Zustand";
import LineChart from "../chartComponents/LineChart";
import ClusterLineChart from "../chartComponents/ClusttereLine";
import { dataSets, lineData } from "../components/dataSets/ChartDatas";
import BarChart from "../chartComponents/Bar";
import AreaChart from "../chartComponents/AreaChart";
import StackedLineChart from "../chartComponents/StackedLineChart";
import WaterfallChart from "../chartComponents/WaterfallChart";
import LayoutGrid from "../components/layout/layoutGrid";
import { useSelector } from "react-redux";


const componentIds: Record<string, React.FC<any>> = {
  "overlapped-column": BarChart,
  area: AreaChart,
  line: LineChart,
  "clustered-line": ClusterLineChart,
  "stacked-line": StackedLineChart,
  "waterfall": WaterfallChart
};

const TemplatePreview = () => {
  const activeChart = useChartStore((state: any) => state.activeChart);
  const SelectedComp = componentIds[activeChart];
  const finalData =
    activeChart === "clustered-line" || activeChart === "stacked-line"
      ? dataSets
      : lineData;
  const templateRef = useRef(null);
  const [previewHeight, setPreviewHeight] = useState();
  const [previewWidth, setPreviewWidth] = useState();
  const isChartActive = activeChart !== null;


  const { rows, columns, spacing, margin, strokeColor,stroke,cornerRadius,shadow,shadowColor ,selectedShadow} = useSelector((state: any) => state.toolbar);

  useEffect(() => {
    const calcHeight = (templateRef.current as any)?.clientHeight;
    const calcWidth = (templateRef.current as any)?.clientWidth;

    setPreviewHeight(calcHeight);
    setPreviewWidth(calcWidth);
  }, [activeChart]);

  return (
    <div
      ref={templateRef}
      className="template-preview preview-grid"
      style={{ height: "100%", width: "100%", position: "relative", left: "300px", top: "-10px" }}
    >
      {isChartActive && (
        <svg height={previewWidth} width={previewHeight}>
          {SelectedComp && (
            <SelectedComp
              data={finalData}
              height={previewWidth}
              width={previewHeight} />
          )}
        </svg>
      )}
      {!isChartActive && <LayoutGrid
        rows={rows}
        columns={columns}
        margin={spacing}
        containerPadding={margin}
        strokeColor={strokeColor}
        strokeWidth={stroke}
        cornerRadius={cornerRadius} shadow={shadow} shadowColor={shadowColor} selectedShadow={selectedShadow}/>}
    </div>
  );
};

export default TemplatePreview;
