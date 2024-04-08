import React, { useEffect } from 'react';
import "../assets/css/customToolbar.css";
import { useTheme } from "../Theme/Theme";
import { getIcon } from "../constant/Helper";
import { useGrid } from '.././context/Context.js'; 
import { useDispatch } from 'react-redux';
import { setGridItems } from '../../store/gridSlice.js';
const CustomToolbar = ({undo,redo}) => {
  const { theme, setTheme } = useTheme(); 
  const dispatch = useDispatch();
  const {  selectedGridItems, swapGridItems } = useGrid(); 

  const handleUndoClick = () => {
    dispatch(undo());
  };

 
  const handleRedoClick = () => {
    dispatch(redo());
  };

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value; 
    setTheme(selectedTheme); 
  };

  const handleSwapClick = () => {
  
    if (selectedGridItems && selectedGridItems.length === 2) {
      dispatch(setGridItems([...selectedGridItems]));
    }
  };


  useEffect(() => {
    
    if (selectedGridItems.length === 2) {
      console.log(`Swapped grids ${selectedGridItems[0]} and ${selectedGridItems[1]}`);
    }
  }, [selectedGridItems]);

  return (
    <div className="custom-toolbar">
      <div className="custom-item">
        <i className={getIcon("light-theme")}></i>
        <select value={theme.name} onChange={handleThemeChange} title='Theme'>
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
        </select>
      </div>
      
      <div className="custom-item">
        <i className={getIcon("light-swap")}></i>
        <button disabled={!selectedGridItems || selectedGridItems.length !== 2} onClick={handleSwapClick}>Swap</button>
      </div>

      <div className="custom-item">
        <i className={getIcon("light-delete")}></i>
        <div className="custom-label">Delete</div>
      </div>
      <div className="line"></div>
      <div className="custom-separator"></div>
      <div className="custom-item" onClick={handleUndoClick} >
        <i className={getIcon("light-undo")}></i>
      </div>
      <div className="custom-item" onClick={handleRedoClick}>
        <i className={getIcon("light-redo")}></i>
      </div>
    </div>
  );
};

export default CustomToolbar;
