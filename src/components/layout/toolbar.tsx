import React, { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import { getIcon } from "../constant/Helper";
import "../assets/css/toolbar.css";
import {
  setColumns,
  setRows,
  setSpacing,
  setMargin,
  setCornerRadius,
  setStroke,
  setShadow,
  setStrokeColor,
  setShadowColor,
  setSelectedShadow,
} from "../../store/ToolbarSlice";
import { ELayouts } from "../../MainComponent";

const Toolbar = ({
  showSubPanelElements,
}: {
  showSubPanelElements: ELayouts;
}) => {
  const dispatch = useDispatch();
  const rows = useSelector((state: any) => state.toolbar.rows);
  const columns = useSelector((state: any) => state.toolbar.columns);
  const spacing = useSelector((state: any) => state.toolbar.spacing);
  const margin = useSelector((state: any) => state.toolbar.margin);
  const cornerRadius = useSelector((state: any) => state.toolbar.cornerRadius);
  const stroke = useSelector((state: any) => state.toolbar.stroke);
  const shadow = useSelector((state: any) => state.toolbar.shadow);
  const strokeColor = useSelector((state: any) => state.toolbar.strokeColor);
  const shadowColor = useSelector((state: any) => state.toolbar.shadowColor);
  const selectedShadow = useSelector(
    (state: any) => state.toolbar.selectedShadow
  );
  const [showColorPicker1, setShowColorPicker1] = useState(false);
  const [showColorPicker2, setShowColorPicker2] = useState(false);

  //const testItems = useSelector((state: any) => state.test.globalItems);

  // const [inputValues, setInputValues] = useState({
  //   row: testItems.rows,
  //   column: testItems.columns
  // });

  // const handleInputChange = (event) => {
  //   const { id, value } = event.target;
  //   setInputValues(prevState => ({
  //     ...prevState,
  //     [id]: value
  //   }));

  //   const globalItem = {

  //     columns: inputValues.column,
  //     rows: inputValues.row,
  //     grids: {
  //       i: 0,
  //       x: 0,
  //       y: 0,
  //       width: 0,
  //       height: 0,

  //     }
  //   }
  //   console.log("global", globalItem);
  //   setTestItems(globalItem)
  // };

  const handleToggleChange = () => {
    dispatch(setShadow(!shadow));
  };

  const handleInputChange1 = (e: any) => {
    const value = parseInt(e.target.value);
    dispatch(setRows(value));
  };

  const handleInputChange2 = (e: any) => {
    const value = parseInt(e.target.value);
    dispatch(setColumns(value));
  };

  const handleSpacingChange = (e: any) => {
    const value = parseInt(e.target.value);
    dispatch(setSpacing(value));
  };

  const handleMarginChange = (e: any) => {
    const value = parseInt(e.target.value);
    dispatch(setMargin(value));
  };

  const handleCornerRadiusChange = (e: any) => {
    const value = parseInt(e.target.value);
    dispatch(setCornerRadius(value));
  };

  const handleStrokeChange = (e: any) => {
    const value = parseInt(e.target.value);
    dispatch(setStroke(value));
  };

  const handleColorChange1 = (selectedColor: any) => {
    dispatch(setStrokeColor(selectedColor.hex));
  };

  const handleColorChange2 = (selectedColor: any) => {
    dispatch(setShadowColor(selectedColor.hex));
  };

  const handleShadowSelection = (selectedShadowType: string) => {
    dispatch(setSelectedShadow(selectedShadowType));
  };

  const toggleColorPicker1 = () => {
    setShowColorPicker1(!showColorPicker1);
  };

  const toggleColorPicker2 = () => {
    setShowColorPicker2(!showColorPicker2);
  };

  const handleTestChange = () => {};

  const colorPickerRef1 = useRef(null);
  const colorPickerRef2 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        colorPickerRef1.current &&
        !colorPickerRef1.current.contains(event.target)
      ) {
        setShowColorPicker1(false);
      }
      if (
        colorPickerRef2.current &&
        !colorPickerRef2.current.contains(event.target)
      ) {
        setShowColorPicker2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (showSubPanelElements !== ELayouts.LAYOUT || showSubPanelElements === null)
    return null;
  return (
    <div className="toolbar-container">
      <div className="gridContainer">
        <div className="gridItem">
          <div className="gridText">Grid</div>
        </div>
      </div>
      <div className="componentWrapper">
        <div className="columnWrapper">
          <div className="columnTitle">Row</div>
          <div className="columnContent">
            <input
              type="number"
              id="row"
              name="row"
              min={1}
              max={7}
              value={rows}
              onChange={handleInputChange1}
            />
          </div>
        </div>
        <div className="rowWrapper">
          <div className="rowTitle">Column</div>
          <div className="rowContent">
            <input
              type="number"
              id="col"
              name="col"
              min={1}
              max={8}
              value={columns}
              onChange={handleInputChange2}
            />
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
            <input
              type="number"
              id="spacing"
              name="spacing"
              min="0"
              value={spacing}
              onChange={handleSpacingChange}
            />
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
            <input
              type="number"
              id="margin"
              name="margin"
              min="0"
              value={margin}
              onChange={handleMarginChange}
            />
          </div>
        </div>
      </div>

      {/* Corner radius */}
      <div className="cornerRadiusContainer">
        <div className="cornerRadiusHeader">
          <div className="marginTitle">Corner radius</div>
        </div>
        <div className="cornerRadiusContent">
          <div className="cornerRadiusItem">
            <input
              type="number"
              id="cornerRadius"
              name="cornerRadius"
              min="0"
              value={cornerRadius}
              onChange={handleCornerRadiusChange}
            />
          </div>
        </div>
      </div>

      {/* Stroke */}
      <div className="strokeContainer">
        <div className="strokeHeader">
          <div className="marginTitle">Stroke</div>
        </div>

        <div className="stokeContent">
          <div className="stokeItem">
            <input
              type="number"
              id="stroke"
              name="stroke"
              min={1}
              max={8}
              value={stroke}
              onChange={handleStrokeChange}
            />
          </div>
          <div className="color-picker" ref={colorPickerRef1}>
            <div
              className="colorBox"
              onClick={toggleColorPicker1}
              style={{ backgroundColor: strokeColor }}
            >
              {showColorPicker1 && (
                <SketchPicker
                  color={strokeColor}
                  onChange={handleColorChange1}
                  className="picker"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Shadow */}
      <div className="shadowContainer">
        <div className="shadowHeader">
          <div className="marginTitle">Shadow</div>
        </div>
        <div className="shadowItem">
          <div className="shadowContent">
            <div className="shadowBox">
              <div className="shadow">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={shadow}
                    onChange={handleToggleChange}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="pickerShadow" ref={colorPickerRef2}>
              <div
                className="colorBox"
                onClick={toggleColorPicker2}
                style={{ backgroundColor: shadowColor }}
              >
                {showColorPicker2 && (
                  <SketchPicker
                    color={shadowColor}
                    onChange={handleColorChange2}
                    className="picker"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="all-shadows">
            <div className="shadowInner">
              <div
                className="shadow-icon"
                onClick={() => handleShadowSelection("light-shadow-top")}
              >
                <i className={getIcon("light-shadow-top")}></i>
              </div>
              <div
                className="shadow-icon"
                onClick={() => handleShadowSelection("light-shadow-topleft")}
              >
                <i className={getIcon("light-shadow-topleft")}></i>
              </div>
              <div
                className="shadow-icon"
                onClick={() => handleShadowSelection("light-shadow-right")}
              >
                <i className={getIcon("light-shadow-right")}></i>
              </div>
              <div
                className="shadow-icon"
                onClick={() => handleShadowSelection("light-shadow-bottomleft")}
              >
                <i className={getIcon("light-shadow-bottomleft")}></i>
              </div>
              <div
                className="shadow-icon"
                onClick={() => handleShadowSelection("light-shadow-bottom")}
              >
                <i className={getIcon("light-shadow-bottom")}></i>
              </div>
              <div
                className="shadow-icon"
                onClick={() =>
                  handleShadowSelection("light-shadow-bottomright")
                }
              >
                <i className={getIcon("light-shadow-bottomright")}></i>
              </div>
              <div
                className="shadow-icon"
                onClick={() => handleShadowSelection("light-shadow-left")}
              >
                <i className={getIcon("light-shadow-left")}></i>
              </div>
              <div
                className="shadow-icon"
                onClick={() => handleShadowSelection("light-shadow-centre")}
              >
                <i className={getIcon("light-shadow-centre")}></i>
              </div>
              <div
                className="shadow-icon"
                onClick={() => handleShadowSelection("light-shadow-topright")}
              >
                <i className={getIcon("light-shadow-topright")}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
