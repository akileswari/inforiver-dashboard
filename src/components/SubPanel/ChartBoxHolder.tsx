import { useState } from "react";
import { getChartIcon } from "../constant/Helper";
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
    // onClick : (id : string) => void
  }[];
}

const ChartBoxHolder = ({ title, chartIcons, logo }: IChartBoxHolder) => {
  const [toggle, setToggle] = useState(false);
  const toggleCharts = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="column-charts">
        <ChartTitle
          title={title}
          logo={logo}
          dropDown={toggle ? "up " : " down"}
          toggleCharts={toggleCharts}
        />
        <div className={`chart-options`}>
          {toggle &&
            chartIcons.map((chart) => (
              <ChartIcon className={chart.className} />
            ))}
          {/* <ChartIcon className="light-overlapped-column" />
          <ChartIcon className="light-stacked-column " />
          <ChartIcon className="light-100stacked-column" />
          <ChartIcon className="light-integrated-variance-column" />
          <ChartIcon className="light-grouped-column" /> */}
        </div>
      </div>
    </>
  );
};

export default ChartBoxHolder;
