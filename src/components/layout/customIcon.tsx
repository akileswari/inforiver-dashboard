// CustomToolbar.jsx
import "./customIcon.css";
import { getIcon } from "../constant/Helper";
const CustomToolbar = () => {
  return (
    <div className="custom-toolbar">
      <div className="custom-item">
       
          <i className={getIcon("light-card")}></i>
       
        <div className="custom-label">Auto fit</div>
      </div>
      <div className="custom-item">
        <i className={getIcon("light-swap")}></i>

        <div className="custom-label">Swap</div>
      </div>
      <div className="custom-item">
        <i className={getIcon("light-theme")}></i>

        <div className="custom-label">Theme</div>
      </div>
      <div className="line"></div>
      <div className="custom-separator"></div>
      <div className="custom-item">
        <i className={getIcon("light-undo")}></i>
      </div>
      <div className="custom-item">
        <i className={getIcon("light-redo")}></i>
      </div>
    </div>
  );
};

export default CustomToolbar;
