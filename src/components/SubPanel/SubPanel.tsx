import { getChartIcon } from "../constant/Helper";
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

const ChartIcons = ({ className }: { className: string }) => {
  return (
    <div className="chart-icon-box">
      <i className={`${getChartIcon(className)} scale-chart-options-icon`}></i>
    </div>
  );
};

const SubPanel = () => {
  return (
    <div className="sub-panel">
      <p>Chart</p>
      <div className="column-charts">
        <p>Column charts</p>
        <div className="column-chart-options ">
          <ChartIcons className="light-overlapped-column" />
          <ChartIcons className="light-stacked-column " />
          <ChartIcons className="light-100stacked-column" />
          <ChartIcons className="light-integrated-variance-column" />
          <ChartIcons className="light-grouped-column" />
        </div>
      </div>
    </div>
  );
};

export default SubPanel;
