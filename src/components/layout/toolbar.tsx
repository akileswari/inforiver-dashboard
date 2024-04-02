import React, { useEffect, useRef, useState } from "react";
import { SketchPicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';
import { getIcon } from "../constant/Helper";
import '../assets/css/toolbar.css';
import { setColumns, setRows, setSpacing, setMargin, setCornerRadius, setStroke, setShadow } from "../../store/ToolbarSlice";

const Toolbar = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state: any) => state.toolbar.rows);
  const columns = useSelector((state: any) => state.toolbar.columns);
  const spacing = useSelector((state: any)=> state.toolbar.spacing);
  const margin = useSelector((state: any) => state.toolbar.margin);
  const cornerRadius = useSelector((state: any) => state.toolbar.cornerRadius);
  const stroke = useSelector((state: any) => state.toolbar.stroke);
  const shadow = useSelector((state: any)=> state.toolbar.shadow);

  const [color1, setColor1] = useState('black');
  const [color2, setColor2] = useState('black');
  const [showColorPicker1, setShowColorPicker1] = useState(false);
  const [showColorPicker2, setShowColorPicker2] = useState(false);

  const handleInputChange1 = (e) => {
    const value = parseInt(e.target.value);
    dispatch(setRows(value));
  };

  const handleInputChange2 = (e) => {
    const value = parseInt(e.target.value);
    dispatch(setColumns(value));
  };

  const handleSpacingChange = (e) => {
    const value = parseInt(e.target.value);
    dispatch(setSpacing(value));
  };

  const handleMarginChange = (e) => {
    const value = parseInt(e.target.value);
    dispatch(setMargin(value));
  };

  const handleCornerRadiusChange = (e) => {
    const value = parseInt(e.target.value);
    dispatch(setCornerRadius(value));
  };

  const handleStrokeChange = (e) => {
    const value = parseInt(e.target.value);
    dispatch(setStroke(value));
  };

  const handleToggleChange = () => {
    setShowColorPicker2(!showColorPicker2);
    dispatch(setShadow(!showColorPicker2));
  };

  const handleColorChange1 = (selectedColor) => {
    setColor1(selectedColor.hex);
  };

  const handleColorChange2 = (selectedColor) => {
    setColor2(selectedColor.hex);
  };

  const toggleColorPicker1 = () => {
    setShowColorPicker1(!showColorPicker1);
  };

  const toggleColorPicker2 = () => {
    setShowColorPicker2(!showColorPicker2);
  };


  const colorPickerRef1 = useRef(null);
  const colorPickerRef2 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorPickerRef1.current && !colorPickerRef1.current.contains(event.target)) {
        setShowColorPicker1(false);
      }
      if (colorPickerRef2.current && !colorPickerRef2.current.contains(event.target)) {
        setShowColorPicker2(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="toolbar-container">
      {/* Grid */}
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
              min="0"
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
        <div className="stoke">
          <div className="stokeContent">
            <input
              type="number"
              id="stroke"
              name="stroke"
              min="0"
              value={stroke}
              onChange={handleStrokeChange}
            />
            <div className="color-picker" ref={colorPickerRef1}>
              <div className="colorBox" onClick={toggleColorPicker1} style={{ backgroundColor: color1 }}>
                {showColorPicker1 && (
                  <SketchPicker color={color1} onChange={handleColorChange1} className="picker" />
                )}
              </div>
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
                  <input type="checkbox" checked={shadow} onChange={handleToggleChange} />
                  <span className="slider round"></span>
                </label>
                <div className="color-picker" ref={colorPickerRef2}>
                  <div className="colorBox" onClick={toggleColorPicker2} style={{ backgroundColor: color2 }}>
                    {showColorPicker2 && (
                      <SketchPicker color={color2} onChange={handleColorChange2} className="picker_shadow" />
                    )}
                  </div>
                </div>
              </div>
            </div>
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
      </div>
    </div>
  );
};

export default Toolbar;
