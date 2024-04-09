import { getChartIcon } from "../constant/Helper";
// import { useSelector, useDispatch } from "react-redux";
// import { setToggledChartType, setActiveChart } from "../../store/chartSlicer";
import useChartStore from "../../store/zustand/Zustand";
import { useGrid } from "../context/Context";
import { useDispatch, useSelector } from "react-redux";
import { setGridItem, setChart } from "../../store/selectedGrid";

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

  const { selectedGridItems } = useGrid();

  const setToggledChartType = useChartStore(
    (state: any) => state.setToggledChartType1
  );
  console.log(setToggledChartType);

  const setActiveChart = useChartStore((state: any) => state.setActiveChart1);
  const activeChart = useChartStore((state: any) => state.activeChart);

  const dispatch = useDispatch();

  const toggleCharts = () => {
    setToggledChartType(title);
  };

  console.log(toggleCharts);

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

                // if (selectedGridItems.length > 0) {
                //   const chartRecords = {};
                //   selectedGridItems.forEach((item: string) => {
                //     chartRecords[item] = { ActiveChartid};
                //   });

                //   dispatch(setChart(chartRecords));
                // }

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
