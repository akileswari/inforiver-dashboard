import ChartBoxHolder from "./ChartBoxHolder";
// const SubPanel = () => {
//   const ChartIcons = ({className}) =>{}
//   return (
//     <div className="sub-panel">
//       <p>Chart</p>
//       <div className="column-charts">

//         <i className={getChartIcon("light-overlapped-column")}></i>
//         <i className={getChartIcon("light-stacked-column")}></i>
//         <i className={getChartIcon("light-100stacked-column")}></i>
//         <i className={getChartIcon("light-integrated-variance-column")}></i>
//         <i className={getChartIcon("light-grouped-column")}></i>
//       </div>
//     </div>
//   );
// };

// export default SubPanel;

const columnChartIcons = [
  {
    className: "light-overlapped-column",
    // onclick : () =>{

    // }
  },
  {
    className: "light-100marimekko",
  },
  {
    className: "light-marimekko",
  },
  {
    className: "light-stacked-column",
  },
  {
    className: "light-100stacked-column",
  },
  {
    className: "light-grouped-column",
  },

  {
    className: "light-stacked-marimekko",
  },
  {
    className: "light-100stacked-marimekko",
  },
  {
    className: "light-integrated-variance-column",
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

const lineChartIcons = [{ className: "light-line" }];

const SubPanel = () => {
  return (
    <div className="sub-panel">
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
    </div>
  );
};

export default SubPanel;
