import { getChartIcon } from "../constant/Helper";
// import { useSelector, useDispatch } from "react-redux";
// import { setToggledChartType, setActiveChart } from "../../store/chartSlicer";
import useChartStore from "../../store/zustand/Zustand";
const ChartIcon = ({ className }: { className: string }) => {
  return (
    <div className="chart-icon-box">
      <i className={`${getChartIcon(className)} scale-chart-options-icon`}></i>
    </div>
  );
};

const ChartTitle = ({
  title,
  logo,
  //
  dropDown,
  toggleCharts,
}: {
  title: string;
  logo: string;
  dropDown: string;
  toggleCharts: () => void;
}) => {
  return (
    <div className="chart-type-title" onClick={toggleCharts}>
      <i className={`${logo} chart-title-logo`}></i>
      <p className="charts-text">{title}</p>
      <i className={`template-builder light-dropdown-right ${dropDown}`}></i>
    </div>
  );
};

interface IChartBoxHolder {
  title: string;
  logo: string;
  chartIcons: {
    className: string;
    id: string;
    // onClick : (id : string) => void
  }[];
}

const ChartBoxHolder = ({ title, chartIcons, logo }: IChartBoxHolder) => {
  const toggle = useChartStore((state: any) => state.chartToggled === title);

  const setToggledChartType = useChartStore(
    (state: any) => state.setToggledChartType1
  );

  const setActiveChart = useChartStore((state: any) => state.setActiveChart1);

  const toggleCharts = () => {
    console.log(title, "title");
    setToggledChartType(title);
  };

  return (
    <div className="column-charts">
      <ChartTitle
        title={title}
        logo={logo}
        dropDown={toggle ? "up " : " down"}
        toggleCharts={toggleCharts}
      />
      <div className={`chart-options`}>
        {toggle &&
          chartIcons.map((chart, index) => (
            <div
              key={index}
              onClick={() => {
                console.log(chart.id, "chart.id");
                return setActiveChart(chart.id);
              }}
            >
              <ChartIcon className={chart.className} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChartBoxHolder;
