import "./customIcon.css";

import "../layout-icon/template bilder icon march 8/css/style.css";
import "./layoutGrid.css";
const LayoutGrid = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="column">
            <div className="box"></div>
            <div className="column-inner">
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <div className="column-inner">
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </div>
          <div className="column">
            <div className="box"></div>
            <div className="column-inner">
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <div className="column-inner">
              <div className="box"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default LayoutGrid;
