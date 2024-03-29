import { useState, useEffect } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import "../CSS/layoutGrid.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
const ResponsiveGridLayout = WidthProvider(Responsive);

const GridComponent = ({ rows, columns }) => {
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    const newLayout = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        newLayout.push({
          i: `${y}-${x}`,
          x: x,
          y: y,
          w: 1,
          h: 1,
        });
      }
    }
    setLayout(newLayout);
  }, [rows, columns]);

  return (
    <div className=".react-grid-layout">
      <style>
        {`
          .react-grid-layout {
            position: relative;
            transition: height 200ms ease; 
            left: 450px;
            width:960px
          }
        
        `}
      </style>
      <ResponsiveGridLayout className="layout" layouts={{ lg: layout }}>
        {layout.map((item) => (
          <div key={item.i} className="grid-item">
            {/* Rendering an empty div instead of item.i */}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default GridComponent;
