import React, { useEffect, useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import '../CSS/layoutGrid.css'
import 'react-grid-layout/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface GridComponentProps {
  rows: number;
  columns: number;
}

const LayoutGrid: React.FC<GridComponentProps> = ({ rows, columns }) => {
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

  const gridItemStyle = {
    width: `${100 / columns}%`,
    height: `${100 / rows}%`
  };

  return (
    <ResponsiveGridLayout className="layout" layouts={{ lg: layout }}>
      {layout.map((item) => (
        <div key={item.i} className="grid-item" style={gridItemStyle}>
          {/* You can render content inside the grid item if needed */}
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default LayoutGrid;
