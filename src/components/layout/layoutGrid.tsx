import React, { useEffect, useLayoutEffect, useState } from 'react';
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
  
  
  

  useLayoutEffect(() => {
    const newLayout = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        console.log(y,x);
        newLayout.push({
          i: `${y}-${x}`,
          x: x*(6/columns),
          y: x,
          w: 6/columns,
          h: 4/rows, 
         
        }); 
      }
    }
    setLayout(newLayout);
  }, [rows, columns]);

  return (
    <ResponsiveGridLayout className="layout custom-layout" layouts={{ lg: layout}} isBounded={true}>
      {layout.map((item) => (
        <div key={item.i} className="grid-item">
          
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default LayoutGrid;
