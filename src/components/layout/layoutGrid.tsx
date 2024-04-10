import React, { useLayoutEffect, useState, useEffect } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import '../assets/css/layoutGrid.css';
import 'react-grid-layout/css/styles.css';
import { useGrid } from '../context/Context';
import { useDispatch, useSelector } from 'react-redux';
 import { setGridItems,  updateGridItemSize } from '../../store/gridSlice';
// import { setTestItems,  updateTestItemSize } from '../../store/testSlice';
const ResponsiveGridLayout = WidthProvider(Responsive);

interface GridItem {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

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
  height: number;
  width: number;
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
  selectedShadow,
  height,
  width
}) => {
  const { selectedGridItems, setSelectedGridItems } = useGrid(); 
  const [layout, setLayout] = useState<GridItem[]>([]);
  const dispatch = useDispatch();
  const gridItems = useSelector((state:any) => state.grid.gridSlice);
 // console.log("gridItems",gridItems)

  const testItems = useSelector((state:any) => state.test.globalItems);
  //console.log("TestItems",testItems)
 const globalItems = useSelector((state:any) => state.global);
 console.log("globalItems",globalItems)

  const templateHeight = height / 150;
  const templateWidth = Math.floor( width / 101);
console.log(templateHeight, templateWidth);

  useLayoutEffect(() => {
    const newLayout: GridItem[] = [];

    console.log("testItem....",testItems)
    testItems.grids.forEach(elem => {
      console.log("elem",elem)
      newLayout.push({
        i: `${elem.y}-${elem.x}`,
        x: elem.x,
        y: elem.y,
        w: elem.width,
        h: elem.height 
      });

    });
    console.log("...",newLayout)


    
    setLayout(newLayout);
  }, [height, width]);

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

  const handleItemClick = (itemId: string): void => {
    setSelectedGridItems(prevSelected => {
      
      if (prevSelected.includes(itemId)) {
        return prevSelected.filter(id => id !== itemId);
      } else {
      
        return [...prevSelected, itemId];
      }
    });
  };

  useEffect(() => {
    dispatch(setGridItems(selectedGridItems));
    console.log(selectedGridItems)
  }, [dispatch, selectedGridItems]);


 

  const handleResizeStop = (itemId, width, height) => {
    dispatch(updateGridItemSize({ itemId, width, height }));
  };

  
  return (
    <ResponsiveGridLayout
      className="layout custom-layout"
      layouts={{ lg: layout }}
      margin={[margin, margin]}
      containerPadding={[containerPadding, containerPadding]}
      onResizeStop={(layout, oldItem, newItem) => {
        handleResizeStop(newItem.i, newItem.w, newItem.h);
        console.log(newItem.i,newItem.w, newItem.h);
      }}
      isDraggable={false}
    >
      {layout.map((item) => (
        <div
          key={item.i}
          className={`grid-item ${selectedGridItems.includes(item.i) ? 'selected' : ''}`}
          onClick={() => handleItemClick(item.i)}
          style={{
            borderColor: strokeColor,
            borderWidth: `${strokeWidth}px`,
            borderRadius: `${cornerRadius}px`,
            boxShadow: shadow ? `${fixedBoxShadow} ${shadowColor}` : getShadowStyle(),
            background: selectedGridItems.includes(item.i) ? '#e6e6e6' : 'transparent',
          }}
        ></div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default LayoutGrid;
