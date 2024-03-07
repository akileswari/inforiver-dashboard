import React, { useState } from "react";

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="side-panel">
      <button className="hidden-button">
        <span className="template-builder light-layout" />
        Layout
      </button>
      <div className="side-panel-content">
        <button onClick={togglePanel}>
          {isOpen ? "close element" : " Insert element"}
        </button>
        {isOpen && (
          <>
            {/* Side panel content here */}
            <button className="hidden-button">Chart</button>
            <button className="hidden-button">Card</button>
            <button className="hidden-button">Table</button>
            <button className="hidden-button">Notes</button>
          </>
        )}
      </div>
    </div>
  );
};

export default SidePanel;
