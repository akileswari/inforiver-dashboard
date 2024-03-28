

import WaterfallChart from "../ChartComponents/WaterfallChart";
import { lineData, datasets } from "../components/dataSets/ChartDatas";
import { useTheme } from "../components/Theme/Theme";
interface IProps {
  height: number;
  width: number;
}
const TemplatePreview = (prop: IProps) => {
  const { height, width } = prop;
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className="template-preview"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg style={{ width: `${width}px`, height: `${height}px` }}>
        
       
        {/* <WaterfallChart data={lineData} width={width} height={height} theme={theme}
         toggleTheme={toggleTheme} /> */}
      </svg>
    </div>
  );
};

export default TemplatePreview;