import React from 'react';
import './toolbar.css'; // Assuming you have a separate CSS file named styles.css

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
          <div className="icon"></div>
        </div>
      </div>
      <div className="rowWrapper">
        <div className="rowTitle">Row</div>
        <div className="rowContent">
          <div className="rowValue">3</div>
          <div className="icon"></div>
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
          <div className="spacingValue">10</div>
          <div className="spacingUnit">px</div>
          <div className="icon"></div>
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
          <div className="marginValue">10</div>
          <div className="marginUnit">px</div>
          <div className="icon">&#xf78d;</div>
        </div>
      </div>
    </div>

      {/* Corner radius */}
      <div className="cornerRadiusContainer">
        <div className="cornerRadiusHeader">
          <div className="headerText">Corner radius</div>
        </div>
        <div className="cornerRadiusItem">
          <div className="cornerRadiusContent">
            <div className="cornerRadiusValue">0</div>
            <div className="cornerRadiusIcon"></div>
          </div>
        </div>
      </div>

      {/* Stoke */}
      <div className="stokeContainer">
        <div className="stokeHeader">
          <div className="headerText">Stoke</div>
        </div>
        <div className="stokeItem">
          <div className="stokeContent">
            <div className="stokeValue">0</div>
            <div className="stokeIcon"></div>
          </div>
          <div className="stokeColor">
            <div className="colorBox"></div>
          </div>
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
              <div className="shadowInner">
                <div className="shadowCircle"></div>
              </div>
            </div>
            <div className="shadowBox">
              <div className="shadowInner">
                <div className="shadowSquare"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
