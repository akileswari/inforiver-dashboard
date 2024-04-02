import "../css/customIcon.css";
import { getIcon } from "../constant/Helper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setThemeType } from "../../store/themeIndicator";

const CustomToolbar = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");

  const dispatch = useDispatch();

  const handleThemeChange = (event: any) => {
    const selectedTheme = event.target.value;
    setSelectedTheme(selectedTheme);
    // dispatch(setThemeType("light"))
    dispatch(setThemeType(selectedTheme)); // Dispatch the action to update the theme
  };

  return (
    <div className="custom-toolbar">
      <div className="custom-item">
        <i className={getIcon("light-theme")}></i>

        <select
          value={selectedTheme}
          onChange={handleThemeChange}
          title="Theme"
          style={{ color: "black" }}
        >
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
        </select>
      </div>
      <div className="custom-item">
        <i className={getIcon("light-swap")}></i>
        <div className="custom-label">Swap</div>
      </div>
      <div className="custom-item">
        <i className={getIcon("light-delete")}></i>
        <div className="custom-label">Delete</div>
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
