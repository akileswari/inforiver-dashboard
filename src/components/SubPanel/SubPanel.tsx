import { ELayouts } from "../../MainComp";
import ChartBoxHolder from "./ChartBoxHolder";

const columnChartIcons = [
  {
    className: "light-overlapped-column",
    // onclick : () =>{

    // }
    id: "overlapped-column",
  },
  {
    className: "light-100marimekko",
    id: "100marimekko",
  },
  {
    className: "light-marimekko",
    id: "marimekko",
  },
  {
    className: "light-stacked-column",
    id: "stacked-column",
  },
  {
    className: "light-100stacked-column",
    id: "100stacked-column",
  },
  {
    className: "light-grouped-column",
    id: "grouped-column",
  },

  {
    className: "light-stacked-marimekko",
    id: "stacked-marimekko",
  },
  {
    className: "light-100stacked-marimekko",
    id: "100stacked-marimekko",
  },
  {
    className: "light-integrated-variance-column",
    id: "integrated-variance-column",
  },
];

const waterfallChartIcons = [
  { className: "light-waterfall" },
  { className: "light-stacked-waterfall" },
  { className: "light-paired-waterfall" },
  { className: "light-breakdown-waterfall" },
  { className: "light-column-waterfall" },
  { className: "light-Integrated-variance-waterfall" },
];

const areaChartIcons = [
  { className: "light-area" },
  { className: "light-stacked-area" },
  { className: "light-clustered-area" },
];

// const lineChartIcons = [{ className: "light-line" }];

const SubPanel = ({
  showSubPanelElements,
}: {
  showSubPanelElements: ELayouts;
}) => {
  if (showSubPanelElements !== ELayouts.CHART) return null;

  return (
    <div className="sub-panel">
      {showSubPanelElements === "CHART" && (
        <>
          <p className="charts-text-title">Chart</p>
          <ChartBoxHolder
            title="Column"
            chartIcons={columnChartIcons}
            logo="chart light-overlapped-column"
          />
          <ChartBoxHolder
            title="Waterfall"
            chartIcons={waterfallChartIcons}
            logo="chart light-waterfall"
          />

          <p className="charts-text-title">Sparkline</p>
          <ChartBoxHolder
            title="Area"
            chartIcons={areaChartIcons}
            logo="chart light-area"
          />
          <ChartBoxHolder
            title="Line"
            chartIcons={areaChartIcons}
            logo="chart light-line"
          />
        </>
      )}
    </div>
  );
};

export default SubPanel;
