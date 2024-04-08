import React, { createContext, useState, useContext } from 'react';

interface GridContextType {
  selectedGridItems: string[];
  setSelectedGridItems: React.Dispatch<React.SetStateAction<string[]>>;
  swapGridItems: (itemId1: string, itemId2: string) => void;
}

const defaultGridState: GridContextType = {
  selectedGridItems: [],
  setSelectedGridItems: () => {},
  swapGridItems: (itemId1, itemId2) => {},
};

const GridContext = createContext<GridContextType>(defaultGridState);

export const GridProvider: React.FC = ({ children }) => {
  const [selectedGridItems, setSelectedGridItems] = useState<string[]>([]);
  
  const swapGridItems = (itemId1: string, itemId2: string) => {
    setSelectedGridItems(prevItems => {
      const updatedItems = [...prevItems];
      const index1 = updatedItems.indexOf(itemId1);
      const index2 = updatedItems.indexOf(itemId2);
      if (index1 !== -1 && index2 !== -1) {
        [updatedItems[index1], updatedItems[index2]] = [updatedItems[index2], updatedItems[index1]];
      }
      return updatedItems;
    });
  };

  return (
    <GridContext.Provider value={{ selectedGridItems, setSelectedGridItems, swapGridItems }}>
      {children}
    </GridContext.Provider>
  );
};

export const useGrid = (): GridContextType => useContext(GridContext);
