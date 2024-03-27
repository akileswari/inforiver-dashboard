
import "../CSS/style.css";
import "../CSS/layoutGrid.css";

const LayoutGrid = ({ rows, columns }) => {
  const gridItems = [];
  const rowCount = isNaN(rows) || rows < 1 ? 1 : rows;
  const columnCount = isNaN(columns) || columns < 1 ? 1 : columns;

  
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      gridItems.push(
        <div key={`${i}-${j}`} className="rectangle"></div>
      );
    }
  }

 
  const gridContainerStyles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columnCount}, auto)`,
    gap: `10px`,
    marginLeft: `500px`
};

  return (
    <div className="grid-container" style={gridContainerStyles}>
      {gridItems}
    </div>
  );
};

export default LayoutGrid;
