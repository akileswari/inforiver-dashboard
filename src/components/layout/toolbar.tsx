import React from "react";
import "./toolbar.css";
import "../layout-icon/template bilder icon march 8/css/style.css";
import { getIcon } from "../constant/Helper";

const Component = () => {
  return (
    <div className="container">
      {/* Grid */}
      <div className="gridContainer">
        <div className="gridItem">
          <div className="gridText">Grid</div>
        </div>
      </div>
      <div className="componentWrapper">
        <div className="columnWrapper">
          <div className="columnTitle">Column</div>
          <div className="columnContent">
            <div className="columnValue">3</div>
            <i className={getIcon("light-Stepper")}></i>
          </div>
        </div>
        <div className="rowWrapper">
          <div className="rowTitle">Row</div>
          <div className="rowContent">
            <div className="rowValue">3</div>
            <i className={getIcon("light-Stepper")}></i>
          </div>
        </div>
      </div>

      {/* Spacing */}
      <div className="spacingWrapper">
        <div className="spacingHeader">
          <div className="spacingTitle">Spacing</div>
        </div>
        <div className="spacingContent">
          <div className="spacingItem">
            <div className="spacingValue">10 px</div>

            <i className={getIcon("light-dropdown-bottom")}></i>
          </div>
        </div>
      </div>
      {/* Margin */}
      <div className="marginWrapper">
        <div className="marginHeader">
          <div className="marginTitle">Margin</div>
        </div>
        <div className="marginContent">
          <div className="marginItem">
            <div className="marginValue">10 px</div>
            <i className={getIcon("light-dropdown-bottom")}></i>
          </div>
        </div>
      </div>

      {/* Corner radius */}
      <div className="cornerRadiusContainer">
        <div className="cornerRadiusHeader">
          <div className="headerText">Corner radius</div>
        </div>
        <div className="cornerRadiusContent">
          <div className="cornerRadiusItem">
            <div className="cornerRadiusValue">0</div>
            <i className={getIcon("light-dropdown-bottom")}></i>
          </div>
        </div>
      </div>

      {/* Stoke */}
      <div className="stokeContainer">
        <div className="stokeHeader">
          <div className="headerText">Stoke</div>
        </div>
        <div className="stoke">
          <div className="stokeContent">
            <div className="stokeValue">0</div>
            <i className={getIcon("light-dropdown-bottom")}></i>
          </div>
          <div className="colorBox"></div>
        </div>
      </div>
      {/* Shadow */}
      <div className="shadowContainer">
        <div className="shadowHeader">
          <div className="headerText">Shadow</div>
        </div>
        <div className="shadowItem">
          <div className="shadowContent">
            <div className="shadowBox">
              <div className="shadow">
                <div className="outer-container">
                  <div className="inner-circle"></div>
                </div>
                <div className="colorBox"></div>
              </div>
              <div className="all-shadows">
                <div className="shadowInner">
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-top")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-topleft")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-right")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-bottomleft")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-bottom")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-bottomright")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-left")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-centre")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-topright")}></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadowBox">
              <div className="shadowInner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
