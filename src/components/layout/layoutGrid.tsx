import React, { useLayoutEffect, useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import '../assets/css/layoutGrid.css';
import 'react-grid-layout/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface GridComponentProps {
  rows: number;
  columns: number;
  margin: number;
  containerPadding: number;
  strokeColor: string;
  strokeWidth: number;
  cornerRadius: number;
  shadow: any;
  shadowColor: string;
  selectedShadow: string;
}

const fixedBoxShadow = '2px 1px 1px 1px';

const LayoutGrid: React.FC<GridComponentProps> = ({
  rows,
  columns,
  margin,
  containerPadding,
  strokeColor,
  strokeWidth,
  cornerRadius,
  shadow,
  shadowColor,
  selectedShadow
}) => {
  const [layout, setLayout] = useState([]);

  useLayoutEffect(() => {
    const newLayout = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        newLayout.push({
          i: `${y}-${x}`,
          x: x * (6 / columns),
          y: x,
          w: 6 / columns,
          h: 4 / rows
        });
      }
    }
    setLayout(newLayout);
  }, [rows, columns]);

  const getShadowStyle = (): string => {
    switch (selectedShadow) {
      case 'light-shadow-top':
        return '0px -4px 5px 0px rgba(0,0,0,0.75)';
      case 'light-shadow-topleft':
        return '-4px -4px 5px 0px rgba(0,0,0,0.75)';
      case 'light-shadow-right':
        return '4px 0px 5px 0px rgba(0,0,0,0.75)';
      case 'light-shadow-bottomleft':
        return '-4px 4px 5px 0px rgba(0,0,0,0.75)';
      case 'light-shadow-bottom':
        return '0px 4px 5px 0px rgba(0,0,0,0.75)';
      case 'light-shadow-bottomright':
        return '4px 4px 5px 0px rgba(0,0,0,0.75)';
      case 'light-shadow-left':
        return '-4px 0px 5px 0px rgba(0,0,0,0.75)';
      case 'light-shadow-centre':
        return '0px 0px 5px 0px rgba(0,0,0,0.75)';
      case 'light-shadow-topright':
        return '4px -4px 5px 0px rgba(0,0,0,0.75)';
      default:
        return 'none';
    }
  };

  return (
    <ResponsiveGridLayout
      className="layout custom-layout"
      layouts={{ lg: layout }}
      margin={[margin, margin]}
      containerPadding={[containerPadding, containerPadding]}
      onResizeStop={(e) => {
        console.log(e);
      }}
    >
      {layout.map((item) => (
        <div
          key={item.i}
          className="grid-item"
          style={{
            borderColor: strokeColor,
            borderWidth: `${strokeWidth}px`,
            borderRadius: `${cornerRadius}px`,
            boxShadow: shadow ? `${fixedBoxShadow} ${shadowColor}` : getShadowStyle()
          }}
        ></div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default LayoutGrid;
