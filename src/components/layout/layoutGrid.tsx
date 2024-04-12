import React, { useLayoutEffect, useState, useEffect } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import "../assets/css/layoutGrid.css";
import "react-grid-layout/css/styles.css";
import { useGrid } from "../context/Context";
import { useDispatch, useSelector } from "react-redux";
import { setGridItem } from "../../store/gridItems";
import { updateGridItemSize, updateGridItems } from "../../store/gridSlice";
import { setActiveGrid } from "../../store/gridItems";
import ChartGrid from "../ChartGrid";

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

const fixedBoxShadow = "2px 1px 1px 1px";

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
  width,
}) => {
  const { selectedGridItems, setSelectedGridItems } = useGrid();
  const [layout, setLayout] = useState<GridItem[]>([]);
  const [gridItemSizes, setGridItemizes] = useState<{
    [key: string]: { width: number; height: number };
  }>({});
  const dispatch = useDispatch();

  const gridItems = useSelector((state: any) => state.selectedGrid);
  console.log("allgrid", gridItems);
  const templateHeight = height / 150;
  const templateWidth = Math.floor(width / 101);

  useLayoutEffect(() => {
    const newLayout: GridItem[] = [];
    const newGridItemSizes: {
      [key: string]: { width: number; height: number };
    } = {};
    const pixelHeight = Math.round((templateHeight / rows) * 150);
    const pixelWidth = Math.round((templateWidth / columns) * 101);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const gridItemId = `${y}-${x}`;
        newLayout.push({
          i: gridItemId,
          x: x * (templateWidth / columns),
          y: y * (templateHeight / rows),
          w: templateWidth / columns,
          h: templateHeight / rows,
        });

        const existingSize = gridItemSizes[gridItemId];
        newGridItemSizes[gridItemId] = existingSize
          ? existingSize
          : { width: pixelWidth, height: pixelHeight };

        console.log("Pixels", pixelHeight, pixelWidth);
      }
    }

    setLayout(newLayout);
    dispatch(setGridItem(newLayout));
    // newLayout.forEach((item: GridItem) => {
    //   console.log("Grid item width:", item.w);
    //   console.log("Grid item height:", item.h);
    // });
  }, [rows, columns, height]);

  const getShadowStyle = (): string => {
    switch (selectedShadow) {
      case "light-shadow-top":
        return "0px -4px 5px 0px rgba(0,0,0,0.75)";
      case "light-shadow-topleft":
        return "-4px -4px 5px 0px rgba(0,0,0,0.75)";
      case "light-shadow-right":
        return "4px 0px 5px 0px rgba(0,0,0,0.75)";
      case "light-shadow-bottomleft":
        return "-4px 4px 5px 0px rgba(0,0,0,0.75)";
      case "light-shadow-bottom":
        return "0px 4px 5px 0px rgba(0,0,0,0.75)";
      case "light-shadow-bottomright":
        return "4px 4px 5px 0px rgba(0,0,0,0.75)";
      case "light-shadow-left":
        return "-4px 0px 5px 0px rgba(0,0,0,0.75)";
      case "light-shadow-centre":
        return "0px 0px 5px 0px rgba(0,0,0,0.75)";
      case "light-shadow-topright":
        return "4px -4px 5px 0px rgba(0,0,0,0.75)";
      default:
        return "none";
    }
  };

  const handleItemClick = (itemId: string): void => {
    setSelectedGridItems((prevSelected) => {
      if (prevSelected.includes(itemId)) {
        return prevSelected.filter((id) => id !== itemId);
      } else {
        return [...prevSelected, itemId];
      }
    });
    dispatch(setActiveGrid(itemId));
  };

  // useEffect(() => {
  //   dispatch(setGridItem(selectedGridItems));
  //   console.log(selectedGridItems);
  // }, [dispatch, selectedGridItems]);
  console.log(layout);
  const selectedGrid = useSelector((state: any) => state.selectedGrid);
  const chartRecord = selectedGrid.chartRecords;
  const gridIds = Object.keys(chartRecord);

  console.log(gridIds, "++");
  useEffect(() => {
    dispatch(updateGridItems(gridItems));
    console.log("rowcolupdate", gridItems);
  }, [dispatch, gridItems, rows, columns]);

  console.log(selectedGrid);

  const handleResizeStop = (
    itemId: string,
    width: number,
    height: number
  ): void => {
    dispatch(updateGridItemSize({ itemId, width, height }));
  };

  console.log("resize", updateGridItemSize);

  return (
    <ResponsiveGridLayout
      className="layout custom-layout"
      layouts={{ lg: layout }}
      margin={[margin, margin]}
      containerPadding={[containerPadding, containerPadding]}
      onResizeStop={(layout, oldItem, newItem) => {
        const { w, h } = newItem;
        dispatch(setGridItem({ itemId: newItem.i, width: w, height: h }));
        console.log(height, width);
      }}
      isDraggable={false}
    >
      {layout.map((item) => (
        <div
          key={item.i}
          id={item.i}
          className={`grid-item ${
            selectedGridItems.includes(item.i) ? "selected" : ""
          }`}
          onClick={() => handleItemClick(item.i)}
          style={{
            borderColor: strokeColor,
            borderWidth: `${strokeWidth}px`,
            borderRadius: `${cornerRadius}px`,
            boxShadow: shadow
              ? `${fixedBoxShadow} ${shadowColor}`
              : getShadowStyle(),
            background: selectedGridItems.includes(item.i) ? "#e6e6e6" : "",
          }}
        >
          {gridIds.includes(item.i) ? (
            <ChartGrid componentId={chartRecord[item.i].activeChart} />
          ) : null}
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default LayoutGrid;
