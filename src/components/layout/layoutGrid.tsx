import React, { useEffect, useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import '../assets/css/layoutGrid.css';
import 'react-grid-layout/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface GridComponentProps {
  rows: number;
  columns: number;
}

const LayoutGrid: React.FC<GridComponentProps> = ({ rows, columns }) => {
  const [layout, setLayout] = useState([]);
  
  
  const dynamicHeight = rows * 2;
  const dynamicWidth = columns * 2;

  useEffect(() => {
    const newLayout = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        newLayout.push({
          i: `${y}-${x}`,
          x: x,
          y: y,
          w: 6.5/columns,
          h: 4/rows, 
        
         
        }); 
      }
    }
    setLayout(newLayout);
  }, [rows, columns, dynamicHeight, dynamicWidth]);

  return (
    <ResponsiveGridLayout className="layout" layouts={{ lg: layout }} margin={[10,10]}>
      {layout.map((item) => (
        <div key={item.i} className="grid-item">
          
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default LayoutGrid;
